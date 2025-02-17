import { useState } from "react"
import { Home, Calendar, Wrench, Cloud, Box, MessageSquare } from "lucide-react"
import styles from "./Navigation.module.css"

const menuItems = [
	{ name: "Dashboard", icon: <Home size={24} /> },
	{ name: "Schedule", icon: <Calendar size={24} /> },
	{ name: "Maintenance", icon: <Wrench size={24} /> },
	{ name: "Weather", icon: <Cloud size={24} /> },
	{ name: "Appliances", icon: <Box size={24} /> },
	{ name: "Forum", icon: <MessageSquare size={24} /> },
]

export default function Sidebar() {
	const [expanded, setExpanded] = useState(true)

	return (
		<div
			className={`${styles.sidebar} ${
				expanded ? styles.expanded : styles.collapsed
			}`}
			onMouseEnter={() => setExpanded(true)}
			onMouseLeave={() => setExpanded(false)}
		>
			{/*Logo*/}
			<div className={styles.logo}>DF</div>

			{/*Menu Items*/}
			{menuItems.map((item, index) => (
				<div key={index} className={styles.menuItem}>
					<div>{item.icon}</div>
					{/* 					{item.icon}
					 */}{" "}
					<div>
						{expanded && <span className={styles.menuText}>{item.name}</span>}
					</div>
				</div>
			))}
		</div>
	)
}
