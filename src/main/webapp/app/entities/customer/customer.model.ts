
const enum CustomerLevel {
    'NEW',
    'SILVER',
    'GOLD',
    'VIP',
    'VVIP',
    'FIRST'

};
import { User } from '../../shared';
export class Customer {
    constructor(
        public id?: number,
        public customerLevel?: CustomerLevel,
        public phone?: string,
        public user?: User,
    ) {
    }
}
