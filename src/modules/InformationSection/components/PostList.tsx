import React from 'react';
import style from '../InformationSection.module.scss';
interface Props {
	posts: Post[];
}

interface Post {
	id: number;
	text: string;
	date: Date;
}

export default function PostList({ posts }: Props): React.JSX.Element {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.id}>
					<h3>{post.text}</h3>
					<p>{post.date.toLocaleString()}</p>
				</div>
			))}
		</div>
	);
}
