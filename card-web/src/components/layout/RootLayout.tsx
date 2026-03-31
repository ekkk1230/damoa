import { Outlet } from "react-router-dom";
import Header from "../common/Header/Header";
import styled from "styled-components";
import BottomNav from "./BottomNav/BottomNav";
import { useUIStore } from "../../store/useUIStore";
import CompairModal from "../Modal/CompairModal";
import SpendingAddModal from "../Modal/SpendingAddModal";
import CardModal from "../Modal/CardModal";
import ConfirmModal from "../Modal/ConfirmModal";

const MainContent = styled.main`
    min-height: calc(100vh);
    width: 100%; margin: 0 auto;
    padding: 2.5rem 0 12rem;
`;

const RootLayout = () => {
    const { modalType, modalData } = useUIStore();

    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <BottomNav />

            {modalType === 'COMPAIR' && <CompairModal recommendId={modalData} />}
            {modalType === 'SPENDING_ADD' && <SpendingAddModal />}
            {modalType === 'CARD_DETAIL' && <CardModal />}
            {modalType === 'CONFIRM' && <ConfirmModal />}
        </>
    )
}

export default RootLayout;