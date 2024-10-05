import React from 'react';
import InputField from '../../../ui-v2/InputField/InputField';

const LinkForm = props => (
    <div className='border p-3 border-radius-8'>
        <p className='m-0 line-height-1'>Link</p>
        <InputField
            required
            label='URL'
            className='my-3'
            onChange={props.onChange}
            errorText="Please provide a valid URL"
            pattern="[Hh][Tt][Tt][Pp][Ss]?:\/\/(?:(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]+-?)*[a-zA-Z\u00a1-\uffff0-9]+)*(?:\.(?:[a-zA-Z\u00a1-\uffff]{2,}))(?::\d{2,5})?(?:\/[^\s]*)?"
        />
        <InputField
            name='title'
            label="Title"
            onChange={props.onChange}
        />
    </div>
)


export default LinkForm;