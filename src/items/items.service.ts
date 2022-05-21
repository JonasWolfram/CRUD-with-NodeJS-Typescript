// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";
/**
 * In-Memory Store
 */
let items: Items = {
  1: {
    id: 1,
    name: "Burger",
    price: 599,
    description: "Tasty",
    image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png",
  },
  2: {
    id: 2,
    name: "Pizza",
    price: 299,
    description: "Cheesy",
    image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png",
  },
  3: {
    id: 3,
    name: "Tea",
    price: 199,
    description: "Informative",
    image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png",
  },
};
/**
 * Service Methods
 */
// Gibt ganze Objekte wieder
export const findAll = async (): Promise<Item[]> => Object.values(items);

// find erhält eine ID als Parameter zu dem es nach genau einem Objekt sucht und es wiedergibt wenn es gefunden wird.
export const find = async (id: number): Promise<Item> => items[id];

// Erstellt neue Items
export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };
  return items[id];
};

// Update eines Items
export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

// Ein Item löschen
export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};
