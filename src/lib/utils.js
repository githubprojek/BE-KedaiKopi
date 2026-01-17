import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, //MAXAGE HARUS DICONVERT MENJADI MILISECOND, KARNA DARI SANANYA
    httpOnly: true, //INI BIAR GABISA DIINEJECT MENGGUNAKAN JAVASCRIPT MELALUI XSS(cross site scripting)
    sameSite: "strict", //INI SAMA KAYA DIATAS, MENGHINDARI INJECT DARI JAVASCRIPT
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
