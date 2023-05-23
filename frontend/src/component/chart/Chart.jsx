import React from 'react';
import {  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Lun', ventes: 100 },
  { name: 'Mar', ventes: 200 },
  { name: 'Mer', ventes: 259 },
  { name: 'Jeu', ventes: 319 },
  { name: 'Ven', ventes: 319 },
  { name: 'Sam', ventes: 319 },
  { name: 'Dim', ventes: 319 },
];

const CustomXAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text dy={4} textAnchor="end" fill="#34495E" transform="rotate(-45)" fontSize='10'>
      {payload.value}
    </text>
  </g>
);

const CustomYAxisTick = ({ x, y, payload }) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={4} textAnchor="end" fill="#34495E" fontSize='10'> 
      {payload.value}
    </text>
  </g>
);

const Chart = () => {
  return (
        <BarChart width={300} height={200} data={data}>
          <XAxis dataKey="name" tick={<CustomXAxisTick />}/>
          <YAxis tick={<CustomYAxisTick />}/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="ventes" fill="#34495E" barSize={10}/>
        </BarChart>
  );
};

export default Chart;