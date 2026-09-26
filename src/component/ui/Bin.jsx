import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { Trash2, RotateCcw, CircleX } from "lucide-react";
import { db } from "../../firebase";

export default function Bin({ closeBin }) {
  const [deletedCards, setDeletedCards] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "cards"), (snapshot) => {
      const cardsData = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((card) => card.deleted);

      setDeletedCards(cardsData);
    });

    return () => unsubscribe();
  }, []);

  async function handleRestoreCard(cardId) {
    try {
      const cardRef = doc(db, "cards", cardId);

      await updateDoc(cardRef, {
        deleted: false,
      });

      console.log("Card restored:", cardId);
    } catch (error) {
      console.error("Error restoring card:", error);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/20">
      <div className="w-full max-w-[350px] h-full bg-white shadow-xl p-5 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Bin</h2>

          <button onClick={closeBin} className="cursor-pointer">
            <CircleX className="w-6 h-6 text-red-700" />
          </button>
        </div>

        {deletedCards.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <Trash2 className="mx-auto w-10 h-10 mb-3" />
            <p>Your bin is empty.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {deletedCards.map((card) => (
              <div key={card.id} className="p-4 rounded-xl bg-gray-100">
                <h3 className="font-bold text-lg">{card.title}</h3>

                {card.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {card.description}
                  </p>
                )}

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => handleRestoreCard(card.id)}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Restore
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
