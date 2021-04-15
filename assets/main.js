
let gameData = {
    version: 0.000001,
    gems: 0,
    gemsPerClick: 1,
    numOfEchestUp: 0,
    numOfChestUp: 0,
    baseCost: 25,
    valueCheck: false
}



function gemClick() {
    gameData.gems += gameData.gemsPerClick;
    document.getElementById('gem-count').innerHTML = gameData.gems;
    
};

function autoGemClick() {
    gameData.gems = gameData.gems + gameData.numOfEchestUp;
    document.getElementById('gem-count').innerHTML = gameData.gems;
}




function buyEChestUpgrade() {
    
    let cost = Math.floor(gameData.baseCost * Math.pow(1.1, gameData.numOfEchestUp));
    
    if (gameData.gems >= cost) {
        gameData.numOfEchestUp = gameData.numOfEchestUp + 1;
        gameData.gems = gameData.gems - cost;
        document.getElementById('gem-count').innerHTML = gameData.gems;
        document.getElementById('echest-level').innerHTML = `EnderChest Level: ${gameData.numOfEchestUp}`;
    };
    
    let nextCost = Math.floor(25 * Math.pow(1.1, gameData.numOfEchestUp));
    document.getElementById('echest-cost').innerHTML = `Cost: ${nextCost}`;

}


function buyChestUpgrade() {
    
    let cost = Math.floor(gameData.baseCost * Math.pow(1.1, gameData.numOfChestUp));
    if (gameData.gems >= cost) {
        gameData.numOfChestUp = gameData.numOfChestUp + 1;
        if (gameData.numOfChestUp > 0) {
            gameData.gemsPerClick = gameData.numOfChestUp + 1;
        } else {
            gameData.gemsPerClick = gameData.numOfChestUp;
        }
        gameData.gems = gameData.gems - cost;
        document.getElementById('chest-level').innerHTML = `Chest Level: ${gameData.numOfChestUp}`;
        
    };
    let nextCost = Math.floor(gameData.baseCost * Math.pow(1.1, gameData.numOfChestUp));
    document.getElementById('chest-cost').innerHTML = `Cost: ${nextCost}` 
    
}




function valueCheck() {

    if (gameData.gems < 25 && gameData.valueCheck === false) {
        document.getElementById('upgradeArea').className = 'upgradeAreaOff';
        
        
    } else {
        document.getElementById('upgradeArea').className = 'upgradeAreaOn';
        gameData.valueCheck = true;
        document.getElementById('current-goal').innerHTML = 'CURRENT GOAL: REACH 25000 GEMS';
    }

}
// Storage Functions
function AutoSave() {
    
    localStorage.setItem("gameData", JSON.stringify(gameData));
}

function deleteSave() {
    localStorage.removeItem("gameData");
}

function load() {
    let savegame = JSON.parse(localStorage.getItem("gameData"));
    if (savegame !== null) {gameData = savegame;}
    if (typeof savegame.gems !== "undefined") {gameData.gems = savegame.gems};
    if (typeof savegame.numOfEchestUp !== "undefined") {gameData.numOfEchestUp = savegame.numOfEchestUp};
    if (typeof savegame.numOfChestUp !== "undefined") {gameData.numOfChestUp = savegame.numOfChestUp};
    
}
function reload() {
    if (typeof gameData.numOfEchest === true) {document.getElementById('chest-level').innerHTML = `Chest Level: ${gameData.numOfChestUp}`;}
    if (typeof gameData.numOfChestUp === true) {document.getElementById('echest-level').innerHTML = `EnderChest Level: ${gameData.numOfEchestUp}`;}
}
window.setInterval(function() {
    autoGemClick();
    valueCheck();
    AutoSave();
    reload();
    console.log(gameData.gemsPerClick);
    console.log(gameData.numOfChestUp);
    console.log(gameData.numOfEchestUp);
    console.log(gameData.gems);
    
}, 1000);






