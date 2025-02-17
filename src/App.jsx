/* eslint-disable no-unused-vars */
import "./App.css"

import { useState } from "react"
import { Button } from "./components/ui/Button"
import { Card } from "./components/ui/Card"
import { CardContent } from "./components/ui/CardContent"
import { PlusCircle } from "./components/ui/PlusCircle"

export default function App() {
	return (
		<div className="home-screen">
			<h1 className="title">Home Tracker</h1>
			<p className="subtitle">Keep track of home maintenance and appliances</p>

			<div className="card-container">
				<Card>
					<p>Track your home maintenance schedules easily.</p>
				</Card>
				<Card>
					<p>Store appliance details and warranty info.</p>
				</Card>
			</div>

			<Button onClick={() => alert("Add new item")}>Add New</Button>
		</div>
	)
}
