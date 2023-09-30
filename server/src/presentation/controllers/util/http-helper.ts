import { HttpResponse } from "@/presentation/controllers/ports"

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: {
    name: error.name,
    message: error.message,
  },
})

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: {
    name: error.name,
    message: error.message,
  },
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: {
    name: error.name,
    message: error.message,
  },
})
