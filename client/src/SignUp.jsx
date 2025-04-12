import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; //Axios is a popular library for making HTTP requests in React.
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        setShowPopup(true); // Show popup instead of navigating
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 border-8 border-indigo-600">
      <div className="bg-white p-3 rounded w-25 ">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => {
                setName(e.target.value);
              }} // it will assign the value to the name variable
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => {
                setEmail(e.target.value);
              }} // it will assign the value to the email variable
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => {
                setPassword(e.target.value);
              }} // it will assign the value to the password variable
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-0"
            onClick={() => setShowPopup(true)}
          >
            Register
          </button>
          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
                <h2 className="text-xl font-black mb-4 ">You're registered!</h2>
                <button
                  onClick={() => {
                    setShowPopup(false);
                    navigate("/login"); // Navigate after closing popup
                  }}
                  className="mt-2 px-4 py-2 bg-green-600  rounded hover:bg-green-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
        <p>Already have an account?</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
