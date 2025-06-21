import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
<<<<<<< HEAD
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
  }
  
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development"
  });
};

export default generateTokenAndSetCookie;
=======
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
       expiresIn: '15d' 
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite:"strict",
        secure: process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;
>>>>>>> 76fdae3f9610069adccd8129c21e3a11608b7f15
