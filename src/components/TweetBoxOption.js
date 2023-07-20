import React, { useState } from 'react';
import './TweetBoxOption.css';

function TweetBoxOption({ icon, label }) {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className='tweetBoxOption'
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<div className='tweetBoxOption__icon'>{icon}</div>
			{isHovering && <p className='tweetBoxOption__tag'>{label}</p>}
		</div>
	);
}

export default TweetBoxOption;
