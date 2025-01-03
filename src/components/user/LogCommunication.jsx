import React, { useState } from "react";

const LogCommunication = ({ companies=[], onUpdate,onAddcomp }) => {
  console.log("****************************", companies,"*****************************8n");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [form, setForm] = useState({ type: "Email", date: "", notes: "" });

  const handleSubmit = () => {
    onUpdate(selectedCompany, form);
    setForm({ type: "Email", date: "", notes: "" });
  };

  return (
    <div>
      <h2>Log Communication</h2>
      <select value={selectedCompany} onChange={(e) => setSelectedCompany(e.target.value)}>
        <option value="">Select Company</option>
        {companies.map((companies) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>

      <div>
        <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="Email">Email</option>
          <option value="Phone Call">Phone Call</option>
          <option value="LinkedIn Post">LinkedIn Post</option>
        </select>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <textarea
          placeholder="Notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default LogCommunication;
