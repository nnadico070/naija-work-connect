import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import "./findwork.css";

const FindWorkers = () => {
  const [workers, setWorkers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchWorkers = async () => {
    setLoading(true);
    try {
      const workersCol = collection(db, "users");
      const workerSnapshot = await getDocs(workersCol);
      const workerList = workerSnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((w) => w.role === "Worker");
      setWorkers(workerList);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  // Filter by search term
  const filteredWorkers = workers.filter(
    (w) =>
      w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="find-workers-container">
      <h2>Find Skilled Workers</h2>
      <input
        type="text"
        placeholder="Search by name or occupation"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Loading workers...</p>
      ) : filteredWorkers.length === 0 ? (
        <p>No workers found.</p>
      ) : (
        <div className="workers-list">
          {filteredWorkers.map((worker) => (
            <div key={worker.id} className="worker-card">
              <h3>{worker.name}</h3>
              <p>Occupation: {worker.occupation}</p>
              <p>Email: {worker.email}</p>
              <p>Phone: {worker.phone}</p>
              <p>Location: {worker.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FindWorkers;
