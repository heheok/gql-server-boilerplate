export default class UserAPI {
  constructor({ connector }) {
    this.connector = connector;
    this.endpoint = '/users';
  }

  getUsers() {
    return this.connector.get(this.endpoint);
  }

  getUser({ id }) {
    return this.connector.get(`${this.endpoint}/${id}`);
  }
}
