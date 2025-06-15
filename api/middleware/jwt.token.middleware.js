import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(403).json({ message: 'Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err || !decoded?.id) {
        return res.status(401).json({ message: 'Token inválido ou expirado.' });
      }

      req.userId = decoded.id; 
      next();
    });

  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return res.status(401).json({ message: 'Erro de autenticação.' });
  }
};

export default verifyToken;
