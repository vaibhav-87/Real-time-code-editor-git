const express = require('express');
const router = express.Router();
const User = require('./User');
const {body, validationResult} = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const jwtSecret = "randomSecret";

router.post("/createuser", [body('email').isEmail(), body('name').isLength({min: 5}), body('password', 'Incorrect Password').isLength({min: 5})] ,async(req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);


    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
});

router.post("/loginuser", [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const userData = await User.findOne({ email });

        if (!userData) {
            return res.status(400).json({ errors: "Invalid credentials!" });
        }

        const isMatch = await bcrypt.compare(password, userData.password);

        if (!isMatch) {
            return res.status(400).json({ errors: "Invalid credentials!" });
        }

        const payload = {
            user: {
                id: userData.id
            }
        };

        jwt.sign(payload, jwtSecret, { expiresIn: '1h' }, (err, token) => {
            if (err) throw err;
            res.json({ success: true, authToken: token });
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;