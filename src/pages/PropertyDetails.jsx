import { useState } from "react"
import styles from "./PropertyDetails.module.css"
import AddPropertyForm from "../components/forms/AddPropertyForm"
import MainWithSidebar from "../templates/MainWithSidebar"

export default function PropertyDetails() {
	const [showForm, setShowForm] = useState(false)

	const handleClick = () => {
		setShowForm((prev) => !prev)
	}

	return (
		<MainWithSidebar>
			<button className={styles.addPropertyButton} onClick={handleClick}>
				Add New Property
			</button>
			{showForm && <AddPropertyForm />}
		</MainWithSidebar>
	)
}
