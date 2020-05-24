import { apiService } from './api.service';

export const bannerService = {
    addBanner,
    getAll
};

function addBanner(requestData) {
    return apiService.POST(`api/banner/add-banner`, requestData).then((data) => {
        let user = data.data;
        return user;
    });
}

function getAll() {
    return apiService.GET(`api/banner/bannerlist`).then((data) => {
        let user = data.data;
        return user;
    });
}