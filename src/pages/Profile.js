import React from 'react';
import exploreStyle from '../styles/export.module.css';
import style from '../styles/profile.module.css';
import {Link } from 'react-router-dom'
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowBackIosNewSharp from '@mui/icons-material/ArrowBackIosNewSharp';
import PanToolOutlined from '@mui/icons-material/PanToolOutlined';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
	return <>
        <div className={style.profileContainer}>
            <div className={exploreStyle.header}>
                <div className={`${exploreStyle.head} text-right mb-0`}>
                    <Link to='/home'>
                        <ArrowBackIosNewSharpIcon className={exploreStyle.back_icon}/>
                    </Link>
                    <div className={style.actionBtn}>
                        <PanToolOutlined />
                        <PanToolOutlined />
                        <PanToolOutlined />
                    </div>
                </div>
            </div>
            <img src='/images/africa-img.webp' alt='pic' className={style.profile_image} />
                <h4>Chino Legend</h4>
                <p>@gayRapist</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p>
                    <p>
                        <span>51</span> following
                    </p>
                </div>
                <button>Add bio</button>
                <div className='mb-4'>
                    <button>
                    <CalendarMonth /> Add Twitter

                    </button>
                    <button>
                    <CalendarMonth /> Add InstaGram

                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/africa-img.webp" alt='pic' />
                    <div>
                        <p>Joined 14-July-2020</p>
                        <p>Nominated by <span>rimuru kusuo</span></p>
                    </div>
                </div>
                <p>Member of <button className={style.addMemberBtn}><AddIcon /></button></p>
        </div>
    </>
};

export default Profile;
