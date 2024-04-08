import mongoose from "mongoose";

mongoose.set("strictQuery", true);

async function connectMongoDb(url){
    return mongoose.connect(url);
}

// module.exports = {
//     connectMongoDb,
// };

export default connectMongoDb;