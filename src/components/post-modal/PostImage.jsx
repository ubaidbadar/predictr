import React from "react"
import Gallery from "../../../icons-v2/Gellary";
import ImageWrapper from "../../../ui-v2/ImageWrapper/ImageWrapper";
import styles from './PostImage.module.scss';

const PostImage = props => {
    const file = props.form.post_img
    const onPropsChange = file => props.onChange({ target: { name: 'post_img', value: file } });
    const onChange = e => {
        const file = e.target.files[0];
        onPropsChange(file);
    }
    return (
        <ImageWrapper height='56%'
            Root='label'
            src={file ? URL.createObjectURL(file) : null}
            className={styles.root}
        >
            {/* <span className="d-flex flex-column align-items-center p-3 bg-accent-6 border-radius-8">
                {!file && (
                    <label htmlFor="post-image" className="flex-1 align-items-center justify-content-center d-flex flex-column pb-1">
                        <Gallery style={{ width: "3.125rem" }} />
                        <small className="my-2 pt-1">Drag & drop an image or</small>
                        <span className="border py-2 px-4 d-inline-flex border-radius-20 text-primary">
                            Upload an Image
                        </span>
                    </label>
                )}
            </span> */}
            <input id='post-image' type="file"
                onChange={onChange}
                className='border cursor-pointer opacity-0'
            />
        </ImageWrapper>
    )
}


export default PostImage;