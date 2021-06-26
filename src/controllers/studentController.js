const model = require('../../models');
const Validator = require('validatorjs');

const Student = model.Student;

const studentController = {
    create: async (req, res) => {
        try{
            let validation = new Validator(req.body, {
                fullName: 'required',
                email: 'required|email',
                phoneNumber: 'required',
                "isBoy?": 'required',
                dateOfBirth: 'required',
                placeOfBirth: 'required',
                programId: 'required'
            });

            if (validation.fails()){
                return res.status(422).send({error: validation.errors.errors});
                // return res.status(422).send({error: validation.errors.errors[Object.keys(validation.errors.errors)[0]][0]});
            }
            
            let student = Student.build(req.body);
            student.statusId = 1;
            await student.save();

            return res.status(201).send(student);
        }
        catch(e){
            return res.status(422).send({error: e})
        }
    }
}

module.exports = studentController;