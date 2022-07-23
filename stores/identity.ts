import { defineStore } from 'pinia';

export interface IIdentityState {
    firstName: string;
    lastName: string;
}

export const useIdentity = defineStore('identity', {
    state: (): IIdentityState => ({
        firstName: 'IT',
        lastName: 'Master'
    }),

    actions: {
        setFirstName(firstName: string) {
            this.firstName = firstName;
        },
        setLastName(lastName: string) {
            this.lastName = lastName;
        },
        reset() {
            this.firstName = 'IT';
            this.lastName = 'Master';
        }
    },

    getters: {
        fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }
})