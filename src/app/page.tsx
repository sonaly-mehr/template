import GetTemplate from "@/components/GetTemplate";
import Cards from "@/components/ui/Cards";
import OurMission from "@/components/ui/OurMission";
import Products from "@/components/ui/Products";

export default function Home() {
  return (
    <main className="">
      <GetTemplate/>
      <OurMission/>
      <Cards/>
      <Products/>
    </main>
  );
}
