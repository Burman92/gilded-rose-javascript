import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, Basic, Legendary, Brie, Passes, Conjured } from "./gilded-rose.js";

describe("Basic-Items", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(2);
  });

  it("reduces quality of expired sellIn items of basic items by 2", () => {
    const testItem = new Basic("basic", -5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-6);
    expect(testItem.quality).toBe(1);
  });

  it("Quality cannot go below 0", () => {
    const testItem = new Basic("basic", -5, 1);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-6);
    expect(testItem.quality).toBe(0);
  });
});

describe("Aged-Brie", () => {
  it("Aged Brie increases in quality the older it gets", () => {
    const testItem = new Brie("Aged Brie", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(4);
  });

  it("Aged Brie increases in quality but not higher than 50", () => {
    const testItem = new Brie("Aged Brie", -5, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-6);
    expect(testItem.quality).toBe(50);
  });
});

describe("Legendary-Items", () => {
  it("Sulfuras, Hand of Ragnaros does not change", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 5, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(5);
    expect(testItem.quality).toBe(80);
  });
});

describe("Backstage-Passes", () => {
    it("Backstage passes greater than 10 days", () => {
    const testItem = new Passes("Backstage passes to a TAFKAL80ETC concert", 12, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(11);
    expect(testItem.quality).toBe(21);
  });

  it("Backstage passes less than 10 days", () => {
    const testItem = new Passes("Backstage passes to a TAFKAL80ETC concert", 8, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(7);
    expect(testItem.quality).toBe(22);
  });

  it("Backstage passes less than 5 days", () => {
    const testItem = new Passes("Backstage passes to a TAFKAL80ETC concert", 4, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(3);
    expect(testItem.quality).toBe(23);
  });

  it("Backstage passes less than 0 days", () => {
    const testItem = new Passes("Backstage passes to a TAFKAL80ETC concert", -1, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-2);
    expect(testItem.quality).toBe(0);
  });
});

describe("Conjured-Items", () => {
  it("Conjured items degrade twice as fast", () => {
    const testItem = new Conjured("Conjured", 5, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(4);
    expect(testItem.quality).toBe(18);
  });

  it("reduces quality of expired sellIn items of basic items by 4", () => {
    const testItem = new Conjured("basic", -5, 6);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-6);
    expect(testItem.quality).toBe(2);
  });

  it("Quality cannot go below 0", () => {
    const testItem = new Conjured("basic", -5, 1);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toBe(-6);
    expect(testItem.quality).toBe(0);
  });
});
