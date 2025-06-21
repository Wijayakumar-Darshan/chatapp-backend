import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
	fullName: {
		type: String,
		required: true,
		trim: true, // optional but recommended to trim whitespace
	},
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true, // optional: to keep usernames consistent
	},
	password: {
		type: String,
		required: true,
		minlength: 6,
	},
	gender: {
		type: String,
		required: true,
		enum: ["male", "female"],
	},
	profilePic: {
		type: String,
		default: function () {
			const name = this.fullName || "User";
			return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
		}
	},
}, { timestamps: true });
=======
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        type: String,
        default: "",
    },
}, { timestamps: true});
>>>>>>> 76fdae3f9610069adccd8129c21e3a11608b7f15

const User = mongoose.model("User", userSchema);

export default User;
