const express = require('express');
const bcrypt = require("bcrypt");
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const User = require('../models/User');

const router = express.Router();
const parser = bodyParser.json();

router.post(
  '/register',
  [
    parser,
    check('email', 'Введите корректный E-mail').normalizeEmail().isEmail(),
    check('login', 'Длина логина не может быть меньше 3 символов').isLength({ min: 3 }),
    check('pass', 'Минимальная длина пароля 8 символов').isLength({ min: 8 })
  ],
  async (req, res) => {

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

      const hashedPwd = await bcrypt.hash(pass, 2);
      const newUser = await new User({ email, pass: hashedPwd, login });
      newUser.save();

      return res.status(200).json({
        message: 'Пользователь успешно зарегистрирован'
      });

    } catch (e) {
      res.status(401).json({
        message: 'Что-то пошло не так...'
      });
    }
  });

router.post(
  '/login',
  [
    parser,
    check('login', 'Минимальная длина логина 3 символа').isLength({ min: 3 }),
    check('pass', 'Минимальная длина пароля 8 символов').isLength({ min: 8 })
  ],
  async (req, res) => {

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
  });


module.exports = router;