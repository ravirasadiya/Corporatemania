import { authHeader } from '../_helpers';
import { apiService } from './api.service';
export const categoryService = {
  categorylist,
  addCategory,
};

function categorylist() {
  return apiService
    .GET(`api/categorylist?limit=&offset=&keyword=&sortOrder=&status=`)
    .then((data) => {
      let user = data.data;
      // login successful if there's a jwt token in the response

      return user;
    });
}

function addCategory(requestData) {
  return apiService.POST(`api/add-category`, requestData).then((data) => {
    let user = data.data;
    // login successful if there's a jwt token in the response

    return user;
  });
}
