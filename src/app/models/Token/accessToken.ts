import { RefreshToken } from "./refreshToken"

export class AccessToken{
    token:string
    refreshToken:RefreshToken
    expirationTime:Date
}