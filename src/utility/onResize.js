export default function onResize(cb) {
    window.addEventListener('resize', cb);
    window.addEventListener('scroll', cb);
    cb();
    return () => {
        window.removeEventListener('resize', cb);
        window.removeEventListener('scroll', cb);
    }
}