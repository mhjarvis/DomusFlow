import styles from "./Dashboard.module.css"
import WithMenu from "../templates/WithMenu"
export default function Dashboard() {
	return (
		<WithMenu>
			<div className={styles.dashboard}>
				<h1>Dashboard</h1>
			</div>
		</WithMenu>
	)
}
