import { Link } from 'react-router-dom';
import BookMark from '../../icons/bookmark';
import NotificationIcon from '../../icons/bell';
import Avatar from '../avatar';
import useQuery from '../../hooks/useQuery';
import Search from './search';

export default function Header(props) {
    const isMobile = useQuery(450)
    return (
        <header className="cont-p sm:gap-8 gap-6 backdrop-blur-lg bg-white bg-opacity-80 sticky top-0 z-2 h-nav border-light-0 border-b-1 flex-center">
            <Link to='/' className="text-primary-0 text-xl font-extrabold mr-auto">Predictr.</Link>
            <Search {...props} isMobile={isMobile} />
            {props.isLoggedIn ? (
                !isMobile && (
                    <>
                        <button className='text-gray-0 btn-icon no-space'>
                            <BookMark />
                        </button>
                        <button className='text-gray-0 btn-icon no-space'>
                            <NotificationIcon />
                        </button>
                        <div className='flex-center font-medium text-sm gap-[0.429em]'>
                            <Avatar className="text-3xl" {...props.user} />
                            {props.user.name}
                        </div>
                    </>
                )
            ) : (
                <>
                    <a href='#login' className='text-sm btn-primary -mr-4 md:-mr-6 bg-light-1'>Login</a>
                    <button className='text-sm btn-primary '>Join Predictr</button>
                </>
            )}
        </header>
    )
}