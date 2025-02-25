import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/dashboard/Dashboard"
import Appliances from "./pages/Appliances"
import PageNotFound from "./pages/PageNotFound"
import Forum from "./pages/Forum"
import Projects from "./pages/Projects"
import Login from "./pages/Login"
import Maintenance from "./pages/Maintenance"
import PropertyDetails from "./pages/PropertyDetails"
import Weather from "./pages/Weather"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/property-details" element={<PropertyDetails />} />
				<Route path="/maintenance" element={<Maintenance />} />
				<Route path="/appliances" element={<Appliances />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/forum" element={<Forum />} />
				<Route path="/login" element={<Login />} />
				<Route path="/weather" element={<Weather />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
