import Portal from '../../hoc/portal';
import useActive from '../../hooks/useActive';
import usePosition from '../../hooks/usePosition';
import styles from './styles.module.scss';

export default function DropDown({ className, component, value, ...props }) {
    const { status, btnRef } = useActive(), ref = usePosition(btnRef, status);
    return (
        <>
            {component && component({
                type: 'button',
                ref: btnRef,
                className: status,
                value
            })}
            {status && (
                <Portal id="Modals">
                    <div
                        ref={ref}
                        {...props}
                        className={`${className} ${status == "active" ? "animation-opacity" : "opacity-0"} ${styles.root}`}
                    />
                </Portal>
            )}
        </>
    )
}