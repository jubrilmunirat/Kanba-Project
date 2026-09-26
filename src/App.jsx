import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";
import Signup from "./Pages/Aunthentication/SignUp";
import Login from "./Pages/Aunthentication/Login";
import Home from "./Pages/Home";
function App() {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/tasks' element={<KanbaBoard />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
