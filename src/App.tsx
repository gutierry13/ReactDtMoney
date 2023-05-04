import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import {createServer} from 'miragejs'
import Modal from 'react-modal'
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
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
  Modal.setAppElement('#root')
  const [transactionModalOpen,setTransactionModalOpen] = useState(false)
  function handleOpenNewTransactionModal(){
  setTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
  setTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={transactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}

