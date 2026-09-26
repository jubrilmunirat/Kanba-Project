import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";
import AddTask from "./component/ui/AddTask";
import Footer from "./Statics/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AddTask />
			<Routes>
				<Route path='/' element={<KanbaBoard />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
