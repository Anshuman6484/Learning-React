import React from 'react'
import styles from './Pricing.module.css'
import PageNav from '../components/PageNav'

function Pricing() {
  return (
    <div className={styles.pricing}>
      <PageNav />
      <h2>Choose Your Plan</h2>
      <div className={styles.plans}>
        <div className={styles.plan}>
          <h3>Basic Plan</h3>
          <p>$5 / month</p>
          <button>Choose</button>
        </div>
        <div className={styles.plan}>
          <h3>Premium Plan</h3>
          <p>$15 / month</p>
          <button>Choose</button>
        </div>
      </div>
    </div>
  )
}

export default Pricing
