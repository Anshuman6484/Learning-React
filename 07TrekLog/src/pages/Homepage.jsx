import React from 'react'
import styles from './Homepage.module.css'
import PageNav from '../components/PageNav'
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
      <div className={styles.homepage}>
        <PageNav />
        <h2>Welcome to TrekLog</h2>
        <h3>
          Record your memories, explore new destinations, and share your
          adventures!
        </h3>
        <Link to="/app">
          <button className={styles.btn}>Start Treking</button>
        </Link>
      </div>
    </>
  )
}

export default Homepage
