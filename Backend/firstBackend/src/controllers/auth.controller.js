import User from "../models/user.model.js";

export const RegisterUser = async (req, res) => {
  try {
    const { fullName, email, phone, gender, password, dob } = req.body;

    if (!fullName || !email || !phone || !gender || !password || !dob) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ message: "Email Already Registered" });
    }

    // Create New User and Complete registration will do this tomorrow
  } catch (error) {}
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
