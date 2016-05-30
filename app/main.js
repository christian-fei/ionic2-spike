import {Page} from 'ionic-angular'


@Page({
  templateUrl: 'build/main.html'
})
export class MainPage {
  constructor() {
    this.getPosition()
  }

  getPosition() {
    const self = this
    const options = {timeout: 10000, enableHighAccuracy: true}
    navigator.geolocation.getCurrentPosition(
      (position) => self.userPosition = position.coords,
      (error) => console.log(error),
      options
    )
  }
}
