const appendToResult = (value) => {
    let resultInput = document.getElementById('result');

    if(resultInput.value === 'Error') {
        resultInput.value = '';
    }

    if(value === 'DE') {
        resultInput.value = resultInput.value.slice(0, -1);
    } else if(resultInput.value === '0' && !isNaN(value)) {
        resultInput.value = value;
    } else {
        resultInput.value += value;
    }
}

const calculateResult = () => {
    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch(error) {
        document.getElementById('result').value = 'Error';
    }
}

const clearResult = () => {
    document.getElementById('result').value = '';
}