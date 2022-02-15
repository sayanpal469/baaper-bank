document.getElementById('deposit-button').addEventListener(
    'click',

    function () {
        const depositInput = document.getElementById('deposit-input');
        const newDeposit = depositInput.value;

        const depositTotal = document.getElementById('deposit-total');
        const previousDeposit = depositTotal.innerText
        const newDepositTotal = parseFloat(previousDeposit) + parseFloat(newDeposit);
        depositTotal.innerText = newDepositTotal

        // update total balance
        const totalBalance = document.getElementById('balance-total');
        const previousBalance = totalBalance.innerText
        const newTotalBalance = parseFloat(previousBalance) + parseFloat(newDeposit)
        totalBalance.innerText = newTotalBalance;
        
        // clear deposit input
        depositInput.value = ''
    }
)

document.getElementById('withdraw-button').addEventListener(
    'click',

    function () {
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawNew = withdrawInput.value;

        const totalWithdraw = document.getElementById('withdraw-total');
        const previousWithdraw = totalWithdraw.innerText;
        const newTotalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawNew)
        totalWithdraw.innerText = newTotalWithdraw;

        // update balance
        const totalBalance = document.getElementById('balance-total');
        const previousBalance = totalBalance.innerText;
        const newTotalBalance = parseFloat(previousBalance) - parseFloat(withdrawNew);
        
        totalBalance.innerText = newTotalBalance;

        // clear withdraw input
        withdrawInput.value = ''
    }

)