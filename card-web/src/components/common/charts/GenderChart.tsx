import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import * as S from '../../Modal/ModalComponents.styles'

const COLORS = ['#4dabf7', '#ff8787'];

interface GenderData {
  name: string;
  value: number;
}

const GenderChart = ({ data }: { data: any }) => {
  if (!data) return null;

  const chartData: GenderData[] = Array.isArray(data) 
    ? data 
    : [
        { name: '남성', value: data.maleRate || 0 },
        { name: '여성', value: data.femaleRate || 0 }
      ];

  if (chartData.every(item => item.value === 0)) return null;

  return (
    <S.ChartWrapper>
      <S.ChartTitle>👥 성별 이용 비중</S.ChartTitle>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true} // 애니메이션 활성화 확인
            animationBegin={0}       // 0초 대기
            animationDuration={1000} // 1초 동안 실행
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            separator=": "
            formatter={(value: any) => [`${value}%`, '비중']}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend iconType="circle" verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </S.ChartWrapper>
  );
};

export default GenderChart;