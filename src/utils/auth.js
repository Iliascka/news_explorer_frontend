export const authorize = ({ email, password }) => {
  return new Promise((resolve) => {
    resolve({ token: "fake-token-123", email, password });
  });
};

export const checkToken = (token) => {
  return new Promise((resolve) => {
    if (token !== "fake-token-123") {
      throw new Error(`Error: Unothorize token`);
    }
    resolve({
      data: { name: "Brian", email: "brianken@gmail.com", _id: "fake-id-123" },
    });
  });
};
