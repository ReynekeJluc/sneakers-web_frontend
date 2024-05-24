import React from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../axios.jsx';

import styles from './BrandPage.module.scss';

function BrandPage(props) {
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
		<div classNameName={styles.wrapper}>
			<hr />
			<div classNameName={styles.content}>
				<div className={styles.content__block}>
					<div className={styles.content__title}>
						<h2>Puma</h2>
						<a className={styles.content__title_back_btn} href='/'>
							<img src='../../../public/img/icons/back.svg' alt='back' />
						</a>
					</div>
					<p>
						Компания производит спортивную экипировку под торговыми марками Puma
						и Cobra Golf. Производством одежды, обуви и спортивного инвентаря
						для Puma SE занимаются сторонние предприятия, большинство из них
						находятся в Азии, включая Китай (32 % объёма поставок), Вьетнам (30
						%), Камбоджу (13 %), Бангладеш (12 %), Индонезию (4 %), Индию (3 %).
						По состоянию на конец 2022 года готовую продукцию выпускали 516
						фабрик с 546 тыс. рабочих; ещё 128 фабрик с 82 тыс. рабочих
						поставляли материалы для производства. Около четверти продукции
						реализуется через собственную розничную сеть, остальное оптом
						продаётся другим торговым сетям. Продажи в 2022 году составили 8,47
						млрд евро, из них 51 % пришёлся на обувь, 34 % — на одежду, 15 % —
						на спортивный инвентарь. Географически продажи делятся на три
						региона: Америка (44 % выручки), Европа, Ближний Восток и Африка (37
						% выручки), Азиатско-Тихоокеанский регион (20 % выручки).
					</p>
				</div>
			</div>
		</div>
	);
}

export default BrandPage;
