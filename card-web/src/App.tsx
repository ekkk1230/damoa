import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout"
import { HomePage } from "./pages/Home/HomePage";
import CardList from "./pages/MyCard/CardList";
import AddCard from "./pages/MyCard/AddCard";
import RecommendList from "./pages/Recommend/RecommendList";
import RecommendDetail from "./pages/Recommend/RecommendDetail";
import { GlobalStyle } from "./App.styles";
import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect, useState } from "react";
import Splash from "./components/common/Splash/Splash";
import CommunityList from "./pages/Community/CommunityList";
import CommunityDetail from "./pages/Community/CommunityDetail";
import CommunityWrite from "./pages/Community/CommunityWrite";

function App() {
	const { isLoggedIn, isInitialized, setInitialized } = useAuthStore();
	const [showSplash, setShowSplash] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false);
			setInitialized(true);
		}, 1500);

		return () => clearTimeout(timer);
	}, [])

	if (showSplash) {
		return <Splash />
	}

	return (
		<BrowserRouter>
			<GlobalStyle />  
			<Routes>
				{!isLoggedIn ? (
					<>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route path="*" element={<Navigate to="/login" replace />} />
					</>
				) : (
					<Route path="/" element={<RootLayout />}>
						<Route index element={<HomePage />} />
						<Route path="myCard" element={<CardList />} />
						<Route path="myCard/add" element={<AddCard />} />
						<Route path="recommend" element={<RecommendList />} />
						<Route path="recommend/:id" element={<RecommendDetail />} />
						<Route path="community" element={<CommunityList />} />
						<Route path="community/add" element={<CommunityWrite />} />
						<Route path="community/edit/:id" element={<CommunityWrite />} />
						<Route path="community/:id" element={<CommunityDetail />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Route>
				)}
			</Routes>
		</BrowserRouter>
	)
}

export default App;