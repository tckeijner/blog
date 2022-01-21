module.exports = {
  registerUser({ email, password }) {
    console.log('user registered in store');
    console.log('email: ' + email);
    console.log('password: ' + password);
  },
};
