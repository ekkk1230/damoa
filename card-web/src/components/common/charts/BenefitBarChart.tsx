import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { CATEGORY_COLORS } from "../../../constance/categories"

function BenefitBarChart({ data, categories }: { data: any, categories: any[] }) {
    
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

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