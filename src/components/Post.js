import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedIcon from '@mui/icons-material/Verified';

function Post({ displayName, username, verified, text, image, avatar }) {
	return (
		<div className='post'>
			<div className='post__avatar'>
				<Avatar src='/avatar.jpg' alt='Elon Musk' />
			</div>
			<div className='post__body'>
				<div className='post__header'>
					<div className='post__headerText'>
						<h3>
							Elon Musk
							<span className='post__headerSpecial'>
								<VerifiedIcon className='post__badge' /> @elonmusk
							</span>
						</h3>
					</div>
				</div>
				<div className='post__tweet'>
					<p>True, have to admit trolls are kinda fun</p>
					<img src='trolls.jpg' alt='' />
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
