import { Link } from "@tanstack/react-router"

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.container}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar