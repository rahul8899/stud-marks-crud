import express from "express";
import * as bodyParser from "body-parser";
// import * as dotenv from "dotenv";
// dotenv.config();
import { Routes } from "../routes/routes";

const port = 2003;
class App {

    protected app: express.Application = express();

    constructor() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.listen(port, () => {
            console.log("Server running on port ", port);
            // console.log(`http://localhost:${port}`);
        })

        // For using routing 
        const route = new Routes();
        this.app.use("/", route.path());

        // ** For manually path 
        // for student table 
        // this.app.get('/getallstudent', this.getAllStudent);
        // this.app.post('/createstudent', this.createStudent);
        // this.app.post('/findorcreate', this.findOrCreate);
        // this.app.put('/updatestudent/:stud_id', this.update);
        // this.app.delete('/deletestudent/:stud_id', this.delete);
        // for marks table
        // this.app.get('/getallmarks', this.getAllMarks);
        // this.app.post('/createmarks', this.createMarks);
        // this.app.post('/findorcreatemarks', this.findOrCreateMarks);
        // this.app.put('/updatemarks/:marks_id', this.updateMarks);
        // this.app.delete('/deletemarks/:marks_id', this.deletemarks);
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
}

new App();