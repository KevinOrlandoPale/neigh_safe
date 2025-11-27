import Image from "next/image";
import Login from "./components/Login/Login";
import Header from "./components/Home/Header/Header"
import SearchBar from "./components/Home/SeachBar/SearchBar";
import HomePage from "./components/Home/HomePage/HomePage";
import CardsGrid from "./components/Home/CardFeed/CardGrid";
import CardStyle from "./components/Home/CardFeed/CardStyle";

export default function Home() {
  return (
    <div>
      <CardStyle />
    </div>
  );
}
