import React from 'react'
import styles from './AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <header className={styles.heading}>
        <h1>App Navigation</h1>
      </header>

      <main className={styles.mainContent}>MAIN CONTENT</main>
    </div>
  )
}

export default AppLayout
