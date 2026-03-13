import { BarChart, Legend,  Bar, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

  

const AgeChart = ({ data: rawData }: any) => {

    const colorGuide = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
    console.log(rawData);
    // const data = rawData?.map((item: any, index: number) => ({
    //    console.log(item)
    // })) || [];

    return (
        <div style={{ width: '100%', height: '250px' }}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={rawData}
                >
                    <Tooltip
                        contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        formatter={(value: any) => `${value}%`}
                    />
                    <Legend verticalAlign="bottom" height={36}/>
                    <XAxis dataKey="name" />
                    <Bar
                        dataKey="value"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AgeChart