const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');

const register = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Не верно заполенны поля'
        });
    }

    const { email, login, pass } = req.body;

    try {
        const findedUser = await User.findOne({ email });

        if (findedUser) {
            return res.status(400).json({
                message: 'Пользователь с таким именем уже существует'
            });
        }

        const hashedPwd = await bcrypt.hash(pass.toString(), 2);
        const newUser = new User({ email, pass: hashedPwd, login });
        newUser.save();

        return res.status(200).json({
            message: 'Пользователь успешно зарегистрирован'
        });

    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: 'Что-то пошло не так...'
        });
    }
}

module.exports = register;