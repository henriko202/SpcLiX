import { MissingParamError } from "@/presentation/controllers/errors"
import { ControllerOperation, HttpRequest, HttpResponse } from "@/presentation/controllers/ports"
import { badRequest, serverError } from "@/presentation/controllers/util"

export class WebController {
  private controllerOp: ControllerOperation

  constructor(controllerOp: ControllerOperation) {
    this.controllerOp = controllerOp
  }

  public async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const missingParams: string = WebController.getMissingParams(request, this.controllerOp.requiredParams || [])
      if (missingParams) {
        return badRequest(new MissingParamError(missingParams))
      }
      return await this.controllerOp.specificOp(request)
    } catch (error) {
      return serverError(error as Error)
    }
  }

  public static getMissingParams(request: HttpRequest, requiredParams: string[]): string {
    const missingParams: string[] = []
    const params = request.body

    if (params) {
      requiredParams.forEach(function (name) {
        if (!Object.keys(params).includes(name)) {
          missingParams.push(name)
        }
      })
    }
    return missingParams.join(", ")
  }
}
