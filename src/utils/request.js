import { Promise } from 'es6-promise';
import getWindow from 'utils/window';

const world = getWindow();
let useFormDataHack = false;
if (!world.FormData) {
  useFormDataHack = true;
  world.FormData = () => {};
}

const superagent = require('superagent');
if (useFormDataHack) {
  delete world.FormData;
}

const requestTypes = [
  'post', 'put', 'delete', 'get'
];

const defaultOptions = {
  method: 'get',
  queryParams: {},
  data: {},
  headers: {},
  flags: []
};

function getBodyObject (result) {
  if (result.body) {
    return result.body;
  }
  if (result.text) {
    try {
      return JSON.parse(result.text);
    } catch (e) {
      return null;
    }
  }
}

function buildRequest (opts) {
  let options = merge(defaultOptions, opts);
  if (!contains(options.method, requestTypes)) {
    throw new Error(`Unknown method: '${options.method}'. Must be one of: ${requestTypes.join(',')}`);
  }

  let req = superagent[options.method](options.url);
  req.use(legacyIESupport);
  if (keys(options.queryParams).length > 0) {
    req.query(options.queryParams);
  }
  if (keys(options.dataParams).length > 0) {
    req.send(options.dataParams);
  }
  for (let headerName in options.headers) {
    req.set(headerName, options.headers[headerName]);
  }
  options.flags.forEach(flag => {
    if (!isFunction(req[flag])) {
      throw new Error(`Invalid flag ${flag}`);
    }
    req[flag]();
  });
  if (options.callback) {
    req.end(options.callback);
  }
  return req;
}

export default function request (options) {
  let req = buildRequest(options);
  return new Promise((resolve, reject) => {
    req.end((err, data) => {
      if (err) {
        reject(err, data, req);
      } else {
        resolve(data, req);
      }
    });
  });
}
