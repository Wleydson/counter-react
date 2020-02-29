import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './component/Counter'
import Hook from './component/CounterHook'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Counter number={0} />
        <Hook/>
    </div>
, element)