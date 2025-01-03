import React, { useState } from "react";

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", linkedin: "", email: "", phone: "", periodicity: "2 weeks" });

  const handleAddCompany = () => {
    setCompanies([...companies, { ...form, id: Date.now() }]);
    setForm({ name: "", location: "", linkedin: "", email: "", phone: "", periodicity: "2 weeks" });
  };

  const handleDeleteCompany = (id) => {
    setCompanies(companies.filter((company) => company.id !== id));
  };

  return (
    <div>
      <h2>Company Management</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="LinkedIn Profile"
          value={form.linkedin}
          onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <button onClick={handleAddCompany}>Add Company</button>
      </div>

      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} - {company.location}
            <button onClick={() => handleDeleteCompany(company.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyManagement;
