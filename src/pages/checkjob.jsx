import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./checkjob.css";

const CheckJob = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const jobsCollectionRef = collection(db, "jobs");

  // Fetch jobs from Firestore
  const fetchJobs = async () => {
    setLoading(true);
    const data = await getDocs(jobsCollectionRef);
    setJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Search filter
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.description.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="checkjob-page">
      <h2>Available Jobs</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Job list */}
      <div className="jobs-list">
        {loading ? (
          <p>Loading jobs...</p>
        ) : filteredJobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>
                <strong>Duration:</strong> {job.duration || "Not specified"}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${job.phone}`} className="phone-link">
                  {job.phone}
                </a>
              </p>
              <p className="date">
                <strong>Posted:</strong>{" "}
                {job.createdAt
                  ? new Date(job.createdAt.toDate()).toLocaleString()
                  : "Just now"}
              </p>

              {/* Call button */}
              {job.phone && (
                <a href={`tel:${job.phone}`} className="call-btn">
                  Call Employer
                </a>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CheckJob;
