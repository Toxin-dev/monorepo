class User {
  // constructor({ email, password, phonenumber, otp }) {
  //   this.create({ email, password, phonenumber, otp });
  // }
  // save(finalData) {
  //   try {
  //     console.log(finalData);
  //     // TODO: post request to database;
  //   } catch (error) {
  //     throw TypeError("Can not save user data to database.");
  //   }
  // }
  create(userData) {
    this.save(userData);
  }
}

export default new User();
