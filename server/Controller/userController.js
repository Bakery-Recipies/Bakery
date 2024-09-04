const User = require("../Models/User");

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.find();
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// Update user by ID
// const updateUserById = async (req, res) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User updated successfully", user });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating user", error });
//   }
// };

const userToggleActive = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    user.isActive = !user.isActive;
    await user.save();
    res.status(200).json({ message: "User status updated successfully." });
  } catch (error) {
    console.error("Error in userToggleActive controller:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
module.exports = {
  getUserById,
  // updateUserById,
  userToggleActive

};
