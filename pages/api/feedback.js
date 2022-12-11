const feedbackHandler = (req, res) => {
  const { username, email, password } = JSON.parse(req.body);
  console.log(req.body);

  if (req.body) {
    res.status(200).json({
      message: `The user with the name "${username}" against the email "${password}", has been added SUCCESSFULLY!`,
    });
  }
};

export default feedbackHandler;
