import { apiService } from './api.service';

export const bannerService = {
  addBanner,
  updateBanner,
  deleteBanner,
  getAll,
};

function addBanner(requestData) {
  return apiService.POST(`api/banner/add-banner`, requestData).then((data) => {
    let banner = data.data;
    return banner;
  });
}

function updateBanner(requestData) {
  return apiService
    .PUT(`api/banner/update-banner/` + requestData.bannerId, requestData)
    .then((data) => {
      let editbanner = data.data;
      return editbanner;
    });
}

function deleteBanner(bannerId) {
  return apiService
    .DELETE(`api/banner/delete-banner/` + bannerId)
    .then((data) => {
      return data;
    });
}

function getAll() {
  return apiService.GET(`api/banner/bannerlist`).then((data) => {
    let user = data.data;
    return user;
  });
}
