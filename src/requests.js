const url = "https://chatisimo-api.vercel.app";

export const post = (endpoint, data, headers = {}) => {
  return fetch(url + endpoint, {
    method: "POST",
    mode: "cors",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const get = (endpoint, token) => {
  return fetch(url + endpoint, {
    method: "GET",
    mode: "cors",
    headers: {
      "auth-token": token,
    },
  });
};
