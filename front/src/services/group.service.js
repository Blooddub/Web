import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;

class GroupService {

  async getGroups() {    
    return await axios.get(API_URL + 'groups',
    { headers: authHeader() });
  }

  async createGroup(body) {
    return await axios.post(API_URL + 'groups', body ,
      { headers: authHeader() });
  }

  async getGroup(id) {    
    return await axios.get(API_URL + 'groups/' + id,
    { headers: authHeader() });
  }

  async updateGroup(universitiy) {    
    return await axios.patch(API_URL + 'groups/update', universitiy,
    { headers: authHeader() });
  }

  async deleteGroup(id) {    
    return await axios.delete(API_URL + 'groups/' + id,
    { headers: authHeader() });
  }

}

export default new GroupService();