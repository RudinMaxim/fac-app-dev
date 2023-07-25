import React, { useState } from 'react';
import style from '../Store.module.scss';
import { IGoods } from '../data';
import PopupWindow from '@/components/Popup/Popup';
import { FaAngleRight, FaVk, FaRegEnvelope } from 'react-icons/fa';
import Link from 'next/link';

interface GoodsListProps {
	goods: IGoods[];
	query: string;
}
export default function ItemList({
	goods,
	query,
}: GoodsListProps): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedGood, setSelectedGood] = useState<IGoods | null>(null);

	const handleOpen = (good: IGoods) => {
		setSelectedGood(good);
		setIsOpen(true);
	};
	const handleClose = () => {
		setSelectedGood(null);
		setIsOpen(false);
	};

	const filteredGoods = goods.filter((good) =>
		good.name.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<ul className={style.ItemList}>
			{/* card Outside */}
			{filteredGoods.map((good) => (
				<li
					key={good.id}
					onClick={() => handleOpen(good)}
					className={style.Card}>
					<div className={style.top}>
						<h3>{good.name}</h3>
						<p className={style.for}>{good.for}</p>
					</div>
					<div className={style.bottom}>
						<span className={style.price}>{good.price} ₽</span>
						<span className={style.time}>{good?.time} ч.</span>
					</div>
				</li>
			))}

			{/* card Inner */}
			{selectedGood && (
				<PopupWindow
					isOpen={isOpen}
					onClose={handleClose}
					title={selectedGood.title}>
					{/* title */}
					<div className={style.innerCard}>
						<div className={style.titleContiner}>
							<div className={style.title}>
								<h2>{selectedGood.name}</h2>
								<span>
									{selectedGood.formStudy
										? `${selectedGood.formStudy} форма`
										: ''}
								</span>
							</div>
							<div className={style.subTitle}>
								<div>
									<h4>
										Цена: <span>{selectedGood.price} ₽ </span>
									</h4>
								</div>
								<div>
									<h4>
										Время: <span>{selectedGood.time} ч. </span>
									</h4>
								</div>
							</div>
						</div>
						<div className={style.info}>
							<div className={style.infoInner}>
								<div className={style.colum}>
									<ul>
										<h4>В программе</h4>
										{selectedGood.program.map((item, index) => (
											<li key={index}>
												<p>
													<FaAngleRight />
													{item}
												</p>
											</li>
										))}
									</ul>
								</div>
								<div className={style.colum}>
									{selectedGood.requirements ? (
										<div>
											<h4>Требования</h4>
											<ul>
												{selectedGood.requirements.map((item, index) => (
													<li key={index}>
														<p>
															<FaAngleRight />
															{item}
														</p>
													</li>
												))}
											</ul>
										</div>
									) : (
										''
									)}
								</div>
							</div>
							<p className={style.conect}>
								Вопросы можно задать по электронной почте{' '}
								<Link href={'mailto:sim-center@psma.ru'} target='_blank'>
									sim-center@psma.ru
								</Link>{' '}
								с темой письма Вопрос по курсу или по в группе в
								<Link href={'https://vk.me/fca_perm'} target='_blank'>
									{' '}
									ВКонтакте
								</Link>
								.
							</p>
						</div>
					</div>
				</PopupWindow>
			)}
		</ul>
	);
}
