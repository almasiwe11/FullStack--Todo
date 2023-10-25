import { CustomApiError } from "../errors/custom-error.ts"

const errorHandlerMiddleware = (err, req, res) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: "smth went wrong" })
}

export { errorHandlerMiddleware }
