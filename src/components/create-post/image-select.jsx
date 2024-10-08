import Pluse from "../../icons/plus";
import ImageWrapper from "../../ui/image-wrapper";

const ImageSelect = ({ post_img, setForm }) => {
    const onPropsChange = post_img => setForm({ post_img });
    if (post_img) return (
        <ImageWrapper height='56%'
            Root='label'
            src={post_img ? URL.createObjectURL(post_img) : null}
        >
            <button onClick={() => onPropsChange()} type="button" className="btn-icon absolute right-0 rotate-45 bg-dark-0 bg-opacity-20 m-2">
                <Pluse />
            </button>
        </ImageWrapper>
    )
    return (
        <label className="btn-text me-auto">
            <input type="file" onChange={e => onPropsChange(e.target.files[0])} className="hidden" />
            <i className="fas fa-camera"></i>
            Image
        </label>
    )
}


export default ImageSelect;