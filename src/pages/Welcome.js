import React from 'react';
import style from '../styles/welcome.module.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className={style.WelcomeContainer}>
			<h2>Welcome</h2>
			<div className={style.WelcomeInfo}>
				<p>
					Labore tempor mollit minim nisi laboris esse in laboris laborum consectetur mollit culpa irure ea.
					Incididunt id consequat duis id ex nostrud cillum id ad sit. Pariatur exercitation aliqua cillum
					reprehenderit tempor sunt ipsum aliqua consectetur aute. Amet culpa exercitation magna sint
					consequat minim elit velit laboris consectetur ullamco culpa aliquip et.
				</p>
				<p>
					Labore tempor mollit minim nisi laboris esse in laboris laborum consectetur mollit culpa irure ea.
					Incididunt id consequat duis id ex nostrud cillum id ad sit. Pariatur exercitation aliqua cillum
					reprehenderit tempor sunt ipsum aliqua consectetur aute. Amet culpa exercitation magna sint
					consequat minim elit velit laboris consectetur ullamco culpa aliquip et.
				</p>
				<p>Chino, and the rest of the Impostors</p>
			</div>
			<div className={style.actionBtn}>
				<Link to="/invite" className="primaryBtn d-flex align-items-center mb-3">
					Get Your Username
					{/* <img ></img> */}
				</Link>
				<Link to="/invite"> Have an Invite Text? sign in</Link>
			</div>
		</div>
	);
};

export default Welcome;
