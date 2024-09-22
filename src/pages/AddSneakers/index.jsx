import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { selectIsAuth } from '../../redux/slices/auth';

import axios from '../../axios.jsx';

import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	TextField,
	TextareaAutosize,
} from '@mui/material';

import styles from './AddSneakers.module.scss';

function AddSneakers() {
	const { id } = useParams();

	const isEditing = Boolean(id);

	const isAuth = useSelector(selectIsAuth);
	const inputFileRef = React.useRef(null);
	const navigate = useNavigate();

	const [title, setTitle] = React.useState('');
	const [brand, setBrand] = React.useState('');
	const [desc, setDesc] = React.useState('');
	const [imageUrl, setImageUrl] = React.useState('');
	const [price, setPrice] = React.useState('');
	const [sources, setSources] = React.useState([]);

	if (!window.localStorage.getItem('token') && !isAuth) {
		return <Navigate to='/'></Navigate>;
	}

	const [listBrand, setListBrand] = React.useState([]);

	React.useEffect(() => {
		axios
			.get(`/brand`)
			.then(res => {
				setListBrand(res.data);
			})
			.catch(rej => {
				console.warn(rej);
				alert('Ошибка при получении данных о брэндах');
			});
	}, []);

	React.useEffect(() => {
		const fetchData = async () => {
			if (id) {
				try {
					const { data } = await axios.get(`/sneakers/${id}`);
					const brandRes = await axios.get(`/brand/${data.brand}`);

					setBrand(brandRes.data.brand);
					setTitle(data.title);
					setDesc(data.desc);
					setImageUrl(data.imageUrl);
					setPrice(data.price);
					setSources(data.sources);
				} catch (error) {
					console.log(error.message);
				}
			}
		};

		fetchData();
	}, []);

	const handleChangeFile = async e => {
		try {
			const formData = new FormData();
			formData.append('image', e.target.files[0]);

			const { data } = await axios.post('/upload', formData);
			if (imageUrl) {
				onClickRemoveImage();
			}
			setImageUrl(data.url.replace('/upload/', ''));
		} catch (error) {
			console.warn(error);
			alert('Ошибка при загрузке файла');
		}
	};

	const onClickRemoveImage = () => {
		axios.delete(`/upload/${imageUrl}/delete`);
		setImageUrl('');
	};

	const onSubmit = async () => {
		try {
			const fields = {
				title,
				brand,
				desc,
				price,
				sources,
				imageUrl: imageUrl.replace('/upload/', ''),
			};

			const { data } = isEditing
				? await axios.patch(`/sneakers/${id}`, fields)
				: await axios.post('/sneakers', fields);
			const _id = isEditing ? id : data._id;

			navigate(`/sneakers/${_id}`);
		} catch (error) {
			console.warn(error);
			alert('Ошибка при создании записи');
		}
	};

	return (
		<Paper style={{ padding: 30 }}>
			{imageUrl && (
				<>
					<Button
						variant='contained'
						color='error'
						onClick={onClickRemoveImage}
					>
						Удалить
					</Button>
					<img
						className={styles.image}
						src={`/upload/${imageUrl}`}
						alt='Uploaded'
					/>
				</>
			)}
			<TextField
				classes={{ root: styles.title }}
				variant='standard'
				placeholder='Название модели...'
				value={title}
				onChange={e => setTitle(e.target.value)}
				fullWidth
			/>
			<FormControl style={{ width: '50%', margin: '20px 0 0' }}>
				<InputLabel>Брэнд</InputLabel>
				<Select
					value={brand}
					label='Brand'
					onChange={e => setBrand(e.target.value)}
				>
					{listBrand.map((obj, index) => (
						<MenuItem key={index} value={obj.brand}>
							{obj.brand}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<TextField
				id='outlined-basic'
				label='Цена'
				type='number'
				variant='outlined'
				value={price}
				style={{
					display: 'block',
					margin: '10px 0',
				}}
				onChange={e => setPrice(e.target.value)}
			/>
			<TextareaAutosize
				aria-label='empty textarea'
				placeholder='Описание'
				minRows={5}
				value={desc}
				style={{
					display: 'block',
					minWidth: '50%',
					border: '1px solid #a2a2a2',
					borderRadius: '3px',
					padding: '10px',
					margin: '10px 0',
				}}
				onChange={e => setDesc(e.target.value)}
			/>
			<TextareaAutosize
				aria-label='empty textarea'
				placeholder='Источники (через запятую)'
				minRows={2}
				value={sources}
				style={{
					display: 'block',
					minWidth: '50%',
					border: '1px solid #a2a2a2',
					borderRadius: '3px',
					padding: '10px',
				}}
				onChange={e => setSources(e.target.value.split(','))}
			/>
			<Button
				onClick={() => inputFileRef.current.click()}
				className={styles.addImage}
				variant='outlined'
				size='large'
			>
				Загрузить фото кроссовок
			</Button>
			<input
				ref={inputFileRef}
				type='file'
				onChange={handleChangeFile}
				hidden
			/>
			<div className={styles.buttons}>
				<Button
					type='submit'
					onClick={onSubmit}
					size='large'
					variant='contained'
				>
					{isEditing ? 'Сохранить' : 'Опубликовать'}
				</Button>
				<Link to='/'>
					<Button size='large'>Отмена</Button>
				</Link>
			</div>
		</Paper>
	);
}

export default AddSneakers;
