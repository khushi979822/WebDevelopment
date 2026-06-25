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

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      phone,
      gender,
      password,
      dob,
      photo,
    });

    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login Successfull from Controller" });
};

export const LogoutUser = (req, res) => {
  res.json({ message: "Logout Successfull from Controller" });
};
