import styles from "./Dashboard.module.css"
import MainWithSidebar from "../templates/MainWithSidebar"
export default function Dashboard() {
	return (
		<MainWithSidebar>
			<div className={styles.dashboard}>
				<h1>Dashboard</h1>
			</div>
		</MainWithSidebar>
	)
}
