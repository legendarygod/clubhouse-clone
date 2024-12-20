import React, { useState } from 'react';
import style from '../../styles/roomDetail.module.css';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import SignLanguageRoundedIcon from '@mui/icons-material/SignLanguageRounded';
import AddIcon from '@mui/icons-material/Add';

const NewRoom = (props) => {
	const [ micMuteVisible, setMicMuteVisible ] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true)
	const card = props.cardDetail;
	return <>
        <div className={style.roomDetailContainer}>
            <div className={style.head}>
                <div className={'d-flex align-items-cener'}>
                    <a
                        href='#'
                        onClick={()=>{
                            props.setSheetVisible(false);
                        }}
                    >
                        <KeyboardArrowDownOutlinedIcon  className={style.arrow_icon}/>
                    </a>
                    <span>hallway</span>
                </div>
                <div>
                    <InsertDriveFileOutlinedIcon />
                    <img src='/images/africa-img.webp' alt='' className={style.profile_img} />
                </div>
            </div>
            <div className={style.roomDetailCard}>
                <div className='d-flex align-items-center justify-content-between flex-wrap' style={{padding: ".5em 1em"}}>
                    {card.members.map((item, index) => {
                        return (<div className={style.member_container} key={index}>
                            {micMuteVisible ? (
                                <div className={style.audio_icon}>
                                    <MicOffOutlinedIcon />
                                </div>
                            ) : (
                                ''
                            )}
                            <img src='/images/space1.jpg' alt='' />
                            <p>
                                <span>*</span>
                                {item.first_name}
                            </p>
                        </div>)
                    })}
                </div>
            </div>
            <div className={style.footer}>
                <button>
                    <SignLanguageRoundedIcon />
                    Leave Quietly
                </button>
                <div>
                    <button>
                        <AddIcon />
                    </button>
                    <button>
                        <PanToolOutlinedIcon />
                    </button>
                    <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                        {micMuteVisible ? <MicOffOutlinedIcon /> : <MicOutlinedIcon />}
                    </button>
                </div>
            </div>
        </div>
    </>
};

export default NewRoom;
