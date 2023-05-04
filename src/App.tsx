import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import {createServer} from 'miragejs'
import { GlobalStyle } from "./styles/global";
createServer({
  routes(){
    this.namespace = 'api'
    this.get('/transactions',()=>{
      return[
        {
          id:1,
          title:"transaction",
          amount: 400,
          type: 'deposit',
          category:'foot',
          createdAt: new Date()
        }
      ]
    })
  }
})
export function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Dashboard/>
    </>
  );
}

