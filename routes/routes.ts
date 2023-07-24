import Express from "express";
import { crudRoutes } from "../modules/crudcontroller/crud.routes";
// for doing manual route path 
import { Student } from "../models/student";
import { Marks } from "../models/marks";
import { Request, Response } from "express";
export class Routes {
    route = Express.Router();

    path() {
        //for student table
        this.route.get('/getallstudent', new crudRoutes().router);
        this.route.post('/createstudent', new crudRoutes().router);
        this.route.post('/findorcreate', new crudRoutes().router);
        this.route.put('/updatestudent/:stud_id', new crudRoutes().router);
        this.route.delete('/deletestudent/:stud_id', new crudRoutes().router);

        // for marks table
        this.route.get('/getallmarks', new crudRoutes().router);
        this.route.post('/createmarks', new crudRoutes().router);
        this.route.post('/findorcreatemarks', new crudRoutes().router);
        this.route.put('/updatemarks/:marks_id', new crudRoutes().router);
        this.route.delete('/deletemarks/:marks_id', new crudRoutes().router);

        return this.route
    }

    // getAllStudent = async (req: Request, res: Response) => {
    //     try {
    //         const stud = await Student.findAll({
    //             // include: [{
    //             //     model: Student
    //             // }]
    //         });
    //         if (stud) {
    //             res.json({
    //                 success: true,
    //                 data: stud
    //             })
    //         }
    //     } catch (error) {
    //         console.log("Its not working ", error)
    //     }
    // }

    // createStudent = async (req: Request, res: Response) => {
    //     try {
    //         const { body } = req;
    //         const student = await Student.create(body);
    //         if (student) {
    //             res.json({
    //                 success: true,
    //                 data: student
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error) {
    //         console.log("it is not working!");
    //     }
    // }

    // findOrCreate = async (req: Request, res: Response) => {
    //     try {
    //         const { body } = req;
    //         const student = await Student.findOrCreate({
    //             where: {
    //                 stud_name: body.stud_name,
    //             },
    //             default: body
    //         });
    //         if (student[1]) {
    //             res.json({
    //                 success: true,
    //                 data: student
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error) {
    //         console.log("duplicate data!");
    //     }
    // }

    // update = async (req: Request, res: Response) => {
    //     try {
    //         const { body } = req;
    //         const { stud_id } = req.params;
    //         const student = await Student.findByPk(stud_id);
    //         if (student) {
    //             await student.update(body);
    //             res.json({
    //                 success: true,
    //                 data: student
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error) {
    //         console.log("task is not done yet!");

    //     }
    // }
    // delete = async (req: Request, res: Response) => {
    //     try {
    //         const { stud_id } = req.params;
    //         const student = await Student.findByPk(stud_id);
    //         if (student) {
    //             await student.destroy();
    //             res.json({
    //                 success: true,
    //                 data: student
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error) {
    //         console.log("task is not done");
    //     }
    // }

    // // only for marks table
    // getAllMarks = async (req: Request, res: Response) => {
    //     try {
    //         const marks = await Marks.findAll({
    //             // include: [{
    //             //     model: Student
    //             // }]
    //         });
    //         if (marks) {
    //             res.json({
    //                 success: true,
    //                 data: marks
    //             })
    //         }
    //     } catch (error) {
    //         console.log("Its not working ", error)
    //     }
    // }
    // createMarks = async (req: Request, res: Response) => {
    //     try {
    //         const { body } = req;
    //         const mark = await Marks.create(body);
    //         if (mark) {
    //             res.json({
    //                 success: true,
    //                 data: mark
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error: any) {
    //         console.log("it is not working!", error.message);
    //     }
    // }
    // findOrCreateMarks = async (req: Request, res: Response) => {
    //     try {
    //         const { body } = req;
    //         const marks = await Marks.findOrCreate({
    //             where: {
    //                 stud_name: body.stud_name,
    //             },
    //             default: body
    //         });
    //         if (marks[1]) {
    //             res.json({
    //                 success: true,
    //                 data: marks
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error) {
    //         console.log("duplicate data!");
    //     }
    // }
    // updateMarks = async (req: Request, res: Response) => {
    //     try {
    //         const { body } = req;
    //         const { marks_id } = req.params;
    //         const marks = await Marks.findByPk(marks_id);
    //         if (marks) {
    //             await marks.update(body);
    //             res.json({
    //                 success: true,
    //                 data: marks
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error: any) {
    //         console.log("Task is not done!", error.message)
    //     }
    // }
    // deletemarks = async (req: Request, res: Response) => {
    //     try {
    //         const { marks_id } = req.params;
    //         const mark = await Marks.findByPk(marks_id);
    //         if (mark) {
    //             await mark.destroy();
    //             res.json({
    //                 success: true,
    //                 data: mark
    //             })
    //         } else {
    //             res.json({
    //                 success: false
    //             })
    //         }
    //     } catch (error: any) {
    //         console.log("Its not working!", error.message);
    //     }
    // }

}

