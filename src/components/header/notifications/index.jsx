import DropDown from '../../../hoc/DropDown';
import useActive from '../../../hooks/useActive';
import usePosition from '../../../hooks/usePosition';
import Bell from '../../../icons/bell';
import Main from './main';


export default function Notifications() {
    return (
        <>
            <DropDown
                component={props => (
                    <button {...props} className='text-gray-0 btn-icon no-space'>
                        <Bell />
                    </button>
                )}
                className="p-4 animation-opacity shadow-3 mt-1 absolute rounded-4 z-3 w-80 bg-surface"
            >
                <Main />
            </DropDown>
        </>
    )
}