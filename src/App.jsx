import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"
import Appliances from "./components/pages/Appliances"
import PageNotFound from "./components/pages/PageNotFound"
import Forum from "./components/pages/Forum"
import Login from "./components/pages/Login"
import Maintenance from "./components/pages/Maintenance"
import Schedule from "./components/pages/Schedule"
import Weather from "./components/pages/Weather"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/appliances" element={<Appliances />} />
				<Route path="/forums" element={<Forum />} />
				<Route path="/login" element={<Login />} />
				<Route path="/maintenance" element={<Maintenance />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/weather" element={<Weather />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	)
}
