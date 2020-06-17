import IParseMailTemplateDTO from '@shared/providers/MailTemplateProvider/interfaces/dtos/IParseMailTemplateDTO';

interface IMailContent {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContent;
  from?: IMailContent;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
