import LinkCard from "./components/linkCard/linkCard";
export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center flex-wrap lg:flex-nowrap p-10 flex-row gap-8">
        <LinkCard />
        <LinkCard />
        <LinkCard />
        <LinkCard />
      </div>
    </div>
  );
}
