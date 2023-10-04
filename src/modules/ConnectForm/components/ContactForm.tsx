'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@/UI/exportUI';
import { topics } from '../data';
import { Toaster, toast } from 'sonner';

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
			await fetch('/api/mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			toast.success('Успешно!');
		} catch (error) {
			toast.error(`Не успешно, ошибка: ${error}`);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='name'>Name:</label>
				<input id='name' {...register('name')} />
				{errors.name && <p>{errors.name.message}</p>}

				<label htmlFor='email'>Email:</label>
				<input id='email' {...register('email')} />
				{errors.email && <p>{errors.email.message}</p>}

				<select {...register('subject')}>
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

				<label htmlFor='message'>Message:</label>
				<input id='message' {...register('message')} />
				{errors.message && <p>{errors.message.message}</p>}

				<Button type='submit'>Submit</Button>
			</form>
			<Toaster richColors />
		</>
	);
};
