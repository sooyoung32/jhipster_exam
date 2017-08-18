import { BaseEntity, User } from './../../shared';

export class Cart implements BaseEntity {
    constructor(
        public id?: number,
        public user?: User,
    ) {
    }
}
