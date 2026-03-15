import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import * as S from '../App.styles';

const AgeChart = ({ data }: { data: { label: string; value: number }[] | undefined }) => {
  if (!data || data.length === 0) return null;

  return (
    <S.ChartWrapper>
      <S.ChartTitle>📅 연령대별 이용 비중</S.ChartTitle>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart 
          data={data} 
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis 
            dataKey="label"
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 12, fill: '#666' }} 
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 11, fill: '#999' }} 
          />
          <Tooltip
            cursor={{ fill: '#f8f9fa' }}
            contentStyle={{ 
              borderRadius: '10px', 
              border: 'none', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)' 
            }}
            formatter={(value: any) => [`${value}%`, '비중'] as [any, any]}
          />
          <Bar 
            dataKey="value"
            radius={[4, 4, 0, 0]} 
            barSize={30}
            isAnimationActive={true} // 애니메이션 활성화 확인
            animationBegin={0}       // 0초 대기
            animationDuration={1000} // 1초 동안 실행
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.value === Math.max(...data.map(d => d.value)) ? '#007bff' : '#dee2e6'} 
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </S.ChartWrapper>
  );
};

export default AgeChart;