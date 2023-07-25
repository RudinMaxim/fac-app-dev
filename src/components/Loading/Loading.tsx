import React from 'react';
import style from './Loading.module.scss';

const Loading: React.FC = () => {
	return (
		<>
			<div className={style.loading_overlay}>
				<div className={style.loading_spinner}></div>
			</div>
		</>
	);
};

export default Loading;
