/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import Funcionarios from '../models/Funcionarios';

interface Request {
  nome_funcionario: string;
  email_funcionario: string;
  foto_funcionario: string;
}

class FuncionariosController {
  public async store({
    nome_funcionario,
    email_funcionario,
    foto_funcionario,
  }: Request): Promise<Funcionarios> {
    const funcionariosRepository = getRepository(Funcionarios);

    const verificaFuncionarioExiste = await funcionariosRepository.findOne({
      where: { email_funcionario },
    });

    if (verificaFuncionarioExiste) {
      throw new Error('Endereço de email já cadastrado');
    }

    const funcionariosreg = funcionariosRepository.create({
      nome_funcionario,
      email_funcionario,
      foto_funcionario,
    });

    await funcionariosRepository.save(funcionariosreg);
    return funcionariosreg;
  }
}

export default FuncionariosController;
