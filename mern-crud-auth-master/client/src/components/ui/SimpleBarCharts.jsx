import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
    {name: "María", age: 10, weight: 60},
    {name: 'Karina', age: 25, weight: 70},
    {name: 'Susana', age: 15, weight: 65},
    {name: 'Pedro', age: 35, weight: 85},
    {name: 'Felipe', age: 12, weight: 48},
    {name: 'Laura', age: 30, weight: 69},
    {name: 'Adrián', age: 15, weight: 78},
]
function MyXAxis({ dataKey = "name", ...props }) {
  return <XAxis {...props} dataKey={dataKey} />;
}
function MyYAxis({ ...props }) {
  return <YAxis {...props} />;
}

export function SimpleBarCharts  (array1,array2)  {

  
  
  return (
    <ResponsiveContainer aspect={2}>
      <BarChart
        data={data}
        width="80%" height={300}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="4 1 2" />
        <MyXAxis dataKey="name" />
        <MyYAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="weight" fill="#6b48ff" />
        <Bar dataKey="age" fill="#1ee3cf" />
      </BarChart>
    </ResponsiveContainer>
  )
}

