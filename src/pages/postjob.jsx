import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./postjob.css";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [phone, setPhone] = useState("");

  const jobsCollectionRef = collection(db, "jobs");

  // List of Nigerian states
  const statesOfNigeria = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti",
    "Enugu", "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
    "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
    "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
    "Taraba", "Yobe", "Zamfara"
  ];

  // Post a new job
  const handlePostJob = async (e) => {
    e.preventDefault();

    await addDoc(jobsCollectionRef, {
      title,
      description,
      location,
      duration,
      phone,
      createdAt: serverTimestamp(),
    });

    setTitle("");
    setDescription("");
    setLocation("");
    setDuration("");
    setPhone("");
    alert("Job posted successfully!");
  };

  return (
    <div className="postjob-page">
      {/* Top bar */}
      <div className="top-bar">
        <h2>Post a Job</h2>
      </div>

      {/* Job form */}
      <form className="postjob-form" onSubmit={handlePostJob}>
        {/* Job category */}
        <div className="form-group">
          <label>Job Category</label>
          <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Plumber">Plumber</option>
            <option value="Electrician">Electrician</option>
            <option value="Carpenter">Carpenter</option>
            <option value="Painter">Painter</option>
            <option value="Bricklayer / Mason">Bricklayer / Mason</option>
            <option value="Welder">Welder</option>
            <option value="Mechanic">Mechanic</option>
            <option value="Driver">Driver</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Cook / Chef">Cook / Chef</option>
            <option value="Nanny / Babysitter">Nanny / Babysitter</option>
            <option value="Housemaid">Housemaid</option>
            <option value="Security Guard">Security Guard</option>
            <option value="Gardener">Gardener</option>
            <option value="Laundry / Dry Cleaner">Laundry / Dry Cleaner</option>
            <option value="Barber">Barber</option>
            <option value="Hairdresser">Hairdresser</option>
            <option value="Makeup Artist">Makeup Artist</option>
            <option value="Tailor / Fashion Designer">Tailor / Fashion Designer</option>
            <option value="Event Planner">Event Planner</option>
            <option value="DJ / Musician">DJ / Musician</option>
            <option value="Photographer">Photographer</option>
            <option value="Videographer">Videographer</option>
            <option value="Computer Technician">Computer Technician</option>
            <option value="Phone Repairer">Phone Repairer</option>
            <option value="Furniture Maker">Furniture Maker</option>
            <option value="AC / Fridge Technician">AC / Fridge Technician</option>
            <option value="Shop Attendant">Shop Attendant</option>
            <option value="Delivery Rider">Delivery Rider</option>
            <option value="Tutor / Teacher">Tutor / Teacher</option>
          </select>
        </div>

        {/* Job description */}
        <div className="form-group">
          <label>Job Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Location (states) */}
        <div className="form-group">
          <label>Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Select State</option>
            {statesOfNigeria.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Duration */}
        <div className="form-group">
          <label>Duration (e.g. 1 week)</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>

        {/* Phone number */}
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="post-btn">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
