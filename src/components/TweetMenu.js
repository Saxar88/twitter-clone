import React, { useRef, useState } from 'react';
import './TweetMenu.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TweetMenuOption from './TweetMenuOption';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

function TweetMenu() {
	const dropdownRef = useRef(null);
	const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

	const closeMenu = () => {
		setMenuDropDownOpen(false);
	};

	useOnClickOutside(dropdownRef, closeMenu);

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
						<TweetMenuOption Icon={DeleteOutlineIcon} text='Delete' />
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
