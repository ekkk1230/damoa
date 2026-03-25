import { useCardStore } from "../../store/useCardStore";
import CardComparison from "../Card/CardComparison";
import SpendChart from "../common/charts/SpendChart";
import ModalLayout from "../common/ModalLayout/ModalLayout"

function CompairModal({ recommendId }: { recommendId: string | any }) {
    const { modalType, selectedCard, spendings } = useCardStore();
    
    if (modalType !== 'COMPAIR') return null;

    const targetId = (selectedCard as any)?.cardInfo?.id || (selectedCard as any)?.id;
    const selectCardSpendList = spendings.filter(s => Number(s.cardId) === Number(targetId));
    console.log(selectCardSpendList)

    return (
        <ModalLayout title="카드 비교">
            <SpendChart data={selectCardSpendList} />

            <CardComparison recommendId={Number(recommendId)} cardId={targetId} />
        </ModalLayout>
    )
}

export default CompairModal