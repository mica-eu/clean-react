import axios from 'axios'
import { faker } from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct url', async () => {
    const mockedAxios = jest.spyOn(axios, 'post')
      .mockImplementationOnce(async () => await Promise.resolve())
    const url = faker.internet.url()
    const sut = makeSut()
    await sut.post({ url })
    expect(mockedAxios).toBeCalledTimes(1)
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
