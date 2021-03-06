/* Contains everything that needs to be known about a certain area.
 * Author: Brifactor
 */
"use strict";

//Includes
const coord = require('./HexCoord.js');
var __ = require('private-parts').createKey(); //Makes attributes private

/* Planned properties:
 * Coordinate: This one's easy. Just the hex's position on the map.
 * Biome: What type of area is it?
 * EncounterList: What monsters can be found there?
 * Boss? Unique boss monster that is generated from the encounter list
 * Point of Interest: Can be a dungeon or boss lair. But it's more likely
 *      to be a somewhat interesting landmark (e.g. a red cactus)
 */

class Hex {
    constructor (coordinate, biome) {
        __(this).coord = coordinate;
        __(this).biome = biome;
        __(this).landmarks = []; //can include player-made landmarks later
        //add more here as we have more to add.
    }

    getCoord() {
        return __(this).coord;
    }

    setCoord(new_coord) {
        __(this).coord = new_coord;
    }

    getBiome() {
        return __(this).biome;
    }

    setBiome(new_biome) {
        __(this).biome = new_biome;
    }

    numLandmarks() {
        return __(this).landmarks.length;
    }

    addLandmark(new_lan) {
        __(this).landmarks.push(new_lan);
    }

    getLandmark(index) {
        return __(this).landmarks[index];
    }

    delLandmark(index) {
        __(this).landmarks.splice(index, 1);
    }

}//end class

exports.Hex = Hex;