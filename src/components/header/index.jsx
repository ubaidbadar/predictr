import { Link } from 'react-router-dom';
import BookMark from '../../icons/bookmark';
import NotificationIcon from '../../icons/bell';
import useQuery from '../../hooks/useQuery';
import Search from './search';
import Footer from './footer';
import User from './user';
import Notifications from './notifications';

export default function Header(props) {
    const isMobile = useQuery(450)
    return (
        <>
            <header className="px-cont sm:gap-8 gap-6 backdrop-blur-lg bg-white bg-opacity-80 sticky top-0 z-2 h-nav border-light-0 border-b-1 flex-center">
                <Link to='/' className="text-primary-0 text-xl font-extrabold mr-auto">Predictr.</Link>
                <Search {...props} isMobile={isMobile} />
                {props.isLoggedIn ? (
                    !isMobile && (
                        <>
                            <button className='text-gray-0 btn-icon no-space'>
                                <BookMark />
                            </button>
                            <Notifications />
                            <User {...props} />
                        </>
                    )
                ) : (
                    <>
                        <a href='#login' className='sm:text-sm text-xs btn-primary -mr-4 md:-mr-6 bg-light-1'>Login</a>
                        <button className='sm:text-sm text-xs btn-primary '>Join Predictr</button>
                    </>
                )}
            </header>
           {isMobile &&  <Footer />}
        </>
    )
}