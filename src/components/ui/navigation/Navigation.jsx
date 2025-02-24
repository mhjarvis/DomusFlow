import { useState } from "react"
import { Home, Calendar, Wrench, Cloud, Box, MessageSquare } from "lucide-react"
import styles from "./Navigation.module.css"

const menuItems = [
	{ name: "Dashboard", icon: <Home size={20} /> },
	{ name: "Schedule", icon: <Calendar size={20} /> },
	{ name: "Maintenance", icon: <Wrench size={20} /> },
	{ name: "Weather", icon: <Cloud size={20} /> },
	{ name: "Appliances", icon: <Box size={20} /> },
	{ name: "Forum", icon: <MessageSquare size={20} /> },
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
			{/* Logo */}
			<div className={styles.logo}>DF</div>

			{/* Menu Items */}
			{menuItems.map((item, index) => (
				<div key={index} className={styles.itemContainer}>
					<div className={styles.itemIcon}>{item.icon}</div>
					<div className={styles.itemNameWrapper}>
						<span className={styles.itemName}>{item.name}</span>
					</div>
				</div>
			))}
		</div>
	)
}
