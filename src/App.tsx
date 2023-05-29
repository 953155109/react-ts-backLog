/*
 * @Descripttion:
 * @version:
 * @Author: EVE
 * @Date: 2023-04-07 15:08:20
 * @LastEditors: EVE
 * @LastEditTime: 2023-05-28 17:41:30
 */
import React from "react"
import "./App.css"
import FilterableProductTable from "./components/FilterableProductTable"
function App() {
  return (
    <div className="App">
      <FilterableProductTable />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <div className='top'>Hello world1</div>
    //     <div className='midden'>Hello world2</div>
    //     <div className='bottom'>Hello world3</div>
    //   </header>
    // </div>
  )
}

export default App
