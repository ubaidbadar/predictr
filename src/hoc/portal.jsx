import ReactDOM from 'react-dom';

const Portal = ({ children, id }) => ReactDOM.createPortal(children, document.getElementById(id));

export default Portal;