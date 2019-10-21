
// tslint:disable-next-line:max-line-length
const PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
// /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const PASSWORD_REGEXP = /^.{4,}$/;

const PHONE_REGEXP = /^[0-9]{10,11}$/;

const NAME_REGEXP = /^[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]+(([',. -][a-zA-Z0-9ğüşöçİĞÜŞÖÇ ])?[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]*)*$/;

const POSTAL_CODE_REGEXP = /\d{6}/;

const ADDRESS_REGEXP = /^[0-9]+(([',. -][a-zA-Z0-9ğüşöçİĞÜŞÖÇ ])?[a-zA-Z0-9ğüşöçİĞÜŞÖÇ]*)*$/;

const LOCATION_REGEXP  = /^[A-z ]+$/;

export const regexValidators = {
  email: PURE_EMAIL_REGEXP,
  password: PASSWORD_REGEXP,
  phone: PHONE_REGEXP,
  name: NAME_REGEXP,
  postalCode: POSTAL_CODE_REGEXP,
  address: ADDRESS_REGEXP,
  location: LOCATION_REGEXP
};
