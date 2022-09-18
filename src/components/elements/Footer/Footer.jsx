import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__container} container`}>
				<div className={`${styles.footer__social} social`}>
					<a href='/#' className='social__item'>
						<i class='bx bxl-facebook-square' ></i>
					</a>
					<a href='/#' className='social__item'>
						<i class='bx bxl-instagram' ></i>
					</a>
					<a href='/#' className='social__item'>
						<i class='bx bxl-twitter' ></i>
					</a>
					<a href='/#' className='social__item'>
						<i class='bx bxl-linkedin-square' ></i>
					</a>
				</div>
				<div className={styles.footer__copy}>Copyright ©2020 All rights reserved</div>
			</div>
		</footer>
	)
}

export default Footer