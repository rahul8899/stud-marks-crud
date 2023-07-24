import { Router } from "express";
import { crudController } from "./crud.controllers";
import { bodyValidator } from "../../middleware/validate.middleware";
import { createStudentSchema } from "./crud.schema";
import { createMarksSchema } from "./crud.schema";

export class crudRoutes {
    router = Router();
    private cc: crudController = new crudController();
    constructor() {
        this.router.get('/getallstudent', this.cc.getAllStudent);
        this.router.post('/createstudent', bodyValidator(createStudentSchema), this.cc.createStudent);
        // this.router.post('/createstudent', this.cc.createStudent);
        this.router.post('/findorcreate', this.cc.findOrCreate);
        this.router.put('/updatestudent/:stud_id', this.cc.update);
        this.router.delete('/deletestudent/:stud_id', this.cc.delete);

        // for marks table
        this.router.get('/getallmarks', this.cc.getAllMarks);
        this.router.post('/createmarks', bodyValidator(createMarksSchema), this.cc.createMarks);
        this.router.post('/findorcreatemarks', this.cc.findOrCreateMarks);
        this.router.put('/updatemarks/:marks_id', this.cc.updateMarks);
        this.router.delete('/deletemarks/:marks_id', this.cc.deletemarks);
    }

}
