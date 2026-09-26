import { Plus } from "lucide-react";
import AddTaskForm from "./AddTaskForm";
import { useState } from "react";
export default function AddTask() {
	const [showForm, setShowForm] = useState(false);
	return (
		<div className=''>
			{!showForm && (
				<button
					onClick={() => setShowForm(true)}
					className=' hover:bg-[#FFD1DC] hover:rounded-2xl justify-center font-bold hover:text-red-950 flex gap-2 w-fit items:center md:ml-auto my-5 mx-2 py-2 px-3 mr-15'
				>
					<Plus className='w-6 h-6' />
					Add New Task
				</button>
			)}

			{showForm && <AddTaskForm onClose={() => setShowForm(false)} />}
		</div>
	);
}
