import mongoose from "mongoose";
const dbConnect = (MONGODB_URL)=>{
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
		console.log("✔ database Connected to %s", MONGODB_URL);
		console.log("Press CTRL + C to stop the process. \n");
    }).catch(err => {
		console.error("✘ database starting error:", err.message);
	});
}
var db = mongoose.connection;
export default dbConnect;
export {db}