

import { CUSTOMER, RESTAURANT, TABLE } from "./types";

// MVP

// Restaurant can seat 30 people.

// Support booking a seat.

// Return the number of free seats (not occupied). 

// Return a seat number of the next available seat.

export const createRestaurant = (capacity: number): RESTAURANT => {

    const tables: TABLE[] = Array(capacity).fill(undefined).map((_, index) => {

        const table: TABLE = {
            id: index,
            occupied: false
        };

        return table;
    });

    return { tables };
};

export const bookTable = (customer: CUSTOMER, tableNumber: number, restaurant: RESTAURANT) => {

    const table: TABLE = restaurant.tables[tableNumber];

    if(!table.occupied) {
        table.customer = customer;
        table.occupied = true;
        return table;  
    }

    throw new Error();
};

export const findAvailableTables = (restaurant: RESTAURANT): number => {

    const table: TABLE | undefined = restaurant.tables.find(table => table.occupied === false);

    if(table) {
        return table.id;
    }

    throw new Error('No tables available');
};