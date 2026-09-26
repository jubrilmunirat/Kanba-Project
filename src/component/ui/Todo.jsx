import { CircleDashed, CircleX } from "lucide-react";
import Card from "../reusable/Card";
import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function Todo({ cards, deleteCard }) {
  const { setNodeRef } = useDroppable({
    id: "todo",
    data: {
      category: "todo",
    },
  });
  // const todoCards = ["todo-1", "todo-2"];
  const todoCards = cards.filter(
    (card) => card.category === "todo" && !card.deleted,
  );

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col min-h-[200px] max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar gap-4 justify-start py-3 px-4 rounded-3xl bg-[#9DC183]"
    >
      <div>
        <div className="flex gap-1.5 w-fit bg-[#77b14e] py-1 px-2 text-sm rounded-2xl items-center">
          <CircleDashed className="w-4 h-4" />
          <h3 className="uppercase font-bold m-0">To-do</h3>
        </div>

        <SortableContext items={todoCards.map((card) => card.id)}>
          {todoCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              dateCreated={card.dateCreated}
              backgroundColor="bg-[#bae3a8]"
              deleteCard={deleteCard}
              draggable={true}
            />
          ))}
          {/* <Card
						id='todo-1'
						title='this is my card'
						description='this is my card description'
						backgroundColor='bg-[#bae3a8]'
					/>
					<Card
						id='todo-2'
						title='this is my card'
						description='this is my card description'
						backgroundColor='bg-[#bae3a8]'
					/> */}
        </SortableContext>
      </div>
    </div>
  );
}
