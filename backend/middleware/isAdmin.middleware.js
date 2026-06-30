

export const isAdminMiddleware = async (req, res, next) => {
    try {
        const user = req.user
        if (user.role !== "admin") {
            return res.status(400).json({
                success: false,
                message: "Admin access only!"
            })
        }
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Something went wrong!"
        })
    }
}