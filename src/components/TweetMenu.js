import React, { useRef, useState } from 'react';
import './TweetMenu.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TweetMenuOption from './TweetMenuOption';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase';

function TweetMenu() {
	const dropdownRef = useRef(null);
	const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

	const closeMenu = () => {
		setMenuDropDownOpen(false);
	};

	useOnClickOutside(dropdownRef, closeMenu);

	const deleteTweet = async (postId) => {
		await deleteDoc(doc(db, 'posts', postId));
	};

	return (
		<div>
			<MoreHorizIcon
				className='post__headerBtn'
				fontSize='small'
				ref={dropdownRef}
				onClick={() => setMenuDropDownOpen(true)}
			/>
			{isMenuDropDownOpen && (
				<div className='tweetMenu'>
					<div className='red'>
						<TweetMenuOption
							Icon={DeleteOutlineIcon}
							text='Delete'
							onClick={deleteTweet}
						/>
					</div>
					<TweetMenuOption Icon={BarChartIcon} text='View Tweet analytics' />
					<TweetMenuOption
						Icon={PlaylistAddIcon}
						text='Edit with Twitter Blue'
					/>
				</div>
			)}
		</div>
	);
}

export default TweetMenu;
