'use client';
import React, { useEffect, useState } from 'react';
import style from '../InformationSection.module.scss';
import PostList from './PostList';

export default function News() {
	const [posts, setPosts] = useState([]);
	const access_token = '';

	// useEffect(() => {
	// 	const getPosts = async () => {
	// 		const posts = await fetchPosts();
	// 		setPosts(posts);
	// 	};
	// 	getPosts();
	// }, []);

	// const fetchPosts = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			`https://api.vk.com/method/wall.get?owner_id=1&count=100&access_token=${access_token}&v=5.131`
	// 		);
	// 		const data = await response.json();
	// 		const posts = data.response.items.map((item: any) => ({
	// 			id: item.id,
	// 			text: item.text,
	// 			date: new Date(item.date * 1000),
	// 		}));
	// 		return posts;
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<div className={style.News}>
			News
			<PostList posts={posts} />
		</div>
	);
}
