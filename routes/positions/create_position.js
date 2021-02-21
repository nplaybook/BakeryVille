const { Position } = require("../../models")

module.exports = async (req, res) => {
    console.log(req.body)
    try { 
        const {
            name
        } = req.body;
        const newPosition = await Position.create({
            name
        });
        res.status(200).json({
            message: "OK",
            data: newPosition
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}