export default class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      //resolved вместо status
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource('/characters?page=28&pageSize=10');
    return res.map(this._transformCharacter)
  }
  getCharacter = async (id) => {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacter(character);
  }

  getAllBooks = async () => {
    const res = await this.getResource('/books?page=1&pageSize=12');
    return res.map(this._transformBooks)
  }
  getBook = async (id) => {
    const book = await this.getResource(`/books/${id}`);
    return this._transformCharacter(book  );
  }

  getAllHouses = async () => {
    const res = await this.getResource('/houses?page=5&pageSize=10');
    return res.map(this._transformHouses)
  }
  getHouse = async (id) => {
    const house = await this.getResource(`/houses/${id}`);
    return this._transformCharacter(house);
  }

  isSet(data) {
    if (data) {
      return data
    } else  {
      return 'is unknown'
    }
  }

  _transformCharacter = (char) => {
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
      // id: char.url.substr(49)
      // id: char.url.substr(char.url.lastIndexOf('/') + 1)
      id: char.url.match(/\/([^/]*)$/)[1]
    }
  }

  _transformBooks = (book) => {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released,
      id: book.url.match(/\/([^/]*)$/)[1]
    }
  }

  _transformHouses = (house) => {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overload: house.overload,
      ancestralWeapons: house.ancestralWeapons,
      id: house.url.match(/\/([^/]*)$/)[1]
    }
  }

}