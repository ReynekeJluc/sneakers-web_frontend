import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from '../Form';
import Sneakers from '../Sneakers/';

import { fetchSneakers } from '../../redux/slices/sneakers.jsx';
import styles from './MainContent.module.scss';

function MainContent(props) {
	const dispatch = useDispatch();
	const { sneakers } = useSelector(state => state.sneakers);

	React.useEffect(() => {
		dispatch(fetchSneakers());
	}, []);

	//console.log(sneakers);

	return (
		<>
			<div className={styles.content}>
				<div className={styles.content__left_part}>
					<h3>Настройте под себя</h3>
					<Form></Form>
				</div>
				<div className={styles.content__right_part}>
					<div className={styles.content__history}>
						<h2>История</h2>
						<p>
							Создание спортивной обуви является процессом непрерывной эволюции.
							Усилия разработчиков направлены на снижение массы кроссовок,
							разработку новых концепций удобства обуви, отход от традиционного
							построения: подметка + подошва + верх, использование новейших
							материалов и систем шнуровки, постоянное совершенствование
							производства. В Nike Air Force использовались небольшие газовые
							карманы для улучшения амортизации. В Reebok изобрели систему Pump
							— одну из первых оригинальных систем подгонки кроссовок по ноге.
							Puma представила технологию Puma Disc System, благодаря которой
							кроссовки подгонялись по стопе путём простого поворота диска.
							Under Armour — технологию амортизации, используемая компанией Nike
							для снижения массы кроссовок, созданная совместно со специалистами
							NASA.
						</p>
					</div>
					<div className={styles.content__catalog}>
						<h2>Лидеры продаж</h2>
						<div className={styles.content__catalog_list}>
							<div>
								<a href='./src/pages/nike/index.html'>Nike</a>
							</div>
							<div>
								<a href='./src/pages/puma/index.html'>Puma</a>
							</div>
							<div>
								<a href='./src/pages/under_armour/'>Under Armour</a>
							</div>
						</div>
					</div>
					<div className={styles.content__title}>
						<h2>Все кроссовки</h2>
					</div>
					<div className={styles.show}>
						<div className={styles.content__filters}>
							<div className={styles.filters_block}>
								<h3>Настройте под себя</h3>
								<img
									className={styles.filters_open}
									src='./public/img/icons/down_arrow.svg'
									alt='arrow'
								/>
								<img
									className={styles.filters_close}
									src='./public/img/icons/cancel.svg'
									alt='cancel'
								/>
							</div>
							<div className={styles.overflow}>
								<Form></Form>
							</div>
						</div>
					</div>
					<ul className={styles.list__sneakers}>
						{sneakers.map((obj, index) => (
							<Sneakers title={obj.title} price={obj.price} />
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default MainContent;
