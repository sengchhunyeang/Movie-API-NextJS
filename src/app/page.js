
import Card from "./components/Card";
import  { Index } from "./components/Index";
import StaticPage from "./components/StaticPage";
import Testing from "./components/Testing";
export default async function Home() {
  // const allMovie =await getAllmovice();
  return (
    <>
      <div className="m-4">
      <StaticPage/>
      {/* <Testing/> */}
      </div>
    </>
  );
}
