import basic from './basic.ts';
import { getTagLink, unwrapString, DEFAULT_COVER_IMAGE, getAuthorAvatarPath } from '../shared.ts'
import type { Config, TemplateFunction, TemplateMap } from '../shared.ts'

const blogItem: TemplateFunction = (config: Config, templateMap: TemplateMap) => {
  const { basePath } = config;
  const postTags = config.tags?.split(', ') || [];
  const tagLinks = postTags.map((t: string) => getTagLink(t, basePath));
  const coverSrc = config.cover ? unwrapString(config.cover) : `${basePath}/${DEFAULT_COVER_IMAGE}`;
  const authorAvatar = `${basePath}/${getAuthorAvatarPath(config.author_avatar)}`;
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
        <img class="author-avatar" src="${authorAvatar}" alt="${config.author_name}'s avatar" />
        <span class="author-name">${config.author_name}</span>
      </p>
      <p class="cover">
        <img src="${coverSrc}" alt="${config.title}" />
      </p>
    </div>
    ${config.content}
  </div>
</article>
`;
  return basic({
    ...config,
    og_type: 'article',
    content,
  }, templateMap);
};

export default blogItem;
