const model = require('../../models');
const Validator = require('validatorjs');

const Student = model.Student;
const Program = model.Program;

const applicationHelper = require('../helper');

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
            const statusCaption = student.statusCaption(student.statusId);
            const program = await Program.findOne({where: {id: student.programId}});
            const programCaption = program.title
            student = student.toJSON();
            student.statusCaption = statusCaption;
            student.programCaption = programCaption;
            delete student.statusId;
            delete student.programId;
            student.dateOfBirth = applicationHelper.date_to_string(student.dateOfBirth);
            return res.status(201).send(student);
        }
        catch(e){
            console.log(e)
            return res.status(422).send({error: e})
        }
    }
}

module.exports = studentController;
