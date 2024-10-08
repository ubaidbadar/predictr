import React from 'react';
import InputField from '../ui/input';
import Modal from '../ui/modal/modal';
import Form from '../hoc/form';
import axios from '../config/axios';

const AddStockModal = ({ onFinished, defaultValue }) => {
    const onSubmit = data => {
        axios.post('/create_stock', data.values)
            .then(res => {
                data.onSuccess('Successfully saved the stock!');
                setTimeout(() => {
                    data.hidePopUp();
                    onFinished && onFinished(res.data.result);
                }, 1000)
            })
            .catch(err => data.onFailure(err?.response?.data?.message || err.message))
    }
    return (
        <Modal
            Root={Form}
            onSubmit={onSubmit}
            title='Add Stock'
            component={tools => <button className='btn btn-text' onClick={tools.open}>try adding it</button>}
            footer={props => (
                <div className='model-footer mt-2'>
                    <button className={`btn btn-primary me-auto ${props.className}`} disabled={props.disabled}>Save</button>
                </div>
            )}
        >
            <InputField defaultValue={defaultValue} label='Symbol' name='symbol' required={true} errorText="Symbol is required!" />
        </Modal>
    )
}

export default AddStockModal;