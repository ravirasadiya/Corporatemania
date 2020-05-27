import { userConstants } from '../constants';
import { categoryService } from '../_services';
// import { alertActions } from './';
import { history } from '../_helpers';

export const categoryActions = {
  addCategory,
  updateCategory,
};

function addCategory(data) {
  return (dispatch) => {
    let addCategory = {
      name: data.name,
      parentInt: data.parentInt,
      sortOrder: data.sortOrder,
      description: data.description,
      metaTagTitle: data.metaTagTitle,
      metaTagDescription: data.metaTagDescription,
      metaTagKeyword: data.metaTagKeyword,
      status: data.status,
    };
    categoryService.addCategory(addCategory).then(
      (user) => {
        // dispatch(success(user));
        history.goBack();
      },
      (error) => {
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
}

function updateCategory(data) {
  return (dispatch) => {
    let updateCategory = {
      categoryId: data.categoryId,
      name: data.name,
      parentInt: data.parentInt,
      image: data.image,
      sortOrder: data.sortOrder,
      metaTagTitle: data.metaTagTitle,
      metaTagDescription: data.metaTagDescription,
      metaTagKeyword: data.metaTagKeyword,
      status: data.status,
    };
    categoryService.updateCategory(updateCategory).then(
      (user) => {
        // dispatch(success(user));
        history.goBack();
      },
      (error) => {
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
}
