/* eslint-disable react/prop-types */
import styles from "./MainWithSidebar.module.css"
import Navigation from "../components/ui/navigation/Navigation"

export default function MainWithSidebar({ children }) {
	return (
		<div className={styles.gridContainer}>
			<div className={styles.sidebar}>
				<Navigation />
			</div>
			<div>{children}</div>
		</div>
	)
}
