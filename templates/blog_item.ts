import basic from './basic.ts';
import { stringToSlug, unwrapString } from '../shared.ts'
import type { Config, TemplateFunction, TemplateMap, TemplateOutput } from '../shared.ts'

const blogItem: TemplateFunction = (config: Config, templateMap: TemplateMap) => {
  const { basePath } = config;
  const postTags = config.tags?.split(', ') || [];
  const tagToLink = (t: string): string => `<a href="${basePath}/blog/tag/${stringToSlug(t)}/">${t}</a>`;
  const tagLinks = postTags.map(tagToLink);
  const content = /* html */ `
<article class="blog-item">
  <div class="window">
    <h1>Blog: ${config.title}</h1>
    <div class="card-body">
      ${
        config.description
          ? '<p class="description"><span>description:</span> ' + config.description + '</p>'
          : ''
      }
      ${
        config.tags
          ? '<p class="tags"><span>tags:</span> ' + tagLinks.join(', ') + '</p>'
          : ''
      }
      <p class="date">
        <span style="display: inline-block;">date published: ${config.date_published?.split('T')[0]}</span>
        ${
          config.date_updated
            ? ' | <span style="display: inline-block;">date updated: ' + config.date_updated.split('T')[0] + '</span>'
            : ''
        }
      </p>
      <p class="author">
        <span class="author-name">author:</span>
        <img class="author-avatar" src="${basePath}/images/${unwrapString(config.author_avatar || '')}" alt="" />
        <span class="author-name">${config.author_name}</span>
      </p>
      <p class="cover">
        <img src="${unwrapString(config.cover || '')}" alt="${config.title}" />
      </p>
    </div>
    ${config.content}
  </div>
</article>
`;
  return basic({
    ...config,
    content,
  }, templateMap);
};

export default blogItem;
