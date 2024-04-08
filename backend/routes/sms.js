import twilio from 'twilio';
const accountSid = "ACe08bcf70e60831a7fe8235dbecf1afda";
const authToken = "77af0c68694e7b022477c3d9b67f7819";

const client = twilio(accountSid, authToken);

export async function sendSMS(to, message){

    try {
        const sentMessage = await client.messages.create({
            body: message,
            to: to,
            from: "+13343730540",
        });
        console.log(sentMessage);
        res.status(200).json({ message: "SMS sent successfully", data: message });
    } catch (error) {
        // You can implement your fallback code here
        console.error(error);
        res.status(500).json({ error: "Failed to send SMS" });
    }
    
}