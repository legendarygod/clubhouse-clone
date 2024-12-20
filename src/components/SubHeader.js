import React from 'react';
import style from '../styles/export.module.css';
import { Link } from 'react-router-dom';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';

const SubHeader = (props) => {
	return (
		<div className={style.head}>
			<Link to="/home">
				<ArrowBackIosNewSharpIcon className={style.back_icon} />
			</Link>
			<h3>{props.pageTitle}</h3>
		</div>
	);
};

export default SubHeader;
