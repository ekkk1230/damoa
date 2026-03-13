import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';

  

const GenderChart = ({ data: rawData }: any) => {

    console.log(rawData);
    // const colorGuide = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

    // const data = rawData?.map((item: any, index: number) => ({
    //     name: item.label,
    //     value: item.value,
    //     fill: colorGuide[index % colorGuide.length]
    // })) || [];

    // return (
    //     <div style={{ width: '100%', height: '250px' }}>
    //         <ResponsiveContainer width="100%" height="100%">
    //             <PieChart>
    //                 <Tooltip
    //                     contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
    //                     formatter={(value: any) => `${value}%`}
    //                 />
    //                 <Legend verticalAlign="bottom" height={36}/>
    //                 <Pie
    //                     data={data}
    //                     innerRadius="70%"   // 안쪽 반지름
    //                     outerRadius="100%"  // 바깥쪽 반지름
    //                     cornerRadius={10}   // 깎인 모서리 정도
    //                     paddingAngle={5}    // 슬라이스 간 간격
    //                     dataKey="value"
    //                     fill="#8884d8"    // 기본 색상
    //                 />
    //             </PieChart>
    //         </ResponsiveContainer>
    //     </div>
    // )

    return (
        ''
    )
}

export default GenderChart