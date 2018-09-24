import UserAPI from './userAPI';
import KudiiAPI from './kudiiAPI';

const getContext = connector => ({
  UsersAPI: new UserAPI({ connector }),
  KudiiesAPI: new KudiiAPI({ connector }),
});

export default getContext;
