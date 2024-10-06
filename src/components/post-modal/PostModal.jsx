import React, { useState } from 'react';
import DatePicker from './DatePicker';
import moment from "moment-timezone";
import Form from './Form';
import Movement from './Movement';
import Search from './Search';
import axios from "axios";
import getAxiosMessage from '../../lib/getAxiosMessage';
import Chevron from '../../icons-v2/chevron';
import Pluse from '../../icons/plus';
import toastr from '../../config/toastr';

const Main = props => {
  const [status, setStatus] = useState({
    form: {
      stock_symbol: '',
      guess_date: '',
      description: '',
      estimated_direction: 'Up',
      estimated_change_percent: '',
      stock_name: '',
      onlyForSubscribers: props.premium ? true : false,
    }
  });
  const { is_movement, is_stock, is_date, form } = status;
  const getForm = e => ({ form: { ...form, [e.target.name]: e.target.name === 'onlyForSubscribers' ? e.target.checked : e.target.value } });
  const onChange = e => {
    setStatus({ ...status, ...getForm(e) });
  }
  const onSubmit = () => {
    const form = new FormData();
    setStatus({ ...status, isLoading: true });
    for (let key in status.form) form.append(key, status.form[key]);
    if (props.competitionId) form.append('competitionId', props.competitionId);
    axios.post('/leaderboard_post', form, { headers: { 'content-type': 'multipart/form-data' } })
      .then(res => {
        props.onCreatePost(res.data);
        props.closeHandler();
        toastr.success('Your post was successfully created!', 'Success')
      })
      .catch(err => {
        getAxiosMessage(err);
        setStatus({ ...status, isLoading: false });
      })
  }
  const back = () => setStatus({ form, no_animation: true })
  const getTitle = title => (
    <h6 className='fw-semibold d-flex gap-2 m-0'>
      <button className='text-accent-4 btn btn-text fs-inherit' type='button' onClick={back}>
        <Chevron className='rotate-90' />
        <span className='d-none d-sm-block'>Make a prediction</span>
      </button>
      <span className='text-accent-4 d-none d-sm-block'>/</span>
      {title}
    </h6>
  )
  const newProps = {
    onSubmit,
    onChange,
    setStatus,
    getTitle,
    hidePopUp: props.closeHandler,
    back,
    premium: props.premium,
    ...status,
  }

  let curr_date = new Date()
  let time1 = moment(curr_date).tz("America/New_York").format("HH:mm:ss");
  let time2 = "03:45:00"
  const [hours1, minutes1, seconds1] = time1.split(':');
  const [hours2, minutes2, seconds2] = time2.split(':');
  const date1 = new Date(2022, 0, 1, +hours1, +minutes1, +seconds1);
  const date2 = new Date(2022, 0, 1, +hours2, +minutes2, +seconds2);
  let get_day = curr_date.getDay()
  let add_cause_day, add_cause_time;
  add_cause_time = date1 > date2 ? 1 : 0
  switch (get_day) {
    case 1:
      add_cause_day = 1
      break;
    case 2:
      add_cause_day = 1
      break;
    case 3:
      add_cause_day = 1
      break;
    case 4:
      add_cause_day = 1
      break;
    case 5:
      add_cause_day = 3
      break;
    case 6:
      add_cause_day = 2
      break;
    case 7:
      add_cause_day = 1
      break;
    default:


  }
  let time_to_add = add_cause_day + add_cause_time
  let momented_date = moment().add(time_to_add, 'days')
  let min_date = new Date(momented_date)
  return (
    <>
      {!is_stock && !is_movement && !is_date && <Form {...newProps} />}
      {is_stock && <Search {...newProps} />}
      {is_movement && <Movement {...newProps} />}
      {(is_date && min_date) && <DatePicker {...newProps} min_date={min_date} max_date={props.competitionDetails?.end_date} />}
    </>
  )
}

const PostModal = props => {
  const [isModal, setIsModal] = useState(false);
  const onOpen = () => !props.disabled && setIsModal(true);
  return (
    <div onClick={props.checkLogin} className={props.disabled ? 'cursor-danger' : ''}>
      <div className='p-3 card gap-2 d-flex align-items-center'>
        {/* <Avatar {...props} /> */}
        <p className='bg-surface-3 m-0 px-3 py-2 fs-mediam-sm flex-1 text-accent-4 border-radius-20' onClick={onOpen}>Would you like to make a prediction?</p>
      </div>
      <button id='create-post'
        className='translate-middle-x start-50 bottom-0 btn btn-primary z-index-5 fw-normal pe-3 ps-4 position-fixed mb-4 d-lg-none'
        onClick={onOpen}>
        <Pluse className='smaller' />
        <span className='my-4 d-block small'>Take a guess</span>
      </button>
      {props.isLoggedIn && isModal && <Main {...props} closeHandler={() => setIsModal(false)} />}
    </div>
  )
}

export default PostModal;
