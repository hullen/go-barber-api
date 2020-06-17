import handlebars from 'handlebars';

import IMailTemplateProviders from '../interfaces/IMailTemplateProvider';

import IParseMailTemplateDTO from '../interfaces/dtos/IParseMailTemplateDTO';

class HandlebarsMailTemplateProvider implements IMailTemplateProviders {
  public async parse({ template, variables }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvider;
