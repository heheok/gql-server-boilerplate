import DataLoader from 'dataloader';
import fetch from 'node-fetch';
import url from 'url';

export default class Connector {
  constructor(apiUrl, accessToken) {
    this.api = apiUrl;
    this.accessToken = accessToken;
    this.loader = new DataLoader(this.fetch.bind(this), {
      batch: false,
    });
  }

  fetch(urls) {
    return Promise.all(
      urls.map(
        requestUrl =>
          new Promise((resolve, reject) => {
            fetch(requestUrl, {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: this.accessToken,
              },
            })
              .then(response => resolve(response.json()))
              .catch(err => reject(err));
          }),
      ),
    );
  }

  async withHeaders(path, input, method = 'POST') {
    const requestUrl = url.format({
      pathname: this.api.concat(path),
      search: input && input.locale ? `locale=${input.locale}` : null,
    });

    const response = await fetch(requestUrl, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: this.accessToken,
      },
      body: JSON.stringify(input),
      method,
    });
    const json = await response.json();
    return json;
  }

  get(path, input) {
    const requestUrl = url.format({
      pathname: this.api.concat(path),
      query: input,
    });
    return this.loader.load(requestUrl);
  }

  async put(path, input) {
    const response = await this.withHeaders(path, input, 'PUT');
    return response;
  }

  async post(path, input) {
    const response = await this.withHeaders(path, input, 'POST');
    return response;
  }

  async delete(path, input) {
    const response = await this.withHeaders(path, input, 'DELETE');
    return response;
  }

  async patch(path, input) {
    const response = await this.withHeaders(path, input, 'PATCH');
    return response;
  }
}
