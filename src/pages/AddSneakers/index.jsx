import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React from 'react';

import styles from './AddSneakers.module.scss';

function AddSneakers() {
	return (
		<Paper style={{ padding: 30 }}>
			<Button variant='outlined' size='large'>
				Загрузить фото кроссовок
			</Button>
			<input type='file' hidden />
			{/* {imageUrl && (
				<Button variant='contained' color='error' onClick={onClickRemoveImage}>
					Удалить
				</Button>
			)} */}
			{/* {imageUrl && (
				<img
					className={styles.image}
					src={`http://localhost:4444${imageUrl}`}
					alt='Uploaded'
				/>
			)} */}
			<br />
			<br />
			<TextField
				classes={{ root: styles.title }}
				variant='standard'
				placeholder='Название модели...'
				fullWidth
			/>
			<TextField
				classes={{ root: styles.tags }}
				variant='standard'
				placeholder='Брэнд...'
				fullWidth
			/>
			<TextField
				classes={{ root: styles.tags }}
				variant='standard'
				placeholder='Описание...'
				fullWidth
			/>
			<TextField
				classes={{ root: styles.tags }}
				variant='standard'
				placeholder='Цена'
				fullWidth
			/>
			<TextField
				classes={{ root: styles.tags }}
				variant='standard'
				placeholder='Источники'
				fullWidth
			/>
			<div className={styles.buttons}>
				<Button size='large' variant='contained'>
					Опубликовать
				</Button>
				<a href='/'>
					<Button size='large'>Отмена</Button>
				</a>
			</div>
		</Paper>
	);
}

export default AddSneakers;
