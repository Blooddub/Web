import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.VUE_APP_API_URL;

class UniversityService {

  async getUniversitys() {    
    return await axios.get(API_URL + 'user/' + current_user.id,
    { headers: authHeader() });
  }

  async updateUserInfo(user) {
    const body = {
      id: current_user.id,
      name: user.name
    };
    
    return await axios.patch(API_URL + 'user/update', body ,
      { headers: authHeader() }
    );
  }
}

export default new UniversityService();