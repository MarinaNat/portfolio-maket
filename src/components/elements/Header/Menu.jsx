import styles from './Header.module.scss'

const Menu = () => {
	const menu = [
		'Works', 'Blog', 'Contact'
	]

	return (
		<div className={styles.menu}>
			<div className={styles.menu__icon}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={styles.menu__body}>
				<ul className={styles.menu__list}>
					{menu.map(title => (
						<li key={title}>
							<a href={title}>{title}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Menu