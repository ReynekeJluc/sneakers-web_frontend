import styles from './Form.module.scss';

function Form(props) {
	return (
		<>
			<form className={styles.form} action='?'>
				<p>Страна:</p>
				<select name='country'>
					<option value='Россия'>Россия</option>
					<option value='Америка'>Америка</option>
					<option value='Китай'>Китай</option>
				</select>
				<p>Производитель:</p>
				<select name='manufacturer'>
					<option value='Nike'>Nike</option>
					<option value='Puma'>Puma</option>
					<option value='Under Armour'>Under Armour</option>
				</select>
				<p>Цвет:</p>
				<select name='colors'>
					<option value='Красный'>Красный</option>
					<option value='Зеленый'>Зеленый</option>
					<option value='Синий'>Синий</option>
				</select>
				<p>Рейтинг:</p>
				<select name='rating'>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<input type='number' placeholder='Размер' />
				<input
					className={styles.form_btn_filter}
					type='submit'
					value='Применить фильтры'
				/>
				<input
					className={styles.form_btn_filter}
					type='submit'
					value='Сбросить фильтры'
				/>
			</form>
		</>
	);
}

export default Form;
