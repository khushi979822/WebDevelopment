import { useState } from "react";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userName :", userName);
    console.log("password :", password);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="border p-3 w-50 mt-5 bg-light">
          <h1 className="text-center">Welcome Back!!!</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              placeholder="Enter your user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="float-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
