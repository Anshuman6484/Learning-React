import React from 'react'
import styles from './Products.module.css'
import PageNav from '../components/PageNav'

function Products() {
  return (
    <div className={styles.products}>
      <PageNav />
      <h2>Our Products</h2>
      <div className={styles.productList}>
        <div className={styles.product}>
          <h3>Travel Journal</h3>
          <p>Document your adventures with our premium journals.</p>
        </div>
        <div className={styles.product}>
          <h3>Photo Album</h3>
          <p>Capture your memories in style with our photo albums.</p>
        </div>
      </div>
    </div>
  )
}

export default Products
