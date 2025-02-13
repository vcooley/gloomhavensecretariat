import { sortRoom } from "./room.mjs";
import { sortObjectKeys } from "./sort-object-keys.mjs";

export const sortScenario = function (scenario) {

    Object.keys(scenario).forEach((key) => {
        if (!scenario[key]) {
            scenario[key] = undefined;
        }
    });

    if (scenario.rooms) {
        scenario.rooms = scenario.rooms.map((room) => sortRoom(room));
    }

    if (scenario.monsters) {
        scenario.monsters = scenario.monsters.sort((a, b) => {
            if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    return sortObjectKeys(scenario, 'index', 'group', 'name', 'edition', 'parent', 'parentSections', 'blockedSections', 'spoiler', 'initial', 'solo', 'allyDeck', 'resetRound', 'unlocks', 'requires', 'blocks', 'links', 'monsters', 'allies', 'drawExtra', 'objectives', 'lootDeckConfig', 'rules', 'rooms');
}