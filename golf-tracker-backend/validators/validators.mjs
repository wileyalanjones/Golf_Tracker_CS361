import { body, validationResult } from "express-validator"
import Courses from "../models/courses.mjs"

const validateClub = [
    body('type').notEmpty().withMessage('Type is required'),
    body('brand').notEmpty().withMessage('Brand is required'),
    body('year').custom(value => {
        if (value === '' || value.length === 4) {
            return true;
        }
        throw new Error('Year must be blank or 4 characters long');
    }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

const validateCourse = [
    body('name').notEmpty().withMessage('Name is required'),
    body('city').notEmpty().withMessage('city is required'),
    body('state').notEmpty().withMessage('state is required'),
    body('par').isInt({min: 1}).withMessage("Par must be a positive integer"),
    body('distance').isInt({min: 1}).withMessage('Distance must be a postive integer'),
    body('slope').isInt({min: 1}).withMessage('Slope Must be a positive integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

const validateRound = [
    body('date').notEmpty().withMessage("Date is required"),
    body('course')
        .notEmpty().withMessage('Course is required')
        .isMongoId().withMessage('Must be a valid MongoDB ObjectID'),
    body('strokes').isInt({min: 1}).withMessage("Strokes must be a positive number"),
    body('score').isInt().withMessage('Score must be an integer'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ erorrs: errors.array() });
        }
        next();
    }
]

export { validateClub, validateCourse, validateRound }