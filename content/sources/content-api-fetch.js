import request from 'request-promise-native'; 
import { CONTENT_BASE, ARC_ACCESS_TOKEN } from 'fusion:environment';

const schemaName = 'article';

const params = {
  website_url : 'text',
  published: 'text',
};

const fetch = (key) => {
  const arcsite = key['arc-site'] || 'demo';
  let requestUri = `${CONTENT_BASE}/content/v4/stories/?website_url=${ key.website_url || key }&website=${arcsite}`;
  requestUri = (key.hasOwnProperty('published')) ? `${requestUri}&published=${key.published}` : requestUri;

  return request({
    uri: requestUri,
    json: true,
    auth: {
      bearer: ARC_ACCESS_TOKEN
    },
  }).then((content) => {
    return content;
  });
};

export default {
  fetch,
  params,
  schemaName,
};
