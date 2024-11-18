import React from 'react';
import InputField from '../ui/input';
import Modal from '../ui/modal/modal';
import Form from '../hoc/form';
import axios from '../config/axios';
import Info from '../icons/info';

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
            component={tools => <button className='btn btn-text font-bold' onClick={tools.open}>Add...</button>}
            footer={props => (
                <button className={`btn btn-primary ${props.className}`} disabled={props.disabled}>Save</button>
            )}
        >
            <InputField defaultValue={defaultValue} label='Enter symbol' name='symbol' required={true} errorText="Symbol is required!" />
            <small className='flex gap-2 text-gray-1 -mt-2'><Info /> We will fetch the stock data based on the symbol you enter.</small>
        </Modal>
    )
}

export default AddStockModal;