let currentPair = 'BINANCE:BTCUSDT';
let currentTF = '15';

function updateChart(){
document.getElementById('tvChart').src =
`https://s.tradingview.com/widgetembed/?symbol=${currentPair}&interval=${currentTF}&theme=dark`;
}

function changePair(){
currentPair = document.getElementById('pairSelect').value;
updateChart();
}

function changeTF(tf){
currentTF = tf;
document.querySelectorAll('.timeframes button').forEach(b=>b.classList.remove('active'));
event.target.classList.add('active');
updateChart();
}