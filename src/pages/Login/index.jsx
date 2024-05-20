import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';
import styles from './Login.module.scss';

function Login() {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const onSubmit = async values => {
		const data = await dispatch(fetchAuth(values));

		if (!data.payload) {
			alert('Не удалось авторизоваться!');
		}
		if ('token' in data.payload) {
			window.localStorage.setItem('token', data.payload.token);
		}
	};

	if (isAuth) {
		return <Navigate to='/'></Navigate>;
	}

	return (
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant='h5'>
				Вход в аккаунт
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className={styles.field}
					label='E-Mail'
					error={!!errors.email?.message}
					helperText={errors.email?.message}
					{...register('email', { required: 'Укажите почту' })}
					fullWidth
				/>
				<TextField
					className={styles.field}
					label='Пароль'
					error={!!errors.password?.message}
					helperText={errors.password?.message}
					{...register('password', { required: 'Введите пароль' })}
					fullWidth
				/>
				<Button
					disabled={!isValid}
					type='submit'
					size='large'
					variant='contained'
					fullWidth
				>
					Войти
				</Button>
			</form>
		</Paper>
	);
}

export default Login;
