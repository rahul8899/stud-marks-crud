import db from './index';
import { DataType } from 'sequelize-typescript';

export const Marks = db.sequelize.define('marks', {
    marks_id: {
        autoIncrement: true,
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    phy: {
        type: DataType.INTEGER,
        allowNull: true
    },
    chem: {
        type: DataType.INTEGER,
        allowNull: true
    },
    maths: {
        type: DataType.INTEGER,
        allowNull: true
    }
}, {
    tablename: 'marks',
    timestamp: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: 'marks_id' }
            ]
        }
    ]
});