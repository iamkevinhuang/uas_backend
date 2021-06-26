const model = require('../../../models');

const Student = model.Student;
const Program = model.Program;

const applicationHelper = require('../../helper/index');

const studentController = {
    index: async (req, res) => {
        try{
            let submitted = [];
            let approved = [];
            let rejected = [];

            submitted = await Student.findAll({
                where: {
                    statusId: 1
                }, include: [Program]
            });

            approved = await Student.findAll({
                where: {
                    statusId: 2
                }, include: [Program]
            });

            rejected = await Student.findAll({
                where: {
                    statusId: 3
                }, include: [Program]
            });

            formated_submmitted = [];

            submitted.map((student) => {
                const statusCaption = student.statusCaption(student.statusId);
                const programCaption = student.Program.title;
                student = student.toJSON();
                student.dateOfBirth = applicationHelper.date_to_string(student.dateOfBirth);
                student.programCaption = programCaption;
                student.statusCaption = statusCaption;
                delete student.programId;
                delete student.statusId;
                delete student.Program;
                formated_submmitted.push(student);
            });

            formated_approved = [];

            approved.map((student) => {
                const statusCaption = student.statusCaption(student.statusId);
                const programCaption = student.Program.title;
                student = student.toJSON();
                student.dateOfBirth = applicationHelper.date_to_string(student.dateOfBirth);
                student.programCaption = programCaption;
                student.statusCaption = statusCaption;
                delete student.programId;
                delete student.statusId;
                delete student.Program;
                formated_approved.push(student);
            });

            formated_rejected = [];

            rejected.map((student) => {
                const statusCaption = student.statusCaption(student.statusId);
                const programCaption = student.Program.title;
                student = student.toJSON();
                student.dateOfBirth = applicationHelper.date_to_string(student.dateOfBirth);
                student.programCaption = programCaption;
                student.statusCaption = statusCaption;
                delete student.programId;
                delete student.statusId;
                delete student.Program;
                rejected.push(student);
            });

            return res.status(200).send({submitted: formated_submmitted, approved: formated_approved, rejected: formated_rejected});
        } catch(e){
            return res.status(500).send({error: e});
        }
    }, update: async (req, res) => {
        try{
            let student = await Student.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!student){
                return res.status(404).send({error: "Mahasiswa tidak ditemukan !"});
            }

            if (student.statusId != 1){
                return res.status(422).send({error: "Status mahasiswa ini telah diperbaharui sebelumnya !"});
            }

            student.statusId = req.body.statusId;
            await student.save();

            return res.status(200).send(student); 
        } catch(e){
            return res.status(500).send({error: e});
        }
    },
    show: async (req, res) => {
        try{
            let student = await Student.findOne({
                where: {
                    id: req.params.id
                }, include: [Program]
            });

            if (!student){
                return res.status(404).send({error: "Mahasiswa tidak ditemukan !"});
            }

            const statusCaption = student.statusCaption(student.statusId);
            const programCaption = student.Program.title;
            student = student.toJSON();
            
            student.statusCaption = statusCaption;
            delete student.statusId;
            student.programCaption = programCaption;
            delete student.programId;
            delete student.Program;
            student.dateOfBirth = applicationHelper.date_to_string(student.dateOfBirth);
            return res.status(200).send(student); 
        } catch(e){
            return res.status(500).send({error: e});
        }
    }
}

module.exports = studentController;
