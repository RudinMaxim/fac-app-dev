'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@/UI/exportUI';

type FormData = {
	name: string;
	email: string;
	message: string;
};

const schema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	message: yup.string().required(),
});

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: FormData) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label htmlFor='name'>Name:</label>
			<Input id='name' {...register('name')} />
			{errors.name && <p>{errors.name.message}</p>}

			<label htmlFor='email'>Email:</label>
			<Input id='email' {...register('email')} />
			{errors.email && <p>{errors.email.message}</p>}

			<label htmlFor='message'>Message:</label>
			<Input id='message' {...register('message')} />
			{errors.message && <p>{errors.message.message}</p>}

			<Button type='submit'>Submit</Button>
		</form>
	);
};
