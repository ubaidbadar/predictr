import React from 'react';
import InputField from '../ui/input';
import Model from '../ui/modal/modal';
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
        <Model
            Root={Form}
            onSubmit={onSubmit}
            title='Add Stock'
            component={({ showPopUp }) => <button className='btn btn-text' onClick={showPopUp}>try adding it</button>}
            footer={isLoading => (
                <div className='model-footer mt-2'>
                    <button className={`btn btn-primary me-auto ${isLoading ? 'progress-btn' : ''}`} disabled={isLoading}>Save</button>
                </div>
            )}
        >
            <InputField defaultValue={defaultValue} label='Symbol' name='symbol' required={true} errorText="Symbol is required!" />
        </Model>
    )
}

export default AddStockModal;