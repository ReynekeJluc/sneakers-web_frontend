import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { selectIsAuth } from '../../redux/slices/auth';
import { fetchRemoveSneakers } from '../../redux/slices/sneakers.jsx';
import { fetchSneakersAdmin } from '../../redux/slices/sneakersadmin.jsx';

import styles from './AdminSneakers.module.scss';

function AdminSneakers(props) {
	const isAuth = useSelector(selectIsAuth);
	const dispatch = useDispatch();

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить статью?')) {
			dispatch(fetchRemoveSneakers(props._id)).then(() => {
				dispatch(fetchSneakersAdmin());
			});
		}
	};

	if (!window.localStorage.getItem('token') && !isAuth) {
		return <Navigate to='/'></Navigate>;
	}

	return (
		<li className={styles.sneakers}>
			<Link to={`/sneakers/${props._id}/edit`}>
				<img
					src='/img/icons/edit.png'
					width={30}
					height={30}
					style={{ margin: '0 100px 0 0', cursor: 'pointer' }}
					className={styles.sneakers__edit}
					alt='add edit'
				/>
			</Link>
			<img
				src='/img/icons/delete.png'
				width={30}
				height={30}
				style={{ cursor: 'pointer' }}
				className={styles.sneakers__delete}
				alt='add delete'
				onClick={onClickRemove}
			/>
			<Link to={`/sneakers/${props._id}`}>
				<div className={styles.sneakers__image}>
					<img
						src={`https://sneakers-web-backend.onrender.com/upload/${props.imageUrl}`}
						alt='img sneakers'
					/>
				</div>
				<div className={styles.sneakers__title}>{props.title}</div>
				<div className={styles.block__info}>
					<div className={styles.block__prices}>
						<p>Цена:</p>
						<b>{props.price} &#8381;</b>
					</div>
				</div>
			</Link>
		</li>
	);
}

export default AdminSneakers;
