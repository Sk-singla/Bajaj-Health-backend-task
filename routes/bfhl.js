const express = require('express')
const isNumber = require('../utils/Utils')
const router = express.Router();


router.post(
    '/bfhl',
    (req,res)=>{
        var response = {
            user_id:"samarth_gupta_19072002",
            roll_number:"11911223",
            email:"samarashu02@gmail.com",
            numbers: [],
            alphabets: [],
            is_success: false
        };
        try{
            const {data} = req.body;
            if(!data){
                throw new Error("data not found!");
            }

            const nums = [];
            const alphabets = [];
            for (const item of data){
                if(isNumber(item)){
                    nums.push(parseInt(item));
                } else {
                    alphabets.push(item);
                }
            }
            response.numbers = nums;
            response.alphabets = alphabets
            response.is_success = true;
            res.json(response);
        }catch(err){
            response.error = err.message;
            res.status(500).json(response);
        }
    }
)
module.exports = router;