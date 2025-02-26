import styles from "./Dashboard.module.css"
import MainWithSidebar from "../../templates/MainWithSidebar"
import PropertyOverview from "../../components/ui/Dashboard/PropertyOverview"
import { useEffect, useState } from "react"

export default function Dashboard() {
	const [property, setProperty] = useState(null)

	// import and set state using first property in json file
	useEffect(() => {
		async function fetchProperty() {
			const data = await import("../../data/properties.json")
			setProperty(data.properties[0])
		}
		fetchProperty()
	}, [])

	// display loading message while fetching data
	if (!property) {
		return <div>Loading...</div>
	}

	return (
		<MainWithSidebar>
			<div className={styles.dashboard}>
				<PropertyOverview data={property} />
			</div>
		</MainWithSidebar>
	)
}
