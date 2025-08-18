import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    role: "Worker",
    occupation: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      // Save user in Firestore
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: form.name.trim(),
        role: form.role,
        occupation: form.role === "Worker" ? form.occupation.trim() : "",
        email: form.email.trim().toLowerCase(),
        phone: form.phone.trim(),
        location: form.location.trim(),
        createdAt: serverTimestamp(),
      });

      alert("Account created successfully!");

      // Redirect based on role
      if (form.role === "Employer") {
        navigate("/postjob");  // Employer → Post a job
      } else {
        navigate("/workers");   // Worker → Workers page
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Your Account</h2>
        <p className="subtitle">
          Join Naija Work Connect to find work or hire workers.
        </p>

        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              name="name"
              type="text"
              placeholder="e.g. Gabriel Chukwu"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role */}
          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="Worker">Worker</option>
              <option value="Employer">Employer</option>
            </select>
          </div>

          {/* Occupation if Worker */}
          {form.role === "Worker" && (
            <div className="form-group">
              <label>Occupation</label>
              <select
                name="occupation"
                value={form.occupation}
                onChange={handleChange}
                required
              >
                <option value="">Select Occupation</option>
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
          )}

          {/* Email & Phone */}
          <div className="form-group two-col">
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="e.g. you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Phone / WhatsApp</label>
              <input
                name="phone"
                type="tel"
                placeholder="e.g. 0701 965 9544"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter a secure password"
                value={form.password}
                onChange={handleChange}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="form-group">
            <label>Location</label>
            <input
              name="location"
              type="text"
              placeholder="e.g. Lagos, Abuja"
              value={form.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button className="submit-btn" type="submit" disabled={loading}>
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
