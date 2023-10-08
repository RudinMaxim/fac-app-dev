'use client';
import React, { useEffect, useState } from 'react';
import style from './Store.module.scss';
import Filtration from './components/Filtration';
import ItemList from './components/ItemList';
import Loading from '@/components/Loading/Loading';
import { Goods } from './data';
import { Button } from '@/UI/exportUI';

export default function Store(): React.JSX.Element {
	const [query, setQuery] = useState('');
	const [searchQuery, setSearchQuery] = useState('');
	const [loading, setLoading] = useState(true);
	const [noResults, setNoResults] = useState(false);

	const handleQueryChange = (value: string) => {
		setQuery(value);
	};

	const handleClearSearch = () => {
		setQuery('');
		setSearchQuery('');
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
			if (
				Goods.filter((item) =>
					item.title.toLowerCase().includes(searchQuery.toLowerCase())
				).length === 0
			) {
				setNoResults(true);
			} else {
				setNoResults(false);
			}
		}, 400);
	}, [searchQuery]);

	return (
		<div className=''>
			<section className={style.Store}>
				<h1>Обучающие циклы</h1>
				<Filtration value={query} onChange={handleQueryChange} />
				{loading ? (
					<Loading />
				) : noResults ? (
					<div className={style.NoResults}>
						<h4>Ничего не найдено</h4>
						<Button onClick={handleClearSearch}>Очистить поиск</Button>
					</div>
				) : (
					<ItemList goods={Goods} query={searchQuery} />
				)}
			</section>
		</div>
	);
}
