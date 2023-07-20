import React, { useEffect, useState } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from '../firebase';
import { doc, collection, query, where, onSnapshot } from 'firebase/firestore';

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, 'posts'), (querySnapshot) => {
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
		</div>
	);
}

export default Feed;
