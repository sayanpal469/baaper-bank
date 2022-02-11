document.getElementById('deposit-button').addEventListener(
    'click',

    function () {
        const depositInput = document.getElementById('deposit-input');

        const newDeposit = depositInput.value

        const depositTotal = document.getElementById('deposit-total');

        const previousDeposit = depositTotal.innerText;
        const newDepositTotal = parseFloat(previousDeposit) + parseFloat(newDeposit);

        depositTotal.innerText = newDepositTotal

        // update balance

        const balanceTotal = document.getElementById('balance-total');

        const previousBalance = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(previousBalance) + parseFloat(newDeposit)

        balanceTotal.innerText = newBalanceTotal

        // clear input
        depositInput.value = ''
     }
)

// withdraw 

document.getElementById('withdraw-button').addEventListener(
    'click',

    function () {
        
     const withDrawInput = document.getElementById('withdraw-input');

     const newWithdraw = withDrawInput.value;

     const withdrawTotal = document.getElementById('withdraw-total')
     const previousWithdraw = withdrawTotal.innerText;

     const newWithdrawTotal = parseFloat(previousWithdraw) + parseFloat(newWithdraw)
     withdrawTotal.innerText = newWithdrawTotal;

     // update balance

     const balanceTotal = document.getElementById('balance-total');

     const previousBalance = balanceTotal.innerText;
     const newBalanceTotal = parseFloat(previousBalance) - newWithdrawTotal;

     balanceTotal.innerHTML = newBalanceTotal

     // clear input
     withDrawInput.value = ''
    }
)