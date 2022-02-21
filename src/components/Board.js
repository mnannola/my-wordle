import { useState } from 'react';
import './Board.css';
import Row from './Row.js';

function Board({rowsArr, handleRowChange}) {

    const rows_jsx = rowsArr.map((rowArr, i) => {
        return (
            <Row 
                row={rowArr} 
                rowIndex={i} 
                handleRowChange={handleRowChange}
                key={i}
            />
        )
    })
    return (
        <div className="board-container">
            <div className="board-content">
                {rows_jsx}
            </div>
            
        </div>
    )
}


export default Board;