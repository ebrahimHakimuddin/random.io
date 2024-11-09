import LinkCard from "./components/linkCard/linkCard";
import getCards from "./db/queries";

const dynamic = "use-dynamic";
export default async function Home() {
  const cards = await getCards();

  return (
      <div className="flex  place-content-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
          {cards.map((card) => {
            return (
                <LinkCard {...card} key={card.id}/>
            );
          })}
        </div>
      </div>
  );
}
