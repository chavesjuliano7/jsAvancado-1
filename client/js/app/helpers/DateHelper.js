
class DateHelper {

  constructor ( ) {
    throw new Error ('Esta classe não pode ser instanciada');
    // informa que essa classe não pode ser instanciada, assim que o programador tentar, receberá esse erro como retorno.
  }

// static, é utilizado para quando não se faz a necessidade de instanciamento
  static dataParaTexto ( data ) {

    return `${data.getDate ()}-${data.getMonth () + 1}-${data.getFullYear ()}`

 }


  static textoParaData(texto){

    if (/\d{4}\d{2}-\d{2}/.test(texto))
      throw new Error ('Deve estar no formto aaaa-mm-dd')

    return new Date(...texto.split('-').map((item, indice) => item - indice % 2))
  };




}


