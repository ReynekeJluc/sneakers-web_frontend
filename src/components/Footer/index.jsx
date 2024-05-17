import React from 'react';

import styles from './Footer.module.scss';

function Footer(props) {
	var curYear = new Date().getFullYear();
	return (
		<>
			<footer className={styles.copyright}>
				&#169; React Sneakers, магазин кроссовок, {curYear}
			</footer>
			<hr className={styles.footer__divider} />
		</>
	);
}

export default Footer;
