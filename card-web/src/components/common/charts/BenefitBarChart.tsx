import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { CATEGORY_COLORS } from "../../../constance/categories"
import { getCategoryLabel } from "../../../utils/cardUtils"

function BenefitBarChart({ data, categories }: { data: any, categories: any[] }) {
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                    formatter={(value: any, name: any) => {
                        const formattedValue = value ? `${value.toLocaleString()}원` : '0원';
                        const formattedName = getCategoryLabel(name);

                        return [formattedValue, formattedName];
                    }}
                />

                {categories.map(cate => (
                    <Bar 
                        key={cate}
                        dataKey={cate}
                        stackId="a"
                        fill={CATEGORY_COLORS[cate as keyof typeof CATEGORY_COLORS]}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BenefitBarChart