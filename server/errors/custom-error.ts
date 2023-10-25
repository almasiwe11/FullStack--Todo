/* eslint-disable @typescript-eslint/no-explicit-any */
class CustomApiError extends Error {
  statusCode: any
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
  }
}

function createCustomError(msg, statusCode) {
  return new CustomApiError(msg, statusCode)
}

export { CustomApiError, createCustomError }
