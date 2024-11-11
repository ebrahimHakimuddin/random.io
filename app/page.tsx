import LinkCard from "./components/linkCard/linkCard";
import getCards from "./db/queries";

export const dynamic = "force-dynamic";
export default async function Home() {
  const cards = await getCards();

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
        {cards.map((card) => {
          return (
            <div className="border-2 rounded-lg hover:opacity-50 hover:scale-110 ">
              <LinkCard {...card} key={card.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
