/* eslint-disable react/prop-types */
import Navigation from "../components/ui/navigation/Navigation"

export default function MainWithSidebar({ children }) {
	return (
		<div>
			<div>
				<Navigation />
			</div>
			{children}
		</div>
	)
}
