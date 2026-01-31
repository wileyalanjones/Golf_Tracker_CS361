import { body, validationResult } from "express-validator"

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
    body('location').notEmpty().withMessage('location is required'),
    body('par').notEmpty().withMessage('Par is required'),
    body('distance').notEmpty().withMessage("Distance is required"),
    body('slope').notEmpty().withMessage('Slope is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        next();
    }
]

export { validateClub, validateCourse }