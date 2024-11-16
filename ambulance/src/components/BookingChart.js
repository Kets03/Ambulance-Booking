import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import axios from 'axios';

export default function BookingChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchBookingData = async () => {
      const response = await axios.get('http://localhost:3001/bookings-date-wise'); // Adjust route as needed
      const data = response.data;

      // Process the data to format it for the chart
      const dates = data.map(booking => booking.date);
      const counts = data.map(booking => booking.count);

      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Bookings by Date',
            data: counts,
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c'],
            borderColor: '#2980b9',
            borderWidth: 1,
          },
        ],
      });
    };
    fetchBookingData();
  }, []);

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <h2>Bookings Overview</h2>
      <Line data={chartData} />
      <Pie data={chartData} />
    </div>
  );
}
