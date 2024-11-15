import Pluse from "../../icons/plus";
import ImageWrapper from "../../ui/image-wrapper";

const ImageSelect = ({ post_img, setForm }) => {
    const onPropsChange = post_img => setForm({ post_img });
    if (post_img) return (
        <div className="p-1 bg-surface rounded-3">
            <ImageWrapper height='56%'
                className="rounded-2"
                Root='label'
                src={post_img ? URL.createObjectURL(post_img) : null}
            >
                <button onClick={() => onPropsChange()} type="button" className="btn-icon absolute right-0 bg-dark-0 bg-opacity-20 m-2">
                    <Pluse className="rotate-45" />
                </button>
            </ImageWrapper>
        </div>
    )
    return (
        <label className="bg-surface rounded-3 shadow-5 p-4 flex-center">
            <input type="file" onChange={e => onPropsChange(e.target.files[0])} className="hidden" />
            <i className="fas fa-camera"></i>
            Image
        </label>
    )
}


export default ImageSelect;