import db from './index';
import { DataType } from 'sequelize-typescript';

export const Student = db.sequelize.define('student', {
    stud_id: {
        autoIncrement: true,
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    stud_name: {
        type: DataType.TEXT,
        allowNull: true
    },
    stud_dob: {
        type: DataType.DATE,
        allowNull: true
    },
    stud_pass: {
        type: DataType.TEXT,
        allowNull: false
    }

}, {
    tableName: 'student',
    timestamp: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "stud_id" },
            ]
        },
    ]
});