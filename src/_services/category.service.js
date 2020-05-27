import { authHeader } from '../_helpers';
import { apiService } from './api.service';
export const categoryService = {
  categorylist,
  addCategory,
  updateCategory,
};

function categorylist() {
  return apiService
    .GET(`api/categorylist?limit=&offset=&keyword=&sortOrder=&status=`)
    .then((data) => {
      let categoryData = data.data;
      // login successful if there's a jwt token in the response

      return categoryData;
    });
}

function addCategory(requestData) {
  return apiService.POST(`api/add-category`, requestData).then((data) => {
    let category = data.data;
    // login successful if there's a jwt token in the response

    return category;
  });
}

function updateCategory(requestData) {
  return apiService
    .PUT(`api/update-category/` + requestData.categoryId, requestData)
    .then((data) => {
      let updateCategory = data.data;
      // login successful if there's a jwt token in the response

      return updateCategory;
    });
}
