const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, "please provide the username"],
			minLength: [5, "must be at least 5 characters"],
		},
		email: {
			type: String,
			required: [true, "please provide the email"],
			minLength: [10, "must be at least 10 characters"],
		},
		password: {
			type: String,
			required: [true, "plase provide the password"],
			minLength: [8, "must be at least 8 characters"],
		},
		role: {
			type: String,
			enum: ["admin", "user", "student"],
			default: "user",
		},
	},
	{
		timestamps: true,
	}
);

userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}
	this.password = await bcrypt.hash(this.password, 10);
});
module.exports = mongoose.model("User", userSchema);
