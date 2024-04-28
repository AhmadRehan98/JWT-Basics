const UnauthenticatedError = require("./unauthenticated");
const BadRequestError = require("./bad-request");
const CustomAPIError = require("./custom-error");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
