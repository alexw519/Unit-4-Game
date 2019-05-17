var obiWan =
{
    charName: "Obi-Wan",
    attackPower: 8,
    counterAttack: 30,

    makeCard: function()
    {

    }
}
var attackerPower;
var defenderCounter;
var characterSelected = false;
var enemySelected = false;
// $("#character").text(obiWan.charName);

//possibly code this in html like the captain planet and then hide or not
function newCharacter(name, attack, counter)
{
    var newCard = $("<div>");
    newCard.addClass("card");
    $("#character").append(attack);
}

newCharacter(obiWan.charName, obiWan.attackPower, obiWan.counterAttack);

var attackButton = $("#attackButton");
//var obiWanCard = $("#obiWanCard")

// var test = $("#character");
// Put the following code on click for the character
// 
// $("#fightSection").append(attackButton);

$("#obiWan").on("click", function()
{
    selection(obiWan, obiWanCard);
})

function selection(character, cardName)
{
    if (!characterSelected)
    {
        characterSelected = true;
        attackerPower = character.attackPower;
        // $("#defender").append(test);
        //$("#yourChar").append(cardName)
    }
    if (characterSelected && !enemySelected)
    {
        enemySelected = true;
        defenderCounter = character.counterAttack;
    }

}

selection(obiWan);