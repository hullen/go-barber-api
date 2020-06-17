import IMailTemplateProviders from '../interfaces/IMailTemplateProvider';

import IParseMailTemplateDTO from '../interfaces/dtos/IParseMailTemplateDTO';

class FakeMailTemplateProvider implements IMailTemplateProviders {
  public async parse({ template }: IParseMailTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvider;
