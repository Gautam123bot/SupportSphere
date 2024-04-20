import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
    vendor_id: {
        type: String, 
        required: true,
    },
    business_email: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    pin: {
        type: String, 
        required: true,
    },
    location: {
        type: {type: String, required: true},
        coordinates:[]
    }
});

storeSchema.index({location:"2dsphere"});

const Store = mongoose.model("Store", storeSchema);

export default Store;
