
const enum CustomerLevel {
    'NEW',
    'SILVER',
    'GOLD',
    'VIP',
    'VVIP',
    'FIRST'

};
export class Customer {
    constructor(
        public id?: number,
        public customerLevel?: CustomerLevel,
        public phone?: string,
        public userId?: number,
    ) {
    }
}
