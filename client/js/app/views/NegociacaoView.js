
class NegociacaoView extends View {

  // Se o pai ja tem o constructor, o filho não precisa dele e nem declarar o super.
  // constructor (elemento) {

  //   super(elemento)
  // }

  template(model){

    return `<table class="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>DATA</th>
                  <th>QUANTIDADE</th>
                  <th>VALOR</th>
                  <th>VOLUME</th>
                </tr>
              </thead>

              <tbody>

                ${model.negociacoes.map(n => {

                  return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                  `
                }).join('')}
              </tbody>

              <tfoot>
                <tr>
                <td colspan="3" style="color: white" bgcolor='#24588A' align ="right">Total de Volume</td>
                <td>
                    ${model.negociacoes.reduce((total, nego) => total + nego.volume, 0.0)}
                    </td>
                </tr>
              </tfoot>
            </table>
            `
  }
}

