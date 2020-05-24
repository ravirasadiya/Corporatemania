import { authHeader } from '../_helpers';

export const apiService = {
  POST,
  GET,
};

function GET(url) {
  const requestOptions = {
    method: 'GET',
    headers: { ...authHeader() },
  };
  return fetch(`http://localhost:9000/` + url, requestOptions).then(
    handleResponse
  );
}

function POST(url, data) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };

  return fetch(`http://localhost:9000/` + url, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    console.log(data);

    return data;
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
