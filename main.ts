mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    game.setGameOverEffect(true, effects.smiles)
    info.setLife(3)
    mySprite = sprites.create(img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `, SpriteKind.Player)
    Number2 = game.askForNumber("Guess the number")
    if (Number2 == 123456) {
        music.play(music.createSong(hex`0078000408050302001c000c960064006d019001000478002c010000640032000000000a060005860010001400012418001c00011d1c002000012a24002800011d28002c00012a2c003000012234003800012a38003c00012040004400012744004800011d48004c00012a4c005000011d54005800012958005c00011b5c006000012a60006400011b6400680002192c6c007000012478007c00021b2c88008c00012a94009800011b9c00a000012407001c00020a006400f401640000040000000000000000000000000000000003200068006c00011b80008400021e2a88008c0001228c009000011b9400980002222a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003700740075000108780079000105800081000200068800890001078c008d0001029000910002060b9c009d000c000102030405060708090a0b`), music.PlaybackMode.UntilDone)
        info.changeScoreBy(1)
    } else {
        info.changeLifeBy(-1)
    }
    mySprite = mp.playerSelector(mp.PlayerNumber.One)
    if (info.life() == 0) {
        game.gameOver(false)
        info.changeScoreBy(-1)
    }
    Wd1 = game.askForString("Guess the word", 4)
    if (Wd1 == "Then") {
        console.logValue("Wd", Wd1)
        console.logValue("Nb", Number2)
        info.changeScoreBy(1)
    } else {
        info.changeScoreBy(-1)
        info.changeLifeBy(-1)
    }
    game.splash("Bye")
})
let Wd1 = ""
let Number2 = 0
let mySprite: Sprite = null
game.splash("Click a to Guess the number ")
forever(function () {
    music.play(music.createSong(assets.song`music`), music.PlaybackMode.UntilDone)
})
