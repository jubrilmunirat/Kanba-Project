import { DndContext, closestCorners } from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import All from "../component/ui/All";
import Completed from "../component/ui/Completed";
import InProgress from "../component/ui/InProgress";
import Todo from "../component/ui/Todo";
import AddTask from "../component/ui/AddTask";

export default function KanbaBoard() {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, "cards"), (snapshot) => {
			const cardsData = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));

			setCards(cardsData);
		});

		return () => unsubscribe();
	}, []);

	async function handleDeleteCards(cardId) {
		try {
			const cardRef = doc(db, "cards", cardId);

			await updateDoc(cardRef, {
				deleted: true,
			});

			console.log("Card moved to bin:", cardId);
		} catch (error) {
			console.error("Error moving card to bin:", error);
		}
	}
	async function handleDragEnd(event) {
		const { active, over } = event;

		if (!over) {
			return;
		}

		const cardId = active.id;

		let newCategory = over.data.current?.category;

		if (!newCategory) {
			const droppedOnCard = cards.find((card) => card.id === over.id);

			if (droppedOnCard) {
				newCategory = droppedOnCard.category;
			}
		}

		const validCategories = ["todo", "inprogress", "completed"];

		if (!validCategories.includes(newCategory)) {
			return;
		}

		try {
			const cardRef = doc(db, "cards", cardId);

			await updateDoc(cardRef, {
				category: newCategory,
			});

			console.log(`Card ${cardId} moved to ${newCategory}`);
		} catch (error) {
			console.error("Error updating card category:", error);
		}
	}
	return (
		<div>
			<AddTask />
			<DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
				<div className='parent-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-4 mx-6 my-8 text-gray-700'>
					<All cards={cards} deleteCard={handleDeleteCards} />
					<div className='hidden md:block'>
						<Todo cards={cards} deleteCard={handleDeleteCards} />
					</div>
					<div className='hidden md:block'>
						<InProgress cards={cards} deleteCard={handleDeleteCards} />
					</div>
					<div className='hidden md:block'>
						<Completed cards={cards} deleteCard={handleDeleteCards} />
					</div>
				</div>
			</DndContext>
		</div>
	);
}
