const express = require("express");

const router = express.Router();
const z = require("zod");
const { User } = require("../db");
const Jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const signupBody = z.object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string()
});

const signinBody = z.object({
    username: z.string().email(),
    password: z.string()
});


router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            message:  "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if(existingUser) {
        return res.status(411).json({
            message:  "Email already taken / Incorrect inputs"
        })
    }

    const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    const userId = newUser._id;

    const token = Jwt.sign({userId}, JWT_SECRET);

    res.json({
        message: "new user created successfully",
        token: token
    })
});


router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const findUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(findUser) {
        const token = Jwt.sign({
            userId: findUser._id
        }, JWT_SECRET);

        res.json({
            token: token
        });
    }

    res.status(411).json({
        message: "Error while logging in"
    });


})

module.exports = router;