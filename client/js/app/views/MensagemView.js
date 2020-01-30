class MensagemView extends View {

  constructor (elemento) {

    super(elemento)

  }

  template(model) {

    return  model._texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`;

  }


}