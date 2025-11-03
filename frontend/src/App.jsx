import { useState, useEffect } from "react";
import { createUser, getUsers } from "./api";

function App() {
  const [form, setForm] = useState({ name: "", email: "", careerGoal: "" });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(form);
      alert("User saved!");
      setForm({ name: "", email: "", careerGoal: "" });
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Error saving user");
    }
  };

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CareerPath AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="careerGoal"
          placeholder="Career Goal"
          value={form.careerGoal}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>

      <h2>Users:</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} - {u.careerGoal}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
