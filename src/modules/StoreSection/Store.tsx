'use client';
import React, { useEffect, useState } from 'react';
import style from './Store.module.scss';
import Filtration from './components/Filtration';
import ItemList from './components/ItemList';
import { Goods } from './data';

export default function Store() {
	const [query, setQuery] = useState('');
	const handleQueryChange = (value: string) => {
		return setQuery(value);
	};

	// console.log(query);

	return (
		<div className='container'>
			<section className={style.Store}>
				<h1>Товары</h1>
				<Filtration value={query} onChange={handleQueryChange} />
				<ItemList goods={Goods} query={query} />
			</section>
		</div>
	);
}
