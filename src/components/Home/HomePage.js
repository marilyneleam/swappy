import Header from "../Header/Header";
import Items from "../Items/Items";
import Navbar from "../Navbar/Navbar";
import Home from "./Home";

function HomePage() {
	return(
		<div>
			<Header />
			<Navbar />
			<Home />
			<Items />
		</div>
	)
}

export default HomePage