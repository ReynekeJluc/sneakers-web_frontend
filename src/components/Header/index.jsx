import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectIsAuth } from '../../redux/slices/auth.jsx';

import { logout } from '../../redux/slices/auth';
import styles from './Header.module.scss';

function Header(props) {
	const dispatch = useDispatch();
	const isAuth = useSelector(selectIsAuth);

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти?')) {
			dispatch(logout());
			window.localStorage.removeItem('token');
		}
	};

	return (
		<header className={styles.header}>
			<Link to='/' className={styles.logo}>
				<div className={styles.logo__block}>
					<img src='./public/img/icons/logo.svg' alt='logotype' />
					<div className={styles.logo__name}>
						<h1>React sneakers</h1>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<div className={styles.header__links}>
				{isAuth ? (
					<>
						<Link to='/add-sneakers' className={styles.header__link}>
							Добавить кроссовки
						</Link>
						<Link
							onClick={onClickLogout}
							to='/login'
							className={styles.header__link}
						>
							Выйти
						</Link>
					</>
				) : (
					<>
						<Link to='/login' className={styles.header__link}>
							Войти
						</Link>
						<Link to='/register' className={styles.header__link}>
							Создать аккаунт
						</Link>
					</>
				)}
			</div>
			<div className={styles.header__burger}>
				<img
					className={styles.header__burger_img}
					src='./public/img/icons/burger.svg'
					alt='burger'
				/>
			</div>
			<div className={styles.burger_block}>
				<div className={styles.header__burger_active}>
					<div className={styles.list}>
						{isAuth ? (
							<>
								<Link to='/add-sneakers' className={styles.header__link}>
									Добавить кроссовки
								</Link>
								<Link to='/login' className={styles.header__link}>
									Выйти
								</Link>
							</>
						) : (
							<>
								<Link to='/login' className={styles.header__link}>
									Войти
								</Link>
								<Link to='/register' className={styles.header__link}>
									Создать аккаунт
								</Link>
							</>
						)}
					</div>
					<img
						className={styles.burger_cancel}
						src='./public/img/icons/cancel.svg'
						alt='cancel'
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
