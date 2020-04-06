const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: 'Не верно заполенны поля'
        });
    }

    const { login, pass } = req.body;

    try {
        const findedUser = await User.findOne({
            $or: [{ email: login }, { login }]
        });

        if (!findedUser) {
            return res.status(400).json({
                message: 'Не верный логин или пароль'
            });
        }

        const resultCompare = await bcrypt.compare(pass.toString(), findedUser.pass);

        if (!resultCompare) {
            return res.status(400).json({
                message: 'Не верный логин или пароль'
            });
        }

        const token = jwt.sign({
            login: findedUser.login,
            email: findedUser.email
        }, config.get('secret'), {
            expiresIn: '1h'
        });

        return res.status(200).json({
            message: 'Успешная авторизация',
            token,
        });

    } catch (e) {
        res.status(401).json({
            message: 'Что-то пошло не так...'
        });
    }
}

module.exports = login;