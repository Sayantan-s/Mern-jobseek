const ApiError = require('../helpers/ApiError');
const Company = require('../models/Company.model');
const { company_validate } = require('../validator/job.validator');

const router = require('express').Router();

router
.route('/')
.get(async(req,res,next) => {

    let companies;

    try {

        if(req.query){

            const { page, skip, limit } = req.query;

            companies = await Company.aggregate([
                { $project : { 
                        logo: 1, 
                        typeOfCorporation: 1, 
                        info: 1, 
                        jobs : { 
                            $size : '$jobs' 
                        } 
                    }
                },
                { $limit : 3 }
            ])
    
        }
        else{
            companies = await Company.find()
            .populate("jobs")
            .select('logo typeOfCorporation info jobs')
        }

        if(!companies.length) return next(ApiError.customError(400, 'Sorry something went wrong!'));
        res.send({ data : companies })
    } catch (error) {
        next(error)
    }
})
.post(async(req, res, next) => {
    try{
        const result = await Company.create({ ...req.body });
        if(!result) return next(ApiError.customError(400, 'Failed to create a company!'));
        return res.status(201).send({ message : 'Company created successfully!' })
    }
    catch(err){
        next(err);
    }
})

module.exports = router;