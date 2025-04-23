import { NavLink } from 'react-router-dom'
import styles from './PageNav.module.css'
import Logo from './Logo'

function PageNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? `${styles.active}` : '')}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default PageNav
