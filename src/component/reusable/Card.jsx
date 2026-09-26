import { ListSortDescending, Trash, CircleX } from "lucide-react";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Card({
	title,
	description,
	dateCreated,
	color,
	backgroundColor,
	displayDescription,
	id,
	deleteCard,
	draggable= true
}) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: id,
			disabled: !draggable
		});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};
	const [showDescription, setShowDescription] = useState(false);

	const currentDate = new Date();
	dateCreated = currentDate.toLocaleDateString();

	function handleDescriptionClick() {
		setShowDescription(true);
	}
	function closeDescription(description) {
		setShowDescription(false);
	}
	function handleDeleteCard(card) {
		deleteCard(id);
	}

	return (
		<>
			<div
				ref={setNodeRef}
				style={{
					...style, //transform and transition
					color: color,
				}}
				{...attributes}
				{...listeners}
				className={`w-full  min-h-[80px] my-4  py-2 px-6 flex flex-col  justify-center
				rounded-xl ${backgroundColor} hover:bg-gray-200 hover:shadow-md transition-shadow duration-200`}
			>
				<h3 className='font-bold text-lg first-letter:uppercase'>{title}</h3>
				{description && (
					<button
						onClick={handleDescriptionClick}
						onPointerDown={(e) => e.stopPropagation()}
						className='cursor-pointer'
					>
						<ListSortDescending className='w-4' />
					</button>
				)}
				<p>{dateCreated}</p>
				<button
					className='text-red-700 ml-auto'
					onPointerDown={(e) => e.stopPropagation()}
					onClick={handleDeleteCard}
				>
					<Trash className='w-4 cursor-pointer' />
				</button>
			</div>
			{showDescription && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30'>
					<div className=' w-[250px] md:w-[350px] lg:w-[600px] rounded-xl bg-[#f0dede] p-4 shadow-xl'>
						<div className='flex items-center justify-between'>
							<button
								onClick={closeDescription}
								className='cursor-pointer text-xl ml-auto'
							>
								<CircleX className='w-5 h-5 text-red-700' />
							</button>
						</div>
						<p className='mt-2 text-base first-letter:uppercase'>
							{description}
						</p>
					</div>
				</div>
			)}
		</>
	);
}
