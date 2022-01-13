import Joi from 'joi';
import _ from "lodash";

export async function validateItemRegistration(req, res, next) {
    try {
        const schema = Joi.object({
            Name: Joi.string().required(),
            Description: Joi.string(),
            Quantity: Joi.number().min(0)
        })
        
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.message,
                message: "Unable create the item."
            })
        }
        return next()
    }
    catch (ex) {
        return res.status(400).send(ex.message)
    }
}

export async function validateItemUpdate(req, res, next) {
    try {
        const schema = Joi.object({
            Quantity: Joi.number().min(0).required()
        })
        
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: error.message,
                message: "Unable update the item."
            })
        }
        return next()
    }
    catch (ex) {
        return res.status(400).send(ex.message)
    }
}
