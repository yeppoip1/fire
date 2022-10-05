scene.onOverlapTile(SpriteKind.Water, assets.tile`firePit`, function (sprite, location) {
    sprite.destroy()
    sprites.change_flame_strength_by(location, -1)
})
sprites.on_fire_created(function (location) {
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
})
sprites.on_fire_destroyed(function (location) {
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
    music.sonar.play()
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(mySprite, assets.image`Fire Plane Right`)
})
let mySprite: Sprite = null
game.set_dryness_of_grass(0)
game.set_strength_of_wind(10)
game.set_health_of_trees(10)
tiles.setTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite)
mySprite = sprites.create(assets.image`airship`, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 8 . . . . . . . 
    . . . . . 1 8 8 8 8 1 . . . . . 
    . . . . . 1 8 8 8 9 1 . . . . . 
    . . 1 1 1 1 9 8 9 9 1 . . . . . 
    . . 1 . 1 1 9 9 9 9 1 . . . . . 
    . . 1 . 1 9 9 9 9 9 1 . . . . . 
    . . 1 1 1 1 9 9 9 9 1 . . . . . 
    . . . . . 1 1 9 9 1 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.StatusBar)
scene.cameraFollowSprite(mySprite2)
controller.moveSprite(mySprite2)
for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(sprites.castle.tileGrass2, assets.tile`firePit`)
}
controller.moveSprite(mySprite)
hud.forest_hud(true)
hud.danger_hud(true)
hud.forest_hud(true)
hud.forest_hud_healthy(9)
hud.forest_hud_burned(15)
hud.forest_hud_label("FIRE")
game.onUpdate(function () {
    sprites.random_spread()
})
