import { useParams, useNavigate } from "react-router-dom"
import { listaProdutos } from "../../components/listaProdutos"
export default function EditarProduto() {
  const lista = listaProdutos
  const navegacao = useNavigate()
  const { id } = useParams()

  const proc = lista.filter(prod => prodid == id)
  const produto = proc[0]

  const salvar = () => {
    alert(`Produto: ${produto.nome} editado com sucesso!`)
    return navegacao('/produto')

  }
  return (
    <main>
      <h1>Editando o produto</h1>
      <p>Editando os dados do produto: {produto.nome}</p>
      <button> onClick={salvar}Salvar</button>
    </main>
  )
}
