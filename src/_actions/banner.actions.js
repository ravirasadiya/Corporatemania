import { bannerConstants } from '../constants';
import { bannerService } from '../_services';
// import { alertActions } from './alert.actions';
import { history } from '../_helpers';

export const bannerActions = {
  addBanner,
  updateBanner,
};

function addBanner(banner) {
  return (dispatch) => {
    dispatch(request(banner));
    const bannerRequest = {
      title: banner.title,
      content: banner.content,
      image: banner.image,
      link: banner.url,
      position: banner.position,
      status: banner.status,
    };

    bannerService.addBanner(bannerRequest).then(
      (banner) => {
        dispatch(success());
        history.goBack();
        // dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: bannerConstants.ADD_REQUEST, user };
  }
  function success(user) {
    return { type: bannerConstants.ADD_SUCCESS, user };
  }
  function failure(error) {
    return { type: bannerConstants.ADD_FAILURE, error };
  }
}

function updateBanner(banner) {
  return (dispatch) => {
    // dispatch(request(banner));
    const bannerRequest = {
      bannerId: banner.bannerId,
      title: banner.title,
      content: banner.content,
      image: banner.image,
      link: banner.url,
      position: banner.position,
      status: parseInt(banner.status),
    };

    bannerService.updateBanner(bannerRequest).then(
      (banner) => {
        // dispatch(success());
        history.goBack();
        // dispatch(alertActions.success('Registration successful'));
      },
      (error) => {
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
}
