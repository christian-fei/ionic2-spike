import {Page} from 'ionic-angular';


@Page({
  templateUrl: 'build/main.html'
})
export class MainPage {
  constructor() {
    this.getPosition()
  }

  getPosition() {
    const self = this
    let options = {timeout: 10000, enableHighAccuracy: true};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('-- position.coords.latitude', position.coords.latitude)
        console.log('-- position.coords.longitude', position.coords.longitude)
        self.userPosition = position.coords
      },
      (error) => {
        console.log(error);
      },
      options
    );
  }
}
