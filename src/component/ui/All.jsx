import { CircleDashedCheck } from "lucide-react";
import Card from "../reusable/Card";
// import { useDroppable } from "@dnd-kit/core";
// import { SortableContext } from "@dnd-kit/sortable";
export default function All({ cards, deleteCard }) {
	// const { setNodeRef } = useDroppable({ id: "all" });
	const allCards = cards.filter((card) => !card.deleted);
	return (
		<div
			// ref={setNodeRef}
			className='flex flex-col md:max-h-[calc(100vh-200px)] max-h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar gap-4 justify-start py-3 px-4 rounded-3xl bg-[#B3DFFA]'
		>
			<div>
				<div className='flex gap-1.5 bg-[#64adda] w-fit  py-1 px-2 text-sm rounded-2xl items-center'>
					<CircleDashedCheck className='w-4 h-4' />
					<h3 className='uppercase font-bold m-0'>All</h3>
				</div>
				{/* <SortableContext items={allCards}> */}
				{allCards.map((card) => (
					<Card
						key={card.id}
						id={card.id}
						title={card.title}
						description={card.description}
						dateCreated={card.dateCreated}
						backgroundColor='bg-[#CDEBFC]'
						deleteCard={deleteCard}
						draggable={false}
					/>
				))}
				{/* </SortableContext> */}
			</div>
		</div>
	);
}
