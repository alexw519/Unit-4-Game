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
    counterAttack: 0,
    health: 120
}
var darthSid =
{
    charName: "Darth Sidous",
    attackPower: 8,
    counterAttack: 0,
    health: 130
}
var darthMaul =
{
    charName: "Darth Maul",
    attackPower: 8,
    counterAttack: 0,
    health: 200
}

var attackerPower;
var attackerHealth;
var defenderCounter;
var defenderHealth;
var characterSelected = false;
var enemySelected = false;
var currentCharacter;
var currentEnemy;
var enemies = 3;

var obiWanCard = $("#obiCard");
var lukeSkyCard = $("#lukeCard");
var darthSidCard = $("#sidCard");
var darthMaulCard = $("#maulCard");
var characterCards = $("#character");

$("#attackButton").hide();
$("#resetButton").hide();

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
{   selection(lukeSky, lukeSkyCard);   })

//Click Function For The Darth Sidous Card
$("#sidCard").on("click", function()
{   selection(darthSid, darthSidCard);  })

//Click Function For The Darth Maul Card
$("#maulCard").on("click", function()
{   selection(darthMaul, darthMaulCard);    })

//Function To Battle Between Characters
$("#attackButton").on("click", function()
{
    defenderHealth -= attackerPower;
    attackerPower = attackerPower *2;
    attackerHealth -= defenderCounter;

    
    //Find way to get the health to display on the correct card


    //Code For When Either Character Is Defeated
    if (attackerHealth <= 0)
    {
        $("#attackButton").hide();
        $("#resetButton").show();
        //Game Over Message
        //disable attack button
    }
    else if (defenderHealth <=0)
    {
        enemySelected = false;
        alert("Enemy Defeated");
        currentEnemy.hide();
        enemies --;
        if (enemies === 0)
        {
            //You Win Message,
            //Reset Buttons Appears
            $("#resetButton").show();
        }
        //tempoarily disable attack button until new character is selected
        $("#attackButton").hide();
    }

})

$("#resetButton").on("click", function()
{
    location.reload();
})

//Moves The Card Selected
function selection(character, cardName)
{
    if (!characterSelected)
    {
        characterSelected = true;
        attackerPower = character.attackPower;
        attackerHealth = character.health;
        currentCharacter = cardName;
        $("#yourChar").append(cardName);
        $("#enemies").append(characterCards);
    }

    else if (characterSelected && !enemySelected)
    {
        enemySelected = true;
        defenderCounter = character.counterAttack;
        defenderHealth = character.health;
        currentEnemy = cardName;
        $("#defender").append(cardName);
        //Show The Attack Button
        $("#attackButton").show();

    }

}