import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import Admin from '../models/Admin';

interface Request {
  matricula: number;
  password: string;
}

class SessionsAdminController {
  public async store({
    matricula,
    password,
  }: Request): Promise<{ adminreg: Admin }> {
    const adminRepository = getRepository(Admin);
    const adminreg = await adminRepository.findOne({ where: { matricula } });

    if (!adminreg) {
      throw new Error('Combinação de matricula/senha incorretos');
    }

    const verificaSenha = await compare(password, adminreg.password);

    if (!verificaSenha) {
      throw new Error('Combinação de matricula/senha incorretos');
    }

    return {
      adminreg,
    };
  }
}

export default SessionsAdminController;
