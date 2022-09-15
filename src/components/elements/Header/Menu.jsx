import styles from './Header.module.scss'

const Menu = ({ isSidebarShow, setIsSidebarShow }) => {
	const menu = [
		'Works', 'Blog', 'Contact'
	]

	return (
		<div className={styles.menu}>
			{/* <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
				<i className={`bx bx-${isSidebarShow ? 'x' : 'menu'}`}></i>
			</button> */}
			<div onClick={() => setIsSidebarShow(!isSidebarShow)}
				className={`${isSidebarShow ? `${styles.menu__icon_active}` : `${styles.menu__icon}`}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={`${isSidebarShow ? `${styles.menu__body} ${styles.menu__body_active}` : `${styles.menu__body}`}`}>
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