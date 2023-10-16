import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HumanitarianOrgs } from "./components/humanitarianorgs";
import { InternetBased } from "./components/internetbased";
import { OpenSourced } from "./components/opensourced";
import { Home } from "./pages/home";

function App() {
	return (
		<div>
			<Header />
			<Home />
			<InternetBased />
			< OpenSourced />
			< HumanitarianOrgs />
			< Footer />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
