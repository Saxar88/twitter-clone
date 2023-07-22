import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		onSnapshot(collection(db, 'posts'), (querySnapshot) => {
			const postsData = querySnapshot.docs.map((doc) => doc.data());
			setPosts(postsData);
		});
	}, []);

	return (
		<div className='feed'>
			<div className='feed__header'>
				<h2>Home</h2>
			</div>
			<TweetBox />

			<FlipMove>
				{posts.map((post, i) => (
					<Post
						key={i}
						displayName={post.displayName}
						username={post.username}
						verified={post.verified}
						avatar={post.avatar}
						text={post.text}
						image={post.image}
					/>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
