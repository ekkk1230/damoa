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
import { useCardStore } from "./store/useCardStore";

function App() {
	const { fetchCards } = useCardStore();
	const { isLoggedIn, user, setInitialized } = useAuthStore();
	const [isAppLoading, setIsAppLoading] = useState(true);

	useEffect(() => {
		console.log(user)
        const prepareApp = async () => {
            if (isLoggedIn && user?.id) {
                await fetchCards(user.id);
            }

            setTimeout(() => {
                setIsAppLoading(false);
                setInitialized(true);
            }, 1000);
        };

        prepareApp();
    }, [isLoggedIn, user?.id, fetchCards, setInitialized]);

    if (isAppLoading) {
        return <Splash />;
    }

    return (
		<BrowserRouter>
			<GlobalStyle />  
			<Routes>
				{!isLoggedIn ? (
					<>
						<Route path="/" element={<Navigate to="/damoa/ogin" replace />} />
						<Route path="/damoa/login" element={<Login />} />
						<Route path="/damoa/signup" element={<SignUp />} />
						<Route path="/damoa/*" element={<Navigate to="/damoa/login" replace />} />
					</>
				) : (
					<>
						<Route path="/" element={<Navigate to="/damoa" replace />} />
						<Route path="/damoa" element={<RootLayout />}>
							<Route index element={<HomePage />} />
							<Route path="/damoa/myCard" element={<CardList />} />
							<Route path="/damoa/myCard/register" element={<AddCard />} />
							<Route path="/damoa/recommend" element={<RecommendList />} />
							<Route path="/damoa/recommend/:id" element={<RecommendDetail />} />
							<Route path="/damoa/community" element={<CommunityList />} />
							<Route path="/damoa/community/add" element={<CommunityWrite />} />
							<Route path="/damoa/community/edit/:id" element={<CommunityWrite />} />
							<Route path="/damoa/community/:id" element={<CommunityDetail />} />
							<Route path="/damoa/*" element={<Navigate to="/" replace />} />
						</Route>
					</>
				)}
			</Routes>
		</BrowserRouter>
	)
}

export default App;