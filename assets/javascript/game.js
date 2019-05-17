var obiWan =
{
    charName: "Obi-Wan",
    attackPower: 8,
    counterAttack: 30,
    health: 150
}
var attackerPower;
var defenderCounter;
var characterSelected = false;
var enemySelected = false;
var obiWanCard = $("#obiCard");

//Click Function For The Obi-Wan Card
$("#obiCard").on("click", function()
{
    var clicked = false;
    if (!clicked)
    {
        selection(obiWan, obiWanCard);
        clicked = true;
    }
})

//Moves The Card Selected
function selection(character, cardName)
{
    if (!characterSelected)
    {
        characterSelected = true;
        attackerPower = character.attackPower;
        $("#yourChar").append(cardName);
    }
    if (characterSelected && !enemySelected)
    {
        enemySelected = true;
        defenderCounter = character.counterAttack;
        $("#defender").append(cardName);
        //Show The Attack Button
    }
}