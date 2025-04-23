import React from 'react'
import styles from './PageNotFound.module.css'
import PageNav from './../components/PageNav'

function PageNotFound() {
  return (
    <>
      <PageNav />
      <div className={styles.notFound}>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for might have been moved or deleted.</p>
      </div>
    </>
  )
}

export default PageNotFound
