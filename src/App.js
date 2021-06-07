import React, { useReducer } from 'react';
import reducer, { initialState } from "./reducers/index.js"
import './App.css';
import { addOne, applyNumber, applyOperator, clearDisplay, memClear, memPlus, memRecall} from "./actions/index.js"

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {
const [state, dispatch] = useReducer(reducer, initialState)

// const handlePlusOne = () => {
//   dispatch(addOne())
// }

const passNum = (e) => {
  dispatch(applyNumber(parseInt(e.target.value)))
}

const passOperator = (oper) => {
  console.log(oper)
  dispatch(applyOperator(oper.target.value))
}

const clearTotal = () => {
  dispatch(clearDisplay())
}

const memoryClear = () => {
  dispatch(memClear());
}

const memoryAdd = () => {
  dispatch(memPlus());
}

const memoryRecall = () => {
  dispatch(memRecall())
}

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={memoryAdd} value={"M+"}/>
              <CalcButton onClick={memoryRecall} value={"MR"}/>
              <CalcButton onClick={memoryClear} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={passNum} value={1}/>
              <CalcButton onClick={passNum} value={2}/>
              <CalcButton onClick={passNum} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={passNum} value={4}/>
              <CalcButton onClick={passNum} value={5}/>
              <CalcButton onClick={passNum} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={passNum} value={7}/>
              <CalcButton onClick={passNum} value={8}/>
              <CalcButton onClick={passNum} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={passOperator} value={"+"}/>
              <CalcButton onClick={passOperator} value={"*"}/>
              <CalcButton onClick={passOperator} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={clearTotal} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
