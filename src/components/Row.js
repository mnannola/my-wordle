import './Row.css';
import Box from './Box.js';

function Row({row, rowIndex, handleRowChange}) {

    function handleChange({target}) {
        debugger;
        const index = getIndex(target.name);
        handleRowChange(target.value, rowIndex, index);
        
        focusNextChar(target);
    }

    function handleKeyDown({target, key}) {
        debugger;
        const index = getIndex(target.name)
        if (key === 'Backspace') {
            if (target.value === '' && target.previousElementSibling !== null) {
                // User is attempting to delete the previous character
                handleRowChange('', rowIndex, index-1);
                focusPrevChar(target);
            } else {
                handleRowChange(target.value, rowIndex, index);
            }
        } else {
            debugger;
        }
    }

    function focusNextChar(target) {
        if (target.nextElementSibling !== null) {
            target.nextElementSibling.focus();
        }
    }

    function focusPrevChar(target) {
        if (target.previousElementSibling !== null) {
            target.previousElementSibling.focus();
        }
    }

    function getIndex(name) {
        return parseInt(name.charAt(name.length-1), 10);
    }

    const boxes = row.map((char, i) => <Box key={i} handleChange={handleChange} handleKeyDown={handleKeyDown} name={'input' + i} char={char}/>)
    return (
        <div className="row">
            {boxes}
        </div>
    )
}

export default Row;