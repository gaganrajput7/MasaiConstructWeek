var kadha=document.getElementById('Kadha');
kadha.innerHTML=92;
var tab=document.getElementById('Tab');
tab.innerHTML=120;
var Minerals=document.getElementById('Minerals');
Minerals.innerHTML=200;
var Respo=document.getElementById('Respo');
Respo.innerHTML=300;

var list=[
    {
        Name:'Kadha',
        Price:92
    },
    {
        Name:'Tablet',
        Price:120
    },
    {
        Name:'Minerals',
        Price:200
    },
    {
        Name:'Respo',
        Price:300
    }
];

function add(){
    var sum=parseInt(document.getElementById('sum').value);
    var delivery=parseInt(document.getElementById('delivery').value);
    document.getElementById('total').innerHTML=sum+delivery;
}
