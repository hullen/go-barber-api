import Appointment from '../../infra/typeorm/entities/Appoitment';
import ICreateAppointmentDTO from '../../interfaces/dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
}
