import Portal from './portal';
import useActive from '../hooks/useActive';
import usePosition from '../hooks/usePosition';

export default function DropDown({ component, className, ...props }) {
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
                        {...props}
                        ref={ref}
                        className={`${className} ${status}`}
                    />
                </Portal>
            )}
        </>
    )
}