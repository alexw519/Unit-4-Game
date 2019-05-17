var obiWan =
{
    charName: "Obi-Wan",
    attackPower: 8,
    counterAttack: 30
}
var attackerPower;
var defenderCounter;

$("#character").text(obiWan.charName);

//possibly code this in html like the captain planet and then hide or not
function newCharacter(name, attack, counter)
{
    var newCard = $("<div>");
    newCard.addClass("card");
    $("#character").append(attack);
}

newCharacter(obiWan.charName, obiWan.attackPower, obiWan.counterAttack);

var attackButton = $("#attackButton");
// Put the following code on click for the character
// 
// $("#fightSection").append(attackButton);

// $("#obiWan").on("click", function()
// {
//     attackerPower = obiWan.attackPower;

// })