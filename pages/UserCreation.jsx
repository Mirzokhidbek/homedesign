import React, { useState } from "react";
import axios from "axios";
import styles from "./UserCreation.module.css";
axios.post("http://dev-munaddiy.uz/api/v1/create");
axios.post("/create", user); // Agar baseURL allaqachon o‘rnatilgan bo‘lsa

const UserCreation = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://dev-munaddiy.uz/api/v1/users", // Bu endpointni API hujjatiga qarab o‘zgartiring!
        user
      );
      setSuccess("Foydalanuvchi muvaffaqiyatli yaratildi!");
      setError("");
      setUser({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Xatolik yuz berdi!");
      setSuccess("");
    }
  };

  return (
    <div className={styles.formContainer || "formContainer"}>
      <h2>Yangi foydalanuvchi yaratish</h2>
      {error && <div className={styles.error || "error"}>{error}</div>}
      {success && <div className={styles.success || "success"}>{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formField || "formField"}>
          <label>Ism</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formField || "formField"}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formField || "formField"}>
          <label>Parol</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Yaratish</button>
      </form>
    </div>
  );
};

export default UserCreation;
