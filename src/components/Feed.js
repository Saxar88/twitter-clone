import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		onSnapshot(collection(db, 'posts'), (querySnapshot) => {
			const postsData = querySnapshot.docs.map((doc) => ({
				key: doc.id,
				...doc.data(),
			}));
			setPosts(postsData);
		});
	}, []);

	return (
		<div className='feed'>
			<div className='feed__header'>
				<h2>Home</h2>
			</div>
			<TweetBox />

			{posts.map((post) => (
				<Post
					key={posts.key}
					displayName={post.displayName}
					username={post.username}
					verified={post.verified}
					avatar={post.avatar}
					text={post.text}
					image={post.image}
					replies={post.replies}
					retweets={post.retweets}
					likes={post.likes}
					views={post.views}
				/>
			))}
		</div>
	);
}

export default Feed;
