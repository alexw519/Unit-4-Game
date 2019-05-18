//Initalizing Objects
var obiWan =
{
    charName: "Obi-Wan",
    attackPower: 4,
    counterAttack: 25,
    health: 125,
    healthId: "obiHealth"
}
var lukeSky =
{
    charName: "Luke Skywalker",
    attackPower: 10,
    counterAttack: 20,
    health: 110,
    healthId: "lukeHealth"
}
var darthSid =
{
    charName: "Darth Sidous",
    attackPower: 3,
    counterAttack: 15,
    health: 140,
    healthId: "sidHealth"
}
var darthMaul =
{
    charName: "Darth Maul",
    attackPower: 1,
    counterAttack: 10,
    health: 210,
    healthId: "maulHealth"
}

//Initailzing Variables
var attackerPower;
var attackerHealth;
var defenderCounter;
var defenderHealth;
var characterSelected = false;
var enemySelected = false;
var currentCharacter;
var currentEnemy;
var characterId;
var defenderId;
var damage;
var enemyName;
var enemies = 3;

//Intiailizing Variables Linking To HTML Document
var obiWanCard = $("#obiCard");
var lukeSkyCard = $("#lukeCard");
var darthSidCard = $("#sidCard");
var darthMaulCard = $("#maulCard");
var characterCards = $("#character");

$("#attackButton").hide();
$("#resetButton").hide();

//Click Function For The Obi-Wan Card
$("#obiCard").on("click", function () {
    // var clicked = false;
    // if (!clicked)
    // {
    selection(obiWan, obiWanCard);
    //     clicked = true;
    // }
})

//Click Function For The Luke Skywalker Card
$("#lukeCard").on("click", function () { selection(lukeSky, lukeSkyCard); })

//Click Function For The Darth Sidous Card
$("#sidCard").on("click", function () { selection(darthSid, darthSidCard); })

//Click Function For The Darth Maul Card
$("#maulCard").on("click", function () { selection(darthMaul, darthMaulCard); })

//Function To Battle Between Characters When Button Is Clicked
$("#attackButton").on("click", function () 
{
    defenderHealth -= damage;
    $("#display").html("<p>You did " + damage + " damage!");
    damage += attackerPower;
    attackerHealth -= defenderCounter;
    $("#display").append("<p>The defender did " + defenderCounter + " damage!</p>")

    $(characterId).text(attackerHealth);
    $(defenderId).text(defenderHealth);

    //Code For When Either Character Is Defeated
    //When The User Loses
    if (attackerHealth <= 0) {
        defenderHealth += damage
        $(characterId).text(0);
        $(defenderId).text(defenderHealth);
        $("#attackButton").hide();
        $("#resetButton").show();
        alert("Sorry, Game Over");
    }

    //When The User Defeats A Character
    else if (defenderHealth <= 0) {
        attackerHealth += defenderCounter;
        $(characterId).text(attackerHealth);
        enemySelected = false;
        alert("You have defeated " + enemyName + "!");
        currentEnemy.hide();
        enemies--;

        //When All Of The Enemies Are Defeated
        if (enemies === 0) {
            alert("You Win!");
            $("#resetButton").show();
        }
        $("#attackButton").hide();
    }

})

//Button To Reload The Page After The User Has Won Or Lost
$("#resetButton").on("click", function () { location.reload(); })

//Moves The Card Selected
function selection(character, cardName) {
    //If The User Doesn't Have A Character Yet
    if (!characterSelected) {
        characterSelected = true;
        attackerPower = character.attackPower;
        damage = attackerPower;
        attackerHealth = character.health;
        currentCharacter = cardName;
        $("#yourChar").append(cardName);
        $("#enemies").append(characterCards);
        characterId = "#" + character.healthId;
        $(cardName).css("background-color", "lightgreen");
    }

    //If An Enemy Hasn't Been Selected Yet
    else if (characterSelected && !enemySelected) {
        enemySelected = true;
        enemyName = character.charName;
        defenderCounter = character.counterAttack;
        defenderHealth = character.health;
        currentEnemy = cardName;
        $("#defender").append(cardName);
        $("#attackButton").show();
        defenderId = "#" + character.healthId;
        $(cardName).css("background-color", "red");
    }
}