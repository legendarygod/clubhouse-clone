import React, {useState} from 'react'
import style from '../../styles/bottomSheet.module.css'
import PublicIcon from '@mui/icons-material/Public';

const StartRoom = (props) => {
    const [room, setRoom] = useState('open')
    return <>
        <div  className={style.switch_line}></div>
            <div className='text-right'>
                <button className={style.addTopicBtn}>
                    + Add a Topic
                </button>
            </div>
            <div className={style.selectRoom}>
                <button className={room === "open" ? style.active : ""} onClick={()=> setRoom("open")}>
                    <div>
                        <PublicIcon />
                    </div>
                    Open
                </button>
                <button className={room === "social" ? style.active : ""} onClick={() => setRoom("social")}>
                    <div>
                        <PublicIcon />
                    </div>
                    Social
                </button>
                <button className={room === "closed" ? style.active : ""} onClick={() => setRoom("closed")}>
                    <div>
                        <PublicIcon />
                    </div>
                    CLosed
                </button>
            </div>
            <p>Start A Room {' '} 
                <span>
                    {
                        room === "closed"
                        ? "For People I chose"
                        : room === "social"
                        ? "With People I Follow"
                        : "Open to Everyone"
                    }
                </span>
            </p>
            <div className="text-center">
                <button
                    className={style.letGoBtn}
                    onClick={() => {
                        props.setSheetCreateRoom(true);
                        props.setSheetVisible(true)
                    }}
                >
                    Let's Go!
                </button>        
        </div>
    </>

}

export default StartRoom