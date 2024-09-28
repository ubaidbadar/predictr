import { Link } from 'react-router-dom';
import Search from '../../ui/search';
import BookMark from '../../icons/bookmark';
import NotificationIcon from '../../icons/bell';
import Avatar from '../avatar';

export default function Header(props) {
    return (
        <header className="cont-p gap-8 backdrop-blur-lg bg-white bg-opacity-80 nav-height border-light-0 border-b flex-center">
            <Link to='/' className="text-primary-0 text-xl font-extrabold">Predictr.</Link>
            <Search className='ml-auto text-sm min-w-[18.75rem]' placeholder="Search Predictr..." />
            {props.isLoggedIn ? (
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
            ) : (
                <>
                    <button className='btn-primary text-sm -mr-6 bg-light-1'>Login</button>
                    <button className='btn-primary text-sm'>Join Predictr</button>
                </>
            )}
        </header>
    )
}