import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AdminSneakers from '../AdminSneakers/index.jsx';

import { fetchSneakers } from '../../redux/slices/sneakers.jsx';
import styles from './AdminContent.module.scss';

function MainContent(props) {
	const dispatch = useDispatch();
	const { sneakers } = useSelector(state => state.sneakers); // извлекаем данные из redux-хранилища

	React.useEffect(() => {
		dispatch(fetchSneakers());
	}, []);

	return (
		<>
			<div className={styles.content}>
				<div className={styles.content__right_part}>
					<div className={styles.content__title}>
						<h2>Все кроссовки</h2>
					</div>
					<ul className={styles.list__sneakers}>
						{sneakers.map((obj, index) => (
							<AdminSneakers
								key={index}
								_id={obj._id}
								title={obj.title}
								price={obj.price}
								imageUrl={obj.imageUrl}
							/>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default MainContent;
