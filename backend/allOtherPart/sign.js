const bcrypt = require("bcrypt");
const { SignUpModel } = require("../models/SignupModel");

exports.PostSigup = async (req, res) => {
  const { email, name, password } = req.body;
 const email_check = await SignUpModel.find({ email });
  if (email_check.length > 0) {
    const randomNumber = Math.floor(Math.random() * 100) + 400;
    return res.send({ status: randomNumber });
  }
  bcrypt.hash(password, 2, async function (err, hash) {
    const signupData = new SignUpModel({
      name,
      email,
      password: hash,
    });
    await signupData.save();
    res.send({ msg: signupData, status: 200 });
  });
};

exports.PostLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await SignUpModel.findOne({ email });

  if (!user) {
    const randomNumber = Math.floor(Math.random() * 100) + 400;
    return res.send({ status: randomNumber });
  }

  bcrypt.compare(password, user.password, async function (err, result) {
    if (err) {
      const randomNumber1 = Math.floor(Math.random() * 100) + 600;
      return res.send({ status: randomNumber1 });
    }

    if (!result) {
      const randomNumber = Math.floor(Math.random() * 100) + 400;
      return res.send({ status: randomNumber });
    }

    // Successful login
    res.send({ msg: user, status: 200 });
  });
};