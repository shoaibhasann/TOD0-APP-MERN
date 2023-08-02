import User from "../models/user.model.js";

// set cookie options
const cookieOptions = {
  maxAge:  24 * 60 * 60 * 1000, // for 1 day
  httpOnly: true,
  secure: process.env.NODE_ENV === 'Development' ? false : true,
  sameSite: process.env.NODE_ENV === 'Development' ? 'lax' : 'none'
};

// controller function to register user
const register = async (req, res, next) => {
  try {
    // extract information from request body
    const { name, email, password } = req.body;

    // check all fields are provided
    if (!name || !email || !password) {
      return next(new AppError(400, "All fields are required"));
    }

    // check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return next(new AppError(400, "Email already exists"));
    }

    // create new user
    const user = await User.create({
      name,
      email,
      password,
    });

    // save user to the database
    await user.save();

    // generate jwt token
    const token = await user.generateToken();

    user.password = undefined;

    // set jwt token in the cookie
    res.cookie("token", token, cookieOptions);

    // respond with success message and user details
    res.status(200).json({
      success: true,
      message: "Registered successfully",
      user,
    });
  } catch (error) {
        res.status(500).json({
          success: false,
          message: "Failed to registered user" || error.message,
        });
  }
};

// controller function to login
const login = async (req, res, next) => {
  try {
    // extract info
    const { email, password } = req.body;

    // Check if all fields are provided
    if (!email || !password) {
      return next(new AppError(400, "All fields are required"));
    }

    // Find the user in the database
    const user = await User.findOne({ email }).select("+password");

    // Check if the user exists
    if (!user) {
      return next(new AppError(400, "User not found"));
    }

    // Compare passwords using the comparePassword method
    const isPasswordMatch = await user.comparePassword(password);

    // Check if the password matches
    if (!isPasswordMatch) {
      return next(new AppError(400, "Password is incorrect"));
    }

    // Generate JWT token
    const token = await user.generateToken();

    user.password = undefined;

    // Set the JWT token in the cookie
    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
        res.status(500).json({
          success: false,
          message: "failed to login user" || error.message,
        });
  }
};

// controller function to user logout process
const logout = (req, res, next) => {
  try {
    // Clear the JWT token in the cookie
    res.cookie("token", null, {
      maxAge: 0,
      httpOnly: true,
    });

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'failed to logout user' || error.message
    })
  }
};

// controller function to fetch user profile
const getProfile = async(req,res,next) => {
    res.status(200).json({
        success: true,
        user: req.user
    });
}

export { register, login, logout, getProfile };
