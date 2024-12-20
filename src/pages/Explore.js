import React from 'react';
import style from '../styles/export.module.css';
import data from '../data/expkore.json';
import { Input } from 'antd';
import WhatshotRoundedIcon from '@mui/icons-material/WhatshotRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import SubHeader from '../components/SubHeader';

const Explore = () => {
	const { people, conversations } = data;
	return (
		<div className={style.exploreContainer}>
			<div className={style.header}>
				<SubHeader pageTitle="Explore" />
				<Input
					style={{
						backgroundColor: '#f4f4f4',
						borderRadius: '0.8em',
						padding: '0.3em 1em',
						border: 'none',
						boxShadow: 'none'
					}}
					size="large"
					placeholder="Find People and Clubs"
					prefix={<SearchSharpIcon style={{ width: '15px' }} />}
				/>
			</div>
			<h5>PEOPLE TO FOLLOW</h5>
			<div className={style.peopleContainer}>
				{people.map((item, index) => {
					const { title, description } = item;
					return (
						<div key={index}>
							<div className="d-flex align-items-center">
								<img src="/images/space1.jpg" alt="" />
								<div className="ml-2">
									<h5>{title}</h5>
									<p>{description}</p>
								</div>
							</div>
							<button>Follow</button>
						</div>
					);
				})}
				<button className={style.showMore}>
					Show more people <KeyboardArrowDownRoundedIcon />
				</button>
			</div>
			<h6>FIND CONVERSATIONS ABOUT ... </h6>
			<div className="row mx-0">
				{conversations.map((item, index) => {
					const { title, description } = item;
					return (
						<div key={index} className="col-6 px-2 mb-3">
							<div className={style.conversationCard}>
								<h5>
									<WhatshotRoundedIcon />
									{title}
								</h5>
								<p>{description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Explore;
