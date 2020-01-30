class ListaNegociacoes {

  constructor (){

    this._negociacoes = []
  }

  adiciona (negociacao){

    this._negociacoes.push(negociacao);
  }

  get negociacoes () {

    return [].concat(this._negociacoes); //quando chamada, ela cria uma copia do array, assim o constructor não sera alterado.
  }

}