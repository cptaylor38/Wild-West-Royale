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
var opponent;
var $hpLabel;



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
        $character.attr("data-index", i);
        $character.css('width:100px', 'height:100px')
        $character.css("background-image", "url('" + characterArray[i].imgFile + "')");
        $hpLabel.text(characterArray[i].HP);
        $character.append($hpLabel);
        $("#charButtons").append($character);


    }

    $(".button").on("click", function () {
        console.log("anything");
        if ($(this).attr("data-index") == 0) {
            player = characterArray[0];
            characterArray[1].isEnemy = true;
            characterArray[2].isEnemy = true;
            characterArray[3].isEnemy = true;
            $("#charButtons").empty();

        }
        else if ($(this).attr("data-index") == 1) {
            player = characterArray[1];
            characterArray[0].isEnemy = true;
            characterArray[2].isEnemy = true;
            characterArray[3].isEnemy = true;
            $("#charButtons").empty();


        }
        else if ($(this).attr("data-index") == 2) {
            player = characterArray[2];
            characterArray[0].isEnemy = true;
            characterArray[1].isEnemy = true;
            characterArray[3].isEnemy = true;
            $("#charButtons").empty();


        }
        else {
            player = characterArray[3];
            characterArray[0].isEnemy = true;
            characterArray[1].isEnemy = true;
            characterArray[2].isEnemy = true;
            $("#charButtons").empty();

        }

        console.log(player);
        $playerHP = $("<label>").attr({
            'id': 'playerHP'
        })
        $playerImage = $('<img />').attr({
            'id': 'playerImage',
            'src': player.imgFile,
            'width': '200px',
            'height': '200px'
        })
        $playerHP.text(player.HP);
        $playerImage.append($playerHP);
        $("#player").append($playerImage);
    })


})

