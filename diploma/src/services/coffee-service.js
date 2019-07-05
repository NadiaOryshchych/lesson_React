export default class CoffeeService {
  _apiBase = 'http://localhost:3000';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getBestItems() {
    return await this.getResource(`/bestsellers/`);
  }
  async getCoffeeItems() {
    return await this.getResource(`/coffeeList/`);
  }
  async getGoodsItems() {
    return await this.getResource(`/goods/`);
  }
}