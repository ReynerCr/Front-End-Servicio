import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import { Container, Typography } from "@mui/material";

function ProfesorDashboard() {
	const [clases, setClase] = useState([]);

	useEffect(() => {
		axios.get("/profesor/materias").then((response) => console.log(response));
	}, []);

	return (
		<Container>
			<Navbar names={["Datos", "Casos"]} />
			<h1>qweqwe</h1>
			<h1>qweqwe</h1>
			<h1>qweqwe</h1>
			<h1>qweqwe</h1>

			<Typography> Bienvenido Mr pepe </Typography>
		</Container>
	);
}

export default ProfesorDashboard;