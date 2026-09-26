import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Trash, Menu, ChevronDown } from "lucide-react";
import Bin from "../component/ui/Bin";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [openBin, setOpenBin] = useState(false);
	const [openCategory, setOpenCategory] = useState(false);
	const navigate = useNavigate();

	const categories = [
		{ label: "To do", value: "todo" },
		{ label: "In Progress", value: "inprogress" },
		{ label: "Completed", value: "completed" },
	];

	return (
		<div className="flex justify-between items-center py-4 px-4 font-bold text-base md:text-xl top-0 left-0 z-50 h-[70px] gap-2 max-lg:px-2 max-lg:text-sm">
			<div className="flex justify-between gap-6 items-center cursor-pointer">
				<Menu
					className="font-bold text-xl hidden max-md:block md:hidden h-10 w-10 m-4 cursor-pointer z-50 relative"
					onClick={() => setOpenMenu(!openMenu)}
				/>

				<div
					className={`fixed top-0 left-0 w-[80%] max-w-[300px] h-screen flex flex-col items-start gap-4 font-semibold text-lg z-[60] transition-all duration-300 ease-in-out ${openMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
						}`}
					style={{
						backgroundColor: "rgba(255, 255, 255, 0.95)",
						boxShadow: "4px 0 10px rgba(0,0,0,0.3)",
					}}
				>
					<div className="p-4 flex flex-col gap-3 justify-center items-start w-full">
						<Link to="/" onClick={() => setOpenMenu(false)}>
							<nav>Home</nav>
						</Link>
						<Link to="/about" onClick={() => setOpenMenu(false)}>
							<nav>About Us</nav>
						</Link>
						<Link to="/tasks" onClick={() => setOpenMenu(false)}>
							<nav>Tasks Board</nav>
						</Link>

						<button onClick={() => setOpenBin(true)} className="cursor-pointer">
							<Trash />
						</button>

						<Link to="/signup" onClick={() => setOpenMenu(false)}>
							Sign Up
						</Link>
						<Link to="/login" onClick={() => setOpenMenu(false)}>
							Log in
						</Link>

						<div className="w-full mt-2 border-t pt-3">
							<button
								onClick={() => setOpenCategory(!openCategory)}
								className="flex w-full items-center justify-between"
							>
								Category:{" "}
								<ChevronDown
									className={`w-4 h-4 transition ${openCategory ? "rotate-180" : ""}`}
								/>
							</button>

							{openCategory && (
								<div className="flex flex-col gap-2 mt-2 ml-2 bg-gray-50 rounded-lg p-2">
									{categories.map((cat) => (
										<button
											key={cat.value}
											onClick={() => {
												setOpenCategory(false);
												setOpenMenu(false);
												navigate(`/tasks?category=${cat.value}`);
											}}
											className="text-left px-3 py-2 rounded-md hover:bg-[#800000] hover:text-white text-base"
										>
											{cat.label}
										</button>
									))}
									<button
										onClick={() => {
											setOpenCategory(false);
											setOpenMenu(false);
											navigate(`/tasks`);
										}}
										className="text-left px-3 py-2 rounded-md bg-gray-200 text-sm"
									>
										Show All
									</button>
								</div>
							)}
						</div>
					</div>
				</div>

				<div>
					<img
						src={logo}
						alt="logo"
						className="max-w-[150px] min-h-[60px] max-lg:max-w-[120px] max-lg:min-h-[40px]"
					/>
				</div>

				<div className="flex gap-6 items-center cursor-pointer max-md:hidden">
					<Link to="/" className="bg-white-500 hover:bg-[#800000] text-black font-bold py-2 px-4 rounded">
						Home
					</Link>
					<Link to="/about" className="bg-white-500 hover:bg-gray-600 text-black font-bold py-2 px-4 rounded">
						About Us
					</Link>
					<Link to="/tasks" className="bg-white-500 hover:bg-[#800000] text-black font-bold py-2 px-4 rounded">
						Tasks Board
					</Link>
				</div>
			</div>

			<div className="flex justify-between gap-6 cursor-pointer">
				<button onClick={() => setOpenBin(true)} className="cursor-pointer">
					<Trash className="hover:bg-[#800000] py-2 h-10" />
				</button>
				<div className="flex gap-5 cursor-pointer max-md:hidden">
					<Link to="/signup" className="bg-[#800000] text-white px-5 py-2 rounded-lg">
						Sign-Up
					</Link>
					<Link to="/login" className="bg-[#800000] text-white px-5 py-2 rounded-lg">
						Log-in
					</Link>
				</div>
			</div>
			{openBin && <Bin closeBin={() => setOpenBin(false)} />}
		</div>
	);
};

export default Header;