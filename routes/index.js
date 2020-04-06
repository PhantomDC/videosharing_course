const express = require('express');
const bcrypt = require("bcrypt");
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

const User = require('../models/User');

const loginHandler = require('./login.route');
const registerHandler = require('./register.route');

const router = express.Router();
const parser = bodyParser.json();

router.post(
  '/register',
  [
    parser,
    check('email', 'Введите корректный E-mail').normalizeEmail().isEmail(),
    check('login', 'Длина логина не может быть меньше 3 символов').isLength({ min: 3 }),
    check('pass', 'Минимальная длина пароля 8 символов').isLength({ min: 8 })
  ], registerHandler);

router.post(
  '/login',
  [
    parser,
    check('login', 'Минимальная длина логина 3 символа').isLength({ min: 3 }),
    check('pass', 'Минимальная длина пароля 8 символов').isLength({ min: 8 })
  ],loginHandler);


module.exports = router;