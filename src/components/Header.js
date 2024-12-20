import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/header.module.css';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Header = () => {
	return (
		<div className={style.header}>
			<Link to="/explore">
				<SearchSharpIcon className={style.header_icon} />
			</Link>
			<div className={style.nav_items}>
				<Link to="/friends_invite">
					<MailIcon className={style.header_icon} />
				</Link>
				<Link to="/upcoming">
					<CalendarMonthIcon className={style.header_icon} />
				</Link>
				<Link to="/activity">
					<NotificationsIcon className={style.header_icon} />
				</Link>
				<Link to="/profile">
					<img src="/images/africa-img.webp" alt="pic" className={style.header_icon} />
				</Link>
			</div>
		</div>
	);
};

export default Header;
