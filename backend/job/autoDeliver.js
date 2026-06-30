import Order from "../model/order.model.js";

export const autoDeliver = () => {

    const DELIVERY_TIME = 1 * 60 * 1000; // 1 minute
    setInterval(async () => {
        try {
            await Order.updateMany(
                {
                    orderStatus: "processing",
                    createdAt: { $lt: new Date(Date.now() - DELIVERY_TIME) },
                },
                {
                    $set: { orderStatus: "delivered" },
                }
            );
        } catch (error) {
            console.log("Auto deliver error:", error);
        }
    }, 60000); // every 1 minute
};