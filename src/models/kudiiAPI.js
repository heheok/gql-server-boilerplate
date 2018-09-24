export default class KudiiAPI {
  constructor({ connector }) {
    this.connector = connector;
    this.endpoint = '/kudiies';
  }

  getKudiies() {
    return this.connector.get(this.endpoint);
  }

  getKudii({ kudiiID }) {
    return this.connector.get(`${this.endpoint}/${kudiiID}`);
  }
  getKudiiBySender({ sender }) {
    return this.connector.get(`${this.endpoint}`, { fromUser: sender });
  }
  getKudiiByReceiver({ receiver }) {
    return this.connector.get(`${this.endpoint}`, { toUser: receiver });
  }
}
