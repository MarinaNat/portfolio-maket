import styles from './Posts.module.scss'

const Posts = () => {
	return (
		<section className={styles.recentPosts}>
			<div className={`${styles.recentPosts__container} container`}>
				<div className={styles.recentPosts__header}>
					<div className={`${styles.recentPosts__title} title-posts`}>Recent posts</div>
					<a href="/#" className={styles.recentPosts__viewAll}>View all</a>
				</div>
				<div className={styles.recentPosts__items}>
					<div className={styles.recentPosts__column}>
						<article className={`${styles.recentPosts__item} ${styles.recentPost}`}>
							<a href="/#" className={styles.recentPost__title}>Making a design system from scratch</a>
							<div className={styles.recentPost__info}>12 Feb 2020 <span>|</span> Design, Pattern</div>
							<div className={`${styles.recentPosts__text} text`}>Amet minim mollit non
								deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
								duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
							</div>
						</article>
					</div>
					<div className={styles.recentPosts__column}>
						<article className={`${styles.recentPosts__item} ${styles.recentPost}`}>
							<a href="/#" className={styles.recentPost__title}>Creating pixel perfect icons in Figma</a>
							<div className={styles.recentPost__info}>12 Feb 2020 <span>|</span> Figma, Icon Design</div>
							<div className={`${styles.recentPosts__text} text`}>Amet minim mollit non deserunt ullamco
								est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Posts