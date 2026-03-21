import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout"
import { HomePage } from "./pages/Home/HomePage";
import CardList from "./pages/MyCard/CardList";
import AddCard from "./pages/MyCard/AddCard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<HomePage />} />
					<Route path="myCard" element={<CardList />} />
					<Route path="myCard/add" element={<AddCard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;