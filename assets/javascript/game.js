var player;
var enemy;
var $character;
var playerCount = 0;
var enemyCount = 0;





var characterArray = [
    cowboy = {
        HP: 100,
        AP: 10,
        counterAP: 10,
        imgFile: "assets/images/cowboy.jpg"

    },

    indian = {
        HP: 110,
        AP: 10,
        counterAP: 10,
        imgFile: "assets/images/indian.jpg"

    },

    alien = {
        HP: 120,
        AP: 5,
        counterAP: 5,
        imgFile: "assets/images/alien.jpg"

    },

    angrycrab = {
        HP: 80,
        AP: 20,
        counterAP: 15,
        imgFile: "assets/images/crab.jpg"

    }
]


$("#play").on("click", function () {  //calling play function at play button onclick event
    for (var i = 0; i < characterArray.length; i++) {
        $character = $("<button>");
        $hpLabel = $("<label>");

        $character.addClass("button");
        $character.attr({
            'data-index': i,
            'id': characterArray[i]
        });
        $character.css('width:100px', 'height:100px')
        $character.css("background-image", "url('" + characterArray[i].imgFile + "')");
        $hpLabel.text(characterArray[i].HP);
        $character.append($hpLabel);
        $("#charButtons").append($character);
    }
    $(this).remove();
})


$(document).on("click", '.button', '.characterSelection', function () {
    if ($(this).attr("data-index") == 0) {
        if (playerCount === 0) {
            $(this).remove();
            playerSetup(characterArray[0]);
        }
        else if (playerCount === 1 && enemyCount === 0) {
            enemySetup(characterArray[0]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 1) {
            enemySetup(characterArray[0]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 2) {
            enemySetup(characterArray[0]);
            $(this).remove();
        }

    }
    else if ($(this).attr("data-index") == 1) {
        if (playerCount === 0) {
            $(this).remove();
            playerSetup(characterArray[1]);
        }
        else if (playerSelected = true && enemyCount === 0) {
            enemySetup(characterArray[1]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 1) {
            enemySetup(characterArray[1]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 2) {
            enemySetup(characterArray[1]);
            $(this).remove();
        }
    }
    else if ($(this).attr("data-index") == 2) {
        if (playerCount === 0) {
            $(this).remove();
            playerSetup(characterArray[2]);
        }
        else if (playerCount === 1 && enemyCount === 0) {
            enemySetup(characterArray[2]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 1) {
            enemySetup(characterArray[2]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 2) {
            enemySetup(characterArray[2]);
            $(this).remove();
        }
    }
    else {
        if (playerCount === 0) {
            $(this).remove();
            playerSetup(characterArray[3]);
        }
        else if (playerCount === 1 && enemyCount === 0) {
            enemySetup(characterArray[3]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 1) {
            enemySetup(characterArray[3]);
            $(this).remove();
        }
        else if (playerCount === 1 && enemyCount === 2) {
            enemySetup(characterArray[3]);
            $(this).remove();
        }
    }

})

player = playerSetup = function (playerSelected) {

    $playerImage = $('<img />').attr({
        'id': 'playerImage',
        'src': playerSelected.imgFile,
        'width': '200px',
        'height': '200px'
    })

    $("#player").append($playerImage);
    playerCount++;
    player = playerSelected;

    $attack = $('<button>').attr({
        'id': 'attack'
    })
    $attack.text("Attack!");
    $("#battlefield").append($attack);
    return player;
}

enemy = enemySetup = function (enemySelected) {

    $(".button").prop('disabled', true);

    $enemyImage = $('<img />').attr({
        'id': 'enemyImage',
        'src': enemySelected.imgFile,
        'width': '200px',
        'height': '200px'
    })

    $("#enemy").append($enemyImage);
    enemyCount++;
    enemy = enemySelected;

    $enemyHP = $("<label>").attr({
        'id': 'enemyHP'
    })
    $enemyHP.text(enemy.HP);
    $("#enemyHP").append($enemyHP);



    return enemySelected;
}



$(document).on("click", '#attack', function () {
    console.log("attack");

    $("#playerHP").text("");
    $("#enemyHP").text("");

    enemy.HP = enemy.HP - player.AP;
    player.HP = player.HP - enemy.counterAP;

    player.AP += 5;


    //working don't touch/////////////////////////////
    $playerHP = $("<label>").attr({
        'id': 'playerHP'
    })
    $playerHP.text(player.HP);
    $("#playerHP").append($playerHP);
    //////////////////////////////////////////////

    ////////////////not working correctly//////////
    $enemyHP = $("<label>").attr({
        'id': 'enemyHP'
    })
    $enemyHP.text(enemy.HP);
    $("#enemyHP").append($enemyHP);
    ///////////////////////////////////////////////
    if (player.HP <= 0) {
        $("#player").empty();
        $enemyHP.text(enemy.HP);
        alert("You have lost the game. Refresh the page to try again.");
    }
    /////////////////////////////////////////////
    if (enemy.HP <= 0) {
        $(".button").removeAttr('disabled');
        $("#enemyHP").text("");
        $("#enemy").empty();
        document.$("#enemyHP").empty();


    }
    ///////////////////////////////////////////////

})




