import styles from './Works.module.scss';
import works01 from '../../../image/works/01.jpg';
import works02 from '../../../image/works/02.jpg';
import works03 from '../../../image/works/03.jpg';


const Works = () => {
	return (
		<section className={styles.featuredWorks}>
			<div className={`${styles.featuredWorks__container} container`}>
				<div className={`${styles.featuredWorks__title} title-posts`}>Featured works</div>
				<div className={`${styles.featuredWorks__items} works`}>
					<article className={`${styles.works__item} works__item`}>
						<a href='/#' className='works__image ibg'>
							<img src={works01} alt="Workc #1"></img>
						</a>
						<div className='works__body'>
							<a href='/#' className='works__title'>Designing Dashboards</a>
							<div className='works__info'>
								<div className='works__year'>2020</div>
								<div className='works__category'>Dashboard</div>
							</div>
							<div className='works__text text'>Amet minim mollit non deserunt
								ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
								velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
						</div>
					</article>
					<article className={`${styles.works__item} works__item`}>
						<a href='/#' className='works__image ibg'>
							<img src={works02} alt="Workc #2"></img>
						</a>
						<div className='works__body'>
							<a href='/#' className='works__title'>Vibrant Portraits of 2020</a>
							<div className='works__info'>
								<div className='works__year'>2018</div>
								<div className='works__category'>Illustration</div>
							</div>
							<div className='works__text text'>Amet minim mollit non deserunt
								ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
								velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
						</div>
					</article>
					<article className={`${styles.works__item} works__item`}>
						<a href='/#' className='works__image ibg'>
							<img src={works03} alt="Workc #3"></img>
						</a>
						<div className='works__body'>
							<a href='/#' className='works__title'>36 Days of Malayalam type</a>
							<div className='works__info'>
								<div className='works__year'>2018</div>
								<div className='works__category'>Typography</div>
							</div>
							<div className='works__text text'>Amet minim mollit non deserunt
								ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
								velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
						</div>
					</article>
				</div>
			</div>
		</section >
	)
}

export default Works