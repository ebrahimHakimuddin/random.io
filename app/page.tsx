import LinkCard from "./components/linkCard/linkCard";
import getCards from "./db/queries";

export default async function Home() {
  const cards = await getCards();

  return await (
    <div className="">
      <div className="flex justify-center flex-wrap lg:flex-nowrap p-10 flex-row gap-8">
        {cards.map((card) => {
          return (
            <div key={card.id}>
              <LinkCard {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
