import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.css'

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/pricing" className={styles.active}>
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={styles.active}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={styles.active}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav
