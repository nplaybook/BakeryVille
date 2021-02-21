const { Position } = require("../../models")

module.exports = async (req, res) => {
    try {
        const positions = await Position.findAll();
        res.status(200).json({
            message: "OK",
            data: positions
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};