'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {
      // define association here
      this.belongsTo(models.Program, {
        foreignKey: 'programId'
      });
    }

  };
  Student.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    "isBoy?": DataTypes.BOOLEAN,
    dateOfBirth: DataTypes.DATE,
    placeOfBirth: DataTypes.STRING,
    programId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });  

  Student.prototype.statusCaption = (statusId) => {
    const STATUS_TYPES = {
      1: 'Pendaftaran Telah Diajukan',
      2: 'Pendaftaran Diterima',
      3: 'Pendaftaran Ditolak'
    }

    return STATUS_TYPES[statusId];
  }


  return Student;
};