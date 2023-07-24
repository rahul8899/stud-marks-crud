import joi from "joi";
// import passwordComplexity from 'joi-password-complexity';
// const complexityOption = {
//     min: 5,
//     max: 25,
//     lowerCase: 1,
//     upperCase: 1,
//     numeric: 1,
//     symbol: 1,
//     reuirmentCount: 2

// }

export const createStudentSchema = joi.object({
    stud_id: joi.number().required(),
    stud_name: joi.string().min(3).required(),
    stud_dob: joi.date().required(),
    stud_status: joi.boolean().required().valid(true, false),
    // stud_pass: joi.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/).required().min(8).max(20)
    stud_pass: joi.alternatives().conditional('stud_status', { is: false, then: joi.optional(), otherwise: joi.string().regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!#.])[A-Za-z\d$@$!%*?&.]{8,20}/).required().min(8).max(20) })
    // stud_pass: joi.alternatives().conditional('stud_status', { is: 'true', then: passwordComplexity(complexityOption) })
});

// export const updateStudentSchema = joi.object({
//     stud_id: joi.number().required(),
//     stud_name: joi.string().min
// })

export const createMarksSchema = joi.object({
    marks_id: joi.number().required(),
    phy: joi.number().min(0).max(100).required(),
    chem: joi.number().min(0).max(100).required(),
    maths: joi.number().min(0).max(100).required()
});