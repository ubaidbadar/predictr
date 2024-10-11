import Portal from '../../hoc/portal';
import useActive from '../../hooks/useActive';
import usePosition from '../../hooks/usePosition';
import styles from './styles.module.scss';

export default function DropDown({ className, children, component, ...props }) {
    const { status, btnRef } = useActive(), ref = usePosition(btnRef, status);
    return (
        <>
            {component && component({
                type: 'button',
                ref: btnRef,
                className: status
            })}
            {status && (
                <Portal id="Modals">
                    <div ref={ref} className={`${className} ${status == "active" ? "animation-opacity" : "opacity-0"} ${styles.root}`}>
                        {children}
                    </div>
                </Portal>
            )}
        </>
    )
}