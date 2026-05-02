import Banner from "@/component/Banner";
import Featuredtiles from "@/component/Featuredtiles";
import Marque from "@/component/Marque";
import tilesData from "@/data";

export default async function Home() {
  const data = await tilesData()
 
  return (
    <div>
      <Banner />
      <Marque data={data}></Marque>
      <Featuredtiles data={data}></Featuredtiles>
    </div>
  );
}