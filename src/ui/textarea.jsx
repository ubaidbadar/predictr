import withField from "../hoc/withField"

const TextArea = props => {
    const handleInput = event => {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };

    const handleOnInput = event => {
        handleInput(event);
    };

    return <textarea {...props} onInput={handleOnInput} />;
}

export default withField(TextArea);