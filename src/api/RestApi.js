import isEmpty from 'lodash.isempty'
import isPojo from 'lodash.isplainobject'

const callWithoutBody = (method) => function (path, params = {}, init = {}) {
  const url = new URL(path, this.baseUrl);
  if (!isEmpty(params)) {
    url.search = new URLSearchParams(params);
  }
  return fetch(url, {
    ...this.defaultInit,
    ...init,
    ...{
      method,
      body: null
    }
  }).then(res => res.json.then(data => new Promise((resolve, reject) => {
    if (res.ok) {
      resolve(data);
    } else {
      reject(data);
    }
  })));
} 

const callWithBody = (method) => function (path, data = null, init = {}) {
  const url = new URL(path, this.baseUrl)
  const body = isPojo(data) ? JSON.stringify(data) : data;
  return fetch(url, {
    ...this.defaultInit,
    ...init,
    ...{
      method,
      body,
    }
  }).then(res => res.json().then(result => new Promise((resolve, reject) => {
    if (res.ok) {
      resolve(result)
    } else {
      reject(reject)
    }
  })));
}

export default class RestApi {
  constructor(baseUrl, init = {}) {
    this.baseUrl = baseUrl
    this.defaultInit = init

    this.get = callWithoutBody('GET')
    this.delete = callWithoutBody('DELETE')
    this.head = callWithoutBody('HEAD')

    this.post = callWithBody('POST')
    this.put = callWithBody('PUT')
    this.patch = callWithBody('PATCH')
  }
}
