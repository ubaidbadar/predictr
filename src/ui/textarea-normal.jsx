const TextArea = props => {
    const onInput = event => {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
    };
    return <textarea {...props} onInput={onInput} />;
}

export default TextArea;