import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'

const setActive = ({ isActive }) => isActive
	? `${styles.menu__link_active} ${styles.menu__link}`
	: `${styles.menu__link}`;

const Menu = ({ isSidebarShow, setIsSidebarShow }) => {

	const tabs = [
		{
			_id: 1,
			name: 'Works'
		},
		{
			_id: 2,
			name: 'Blog'
		},
		{
			_id: 3,
			name: 'Contact'
		}
	]

	return (
		<div className={styles.menu}>
			<div onClick={() => setIsSidebarShow(!isSidebarShow)}
				className={`${isSidebarShow ? `${styles.menu__icon_active}` : `${styles.menu__icon}`}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={`${isSidebarShow ? `${styles.menu__body} ${styles.menu__body_active}` : `${styles.menu__body}`}`}>
				<ul className={styles.menu__list}>
					{tabs.map(tab => (
						<li key={tab._id}>
							<NavLink
								to={tab.name}
								className={setActive}
							>
								{tab.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Menu