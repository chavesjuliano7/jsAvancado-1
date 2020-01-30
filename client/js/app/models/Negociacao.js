class Negociacao {
  constructor (data, quantidade, valor) {
    this._data = new Date (data.getTime()); /* ele sempre vai manter a data do atributo pq ele gera na hora*/
    this._quantidade = quantidade;
    this._valor = valor;


    Object.freeze(this) /* congela os dados do objeto*/
  }

  get volume (){
    return this._quantidade * this._valor;
  }

  get data(){
    return new Date(this._data.getTime());
  }
  get quantidade(){
    return this._quantidade;
  }

  get valor () {
    return this._valor;
  }

}

























