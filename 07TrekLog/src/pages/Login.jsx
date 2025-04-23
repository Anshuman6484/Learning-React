import React, { useState } from 'react'
import styles from './Login.module.css'
import PageNav from '../components/PageNav'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Logging in with:', { email, password })
    // Add your authentication logic here
  }

  return (
    <main className={styles.loginContainer}>
      <PageNav />
      <h2 className={styles.title}>Login to Your Account</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="abc@example.com"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="abcde@123"
          />
        </div>

        <button type="submit" className={styles.loginButton}>
          Login
        </button>

        <p className={styles.registerLink}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </main>
  )
}

export default Login
