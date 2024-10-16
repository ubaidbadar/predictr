import useGet from '../../../hooks/useGet';
import { Link } from 'react-router-dom';
import styles from './winners.module.scss';
import Avatar from '../../avatar';


const date = new Date(), year = date.getFullYear();
date.setMonth(date.getMonth() - 1);
const month = date.toLocaleString('en-US', { month: 'long' }), prizes = [500, 300, 200];

const Winners = () => {
    const {Loader, data} = useGet("/fetch_leaderboard_winners", { year, month });
    if(Loader) return <Loader className='text-exs m-auto' />
    return (
        <div className={`${styles.root} mb-4 md:mb-0 flex sm:text-sm text-xs mt-auto pt-4 md:gap-3 lg:gap-2 gap-1 text-center`}>
            {data.results.slice(0, 3).map((user, i) => (
                <Link to={`/user/${user._id}`} key={i}
                    title={user.name}
                    about={prizes[i]}
                >
                    <img src={`/cup-${i}.svg`} alt='' />
                    <Avatar {...user} />
                    <small>{user.guess_accuracy.toFixed(2)}% Accuracy <br /> {user.total} Predictions</small>
                </Link>
            ))}
            <small className='w-0 h-0 hidden xl:block mt-[6em] text-xs text-nowrap rotate-90 leading-0'>Winners of July 2024</small>
        </div>
    )
}

export default Winners