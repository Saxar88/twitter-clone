import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedIcon from '@mui/icons-material/Verified';

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
				</div>
				<div className='post__tweet'>
					<p>{text}</p>
					<img src={image} alt='' />
				</div>
				<div className='post__footer'>
					<ChatBubbleOutlineIcon fontSize='small' />
					<RepeatIcon fontSize='small' />
					<FavoriteBorderIcon fontSize='small' />
					<BarChartIcon fontSize='small' />
					<UploadIcon fontSize='small' />
				</div>
			</div>
		</div>
	);
}

export default Post;
