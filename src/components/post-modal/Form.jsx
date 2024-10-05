import React from 'react';
import InputField from '../../ui/input';
import Model from '../../ui/modal/modal';
import styles from './Form.module.scss';
import NestedFields from './NestedFields';
import moment from 'moment-timezone';
import ScoringSystemModal from '../scoring-system';
import ChevronBottom from '../../icons-v2/chevron';
import Switch from '../../ui/switch';
import Info from '../../icons-v2/info';

const Select = ({ setStatus, name, form, value }) => (
    <button type='button'
        onClick={() => setStatus({ [`is_${name}`]: true, form })}
        className={
            `btn gap-1 border-radius-8 px-3 ${styles.btn} ${value ? 'bg-accent-6 text-normal' : styles.border + ' justify-content-between'}`
        }
    >
        {value || name} {!value && <ChevronBottom className='small' />}
    </button>
)

const Form = props => {
    const form = props.form;
    return (
        <Model show={true}
            className={props.no_animation ? 'no-animation' : ''}
            actions={() => (
                <>
                    <ScoringSystemModal
                        component={({ showPopUp }) => (
                            <button
                                type='button'
                                onClick={showPopUp}
                                className='btn btn-text text-accent-4'
                            >
                                <Info />Scoring system
                            </button>
                        )}
                    />
                    <button
                        onClick={props.onSubmit}
                        className={`btn btn-primary me-auto ${props.isLoading ? 'progress-btn' : ''}`}
                        disabled={
                            form.stock_symbol === '' ||
                            form.guess_date === '' ||
                            form.estimated_change_percent === ''
                        }
                    >Submit</button>
                </>
            )}
            title={<h6 className='m-0'>Make a prediction</h6>}
            closeHandler={props.hidePopUp}
        >
            <div className={`d-lg-flex overflow-initial d-grid align-items-center gap-3 text-nowrap ${styles.main}`}>
                I think
                <Select {...props} name='stock' value={form.stock_symbol} />
                will go
                <Select {...props}
                    name='movement'
                    value={form.estimated_change_percent ? `${form.estimated_direction} ${form.estimated_change_percent}%` : ''}
                />
                by
                <Select {...props} name='date' value={form.guess_date ? moment(form.guess_date).format('MMMM DD, YYYY') : ''} />
            </div>
            <InputField label='Why do you think this? ' className={styles.description} name='description' multiline onChange={props.onChange} value={form.description} />
            <NestedFields {...props} />
            {props.premium && (
                <Switch label="Only for Subscribers?" name='onlyForSubscribers' checked={form.onlyForSubscribers} onChange={props.onChange} className='ms-auto gap-2' />
            )}
        </Model>
    )
}

export default Form;