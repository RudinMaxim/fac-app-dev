import React from 'react';

export default function YandexMap(): React.JSX.Element {
	return (
		<iframe
			src='https://yandex.ru/map-widget/v1/?um=constructor%3A6ff1a5e799d7e9f76f57b834ff0bd91ec38137443e0be64e6e919811087c7811&amp;source=constructor'
			width='481'
			height='350'></iframe>
	);
}
