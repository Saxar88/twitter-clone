import React from 'react';
import './TweetMenuOption.css';

function TweetMenuOption({ Icon, text }) {
	return (
		<div className='tweetMenu__option'>
			<Icon fontSize='small' />
			<p>{text}</p>
		</div>
	);
}

export default TweetMenuOption;
