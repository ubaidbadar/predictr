import React, { useEffect } from 'react';
import Model from '../../../ui-v2/Modal/Model';
import SelectField from '../../../ui-v2/SelectField/SelectField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '../../../ui-v2/Table/Table';
import User from '../User/User';
import moment from "moment";
import useGet from "../../../hooks/useGet";
import styles from './PrizeWinnerModal.module.scss';
import Spinner from '../../../ui-v2/Spinner/Spinner';



const Main = () => {
    const { data, err } = useGet('/fetch_leaderboard_dates');
    const { data: winners, err: winnerErr, onParamsChange } = useGet('/fetch_leaderboard_winners', {}, false);

    useEffect(() => {
        if (data) {
            const result = data.results[0];
            onParamsChange({ month: result?.month_name, year: result?.year });
        }
    }, [data]);

    if (!data && !err) return <Spinner toMiddle fontSize='0.7rem' />;

    const currentMonth = moment().format('MMMM');
    const currentYear = moment().year();

    return data ? (
        <>
            <SelectField label="Month" defaultValue={data.results[0]?.title}>
                {data.results.map((result) => (
                    <MenuItem
                        key={result.title}
                        onClick={() => onParamsChange({ month: result.month_name, year: result.year })}
                        value={result.title}
                    >
                        {result.month_name === currentMonth && result.year === currentYear ? `${result.title} (in progress)` : result.title}
                    </MenuItem>
                ))}
            </SelectField>
            <Table className={`${styles.table} text-accent-4`}>
                <thead>
                    <tr>
                        <td>Pos.</td>
                        <td><div className='description'>User</div></td>
                        <td>Accuracy</td>
                        <td>Predictions</td>
                    </tr>
                </thead>
                {winners && (
                    <tbody className={styles.list}>
                        {winners.results.map((winner, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <User isLoggedIn={true} {...winner} />
                                </td>
                                <td>{winner.guess_accuracy.toFixed(2)}%</td>
                                <td>{winner.total}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </Table>
            {!winners && !winnerErr && <Spinner className='mx-auto text-accent-3' fontSize='0.7rem' />}
        </>
    ) : "";
}
const PrizeWinnerModal = () => {

    return (

        <Model title='Monthly winners'
            component={({ showPopUp }) => (
                <button className='btn-primary bg-surface' onClick={showPopUp}>Monthly Winners</button>
            )}
            isNormal={true}
        >
            <Main />
        </Model>
    )
}


export default PrizeWinnerModal;
