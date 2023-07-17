import React from 'react';
import './Trend.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Trend({ category, title, tweets }) {
	return (
		<div className='trend'>
			<div className='trend__text'>
				<p>{category}</p>
				<h4>{title}</h4>
				<p>{tweets} Tweets</p>
			</div>
			<MoreHorizIcon className='trend__button' />
		</div>
	);
}

export default Trend;
