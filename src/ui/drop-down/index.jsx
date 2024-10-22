import Portal from '../../hoc/portal';
import useActive from '../../hooks/useActive';
import usePosition from '../../hooks/usePosition';
import Menu from './menu';
import styles from './styles.module.scss';

export default function DropDown({ className, component, onClick, ...props }) {
    const { status, btnRef } = useActive(), ref = usePosition(btnRef, status);
    return (
        <>
            {component && component({
                type: 'button',
                ref: btnRef,
                className: status
            }, props.value)}
            {status && (
                <Portal id="Modals">
                    <div
                        onClick={onClick}
                        ref={ref}
                        className={`${className} ${status == "active" ? "animation-opacity" : "opacity-0"} ${styles.root}`}
                    >
                        <Menu {...props} />
                    </div>
                </Portal>
            )}
        </>
    )
}