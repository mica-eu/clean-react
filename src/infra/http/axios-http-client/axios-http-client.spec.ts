import axios from 'axios'
import { mockPostRequest } from '@/data/test/mock-http-post'
import { mockAxios } from '@/infra/test'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

interface SutTypes {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toBeCalledTimes(1)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return correct status code and body', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
