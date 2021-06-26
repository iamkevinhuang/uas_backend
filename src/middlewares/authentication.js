const model = require('../../models');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt');

const Program = model.Program;
const Student = model.Student;
const Administrator = model.Administrator;

const authentication = async (req, res, next) => {
    try{
        const token = req.header('Authorization').split(" ")[1];
        const decoded = jwt.verify(token, jwtConfig.secret);

        const current_administrator = await Administrator.findOne({
            where: {
                id: decoded.id
            }
        });

        if (!current_administrator){
            throw new Error("Mohon untuk melakukan login terlebih dahulu !");
        }

        req.token = token;
        req.current_administrator = current_administrator;
        next();
    } catch(e){
        return res.status(403).send({error: "Mohon untuk melakukan login terlebih dahulu !"});
    }
}

module.exports = authentication;