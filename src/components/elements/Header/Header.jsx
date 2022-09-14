import styles from './Header.module.scss'
import Menu from './Menu'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__conteiner}>
				<Menu />
			</div>
		</header>
	)
}

export default Header