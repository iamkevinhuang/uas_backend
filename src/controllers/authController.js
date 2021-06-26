const model = require('../../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/jwt');

const Administrator = model.Administrator;

const authController = {
    login: async (req, res) => {
        try{
            const administrator = await Administrator.findOne({
                where: {
                    username: req.body.username
                }
            });

            if (!administrator){
                throw new Error('Username dan Password tidak cocok');
            }

            const checkPassword = await bcrypt.compare(req.body.password, administrator.password);
            
            if (!checkPassword){
                throw new Error('Username dan Password tidak cocok');
            }

            const jwtToken = jwt.sign(
                {
                    id: administrator.id,
                    username: administrator.username
                },
                jwtConfig.secret,
                {
                    expiresIn: '1d',
                }
            );

            res.status(200).send({administrator, jwtToken});
        }
        catch(e){
            res.status(400).send({
                error: e.message
            });
        };
    },
};

module.exports = authController;