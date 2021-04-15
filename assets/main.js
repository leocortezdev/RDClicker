
let gems = 0;

function gemClick(number) {
    gems = gems + number;
    document.getElementById('gem-count').innerHTML = gems;
    
};




let numOfEchestUp = 0;
let numOfChestUp = 0;

function buyEChestUpgrade() {
    
    let cost = Math.floor(25 * Math.pow(1.1, numOfEchestUp))
    
    if (gems >= cost) {
        numOfEchestUp = numOfEchestUp + 1;
        gems = gems - cost;
        document.getElementById('gem-count').innerHTML = gems;
        document.getElementById('echest-level').innerHTML = `EnderChest Level: ${numOfEchestUp}`;
    };
    
    let nextCost = Math.floor(25 * Math.pow(1.1, numOfEchestUp));
    document.getElementById('echest-cost').innerHTML = `Cost: ${nextCost}`;

}



function save() {
    let save = {
        gems: gems,
        numOfEchestUp: numOfEchestUp,
        numOfChestUp: numOfChestUp
    }
    
}


localStorage.setItem("save", JSON.stringify(save));

function load() {
    let savegame = JSON.parse(localStorage.getItem("save"));
}
window.setInterval(function() {
    gemClick(numOfEchestUp);
    save();
    
}, 1000);






