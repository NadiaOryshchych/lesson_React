export default class CoffeeService {
  _apiBase = 'http://localhost:3000';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  getBestItems() {
    return this.getResource(`/bestsellers/`);
  }
  getCoffeeItems() {
    return this.getResource(`/coffeeList/`);
  }
  getGoodsItems() {
    return this.getResource(`/goods/`);
  }
}