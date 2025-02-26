/* eslint-disable react/prop-types */
import styles from "./PropertyOverview.module.css"

export default function PropertyOverview({ data }) {
	return (
		<div className={styles.container}>
			<img
				src={data.pictures[0].link}
				alt={data.name}
				className={styles.propertyImage}
			/>
			<div className={styles.propertyContent}>
				<h2 className={styles.propertyName}>{data.name}</h2>
			</div>
		</div>
	)
}
