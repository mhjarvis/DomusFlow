import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard"

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="Appliances" element={<div>Appliances</div>} />
				<Route path="/forums" element={<div>Forums</div>} />
				<Route path="/login" element={<div>Login</div>} />
				<Route path="/maintenance" element={<div>Maintenance</div>} />
				<Route path="/schedule" element={<div>Schedule</div>} />
				<Route path="/weather" element={<div>Weather</div>} />
			</Routes>
		</BrowserRouter>
	)
}
