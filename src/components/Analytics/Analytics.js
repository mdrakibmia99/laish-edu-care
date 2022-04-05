import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis } from 'recharts';
import useCharts from '../Hook/useCharts';
const Analytics = () => {
    const [charts] = useCharts();
    return (
        <section className='grid grid-cols-2 gap-8  mx-auto '>
            {/* chart 1 */}
            <AreaChart
                width={700}
                height={400}
                data={charts}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="revenue" stroke="#fd627a" fill="#fd627a" />
            </AreaChart>


            {/* chart 2 */}

            <LineChart
                width={700}
                height={400}
                data={charts}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <Tooltip />
                <Legend />
                <Line type="monotoneX" dataKey="investment" stroke="#fd627a" />
            </LineChart>
        </section>
    );
};

export default Analytics;