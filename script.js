function changePair(){
var pair=document.getElementById("pairSelect").value;
document.getElementById("chartFrame").src =
"https://s.tradingview.com/widgetembed/?theme=dark&interval=15&symbol=" + pair;
}