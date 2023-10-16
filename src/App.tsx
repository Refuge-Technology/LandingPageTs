import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HumanitarianOrgs } from "./pages/humanitarianorgs";
import { InternetBased } from "./pages/internetbased";
import { OpenSourced } from "./pages/opensourced";
import { Home } from "./pages/home";

function App() {
	return (
		<div>
			<Header />
			<Home />
			<InternetBased />
			<OpenSourced />
			<HumanitarianOrgs />
			<Footer />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
