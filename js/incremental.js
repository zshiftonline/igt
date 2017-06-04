//timer for persec functions
var Timer = window.setInterval(function(){Tick()}, 1000);

// global variables
var buildings = [];
var upgrades = [];
var moneyOnClick = 1;

function GameSave(){
	this.money = 0;
}

var enhancedClickingCost = 1000;
var enhancedClickingQty = 0;
function EnhancedClicking(){
	if (game.money >= enhancedClickingCost) {
		game.money -= enhancedClickingCost;
		moneyOnClick = moneyOnClick + 10;
		enhancedClickingQty++;
		document.getElementById("enhancedClickingQty").innerHTML = enhancedClickingQty;
		document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
		
		var nextenhancedClickingCost = Math.floor(enhancedClickingCost * Math.pow(1.05,enhancedClickingQty))
		document.getElementById("enhancedClickingCost").innerHTML = nextenhancedClickingCost;
		enhancedClickingCost = nextenhancedClickingCost
		Tick();
	}
}

var ultraClickingCost = 20000;
var ultraClickingQty = 0
function UltraClicking(){
	if (game.money >= ultraClickingCost) {
		game.money -= ultraClickingCost;
		moneyOnClick = moneyOnClick + 200;
		ultraClickingQty++;
		document.getElementById("ultraClickingQty").innerHTML = ultraClickingQty;
		document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
		
		var nextultraClickingCost = Math.floor(ultraClickingCost * Math.pow(1.075,ultraClickingQty))
		document.getElementById("ultraClickingCost").innerHTML = nextultraClickingCost;
		ultraClickingCost = nextultraClickingCost
		Tick();
	}
}

var megaClickingCost = 300000;
var megaClickingQty = 0
function MegaClicking(){
	if (game.money >= megaClickingCost) {
		game.money -= megaClickingCost;
		moneyOnClick = moneyOnClick + 800;
		megaClickingQty++;
		document.getElementById("megaClickingQty").innerHTML = megaClickingQty;
		document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
		
		var nextmegaClickingCost = Math.floor(megaClickingCost * Math.pow(1.1,megaClickingQty))
		document.getElementById("megaClickingCost").innerHTML = nextmegaClickingCost;
		megaClickingCost = nextmegaClickingCost
		Tick();
	}
}

var supremeClickingCost = 1000000;
var supremeClickingQty = 0
function SupremeClicking(){
	if (game.money >= supremeClickingCost) {
		game.money -= supremeClickingCost;
		moneyOnClick = moneyOnClick + 2000;
		supremeClickingQty++;
		document.getElementById("supremeClickingQty").innerHTML = supremeClickingQty;
		document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
		
		var nextsupremeClickingCost = Math.floor(supremeClickingCost * Math.pow(1.125,supremeClickingQty))
		document.getElementById("supremeClickingCost").innerHTML = nextsupremeClickingCost;
		supremeClickingCost = nextsupremeClickingCost
		Tick();
	}
}
// function that loads buildings/upgrades on start
function Building(name,cost,persec,qty) {
	this.Name = "Building Name";
	this.Cost = 10;
	this.PerSec = 1;
	this.Qty = 0;
}

// function upgrades(name,cost,perclick,qty) {
	// this.Name = "Building Name";
	// this.Cost = 10;
	// this.PerClick = 1;
	// this.Qty = 0;
// }

function InitBuildings() {
	LoadBuilding("Lemonade Stand",25,1);
	LoadBuilding("Lemon Sweeteners",100,5);
	LoadBuilding("Lemonade Delivery",500,10);
	LoadBuilding("Lemon Recycling",1000,25);
	LoadBuilding("Lemon Fuel Station",2500,75);
	LoadBuilding("Lemon Sea Floor Farms",5000,125);
	LoadBuilding("Lemon Based Pharmaceutical Company",7500,250);
	LoadBuilding("Lemon Cancer Research Fundraisers",10000,500);
}

// function InitUpgrades(){
	// LoadUpgrade("Enhanced Clicking",1000,10,0);
	// LoadUpgrade("Ultra Clicking",20000,200,0);
	// LoadUpgrade("Mega Clicking",300000,800,0);
	// LoadUpgrade("Supreme Clicking",1000000,2000,0);
// }

// functions that create the buildings buildings and their specifc values
function LoadBuilding(name,cost,persec) {
	var digit = buildings.length;
	
	buildings[digit] = new Building(name,cost,persec);
	buildings[digit].Name = name;
	buildings[digit].Cost = cost;
	buildings[digit].PerSec = persec;
	buildings[digit].CurrentCost = cost;
}

// function LoadUpgrade(name,cost,perclick,qty){
	// var digit = upgrades.length;
	
	// upgrades[digit].Name = name;
	// upgrades[digit].Cost = cost;
	// upgrades[digit].PerClick = perclick;
	// upgrades[digit].Qty = qty;
	// upgrades[digit].CurrentCost = cost;
// }

//main clicking function
function GatherMoney() {
	game.money = game.money + moneyOnClick;
	document.getElementById("money").innerHTML = game.money;
	document.getElementById("Clickables").style.background = 'url("http://igt.bitballoon.com/images/clickdown.png")';
}

// function that controls persec based on buildings[id].Qty
function Tick() {
	for (var i = 0; i < buildings.length; i++){
		game.money += buildings[i].PerSec * buildings[i].Qty
	}
	document.getElementById("money").innerHTML = game.money;
}

// functions for buying buildings/upgrades
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
		var nextCost = Math.floor(buildings[id].Cost * Math.pow(1.15,buildings[id].Qty))
		document.getElementById("Building"+id+".Cost").innerHTML = nextCost;
		buildings[id].CurrentCost = nextCost
	};
}

// function Upgrade(id) {
	// if (game.money >= upgrades[id].CurrentCost) {
		// game.money -= upgrades[id].CurrentCost;
		// upgrades[id].Qty = upgrades[id].Qty + 1;
		// document.getElementById("money").innerHTML = game.money;
		// document.getElementById("Upgrades"+id+".Qty").innerHTML = upgrades[id].Qty;
		
		// var nextCost = Math.floor(upgrades[id].Cost * Math.pow(1.15,upgrades[id].Qty))
		// document.getElementById("upgrades"+id+".Cost").innerHTML = nextCost;
		// upgrades[id].CurrentCost = nextCost
	// };
// }

// obviously when the window finishes loading everything, this happens
window.onload = function() {
	InitBuildings();
	// InitUpgrades();
	window.game = new GameSave();
	document.getElementById("moneyOnClick").innerHTML = moneyOnClick;
};