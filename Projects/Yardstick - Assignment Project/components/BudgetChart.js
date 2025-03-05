 
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function BudgetChart() {
  const [actualData, setActualData] = useState([]);
  const [budgetData, setBudgetData] = useState([]);

  // Fetching actual data and budget data
  useEffect(() => {
    // Replace with your actual data source
    const fetchData = async () => {
      try {
        // Mock API call for budget data
        const budgetResponse = await fetch('/api/budget');  // Your actual API URL
        const budgetResult = await budgetResponse.json();
        setBudgetData(budgetResult);

        // Mock API call for actual data
        const actualResponse = await fetch('/api/actual');  // Your actual API URL
        const actualResult = await actualResponse.json();
        setActualData(actualResult);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty array ensures it runs only on component mount

  // Merging actual and budget data
  const mergedData = budgetData.map((budgetItem, index) => {
    const actualItem = actualData[index];
    return {
      category: budgetItem.category,
      budget: budgetItem.value,
      actual: actualItem ? actualItem.value : 0, // Default to 0 if no actual data is available
    };
  });

  return (
    <div>
      <h2>Budget vs Actual</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={mergedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="budget" fill="#8884d8" />
          <Bar dataKey="actual" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
