import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/Index";
import Modal from 'react-modal'
import {  TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={transactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

