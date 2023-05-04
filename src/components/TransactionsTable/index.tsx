import { useEffect } from "react"
import { Container } from "./style"

export const TransactionsTable = () => {
  useEffect(()=>{
    fetch('https://localhost:3000/api/transactions').then(response => response.json()).then(transactions => console.log(transactions))
  },[])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Casa</td>
            <td>13/02/2022</td>
          </tr>
          {/* <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr> */}
        </tbody>
      </table>
    </Container>
  )
}