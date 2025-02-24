import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, Calendar, Wrench, Cloud, Box, MessageSquare } from "lucide-react"
import HamburgerMenu from "./HamburgerMenu"
import styles from "./Navigation.module.css"

const menuItems = [
	{ name: "Dashboard", link: "/", icon: <Home size={20} /> },
	{ name: "Schedule", link: "/schedule", icon: <Calendar size={20} /> },
	{ name: "Maintenance", link: "/maintenance", icon: <Wrench size={20} /> },
	{ name: "Weather", link: "/weather", icon: <Cloud size={20} /> },
	{ name: "Appliances", link: "/appliances", icon: <Box size={20} /> },
	{ name: "Forum", link: "/forum", icon: <MessageSquare size={20} /> },
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
			<div className={styles.menuHeader}>
				<div className={styles.logo}>DF</div>
				<HamburgerMenu isOpen={expanded} onToggle={setExpanded} />
			</div>

			{/* Menu Items */}
			{menuItems.map((item, index) => (
				<div key={index} className={styles.itemContainer}>
					<div className={styles.itemIcon}>{item.icon}</div>
					<div className={styles.itemNameWrapper}>
						<Link to={item.link} className={styles.itemName}>
							{item.name}
						</Link>
					</div>
				</div>
			))}
		</div>
	)
}
