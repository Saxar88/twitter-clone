import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedIcon from '@mui/icons-material/Verified';
import TweetMenu from './TweetMenu';
import PostOption from './PostOption';

function Post({ displayName, username, verified, avatar, text, image }) {
	return (
		<div className='post'>
			<div className='post__avatar'>
				<Avatar src={avatar} alt={displayName} />
			</div>
			<div className='post__body'>
				<div className='post__header'>
					<div className='post__headerText'>
						<h3>
							{displayName}
							<span className='post__headerSpecial'>
								{verified && <VerifiedIcon className='post__badge' />} @
								{username}
							</span>
						</h3>
					</div>
					<TweetMenu />
				</div>
				<div className='post__tweet'>
					<p>{text}</p>
					<img src={image} alt='' />
				</div>
				<div className='post__footer'>
					<div className='post__footerOption'>
						<PostOption
							icon={<ChatBubbleOutlineIcon fontSize='small' />}
							label='Reply'
							text='4,037'
						/>
					</div>
					<div className='post__footerOption' id='retweet'>
						<PostOption
							icon={<RepeatIcon fontSize='small' />}
							label='Retweet'
							text='14.8K'
						/>
					</div>
					<div className='post__footerOption' id='like'>
						<PostOption
							icon={<FavoriteBorderIcon fontSize='small' />}
							label='Like'
							text='70.3K'
						/>
					</div>
					<div className='post__footerOption'>
						<PostOption
							icon={<BarChartIcon fontSize='small' />}
							label='View'
							text='7.4M'
						/>
					</div>
					<div className='post__footerOption'>
						<PostOption icon={<UploadIcon fontSize='small' />} label='Share' />
					</div>
				</div>
			</div>
		</div>
	);
}
export default Post;
