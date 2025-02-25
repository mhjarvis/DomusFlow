import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Appliances from "./components/pages/Appliances"
import PageNotFound from "./components/pages/PageNotFound"
import Forum from "./components/pages/Forum"
import Projects from "./components/pages/Projects"
import Login from "./components/pages/Login"
import Maintenance from "./components/pages/Maintenance"
import PropertyDetails from "./components/pages/PropertyDetails"
import Weather from "./components/pages/Weather"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/property-details" element={<PropertyDetails />} />
				<Route path="/maintenance" element={<Maintenance />} />
				<Route path="/appliances" element={<Appliances />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/forums" element={<Forum />} />
				<Route path="/login" element={<Login />} />
				<Route path="/weather" element={<Weather />} />

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
