export default {
  Query: {
    async kudii(root, { input }, { KudiiesAPI }) {
      const response = await KudiiesAPI.getKudii(input);
      return response;
    },
    async kudiies(root, { input }, { KudiiesAPI }) {
      const response = await KudiiesAPI.getKudiies(input);
      return response;
    },
  },
  Kudii: {
    fromUser: async (parent, { input }, { UsersAPI }) => {
      const { fromUser } = parent;
      return UsersAPI.getUser({ id: fromUser });
    },
    toUser: async (parent, { input }, { UsersAPI }) => {
      const { toUser } = parent;
      return UsersAPI.getUser({ id: toUser });
    },
  },
};
