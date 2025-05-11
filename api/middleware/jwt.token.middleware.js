import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).send({ message: 'No token provided!' });
    }

    // Extrai o token removendo o prefixo "Bearer "
    const token = authHeader.split(' ')[1];

    // Verifica o token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: 'Unauthorized!' });
      }

      req.userId = decoded.id;
      next();
    });

  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized!' });
  }
};

export default verifyToken;
