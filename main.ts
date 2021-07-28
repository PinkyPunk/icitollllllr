controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (andszej.x == 0) {
        andszej.ay = 100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    CUKIER__͡_͜ʖ_͡.destroy()
})
let Pszeciwnig: Sprite = null
let CUKIER__͡_͜ʖ_͡: Sprite = null
let andszej: Sprite = null
tiles.setTilemap(tilemap`level1`)
andszej = sprites.create(img`
    . . . f f f f f f f f f f . . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f 2 2 2 f f f f f f 2 2 2 . . 
    . f 2 2 f 1 9 9 9 9 9 f 2 2 f . 
    . f 2 f 1 9 9 9 9 9 9 9 f 2 f . 
    . f 2 f 9 9 9 9 9 9 9 9 f 2 f . 
    . f 2 f 9 9 9 9 9 9 9 9 f 2 f . 
    . f 2 2 f 9 9 9 9 9 9 f 2 2 f . 
    . f 2 2 2 f f f f f f 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 f f f f f f f f 2 2 f . 
    . f 2 2 f . . . . . . f 2 2 f . 
    . f 2 2 f . . . . . . f 2 2 f . 
    . f f f f . . . . . . f f f f . 
    `, SpriteKind.Player)
andszej.startEffect(effects.spray)
scene.cameraFollowSprite(andszej)
andszej.ay = 100
andszej.setPosition(100, 0)
controller.moveSprite(andszej, 100, 100)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    CUKIER__͡_͜ʖ_͡ = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . f 1 1 1 d f . . . . . 
        . . . . f 1 1 d 1 1 1 f . . . . 
        . . . f 1 1 d 1 1 1 1 1 f . . . 
        . . f 1 1 d 1 1 1 1 d 1 1 f . . 
        . f 1 1 1 1 1 1 d 1 1 d 1 1 f . 
        f 1 1 1 d 1 1 1 1 1 1 1 1 1 1 f 
        f 1 d 1 1 1 1 1 1 1 1 1 1 d 1 f 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(CUKIER__͡_͜ʖ_͡, value)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`myTile2`)
    animation.runImageAnimation(
    CUKIER__͡_͜ʖ_͡,
    [img`
        . . . . . f f . . . . . . . . . 
        . . . . f 1 1 f . . . . . . . . 
        . . . . f d 1 1 f . . . . . . . 
        . . . . f 1 1 1 1 f . . . . . . 
        . . . . f 1 1 1 1 1 f . . . . . 
        . . . . f 1 1 d 1 d 1 f . . . . 
        . . . . f 1 1 1 1 1 d 1 f . . . 
        . . . . f 1 1 1 1 1 1 d 1 f . . 
        . . . . f 1 1 1 1 1 1 1 1 f . . 
        . . . . f 1 d 1 1 1 1 1 f . . . 
        . . . . f 1 1 1 1 d 1 f . . . . 
        . . . . f 1 1 1 d 1 f . . . . . 
        . . . . f 1 1 1 1 f . . . . . . 
        . . . . f 1 1 1 f . . . . . . . 
        . . . . f 1 d f . . . . . . . . 
        . . . . . f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f f . 
        f 1 1 1 1 1 1 1 1 1 1 1 1 d 1 f 
        f d 1 1 1 1 d 1 1 1 1 1 1 1 1 f 
        . f 1 1 1 1 1 1 1 1 d 1 1 1 f . 
        . . f 1 d 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 d 1 1 1 1 d 1 f . . . 
        . . . . f 1 1 1 1 d 1 f . . . . 
        . . . . . f 1 1 d 1 f . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . f f . . . . . 
        . . . . . . . . f d 1 f . . . . 
        . . . . . . . f 1 1 1 f . . . . 
        . . . . . . f 1 1 1 1 f . . . . 
        . . . . . f 1 d 1 1 1 f . . . . 
        . . . . f 1 d 1 1 1 1 f . . . . 
        . . . f 1 1 1 1 1 d 1 f . . . . 
        . . f 1 1 1 1 1 1 1 1 f . . . . 
        . . f 1 d 1 1 1 1 1 1 f . . . . 
        . . . f 1 d 1 1 1 1 1 f . . . . 
        . . . . f 1 d 1 d 1 1 f . . . . 
        . . . . . f 1 1 1 1 1 f . . . . 
        . . . . . . f 1 1 1 1 f . . . . 
        . . . . . . . f 1 1 d f . . . . 
        . . . . . . . . f 1 1 f . . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . f 1 1 f . . . . . . 
        . . . . . f 1 d 1 1 f . . . . . 
        . . . . f 1 d 1 1 1 1 f . . . . 
        . . . f 1 d 1 1 1 1 d 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 d 1 f . . 
        . f 1 1 1 d 1 1 1 1 1 1 1 1 f . 
        f 1 1 1 1 1 1 1 1 d 1 1 1 1 d f 
        f 1 d 1 1 1 1 1 1 1 1 1 1 1 1 f 
        . f f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    Pszeciwnig = sprites.create(img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f c 2 d 2 c f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d c c c d f . . . . . 
        . . . f f f 5 d 5 f f f f . . . 
        . . f d d d d 5 d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 7 7 7 7 2 2 f . . . 
        . . . f f 7 f f f 7 f f f . . . 
        . . . . f d f . f d f . . . . . 
        . . . . f d f . f d f . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Pszeciwnig, value)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`myTile3`)
    animation.runImageAnimation(
    Pszeciwnig,
    [img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d 2 d 2 d f . . . . . 
        . . . . f d c d c d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . f f f d d d f f f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 f f f 7 2 2 f . . . 
        . . . f f d f . f d f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f c 2 d 2 c f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . f f f d d d f f f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 f f f 7 2 2 f . . . 
        . . . f f d f . f d f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f 2 c d c 2 f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . f f f d d d f f f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 f f f 7 2 2 f . . . 
        . . . f f d f . f d f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f c 2 d c 2 f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . f f f d d d f f f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 f f f 7 2 2 f . . . 
        . . . f f d f . f d f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f 2 c d 2 c f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . f f f d d d f f f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 f f f 7 2 2 f . . . 
        . . . f f d f . f d f f . . . . 
        . . . . f d f . f d f . . . . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d c d c d f . . . . . 
        . . . . f d 2 d 2 d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . . f d d d d d f . . . . . 
        . . . f f f d d d f f f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d e d d d e d d f . . . 
        . . f d d d d d d d d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f d d 7 7 7 7 7 d d f . . . 
        . . f 2 2 7 f f f 7 2 2 f . . . 
        . . . f f d f . f d f f . . . . 
        . . . . f d f . f d f . . . . . 
        `],
    100,
    true
    )
}
forever(function () {
	
})
forever(function () {
    if (info.score() == 19) {
        for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
            CUKIER__͡_͜ʖ_͡ = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 1 1 f . . . . . . 
                . . . . . f 1 1 1 d f . . . . . 
                . . . . f 1 1 d 1 1 1 f . . . . 
                . . . f 1 1 d 1 1 1 1 1 f . . . 
                . . f 1 1 d 1 1 1 1 d 1 1 f . . 
                . f 1 1 1 1 1 1 d 1 1 d 1 1 f . 
                f 1 1 1 d 1 1 1 1 1 1 1 1 1 1 f 
                f 1 d 1 1 1 1 1 1 1 1 1 1 d 1 f 
                . f f f f f f f f f f f f f f . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            tiles.placeOnTile(CUKIER__͡_͜ʖ_͡, value)
            tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`myTile2`)
            animation.runImageAnimation(
            CUKIER__͡_͜ʖ_͡,
            [img`
                . . . . . f f . . . . . . . . . 
                . . . . f 1 1 f . . . . . . . . 
                . . . . f d 1 1 f . . . . . . . 
                . . . . f 1 1 1 1 f . . . . . . 
                . . . . f 1 1 1 1 1 f . . . . . 
                . . . . f 1 1 d 1 d 1 f . . . . 
                . . . . f 1 1 1 1 1 d 1 f . . . 
                . . . . f 1 1 1 1 1 1 d 1 f . . 
                . . . . f 1 1 1 1 1 1 1 1 f . . 
                . . . . f 1 d 1 1 1 1 1 f . . . 
                . . . . f 1 1 1 1 d 1 f . . . . 
                . . . . f 1 1 1 d 1 f . . . . . 
                . . . . f 1 1 1 1 f . . . . . . 
                . . . . f 1 1 1 f . . . . . . . 
                . . . . f 1 d f . . . . . . . . 
                . . . . . f f . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . f f f f f f f f f f f f f f . 
                f 1 1 1 1 1 1 1 1 1 1 1 1 d 1 f 
                f d 1 1 1 1 d 1 1 1 1 1 1 1 1 f 
                . f 1 1 1 1 1 1 1 1 d 1 1 1 f . 
                . . f 1 d 1 1 1 1 1 1 1 1 f . . 
                . . . f 1 d 1 1 1 1 d 1 f . . . 
                . . . . f 1 1 1 1 d 1 f . . . . 
                . . . . . f 1 1 d 1 f . . . . . 
                . . . . . . f 1 1 f . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . f f . . . . . 
                . . . . . . . . f d 1 f . . . . 
                . . . . . . . f 1 1 1 f . . . . 
                . . . . . . f 1 1 1 1 f . . . . 
                . . . . . f 1 d 1 1 1 f . . . . 
                . . . . f 1 d 1 1 1 1 f . . . . 
                . . . f 1 1 1 1 1 d 1 f . . . . 
                . . f 1 1 1 1 1 1 1 1 f . . . . 
                . . f 1 d 1 1 1 1 1 1 f . . . . 
                . . . f 1 d 1 1 1 1 1 f . . . . 
                . . . . f 1 d 1 d 1 1 f . . . . 
                . . . . . f 1 1 1 1 1 f . . . . 
                . . . . . . f 1 1 1 1 f . . . . 
                . . . . . . . f 1 1 d f . . . . 
                . . . . . . . . f 1 1 f . . . . 
                . . . . . . . . . f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . f f . . . . . . . 
                . . . . . . f 1 1 f . . . . . . 
                . . . . . f 1 d 1 1 f . . . . . 
                . . . . f 1 d 1 1 1 1 f . . . . 
                . . . f 1 d 1 1 1 1 d 1 f . . . 
                . . f 1 1 1 1 1 1 1 1 d 1 f . . 
                . f 1 1 1 d 1 1 1 1 1 1 1 1 f . 
                f 1 1 1 1 1 1 1 1 d 1 1 1 1 d f 
                f 1 d 1 1 1 1 1 1 1 1 1 1 1 1 f 
                . f f f f f f f f f f f f f f . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
        }
    }
})
