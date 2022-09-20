import styles from './Blog.module.scss';
import { blogs } from '../../const/Blog';

const Blog = () => {
	return (
		<div className='page'>
			<div className={`${styles.blog} page__container container`}>
				<h1 className={`${styles.blog__title} title`}>Blog</h1>
				<div className={styles.blog__items}>
					{blogs.map(blog => (
						<div key={blog._id} className={styles.blog__item}>
							<a href='/#' className={styles.blog__subtitle}>{blog.title}</a>
							<div className={styles.blog__info}>
								<div className={styles.blog__data}>{blog.data}</div>
								<span className={styles.blog__separator}>|</span>
								<div className={styles.blog__category}>{blog.category}</div>
							</div>
							<div className={`${styles.blog__text} text`}>{blog.text}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Blog