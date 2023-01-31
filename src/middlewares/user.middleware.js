module.exports = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  
  const regex = /\S+@\S+\.\S+/;
  const messages = [
    '"displayName" length must be at least 8 characters long',
    '"email" must be a valid email',
    '"password" length must be at least 6 characters long',
  ];

  if (displayName.length < 8) return res.status(400).json({ message: messages[0] });

  if (!regex.test(email)) return res.status(400).json({ message: messages[1] });

  if (password.length < 6) return res.status(400).json({ message: messages[2] });

  return next();
};
