import React, { useState } from 'react';
import './TweetBox.css';
import db from '../firebase';
import { Avatar, Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import TweetBoxOption from './TweetBoxOption';

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState('');
	const [tweetImage, setTweetImage] = useState('');

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			avatar: '/avatar.jpg',
			displayName: 'Elon Musk',
			username: 'elonmusk',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
		});

		setTweetMessage('');
		setTweetImage('');
	};

	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox__input'>
					<Avatar src='avatar.jpg' alt='Elon Musk' />
					<input
						type='text'
						placeholder='What is happening?!'
						value={tweetMessage}
						onChange={(e) => setTweetMessage(e.target.value)}
					/>
				</div>
				<div className='tweetBox__inputButtons'>
					<div className='tweetBox__inputOptions'>
						<TweetBoxOption
							icon={<InsertPhotoIcon fontSize='small' />}
							label='Media'
						/>
						<TweetBoxOption
							icon={<GifBoxIcon fontSize='small' />}
							label='GIF'
						/>
						<TweetBoxOption
							icon={<BallotIcon fontSize='small' />}
							label='Poll'
						/>
						<TweetBoxOption
							icon={<SentimentSatisfiedIcon fontSize='small' />}
							label='Emoji'
						/>
						<TweetBoxOption
							icon={<CalendarTodayIcon fontSize='small' />}
							label='Schedule'
						/>
						<TweetBoxOption
							icon={<PlaceIcon fontSize='small' />}
							label='Location'
						/>
					</div>
					<Button
						type='submit'
						disabled={!tweetMessage}
						variant='contained'
						color='primary'
						className='tweetBox__tweetButton'
						onClick={sendTweet}>
						Tweet
					</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
