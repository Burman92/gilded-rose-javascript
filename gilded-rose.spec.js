export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Basic extends Item{
  updateQuality() {
    if (this.sellIn > 0) {
      this.quality -= 1;
    }
    else {
      this.quality -= 2;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

export class Brie extends Item{
  updateQuality() {
    this.quality += 1;
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

export class Legendary extends Item{
    updateQuality() {
      // Do Nothing
  }
}

export class Passes extends Item{
    updateQuality() {
      if (this.sellIn < 0) {
        this.quality = 0;
      }
      else if (this.sellIn < 5) {
        this.quality += 3;
      }
      else if (this.sellIn < 10) {
        this.quality += 2;
      }
      else {
        this.quality += 1;
      }
  }
}

export class Conjured extends Basic{
    updateQuality() {
      super.updateQuality();
      super.updateQuality();
    }
  }

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Brie("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Passes("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));


export const updateQuality = () => {
  for (let item of items) {
    if (item.constructor.name != 'Legendary') {
      item.sellIn -= 1;
    }
    item.updateQuality();
  }
}

// console.log(items);
updateQuality();
// console.log(items);