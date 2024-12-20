import React, { useState } from 'react';
import style from '../styles/phoneConfirm.module.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';

const PhoneConfirmation = () => {
	const [ value, setValue ] = useState();
	return (
		<div className={style.phoneConfirmContainer}>
			<Link to="/" className={style.backBtn}>
				<ArrowBackIosNewSharpIcon className={style.backIcon} />
			</Link>
			<h1>Enter Phone Number</h1>
			<PhoneInput international defaultCountry="US" value={value} onChange={setValue} />
			<p>
				By entering your Number, you are agreeing to our <span>Terms of Servive and Privacy Policy</span>
				Thanks!
			</p>
			<Link to="/code_confirm" className="primaryBtn d-flex align-items-center">
				Next <ArrowForwardSharpIcon className={style.backIcon} />
			</Link>
		</div>
	);
};

export default PhoneConfirmation;
