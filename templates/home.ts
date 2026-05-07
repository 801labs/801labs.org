import type { Config, TemplateFunction, TemplateMap, TemplateOutput } from '../shared.ts';
import basic from './basic.ts';

const home: TemplateFunction = (config: Config, templateMap: TemplateMap) => {
  const content = config.content
    .split('<hr>')
    .map(line => /* html */`<div class="window">\n${line.trim()}\n</div>`)
    .join('\n');
  return basic({
    ...config,
    content,
  }, templateMap);
};

export default home;
