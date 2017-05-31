var Timer = window.setInterval(function(){Tick()}, 1000);
var buildings = [];
var moneyOnClick = 1;
var clickingCost = 1000;
var enhancedClickingQty = 0;

function GameSave(){
	this.money = 0;
}

function EnhancedClicking(){
	if (game.money >= clickingCost) {
		game.money -= clickingCost;
		moneyOnClick = moneyOnClick + 10;
		enhancedClickingQty++;
		document.getElementById("enhancedClickingQty").innerHTML = enhancedClickingQty;
		document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
		Tick();
	}
}

function Building(name,cost,persec,qty) {
	this.Name = "Building Name";
	this.Cost = 10;
	this.PerSec = 1;
	this.Qty = 0;
}

function InitBuildings() {
	LoadBuilding("Lemonade Stand",25,1);
	LoadBuilding("Recycling",100,3);
}

function LoadBuilding(name,cost,persec) {
	var digit = buildings.length;
	
	buildings[digit] = new Building(name,cost,persec);
	buildings[digit].Name = name;
	buildings[digit].Cost = cost;
	buildings[digit].PerSec = persec;
	buildings[digit].CurrentCost = cost;
}

function GatherMoney() {
	game.money = game.money + moneyOnClick;
	document.getElementById("money").innerHTML = game.money;
}

function Tick() {
	game.money += buildings[0].Qty * buildings[0].PerSec;
	game.money += buildings[1].Qty * buildings[1].PerSec;
	document.getElementById("money").innerHTML = game.money;
}

function Build(id) {
	if (game.money >= buildings[id].CurrentCost) {
		game.money -= buildings[id].CurrentCost;
		buildings[id].Qty = buildings[id].Qty + 1;
		document.getElementById("money").innerHTML = game.money;
		document.getElementById("Building"+id+".Qty").innerHTML = buildings[id].Qty;
		var temp = 0;
		for (var i = 0; i < buildings.length; i++){
			temp += buildings[i].PerSec * buildings[i].Qty
		}
		document.getElementById("moneyPerSec").innerHTML = temp;
		var nextCost = Math.floor(buildings[id].Cost * Math.pow(1.1,buildings[id].Qty))
		document.getElementById("Building"+id+".Cost").innerHTML = nextCost;
		buildings[id].CurrentCost = nextCost
	};
}

window.onload = function() {
	InitBuildings();
	window.game = new GameSave();
	document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
};