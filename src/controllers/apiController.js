const db = require('../database/models')

const checkEmail = async (req,res) => {

    try {
        
        if (!req.query.email) {
            let error = new Error("Falta el parametro email")
            error.status = 400
            throw error
        }

        const user = await db.User.findOne({
            where : {
                email : req.query.email
            }
        })
        return res.status(200).json({
            ok: true,
            data : user ? true : false
        })


    } catch (error) {
        res.status(error.status || 500).json({
            ok : false,
            msg : error.message || "Ups, hubo un problema"
        })
    }

}

module.exports = {
    checkEmail
}