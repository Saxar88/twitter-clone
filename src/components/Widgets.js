import React from 'react';
import './Widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import Trend from './Trend';

function Widgets() {
	return (
		<div className='widgets'>
			<div className='widgets__input'>
				<SearchIcon className='widgets__searchIcon' />
				<input type='text' placeholder='Search Twitter' />
			</div>
			<div className='widgets__widgetContainer'>
				<h2>Trends for you</h2>
				<Trend
					category='Business & finance · Trending'
					title='Telegram'
					tweets='488k'
				/>
				<Trend
					category='Politics · Trending'
					title='#ClimateScam'
					tweets='28.8k'
				/>
				<Trend category='Politics · Trending' title='Crimea' tweets='14.6k' />
				<p>Show more</p>
			</div>
		</div>
	);
}

export default Widgets;
