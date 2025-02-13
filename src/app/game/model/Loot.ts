export enum LootClass {
    money = "money",
    material_resources = "material_resources",
    herb_resources = "herb_resources",
    random_item = "random_item",
    special = "special"
}

export enum LootType {
    money = "money",
    lumber = "lumber",
    metal = "metal",
    hide = "hide",
    arrowvine = "arrowvine",
    axenut = "axenut",
    corpsecap = "corpsecap",
    flamefruit = "flamefruit",
    rockroot = "rockroot",
    snowthistle = "snowthistle",
    random_item = "random_item",
    special1 = "special1",
    special2 = "special2"
}

export const enhancableLootTypes: LootType[] = [LootType.lumber, LootType.metal, LootType.hide, LootType.arrowvine, LootType.axenut, LootType.corpsecap, LootType.flamefruit, LootType.rockroot, LootType.snowthistle, LootType.money];

export const appliableLootTypes: LootType[] = [LootType.money, LootType.lumber, LootType.metal, LootType.hide, LootType.arrowvine, LootType.axenut, LootType.corpsecap, LootType.flamefruit, LootType.rockroot, LootType.snowthistle, LootType.special1, LootType.special2];

export class Loot {

    type: LootType;
    value4P: number;
    value3P: number;
    value2P: number;
    enhancements: number = 0;
    cardId: number;

    // migration
    value: string | undefined;

    constructor(type: LootType, cardId: number, value4P: number, value3P: number = -1, value2P: number = -1,) {
        this.type = type;
        this.cardId = cardId;
        this.value4P = value4P;
        this.value3P = value4P;
        this.value2P = value4P;
        if (value3P != -1) {
            this.value3P = value3P;
        }
        if (value2P != -1) {
            this.value2P = value2P;
        }
    }
}

export const fullLootDeck: Loot[] = [
    // 12x Money 1
    new Loot(LootType.money, 1361, 1),
    new Loot(LootType.money, 1362, 1),
    new Loot(LootType.money, 1363, 1),
    new Loot(LootType.money, 1364, 1),
    new Loot(LootType.money, 1365, 1),
    new Loot(LootType.money, 1366, 1),
    new Loot(LootType.money, 1367, 1),
    new Loot(LootType.money, 1368, 1),
    new Loot(LootType.money, 1369, 1),
    new Loot(LootType.money, 1370, 1),
    new Loot(LootType.money, 1371, 1),
    new Loot(LootType.money, 1372, 1),
    // 6x Money 2
    new Loot(LootType.money, 1373, 2),
    new Loot(LootType.money, 1374, 2),
    new Loot(LootType.money, 1375, 2),
    new Loot(LootType.money, 1376, 2),
    new Loot(LootType.money, 1377, 2),
    new Loot(LootType.money, 1378, 2),
    // 2x Money 3
    new Loot(LootType.money, 1379, 3),
    new Loot(LootType.money, 1380, 3),
    // herbs
    new Loot(LootType.arrowvine, 1381, 1),
    new Loot(LootType.arrowvine, 1382, 1),
    new Loot(LootType.axenut, 1383, 1),
    new Loot(LootType.axenut, 1384, 1),
    new Loot(LootType.corpsecap, 1385, 1),
    new Loot(LootType.corpsecap, 1386, 1),
    new Loot(LootType.flamefruit, 1387, 1),
    new Loot(LootType.flamefruit, 1388, 1),
    new Loot(LootType.rockroot, 1389, 1),
    new Loot(LootType.rockroot, 1390, 1),
    new Loot(LootType.snowthistle, 1391, 1),
    new Loot(LootType.snowthistle, 1392, 1),
    // 8x hide
    new Loot(LootType.hide, 1393, 1, 2, 2),
    new Loot(LootType.hide, 1394, 1, 2, 2),
    new Loot(LootType.hide, 1395, 1, 2, 2),
    new Loot(LootType.hide, 1396, 1, 1, 2),
    new Loot(LootType.hide, 1397, 1, 1, 2),
    new Loot(LootType.hide, 1398, 1, 1, 2),
    new Loot(LootType.hide, 1399, 1),
    new Loot(LootType.hide, 1400, 1),
    // 8x lumber
    new Loot(LootType.lumber, 1401, 1, 2, 2),
    new Loot(LootType.lumber, 1402, 1, 2, 2),
    new Loot(LootType.lumber, 1403, 1, 2, 2),
    new Loot(LootType.lumber, 1404, 1, 1, 2),
    new Loot(LootType.lumber, 1405, 1, 1, 2),
    new Loot(LootType.lumber, 1406, 1, 1, 2),
    new Loot(LootType.lumber, 1407, 1),
    new Loot(LootType.lumber, 1408, 1),
    // 8x metal
    new Loot(LootType.metal, 1408, 1, 2, 2),
    new Loot(LootType.metal, 1410, 1, 2, 2),
    new Loot(LootType.metal, 1411, 1, 2, 2),
    new Loot(LootType.metal, 1412, 1, 1, 2),
    new Loot(LootType.metal, 1413, 1, 1, 2),
    new Loot(LootType.metal, 1414, 1, 1, 2),
    new Loot(LootType.metal, 1415, 1),
    new Loot(LootType.metal, 1416, 1),
    // 1x random item
    new Loot(LootType.random_item, 1417, 1),
    // 2 special
    new Loot(LootType.special1, 1418, 1),
    new Loot(LootType.special2, 1419, 1)
];

export type LootDeckConfig = Partial<Record<LootType, number>>;

export class LootDeck {

    current: number = -1;
    cards: Loot[] = [];
    active: boolean = false;

    fromModel(model: LootDeck) {
        this.current = model.current;
        this.cards = model.cards;

        // migration
        this.cards.forEach((loot, index, self) => {
            if (loot.value) {
                if (!isNaN(+loot.value)) {
                    loot.value4P = +loot.value;
                    loot.value3P = +loot.value;
                    loot.value2P = +loot.value;
                } else if (loot.value == "%game.loot.player.3-4% +1/%game.loot.player.2% +2") {
                    loot.value4P = 1;
                    loot.value3P = 1;
                    loot.value2P = 2;
                } else if (loot.value == "%game.loot.player.4% +1/%game.loot.player.2-3% +2") {
                    loot.value4P = 1;
                    loot.value3P = 2;
                    loot.value2P = 2;
                } else {
                    console.warn("Cannot migrate loot: " + loot.value);
                }

                loot.value = undefined;
            }
        })

        lootCardIdMigration(this.cards);

        this.active = model.active;
    }
}

export function lootCardIdMigration(cards: Loot[]) {
    cards.forEach((loot, index, self) => {
        if (!loot.cardId) {
            const lootCard = fullLootDeck.find((lootCard) => lootCard.type == loot.type && lootCard.value2P == loot.value2P && lootCard.value3P == loot.value3P && lootCard.value4P == loot.value4P && !self.find((existing) => existing.cardId == lootCard.cardId));
            if (lootCard) {
                loot.cardId = lootCard.cardId;
            } else {
                console.warn("Cannot map cardId for loot:", loot);
            }
        }
    });
}