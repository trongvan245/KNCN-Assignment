import { classifierReqBody } from './models'
import { ParamsDictionary } from 'express-serve-static-core'
import { Request, Response } from 'express'

export const classifierController = async (req: Request<ParamsDictionary, any, classifierReqBody>, res: Response) => {
  // console.log(req.body)
  const { img } = req.body
  console.log(img)
  return res.json({
    message: 'Success'
  })
}
