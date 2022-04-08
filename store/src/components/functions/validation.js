export const validation = (data) => {
  const errorrs = {};

  if (!data.name) {
    errorrs.name = "Name required";
  } else {
    delete errorrs.name;
  }

  if (!data.email) {
    errorrs.email = "email required";
  } else if (!/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(data.email)) {
    errorrs.email = "Email is not valid";
  } else {
    delete errorrs.email;
  }

  if (!data.password) {
    errorrs.password = "password required";
  } else if (data.password.length < 6) {
    errorrs.password = "password need to be 6 character or more";
  } else {
    delete errorrs.password;
  }

  if (!data.confirmPassword) {
    errorrs.confirmPassword = "confirm password";
  } else if (data.confirmPassword !== data.password) {
    errorrs.confirmPassword = "password do not match";
  } else {
    delete errorrs.email;
  }

  if (data.isAccept) {
    delete data.isAccept;
  } else {
    errorrs.isAccept = "!";
  }

  return errorrs;
};
