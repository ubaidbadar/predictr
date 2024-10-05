import onResize from "./onResize";

const setPosition = (tag1, tag2) => {
    const cb = () => {
        const doc = document.documentElement, domWidth = window.innerWidth || doc.clientWidth, domHeight = window.innerHeight || doc.clientHeight;
        const style = tag2.style, rect1 = tag1.getBoundingClientRect();
        style.left = rect1.x + 'px';
        style.top =  rect1.bottom + 'px';
        const rect2 = tag2.getBoundingClientRect();
        if (rect2.left < 0 || rect2.right > domWidth) {
            style.left = 'initial';
            style.right = (domWidth - rect1.right) + 'px'
        }
        if (!(rect2.top >= 0 && rect2.bottom <= domHeight)) {
            style.top = (rect1.bottom - rect2.height - rect1.height) + 'px';
        }
    }
    onResize(cb);
}

export default setPosition;