import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import RepeatIcon from '@mui/icons-material/Repeat';
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
					<div className='post__headerDescription'>
						<p>True, have to admit trolls are kinda fun</p>
					</div>
				</div>
				<img src='trolls.jpg' alt='' />
				<div className='post__footer'>
					<ChatBubbleOutlineIcon fontSize='small'>
						<RepeatIcon fontSize='small' />
						<FavoriteBorderIcon fontSize='small' />
						<PublishIcon fontSize='small' />
					</ChatBubbleOutlineIcon>
				</div>
			</div>
		</div>
	);
}

export default Post;
