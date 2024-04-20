import Store from "../models/storeModel";

async function create_store(req, res) {
    try {
        const userData = await user.findOne({ _id: req.body.vendor_id });
        
        if (!userData) {
            return res.status(400).send({ success: false, msg: "Vendor ID does not exist" });
        }

        if (!req.body.latitude || !req.body.longitude) {
            return res.status(400).send({ success: false, msg: "Latitude and longitude are required" });
        }

        const vendorData = await Store.findOne({ vendor_id: req.body.vendor_id });
        if (vendorData) {
            return res.status(400).send({ success: false, msg: "This vendor has already created a store" });
        }

        const store = new Store({
            vendor_id: req.body.vendor_id,
            business_email: req.body.business_email,
            address: req.body.address,
            pin: req.body.pin,
            location: {
                type: "Point",
                coordinates: [parseFloat(req.body.longitude), parseFloat(req.body.latitude)]
            }
        });

        const storeData = await store.save();
        res.status(200).send({ success: true, msg: "Store created successfully", data: storeData });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, msg: "Internal Server Error" });
    }
}

export default create_store;
