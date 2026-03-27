import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";
import styled from "styled-components";
import BottomNav from "./BottomNav/BottomNav";

const MainContent = styled.main`
    min-height: calc(100vh - 7rem);
    width: 100%; margin: 0 auto;
    padding: 2.5rem 0;
`;

const RootLayout = () => {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <BottomNav />
        </>
    )
}

export default RootLayout;