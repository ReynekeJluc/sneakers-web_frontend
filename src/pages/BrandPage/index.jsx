import React from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from '../../axios.jsx';

import styles from './BrandPage.module.scss';

function BrandPage(props) {
	const [data, setData] = React.useState();
	const [IsLoading, setIsLoading] = React.useState(false);
	const { id } = useParams();

	React.useEffect(() => {
		axios(`/brand/${id}`)
			.then(res => {
				setData(res.data);
				setIsLoading(true);
			})
			.catch(rej => {
				console.warn(rej);
				alert('Ошибка при получении данных о брэндах');
			});
	}, []);

	return (
		<div classNameName={styles.wrapper}>
			<hr />
			<div classNameName={styles.content}>
				<div className={styles.content__block}>
					<div className={styles.content__title}>
						<h2>{IsLoading ? data.brand : null}</h2>
						<Link className={styles.content__title_back_btn} to='/'>
							<img src='/img/icons/back.svg' alt='back' />
						</Link>
					</div>
					<p>{IsLoading ? data.desc : null}</p>
				</div>
			</div>
		</div>
	);
}

export default BrandPage;
