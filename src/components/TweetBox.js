import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';

function TweetBox() {
	return (
		<div className='tweetBox'>
			<form action=''>
				<div className='tweetBox__input'>
					<Avatar
						src='https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg'
						alt='Elon Musk'
					/>
					<input type='text' placeholder='Whats happening?' />
				</div>
				<input
					className='tweetBox__imageInput'
					type='text'
					placeholder='Optional: Enter image URL'
				/>
				<Button className='tweetBox__button'>Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
