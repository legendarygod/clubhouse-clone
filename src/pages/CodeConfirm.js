import React from 'react';
import style from '../styles/phoneConfirm.module.css';
import { Link } from 'react-router-dom';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const CodeConfirm = () => {
	return (
		<div className={style.phoneConfirmContainer}>
			<Link to="/get_username" className={style.backBtn}>
				<ArrowBackIosNewSharpIcon className={style.backIcon} />
			</Link>
			<div className="text-center">
				<h1
					style={{
						width: '100%',
						maxWidth: '200px',
						marginBotom: '1em'
					}}
				>
					Enter the code we just sent to you
				</h1>
				<input
					type="text"
					style={{
						width: '100%',
						border: 'none',
						textAlign: 'center',
						outline: 'none'
					}}
				/>
				<p className="mt-2">
					Didn't Receive it? <span>Tap to resend.</span>
				</p>
			</div>
			<Link to="/allow_notification" className="primaryBtn d-flex align-items-center">
				Next <ArrowForwardSharpIcon className={style.backIcon} />
			</Link>
		</div>
	);
};

export default CodeConfirm;
