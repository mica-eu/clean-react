import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: JSON.parse(faker.datatype.json())
})

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toBeCalledTimes(1)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })
})
