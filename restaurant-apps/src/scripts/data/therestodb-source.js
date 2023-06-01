import API_ENDPOINT from '../globals/api-endpoint';

class TherestoDbSource {
  static async nowPlayingrestos() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  // static async upcomingrestos() {
  //   const response = await fetch(API_ENDPOINT.UPCOMING);
  //   const responseJson = await response.json();
  //   return responseJson.results;
  // }

  static async detailresto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default TherestoDbSource;
