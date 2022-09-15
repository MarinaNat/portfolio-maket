import { useState } from 'react'
import styles from './Header.module.scss'
import Menu from './Menu'

const Header = () => {
	const [isSidebarShow, setIsSidebarShow] = useState(false)
	return (
		<header className={styles.header}>
			<div className={styles.header__conteiner}>
				<Menu
					isSidebarShow={isSidebarShow}
					setIsSidebarShow={setIsSidebarShow}
				/>
			</div>
		</header>
	)
}

export default Header