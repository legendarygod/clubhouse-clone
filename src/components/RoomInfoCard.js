import React, { usState, useEffect } from 'react'
import style from '../styles/roomCard.module.css'
import data from '../data/rommCard.json'
import SmsIcon from '@mui/icons-material/Sms';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import PersonIcon from '@mui/icons-material/Person';

const RoomInfoCard = () => {
    return <>
        {data.map((item, index) => {
            const { id, sub_title, title, members } = item;
            return <div key={id}>
                <div>
                    <div className={style.roomCardContainer}>
                        <h4>{title}</h4>
                        <h2>{sub_title}</h2>
                        <div className={style.roomMembers}>
                            <div>
                                <img src="/images/deep field.jpg" alt='pic' />
                                <img src="/images/space1.jpg" alt='pic' />
                            </div>
                            <div>
                                {members.map((item, index) => {
                                    const {first_name, last_name} = item;
                                    return <p key={index}>
                                        {first_name} {last_name} <SmsOutlinedIcon />
                                    </p>
                                })}
                                <p className='d-flex align-items-center'>
                                    <span className='mr-2'>1.8</span>
                                    <PersonIcon />
                                    <span className='mx-2'></span>{' '}
                                    <span className='mr-2'>5</span> <SmsIcon />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })}
    </>
}

export default RoomInfoCard;