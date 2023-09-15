import { useNavigate } from "react-router-dom"
export default function Error() {

  const navegacao = useNavigate()
  const voltar = () => {
    return navegacao('/')

  }
  return (
    <main>
      <h1>Erro 404 - Página não encontrada</h1>
      <button onClick={voltar}>Voltar</button>
    </main>
  )
}