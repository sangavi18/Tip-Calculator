const billInputNode = document.querySelector('[name="bill-input"]');

    const tipInputNode = document.querySelector('[name="tip-input"]');
    const tipOutputNode = document.querySelector('.tip-output');

    const tipAdditionalOutputNode = document.querySelector('.tip-additional');
    const splitAdditionalOutputNode = document.querySelector('.split-additional');

    const splitInputNode = document.querySelector('[name="split-input"]');
    const splitOutputNode = document.querySelector('.split-output');

    const totalOutputNode = document.querySelector('.total-output');
    const perPersonOutputNode = document.querySelector('.per-person-output');

    billInputNode.addEventListener('input', updateAllTheValues);
    tipInputNode.addEventListener('input', updateAllTheValues);
    splitInputNode.addEventListener('input', updateAllTheValues);

    function updateAllTheValues() {
        tipOutputNode.innerHTML = tipInputNode.value;
        const tipAmount = (billInputNode.value * (tipInputNode.value / 100)).toFixed();

        tipAdditionalOutputNode.innerHTML = `${tipAmount} $`;
        splitOutputNode.innerHTML = splitInputNode.value;
        splitAdditionalOutputNode.innerHTML = `${(100 / splitInputNode.value).toFixed(0)} %`;

        const splitAmount = parseInt(splitInputNode.value);
        const total = parseInt(billInputNode.value) + parseInt(tipAmount);
        totalOutputNode.innerHTML = `${total} $`;
        perPersonOutputNode.innerHTML = `${(total / splitAmount).toFixed()} $`;
    }   