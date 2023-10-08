'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@/UI/exportUI';
import style from '../ConnectForm.module.scss';
import { topics } from '../data';
import { Toaster, toast } from 'sonner';
import { FaRegCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

type FormData = {
	name: string;
	email: string;
	message: string;
	subject: string;
};
const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	message: yup.string().required(),
	subject: yup.string().required(),
});

let lastSentTime = 0;
let sentCount = 0;

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data: FormData) => {
		try {
			const currentTime = new Date().getTime();

			if (sentCount >= 5) {
				toast.error(
					'Превышено количество отправленных писем, попробуйте позже'
				);
				return;
			} else if (currentTime - lastSentTime < 60000) {
				toast.error('Слишком частая отправка сообщений!');
				return;
			} else {
				sentCount++;
				lastSentTime = currentTime;
			}

			await fetch('/api/mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			console.log(data);

			toast.success(`${data.name}, выша заявка успешно отправлена	`);
		} catch (error) {
			toast.error(`Не успешно, ошибка: ${error}`);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className={style.ContactForm}>
				<label htmlFor='name'>Как к вам оброщатся:</label>
				<input
					id='name'
					placeholder={`${
						errors.name ? `Пожалуйста, введите как вас зовут!` : `Ваше ФИО`
					}`}
					{...register('name')}
				/>

				<label htmlFor='email'>Ваша почта:</label>
				<input
					id='email'
					placeholder={`${
						errors.email
							? `Пожалуйста, введите правльно почту!`
							: `Ваша электронная почта`
					}`}
					{...register('email')}
				/>

				<label htmlFor='message'>Выберите тему письма:</label>
				<select id='subject' {...register('subject')}>
					<>
						<option value='' selected disabled hidden>
							Выбрать тему
						</option>
						{topics.map((el) => (
							<option key={el.lable} value={el.lable}>
								{el.lable}
							</option>
						))}
					</>
				</select>

				<label htmlFor='message'>Ваше сообщение:</label>
				<textarea
					id='message'
					placeholder={`${
						errors.message
							? `Пожалуйста, введите ваше сообщение!`
							: `Ваше сообщение`
					}`}
					{...register('message')}
				/>

				<Button type='submit'>Отправить</Button>
			</form>

			<Toaster richColors />
		</>
	);
};
