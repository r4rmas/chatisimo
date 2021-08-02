const url = "http://localhost:3000";

export const post = (endpoint, data) => {
  return fetch(url + endpoint, {
    method: "POST",
    mode: "cors",
    headers: {
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
