import { createRestaurant, bookTable, findAvailableTables } from '../src/index';
import { RESTAURANT, CUSTOMER, TABLE } from '../src/types';

const RESTAURANT_CAPACITY = 30;

describe('Restaurant Booking System', () => {

    let restaurant: RESTAURANT;
    let customer: CUSTOMER;

    beforeEach(() => {
        restaurant = createRestaurant(RESTAURANT_CAPACITY);
        customer = {
            name: 'Jordan',
            phoneNumber: '07468313989',
        };
    });

    it(`should have a capacity of ${RESTAURANT_CAPACITY}`, () => {

        expect(restaurant.tables).toHaveLength(RESTAURANT_CAPACITY);
    });

    it('should allow booking a table when not occupied', () => {

        const tableNumber: number = 4;

        const expectedTable: TABLE = {
            id: tableNumber,
            occupied: true,
            customer
        };

        const table: TABLE = bookTable(customer, tableNumber, restaurant);

        expect(table).toEqual(expectedTable);
    });

    it('should return next available table number', () => {

        bookTable(customer, 0, restaurant);
        bookTable(customer, 1, restaurant);

        const tableNumber: number = findAvailableTables(restaurant);

        expect(tableNumber).toBe(2);
    });
});