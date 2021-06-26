const model = require('../../../models');
const Program = model.Program;
const Validator = require('validatorjs');

const programController = {
    index: async (req, res) => {
        try{
            let programs = [];

            programs = await Program.findAll();

            return res.status(200).send(programs);
        } catch(e){
            return res.status(500).send({error: e});
        }
    },
    create: async (req, res) => {
        try{
            let validation = new Validator(req.body, {
                title: 'required',
            });

            if (validation.fails()){
                return res.status(422).send({error: validation.errors.errors});
                // return res.status(422).send({error: validation.errors.errors[Object.keys(validation.errors.errors)[0]][0]});
            }

            let program = await Program.create(req.body);

            return res.status(201).send(program);
        } catch(e){
            return res.status(500).send({error: e});
        }
    },
    update: async (req, res) => {
        try{
            let validation = new Validator(req.body, {
                title: 'required',
            });

            if (validation.fails()){
                return res.status(422).send({error: validation.errors.errors});
                // return res.status(422).send({error: validation.errors.errors[Object.keys(validation.errors.errors)[0]][0]});
            }

            let program = await Program.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!program){
                return res.status(404).send({error: "Program Studi tidak ditemukan !"});
            }

            program = await program.update(req.body);

            return res.status(200).send(program);
        } catch(e){
            return res.status(500).send({error: e});
        }
    },
    destroy: async (req, res) => {
        try{
            let program = await Program.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!program){
                return res.status(404).send({error: "Program Studi tidak ditemukan !"});
            }

            const isSuccess = await program.destroy();
            
            if (isSuccess){
                res.status(200).send({message: 'Program Studi berhasil dihapus !'});
            }
            else{
                res.status(500).send({error: 'Terjadi kesalahan, silahkan coba beberapa saat lagi !'});
            }

        } catch(e){
            return res.status(500).send({error: e});
        }
    },
};

module.exports = programController;