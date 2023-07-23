'use client';
import React from 'react';
import { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
import 'swiper/scss';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import style from '../AboutSection.module.scss';
import Image from 'next/image';
import { possibilities } from '../../data';

export default function Possibilities(): React.JSX.Element {
	const isMobile: boolean = useMediaQuery({ maxWidth: 768 });

	return (
		<div className={style.Possibilities}>
			<h3>Практическая подготовка</h3>

			<p className={style.text}>
				Практическая подготовка осуществляется без риска для пациентов и
				обучающихся в виртуальной среде или имитированной ситуации. Именно
				данный вид подготовки специалистов является наиболее перспективным, что
				обусловлено его возможностями:
			</p>
			<Swiper
				className={style.cardList}
				modules={[Pagination, A11y]}
				spaceBetween={isMobile ? 3 : 1}
				slidesPerView={isMobile ? 1 : 3}
				pagination={{ clickable: true }}>
				{possibilities.map((date, index) => (
					<SwiperSlide key={index} className={style.card}>
						<Image src={date.src} alt={date.title} width={100} height={100} />
						<div>
							<h4>{date.title}</h4>
							<p>{date.subtitle}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
