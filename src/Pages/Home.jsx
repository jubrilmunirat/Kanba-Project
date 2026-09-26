export default function Home() {
	return (
		<div>
			<div className=' h-full w-full absolute flex flex-col justify-center items-center bg-[#a42222]'>
				<h1 className=' max-w-[600px] mx-10 font-medium text-8xl text-center text-white mb-3'>
					PadiPal
				</h1>
				<p className='max-w-[500px] mx-10 font-medium text-xl text-center first-letter:uppercase text-white mb-3'>
					organize your goals, plans, and daily tasks. Stay productive, and keep
					track of what matters most.
				</p>
				<button className=' px-5 py-3 font-bold bg-pink-300 hover:bg-[#800000] hover:text-white rounded-full'>
					Get Started
				</button>
			</div>
		</div>
	);
}
