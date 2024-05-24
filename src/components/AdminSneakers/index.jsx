import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchRemoveSneakers } from '../../redux/slices/sneakers.jsx';

import styles from './AdminSneakers.module.scss';

function AdminSneakers(props) {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchRemoveSneakers());
	}, []);

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить статью?')) {
			dispatch(fetchRemoveSneakers(props._id));
		}
	};

	return (
		<li className={styles.sneakers}>
			<img
				src='./public/img/icons/edit.png'
				width={30}
				height={30}
				style={{ margin: '0 100px 0 0', cursor: 'pointer' }}
				className={styles.sneakers__edit}
				alt='add edit'
			/>
			<img
				src='./public/img/icons/delete.png'
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
						src={`http://localhost:3000/upload/${props.imageUrl}`}
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
