import user from './user';
import file from './file';
import permissions from './permissions'

let allApi = Object.assign(
  user,
  file,
  permissions
);

export default allApi;
