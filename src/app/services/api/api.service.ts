import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor() { }

  // public uploadDisplayPhoto(data) {
  //   let formData = new FormData()
  //   formData.append('displayPhoto', data)
  //   return this.httpClient.post(environment.api_path + this.API_VERSION + 'files/displayPhoto', formData)
  // }
}
