import { userConstants } from '../constants';
import { categoryService } from '../_services';
// import { alertActions } from './';
import { history } from '../_helpers';

export const categoryActions = {
  addCategory,
};

function addCategory(data) {
  return (dispatch) => {
    let createCategory = {
      name: data.name,
      slug: data.slug,
      description: data.description,
      parentInt: data.parentInt,
      icon: data.icon,
      image: data.image,
      sortOrder: data.sortOrder,
      metaTagTitle: data.metaTagTitle,
      metaTagDescription: data.metaTagDescription,
      metaTagKeyword: data.metaTagKeyword,
      status: data.status,
    };
    categoryService.addCategory(createCategory).then(
      (user) => {
        // dispatch(success(user));
        console.log('added');
      },
      (error) => {
        // dispatch(failure(error));
        // dispatch(alertActions.error(error));
      }
    );
  };
}
