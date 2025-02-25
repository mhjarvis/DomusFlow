import styles from "./Dashboard.module.css"
import MainWithSidebar from "../../templates/MainWithSidebar"
import PropertyOverview from "./PropertyOverview"
export default function Dashboard() {
	return (
		<MainWithSidebar>
			<div className={styles.dashboard}>
				<PropertyOverview />
			</div>
		</MainWithSidebar>
	)
}
