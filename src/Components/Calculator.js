import React, { useEffect, useState } from 'react'
import ShowCal from './ShowCal';
import './style.css'

const Calculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    useEffect(() => {
        setExpression(result)
    }, [result])

    const myCalArray = [
        ['C', '+-', '%', '/'],
        [7, 8, 9, '*'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '=']
    ];

    // useEffect(() => {
    //     handleClick();
    // }, [valve])

    let activeClass = '';
    const handleClick = (click) => {
        if (expression === undefined) {
            setExpression(click);
        }
        else {
            setExpression(expression + click.toString());
        }
        if (click === 'C') {
            setExpression('');
            setResult('')
        }
        if (click === '=') {
            // setExpression(expression)
            setResult(eval(expression))
        }
    }

    let breaker = '';
    const Cal = myCalArray.flat().map((items, index) => {
        if ((index + 1) % 4 === 0) {
            breaker = <br />
        }
        else {
            breaker = ''
        }
        if (typeof (items) === 'number') {
            activeClass = 'numaric-buttons'
        }
        // if (typeof (items) === 'string') {
        //     activeClass = 'operations-buttons'
        // }
        else if (typeof (items) === 'string') {
            activeClass = 'operations-buttons'
        }
        else {
            activeClass = ''
        }
        return (
            <>
                <ShowCal activeClass={activeClass} OnClick={() => handleClick(items)} key={index} items={items} />
                {breaker}
            </>
        )
    })
    console.log(result);
    const handleChange = (event) => {
        setExpression(event.target.value);
    }
    return (
        <div>
            <input value={expression} onChange={handleChange} />
            {/* {result} */}
            <br />
            {Cal}


        </div>
    );
}

export default Calculator
