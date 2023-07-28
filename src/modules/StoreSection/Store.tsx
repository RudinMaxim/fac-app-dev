'use client';
import React, { useEffect, useState } from 'react';
import style from './Store.module.scss';
import Filtration from './components/Filtration';
import ItemList from './components/ItemList';
import Loading from '@/components/Loading/Loading';
import { Goods } from './data';

export default function Store(): React.JSX.Element {
	const [query, setQuery] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(true);

	const handleQueryChange = (value: string) => {
		setQuery(value);
	};

	useEffect(() => {
		const delayDebounceFn = setTimeout(() => {
			setSearchQuery(query);
		}, 200);

		return () => clearTimeout(delayDebounceFn);
	}, [query]);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 400);
	}, [searchQuery]);

	return (
		<div className='container'>
			<section className={style.Store}>
				<h1>Обучающий цикл</h1>
				<Filtration value={query} onChange={handleQueryChange} />
				{loading ? <Loading /> : <ItemList goods={Goods} query={searchQuery} />}
			</section>
		</div>
	);
}
