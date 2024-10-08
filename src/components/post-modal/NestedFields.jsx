import React from 'react';
import Gallery from '../../icons-v2/gallery';
import Plus from '../../icons/plus';
import ImageWrapper from '../../ui/image-wrapper';

const NestedFields = ({ onChange, form }) => {
    const onPropsChange = file => onChange({ target: { name: 'post_img', value: file } });
    return form.post_img ? (
        <div className='position-relative'>
            <button type="button" onClick={() => onPropsChange(null)}
                className="btn btn-icon text-accent-4 rotate-45 small top-0 start-0 no-padding position-absolute z-index-2 m-2"
            ><Plus /></button>
            <ImageWrapper height='56%' src={URL.createObjectURL(form.post_img)} />
        </div>
    ) : (
        <label
            className="btn btn-text ms-auto"
        >
            <Gallery />Image
            <input type="file" className='d-none' accept="image/*" onChange={e => onPropsChange(e.target.files[0])} />
        </label>
    )
}

export default NestedFields;
