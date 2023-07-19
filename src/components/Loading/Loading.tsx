import React from 'react';
import style from './Loading.module.scss';

interface LoadingProps {
	isLoading: boolean;
}
const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
	return (
		<>
			{isLoading && (
				<div className={style.loading_overlay}>
					<div className={style.loading_spinner}></div>
				</div>
			)}
		</>
	);
};

export default Loading;
