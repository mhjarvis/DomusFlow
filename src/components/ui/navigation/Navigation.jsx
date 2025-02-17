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
	const [expanded, setExpanded] = useState(false)

	return (
		<div
			className={`${styles.sidebar} ${
				expanded ? styles.expanded : styles.collapsed
			}`}
			onMouseEnter={() => setExpanded(true)}
			onMouseLeave={() => setExpanded(false)}
		>
			{menuItems.map((item, index) => (
				<div key={index} className={styles.menuItem}>
					{item.icon}
					{expanded && <span className={styles.menuText}>{item.name}</span>}
				</div>
			))}
		</div>
	)
}
