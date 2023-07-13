import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifBoxIcon from '@mui/icons-material/GifBox';
import BallotIcon from '@mui/icons-material/Ballot';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';

function TweetBox() {
	return (
		<div className='tweetBox'>
			<form>
				<div className='tweetBox__input'>
					<Avatar src='avatar.jpg' alt='Elon Musk' />
					<input type='text' placeholder='What is happening?!' />
				</div>
				<div className='tweetBox__inputButtons'>
					<div className='tweetBox__inputOptions'>
						<InsertPhotoIcon />
						<GifBoxIcon />
						<BallotIcon />
						<SentimentSatisfiedIcon />
						<CalendarTodayIcon />
						<PlaceIcon />
					</div>
					<Button className='tweetBox__tweetButton'>Tweet</Button>
				</div>
			</form>
		</div>
	);
}

export default TweetBox;
