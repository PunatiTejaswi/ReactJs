
import React, { useState } from "react";

const Dashboard = () => {
  const [companies] = useState([
    { id: 1, name: "Company A", lastComms: ["Email - 5th Dec"], nextComm: "Phone Call - 10th Dec", overdue: false },
    { id: 2, name: "Company B", lastComms: ["LinkedIn Post - 1st Dec"], nextComm: "Email - 15th Dec", overdue: true },
  ]);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Last 5 Communications</th>
            <th>Next Communication</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id} style={{ backgroundColor: company.overdue ? "red" : "yellow" }}>
              <td>{company.name}</td>
              <td>{company.lastComms.join(", ")}</td>
              <td>{company.nextComm}</td>
              <td>{company.overdue ? "Overdue" : "Due Today"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
