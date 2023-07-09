import Link from 'next/link';
import React from 'react';

export default function NotFound() {
	return (
		<div>
			<h1>Ooooops....</h1>
			<h2>NotFound</h2>
			<Link href={'/'}>Home page</Link>
		</div>
	);
}
