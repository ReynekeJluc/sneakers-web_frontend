import { Link } from 'react-router-dom';

import styles from './Sneakers.module.scss';

function Sneakers(props) {
	return (
		<li className={styles.sneakers}>
			<Link to={`/sneakers/${props._id}`}>
				<img
					src='./public/img/icons/favor_def.svg'
					className={styles.sneakers__favor}
					alt='add favor'
				/>
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
					<img
						src='./public//img/icons/added_def.svg'
						className={styles.sneakers__added}
						alt='add cart'
					/>
				</div>
			</Link>
		</li>
	);
}

export default Sneakers;
