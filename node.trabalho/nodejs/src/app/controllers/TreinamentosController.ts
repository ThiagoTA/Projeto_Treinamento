/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import { getRepository } from 'typeorm';
import { startOfHour, parseISO } from 'date-fns';
import Treinamentos from '../models/Treinamentos';

interface Request {
  id_funcionario: string;
  id_curso: string;
  data_treinamento: string;
  vencimento_treinamento: string;
}

class TreinamentosController {
  public async store({
    id_funcionario,
    id_curso,
    data_treinamento,
    vencimento_treinamento,
  }: Request): Promise<Treinamentos> {
    const dataPassada = startOfHour(parseISO(data_treinamento));
    const treinamentosRepository = getRepository(Treinamentos);
    const treinamento = treinamentosRepository.create({
      id_funcionario,
      id_curso,
      data_treinamento: dataPassada,
      vencimento_treinamento: data_treinamento,
    });
    await treinamentosRepository.save(treinamento);
    return treinamento;
  }
}

export default TreinamentosController;
