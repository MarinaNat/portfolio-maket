import styles from './Hello.module.scss'
import avatar from '../../../image/avatar.jpg'

const Hello = () => {
	return (
		// <div className={styles.main}>
		<section className={styles.hello}>
			<div className={`${styles.hello__container} container`}>
				<div className={styles.hello__content}>
					<h1 className={`${styles.hello__title} title`}>Hi, I am John,<br />
						Creative Technologist</h1>
					<div className={`${styles.hello__text} text`}>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
						Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
					</div>
					<a href="/#" className={`${styles.hello__btn} btn`}>Download Resume</a>
				</div>
				<div className={styles.hello__avatar}>
					<img src={avatar} alt='Аватар' />
				</div>
			</div>
		</section>
		// </div>
	)
}

export default Hello