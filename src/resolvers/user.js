export default {
  Query: {
    async users(root, input, { UsersAPI }) {
      const response = await UsersAPI.getUsers(input);
      return response;
    },
    async user(root, input, { UsersAPI }) {
      const response = await UsersAPI.getUser(input);
      return response;
    },
  },
  User: {
    sentKudiies: async (parent, input, { KudiiesAPI }) => {
      const { id } = parent;
      return KudiiesAPI.getKudiiBySender({ sender: id });
    },
    receivedKudiies: async (parent, input, { KudiiesAPI }) => {
      const { id } = parent;
      return KudiiesAPI.getKudiiByReceiver({ receiver: id });
    },
  },
};
