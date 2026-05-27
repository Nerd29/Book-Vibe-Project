// import React from 'react';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// 1. Data (Replace this with your actual state/props data)
const data = [
  { "bookName": "The Great Gatsby", "totalPages": 192 },
  { "bookName": "To Kill a Mockingbird", "totalPages": 281 },
  { "bookName": "1984", "totalPages": 328 },
  { "bookName": "The Catcher in the Rye", "totalPages": 224 },
  { "bookName": "Pride and Prejudice", "totalPages": 279 },
  { "bookName": "The Hobbit", "totalPages": 310 },
  { "bookName": "Harry Potter", "totalPages": 309 },
  { "bookName": "The Alchemist", "totalPages": 177 },
  { "bookName": "The Girl on the Train", "totalPages": 316 }
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// 2. Custom Shape Definition
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  return (
    <div className="bg-base-200 p-4 md:p-12 rounded-3xl w-full h-[600px] flex items-center justify-center container mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="bookName" 
            interval={0} 
            angle={-45} 
            textAnchor="end" 
            height={80} 
          />
          <YAxis />
          <Tooltip cursor={{fill: 'transparent'}} />
          <Bar dataKey="totalPages" shape={<TriangleBar />}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PagesToRead;