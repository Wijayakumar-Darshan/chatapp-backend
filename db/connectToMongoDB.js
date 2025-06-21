import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
<<<<<<< HEAD
       await mongoose.connect(process.env.MONGO_URI); // ✅ corrected
       console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.log("❌ Error connecting to MongoDB:", error.message);
    }
};

export default connectToMongoDB;
=======
       await mongoose.connect(process.env.MONGO_DB_URI);
       console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
};

export default connectToMongoDB;
>>>>>>> 76fdae3f9610069adccd8129c21e3a11608b7f15
