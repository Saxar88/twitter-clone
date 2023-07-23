import React, { useState } from 'react';
import './PostOption.css';

function PostOption({ icon, label, text }) {
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div
			className='postOption__container'
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}>
			<div className='postOption'>
				<div className='postOption__icon'>{icon}</div>
				<p>{text}</p>
			</div>
			{isHovering && <p className='postOption__tag'>{label}</p>}
		</div>
	);
}

export default PostOption;
