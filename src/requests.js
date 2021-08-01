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
