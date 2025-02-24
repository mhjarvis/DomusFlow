/* eslint-disable react/prop-types */
import styles from "./HamburgerMenu.module.css"
import { useState } from "react"

export default function HamburgerMenu({ isOpen, onToggle }) {
	// If no external state is provided, manage internally
	const [internalOpen, setInternalOpen] = useState(isOpen || false)
	const isMenuOpen = isOpen !== undefined ? isOpen : internalOpen

	const handleClick = () => {
		if (onToggle) {
			onToggle(!isMenuOpen) // Pass toggled state to parent
		} else {
			setInternalOpen(!isMenuOpen) // Manage internally
		}
	}

	return (
		<button
			className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
			onClick={handleClick}
			aria-label="Toggle menu"
		>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
			<span className={styles.line}></span>
		</button>
	)
}
