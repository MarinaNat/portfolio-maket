import styles from './Article.module.scss';
import image01 from '../../../image/article/01.jpg';
import image02 from '../../../image/article/02.jpg';
import image03 from '../../../image/article/03.jpg';

const Article = () => {
	return (
		<div className='page'>
			<div className={`${styles.article}`}>
				<h1 className={`${styles.article__title}`}>Designing Dashboards with usability in mind</h1>
				<div className={styles.article__info}>
					<div className={styles.article__year}>2020</div>
					<div className={styles.article__category}>Dashboard, User Experience Design</div>
				</div>
				<div className={`${styles.article__text} text`}>
					<p>
						Amet minim mollit non deserunt ullamco est
						sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<img src={image01} alt='image01'></img>
					<p>
						Amet minim mollit non deserunt ullamco est
						sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
						veniam consequat sunt nostrud amet.
					</p>
					<h2>Heading 1</h2>
					<h3>Heading 2</h3>
					<img src={image02} alt='image01'></img>
					<img src={image03} alt='image01'></img>
				</div>
			</div>

		</div>
	)
}

export default Article