import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout"
import { HomePage } from "./pages/Home/HomePage";
import CardList from "./pages/MyCard/CardList";
import AddCard from "./pages/MyCard/AddCard";
import RecommendList from "./pages/Recommend/RecommendList";
import RecommendDetail from "./pages/Recommend/RecommendDetail";
import { GlobalStyle } from "./App.styles";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<HomePage />} />
					<Route path="myCard" element={<CardList />} />
					<Route path="myCard/add" element={<AddCard />} />
					<Route path="recommend" element={<RecommendList />} />
					<Route path="recommend/:id" element={<RecommendDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App;