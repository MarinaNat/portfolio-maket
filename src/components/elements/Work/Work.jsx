import styles from './Work.module.scss';
import { works } from '../../const/Works';
import { Link } from 'react-router-dom';

const Work = () => {
	return (
		<div className='page'>
			<div className={`${styles.work} page__container container`}>
				<h1 className={`${styles.work__title} title`}>Work</h1>
				<div className={'works'}>
					{works.map(work => (
						<article key={work._id} className={`${styles.works__item} works__item`}>
							<Link to={`/Works/${work._id}`} className='works__image ibg'>
								<img src={work.img} alt="Worc #1"></img>
							</Link>
							<div className='works__body'>
								<Link to={`/Works/${work._id}`} className='works__title'>{work.title}</Link>
								<div className='works__info'>
									<div className='works__year'>{work.data}</div>
									<div className='works__category'>{work.category}</div>
								</div>
								<div className='works__text text'>{work.text}</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}

export default Work