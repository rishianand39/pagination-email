const express = require('express');
const nodemailer = require('nodemailer');

const User = require('../model/user.model');
const transporter = require('../configs/mail');


const router = express.Router();
router.get('', async(req, res) => {
    try {
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;

        const skip = (page - 1) * pagesize;
        const users = await User.find().skip(skip).limit(pagesize).lean().exec();
        const totalPage = Math.ceil((await User.find().countDocuments()) / pagesize)
        return res.status(500).send({ users, totalPage })
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});
router.post('', async(req, res) => {
    try {
        const registers = await User.create(req.body);
        // bar@example.com, baz@example.com

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: registers.email, // list of receivers
            subject: `Welcome to ABC system ${registers.first_Name,registers.last_Name}`, // Subject line
            text: `Hi ${registers.first_Name} Please confirm your email address.`, // plain text body
            html: '<b>Hello world?</b>', // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        return res.status(201).send({ registers });
    } catch (err) {
        return res.status(500).send({
            message: err.message,
        });
    }
});

module.exports = router;