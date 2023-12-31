import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CreateIcon from '@mui/icons-material/Create';
import { Button } from '@mui/material';

function Sidebar() {
	return (
		<div className='sidebar'>
			<TwitterIcon className='sidebar__icon' />
			<SidebarOption active Icon={HomeIcon} text='Home' />
			<SidebarOption Icon={SearchIcon} text='Explore' />
			<SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
			<SidebarOption Icon={MailOutlineIcon} text='Messages' />
			<SidebarOption Icon={ListAltIcon} text='Lists' />
			<SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
			<SidebarOption Icon={VerifiedIcon} text='Verified' />
			<SidebarOption Icon={PermIdentityIcon} text='Profile' />
			<SidebarOption Icon={MoreHorizIcon} text='More' />
			<Button variant='outlined' className='sidebar__tweetSmall' fullWidth>
				<CreateIcon />
			</Button>
			<Button variant='outlined' className='sidebar__tweet' fullWidth>
				Tweet
			</Button>
		</div>
	);
}

export default Sidebar;
