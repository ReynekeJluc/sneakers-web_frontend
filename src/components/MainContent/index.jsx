import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from '../../axios.jsx';

import { Pagination } from '@mui/material';
import Form from '../Form';
import Sneakers from '../Sneakers/';

import { setSneakers } from '../../redux/slices/sneakers.jsx';

import { fetchBrand } from '../../redux/slices/brand.jsx';
import { fetchPages } from '../../redux/slices/pages.jsx';
import { fetchSneakers } from '../../redux/slices/sneakers.jsx';
import styles from './MainContent.module.scss';

function MainContent(props) {
	const dispatch = useDispatch();

	const { sneakers } = useSelector(state => state.sneakers); // извлекаем данные из redux-хранилища
	const { brand } = useSelector(state => state.brand); // извлекаем данные из redux-хранилища
	const { pages } = useSelector(state => state.pages); // извлекаем данные из redux-хранилища

	React.useEffect(() => {
		dispatch(fetchSneakers());
		dispatch(fetchBrand());
		dispatch(fetchPages());
	}, []);
	const [currentPage, setCurrentPage] = React.useState(pages.currentPage || 1);
	const [pageSize, setPageSize] = React.useState(pages.pageSize || 3);

	const handlePageChange = async (event, value) => {
		try {
			const res = await axios.get(
				`/sneakers?page=${value}&pageSize=${pageSize}`
			);

			setCurrentPage(res.data.pages.currentPage);
			setPageSize(res.data.pages.pageSize);

			dispatch(setSneakers(res.data.data));
		} catch (err) {
			console.warn(err);
		}
	};

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
							{brand.map((obj, index) => (
								<div key={index}>
									<Link to={`/brand/${obj._id}`}>{obj.brand}</Link>
								</div>
							))}
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
									src='/img/icons/down_arrow.svg'
									alt='arrow'
								/>
								<img
									className={styles.filters_close}
									src='/img/icons/cancel.svg'
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
							<Sneakers
								key={index}
								_id={obj._id}
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
							/>
						))}
					</ul>
					<Pagination
						count={pages.totalPages}
						page={currentPage}
						onChange={handlePageChange}
						shape='rounded'
					/>
				</div>
			</div>
		</>
	);
}

export default MainContent;
