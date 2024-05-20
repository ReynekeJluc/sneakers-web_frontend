import React from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../axios.jsx';

import styles from './SneakersPage.module.scss';

function SneakersPage(props) {
	const [data, setData] = React.useState();
	const [IsLoading, setIsLoading] = React.useState(false);
	const { id } = useParams();

	React.useEffect(() => {
		axios
			.get(`/sneakers/${id}`)
			.then(res1 => {
				axios(`/brand/${res1.data.brand}`)
					.then(res2 => {
						res1.data.brand = res2.data.brand;

						setData(res1.data);
						setIsLoading(true);
					})
					.catch(rej => {
						console.warn(rej);
						alert('Ошибка при получении данных о брэндах');
					});
			})
			.catch(rej => {
				console.warn(rej);
				alert('Ошибка при получении данных о кроссовках');
			});
	}, []);

	//console.log(data);

	return (
		<div className={styles.wrapper}>
			<hr />
			<div className={styles.content}>
				{IsLoading ? (
					<div className={styles.content__unification}>
						<div className={styles.content__title}>
							<h2>{data.title}</h2>
							<a className={styles.content__title_back_btn} href='/'>
								<img src='../../../public/img/icons/back.svg' alt='back' />
							</a>
						</div>
						<div className={styles.content__block}>
							<div className={styles.content__block__image}>
								<img
									src={`http://localhost:3000/upload/${data.imageUrl}`}
									alt='sneakers'
								/>
							</div>
							<div className={styles.content__block__info}>
								<h3>Что вам нужно знать об этой модели:</h3>
								<div className={styles.content__block__info_brand}>
									<b>Производитель:</b>
									<a href='?'>{data.brand}</a>
								</div>
								<aside>{data.desc}</aside>
								<div className={styles.content__block__order}>
									<div className={styles.content__block__order_text}>
										<h4>Цена:</h4>
										<b>{data.price} &#8381;</b>
									</div>
									<div className={styles.content__block__order_btns}>
										<button>Добавить в корзину</button>
										<button>Добавить в желаемое</button>
									</div>
								</div>
								<div className={styles.content__block__sources}>
									<h5>Литература:</h5>
									{
										<ul>
											{data.sources.map((obj, index) => (
												<li key={index}>{obj}</li>
											))}
										</ul>
									}
								</div>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

export default SneakersPage;
