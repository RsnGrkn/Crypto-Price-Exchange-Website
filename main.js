var eos = document.getElementById("eos");
var malinka = document.getElementById("malinka");
var zeos = document.getElementById("zeos");
var apecoin = document.getElementById("apecoin");
var monero = document.getElementById("monero");
var zcash = document.getElementById("zcash");

var settings = {
	"async": true,
	"scrossDomain": true,
	"url": "https://api.coingecko.com/api/v3/simple/price?ids=Eos%2CMalinka%2CZeos%2CApecoin%2CMonero%2CZCash&vs_currencies=usd",
	"method": "GET",
	"headers": {}
}

$.ajax(settings).done(function (response) {
	eos.innerHTML = response.eos.usd
	malinka.innerHTML = response.malinka.usd
	zeos.innerHTML = response.zeos.usd
	apecoin.innerHTML = response.apecoin.usd
	monero.innerHTML = response.monero.usd
	zcash.innerHTML = response.zcash.usd
});

