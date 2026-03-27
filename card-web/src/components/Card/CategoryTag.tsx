import { getCategoryLabel } from '../../utils/cardUtils'

function CategoryTag({ categoryKey }: { categoryKey: string}) {
    const label = getCategoryLabel(categoryKey);
    return (
        <span>{label}</span>
    )
}

export default CategoryTag