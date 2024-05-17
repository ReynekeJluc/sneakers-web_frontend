import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

function Header(props) {
	const isAuth = false;
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
