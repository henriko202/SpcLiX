export interface UseCase {
  perform(request: any): Promise<any>
  perform(): Promise<any>
}
