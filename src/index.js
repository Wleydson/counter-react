import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './component/Counter'

const element = document.getElementById('root')
ReactDOM.render(
    <div>
        <Counter number={0} />
    </div>
, element)