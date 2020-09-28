import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Admin from '../models/Admin';

interface Request {
  matricula: number;
  password: string;
}

class AdminController {
  public async store({ matricula, password }: Request): Promise<Admin> {
    const adminRepository = getRepository(Admin);

    const verificaMatriculaExiste = await adminRepository.findOne({
      where: { matricula },
    });

    if (verificaMatriculaExiste) {
      throw new Error('Essa matrícula já existe');
    }

    const hashedPassword = await hash(password, 8);

    const adminreg = adminRepository.create({
      matricula,
      password: hashedPassword,
    });

    await adminRepository.save(adminreg);
    return adminreg;
  }
}

export default AdminController;
