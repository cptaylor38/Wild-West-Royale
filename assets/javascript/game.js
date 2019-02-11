// cowyboy = {
//     HP: 100,
//     AP: 5,
//     counterAP: 15,
//     imgFile: "assets/images/cowboy.jpg"
// }

// indian = {
//     HP: 120,
//     AP: 5,
//     counterAP: 15,
//     imgFile: "assets/images/indian.jpg"
// }

// alien = {
//     HP: 150,
//     AP: 5,
//     counterAP: 10,
//     imgFile: "assets/images/alien.jpg"
// }

// gangastacrab = {
//     HP: 80,
//     AP: 5,
//     counterAP: 25,
//     imgFile: "assets/images/crab.jpg"
// }



// $("#play").on("click", function () {  //calling play function at play button onclick event

//     console.log("hello");


// });






var player;
var enemy;
var $character;
var playerCount = 0;
var enemyCount = 0;





var characterArray = [
    cowboy = {
        HP: 100,
        AP: 5,
        counterAP: 15,
        imgFile: "assets/images/cowboy.jpg",
        isEnemy: false
    },

    indian = {
        HP: 120,
        AP: 5,
        counterAP: 15,
        imgFile: "assets/images/indian.jpg",
        isEnemy: false
    },

    alien = {
        HP: 150,
        AP: 5,
        counterAP: 10,
        imgFile: "assets/images/alien.jpg",
        isEnemey: false
    },

    angrycrab = {
        HP: 80,
        AP: 5,
        counterAP: 25,
        imgFile: "assets/images/crab.jpg",
        isEnemy: false
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


$(document).on("click", '.button', function () {
    if ($(this).attr("data-index") == 0) {
        if (playerCount === 0) {
            characterArray[1].isEnemy = true;
            characterArray[2].isEnemy = true;
            characterArray[3].isEnemy = true;
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
            characterArray[0].isEnemy = true;
            characterArray[2].isEnemy = true;
            characterArray[3].isEnemy = true;
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
            characterArray[0].isEnemy = true;
            characterArray[1].isEnemy = true;
            characterArray[3].isEnemy = true;
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
            characterArray[0].isEnemy = true;
            characterArray[1].isEnemy = true;
            characterArray[2].isEnemy = true;
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

playerSetup = function (playerSelected) {
    $playerHP = $("<label>").attr({
        'id': 'playerHP'
    })
    $playerImage = $('<img />').attr({
        'id': 'playerImage',
        'src': playerSelected.imgFile,
        'width': '200px',
        'height': '200px'
    })
    $playerHP.text(playerSelected.HP);
    $playerImage.append($playerHP); //doesn't seem to be working
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

enemySetup = function (enemySelected) {
    $enemyHP = $("<label>").attr({
        'id': 'enemyHP'
    })
    $enemyImage = $('<img />').attr({
        'id': 'enemyImage',
        'src': enemySelected.imgFile,
        'width': '200px',
        'height': '200px'
    })
    $enemyHP.text(enemySelected.HP);
    $enemyImage.append($enemyHP); //doesn't seem to be working
    $("#enemy").append($enemyImage);
    enemyCount++;
    enemy = enemySelected;
    return enemy;

}

$(document).on("click", '#attack', function () {
    console.log("attack");
})


