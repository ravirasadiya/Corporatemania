import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function imageResizeURL(imageName, imagePath, height, width) {
  const URLPATH = 'http://localhost:9000/api/media/image-resize?';
  const heightM = height ? height : 100;
  const widthM = width ? width : 100;
  const imageURL =
    URLPATH +
    `path=` +
    imagePath +
    `&name=` +
    imageName +
    `&width=` +
    widthM +
    `&height=` +
    heightM;
  // api/media/image-resize?path=banner/&name=Img_1564664546510.jpeg&width=10000&height=400
  return imageURL;
}

export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('user') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);
