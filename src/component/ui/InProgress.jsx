import { LoaderCircle } from "lucide-react";
import Card from "../reusable/Card";
import { SortableContext } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";

export default function InProgress({ cards, deleteCard }) {
   const { setNodeRef } = useDroppable({
     id: "inprogress",
     data: {
       category: "inprogress",
     },
   });
  // const inprogressCards = ["inprogress-1", "inprogress-2"];
  const inprogressCards = cards.filter(
    (card) => card.category === "inprogress" && !card.deleted,
  );
  return (
    <div
      ref={setNodeRef}
      className="flex flex-col min-h-[200px] max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar gap-4 justify-start py-3 px-4 rounded-3xl bg-[#FFEDA8]"
    >
      <div>
        <div className="flex gap-1.5 w-fit  py-1 px-2 text-sm rounded-2xl items-center bg-[#FCD15B]">
          <LoaderCircle className="w-4 h-4" />
          <h3 className="uppercase font-bold m-0">In-Progress</h3>
        </div>

        <SortableContext items={inprogressCards.map((card) => card.id)}>
          {inprogressCards.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              dateCreated={card.dateCreated}
              backgroundColor="bg-[#FFFFD9]"
              deleteCard={deleteCard}
              draggable={true}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}
