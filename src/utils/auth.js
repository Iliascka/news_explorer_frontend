export const authorize = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "fake-token-123" });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { name: "Brian", email: "brianken@gmail.com", _id: "fake-id-123" },
    });
  });
};
