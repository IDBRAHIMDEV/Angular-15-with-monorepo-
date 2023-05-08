import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly APP_TOKEN = 'app_token'

  setToken(data: string) {
    localStorage.setItem(this.APP_TOKEN, data)
  }

  getToken() {
    return localStorage.getItem(this.APP_TOKEN)
  }

  removeToken() {
    localStorage.removeItem(this.APP_TOKEN)
  }

  expiredToken(expiration: number): boolean {
    return Math.floor(new Date().getTime() / 1000) >= expiration
  }
}
