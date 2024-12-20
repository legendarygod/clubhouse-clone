import React from 'react';
import style from '../styles/phoneConfirm.module.css';
import { Link } from 'react-router-dom';

const AllowNotification = () => {
	return (
		<div className={style.phoneConfirmContainer}>
			<div className="text-center">
				<h1 className="mb-4">Last, Important step!</h1>
				<h1 className="mb-3">Enable notifications to know when people are talking</h1>
				<div className={style.notificationContainer}>
					<div className="p-3">
						<h3>"Clubhouse" Would Like To Send You Notifications</h3>
						<p>Notifications may include alerts, sounds, and icons</p>
					</div>
					<div className={style.action_btn}>
						<Link to="/">Don't Allow</Link>
						<Link to="/home"> Allow</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllowNotification;
