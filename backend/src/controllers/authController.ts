import jwt from 'jsonwebtoken'

interface User {
  id: number;
  email: string;
  password: string;
}

const jwtSecret = process.env.JWT_SECRET;

// Simulação de banco - substitua pela sua entidade User real
const users: any[] = [];

const generateToken = (id: number): string => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '7d',
  });
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

      // Busca usuário (substitua pela sua lógica real)
    const user = users.find(u => u.email === email);
    if (!user) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }

    // Verifica senha
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }

    const token = generateToken(user.id);

    res.json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });
  } catch (error) {

  }
}

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body || {};

    // Verifica se usuário existe
    if (users.find(u => u.email === email)) {
      res.status(400).json({ error: 'Usuário já existe' });
      return;
    }

    // Criptografa senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria usuário
    const user = {
      id: users.length + 1,
      email,
      password: hashedPassword
    };

    users.push(user);

    // Gera token
    const token = generateToken(user.id);

    res.status(201).json({
      message: 'Usuário criado com sucesso',
      token,
      user: {
        id: user.id,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor' });
  }
};

export default {
  login,
  register
};