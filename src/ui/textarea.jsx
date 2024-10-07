import withField from "../hoc/withField"

const TextArea = props => <textarea {...props} />

export default withField(TextArea);