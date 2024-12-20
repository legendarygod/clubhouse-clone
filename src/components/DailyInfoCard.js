import React from 'react';
import style from '../styles/dailyInfoCard.module.css';
import data from '../data/dailyCard.json';

const DailyInfoCard = () => {
	return (
		<div className={style.dailyCard}>
			{data.map((item, index) => {
				const { time, title, description } = item;
				return (
					<div key={index}>
						<span className="">{time}</span>
						<div>
							<span>{title}</span>
							{description && <p>{description}</p>}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default DailyInfoCard;
