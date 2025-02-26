import { useState, useEffect } from "react"
import styles from "./PropertyDetails.module.css"
import AddPropertyForm from "../components/forms/AddPropertyForm"
import MainWithSidebar from "../templates/MainWithSidebar"
import PropertyOverview from "../components/ui/Dashboard/PropertyOverview"

export default function PropertyDetails() {
	const [showForm, setShowForm] = useState(false)
	const [property, setProperty] = useState(null)

	// import and set state using first property in json file
	useEffect(() => {
		async function fetchProperty() {
			const data = await import("../data/properties.json")
			setProperty(data.properties[0])
		}
		fetchProperty()
	}, [])

	// display loading message while fetching data
	if (!property) {
		return <div>Loading...</div>
	}

	const handleClick = () => {
		setShowForm((prev) => !prev)
	}

	return (
		<MainWithSidebar>
			<PropertyOverview data={property} />
			{/* 			<button className={styles.addPropertyButton} onClick={handleClick}>
				Add New Property
			</button>
			{showForm && <AddPropertyForm />} */}
		</MainWithSidebar>
	)
}
