import styles from './Sneakers.module.scss';

function Sneakers(props) {
	return (
		<li className={styles.sneakers}>
			<a href='./src/pages/nike/blazer_mid_suede.html'>
				<img
					src='./public/img/icons/favor_def.svg'
					className={styles.sneakers__favor}
					alt='add favor'
				/>
				<div className={styles.sneakers__image}>
					<img
						src='./public/img/sneakers/_for_main_page/1.png'
						alt='img sneakers'
					/>
				</div>
				<div className={styles.sneakers__title}>{props.title}</div>
				<div className={styles.block__info}>
					<div className={styles.block__prices}>
						<p>Цена:</p>
						<b>{props.price} &#8381;</b>
					</div>
					<img
						src='./public//img/icons/added_def.svg'
						className={styles.sneakers__added}
						alt='add cart'
					/>
				</div>
			</a>
		</li>
	);
}

export default Sneakers;
