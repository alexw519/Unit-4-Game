var obiWan =
{
    charName: "Obi-Wan",
    attackPower: 8,
    counterAttack: 30,
    health: 150
}
var lukeSky =
{
    charName: "Luke Skywalker",
    attackPower: 8,
    counterAttack: 30,
    health: 120
}
var darthSid =
{
    charName: "Darth Sidous",
    attackPower: 8,
    counterAttack: 30,
    health: 130
}
var darthMaul =
{
    charName: "Darth Maul",
    attackPower: 8,
    counterAttack: 30,
    health: 200
}

var attackerPower;
var defenderCounter;
var characterSelected = false;
var enemySelected = false;
var obiWanCard = $("#obiCard");
var lukeSkyCard = $("#lukeCard");
var darthSidCard = $("#sidCard");
var darthMaulCard = $("#maulCard");

//Click Function For The Obi-Wan Card
$("#obiCard").on("click", function()
{
    // var clicked = false;
    // if (!clicked)
    // {
        selection(obiWan, obiWanCard);
    //     clicked = true;
    // }
})

//Click Function For The Luke Skywalker Card
$("#lukeCard").on("click", function()
{
    // var clicked = false;
    // if (!clicked)
    // {
        selection(lukeSky, lukeSkyCard);
    //     clicked = true;
    // }
})

//Click Function For The Darth Sidous Card
$("#sidCard").on("click", function()
{
    // var clicked = false;
    // if (!clicked)
    // {
        selection(darthSid, darthSidCard);
    //     clicked = true;
    // }
})

//Click Function For The Darth Maul Card
$("#maulCard").on("click", function()
{
    // var clicked = false;
    // if (!clicked)
    // {
        selection(darthMaul, darthMaulCard);
    //     clicked = true;
    // }
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

    else if (characterSelected && !enemySelected)
    {
        enemySelected = true;
        defenderCounter = character.counterAttack;
        $("#defender").append(cardName);
        //Show The Attack Button
    }

}