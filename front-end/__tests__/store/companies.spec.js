/* eslint-disable */
import store from '../../src/store';

const { state } = store;

describe('Companies Store', () => {

    it('Is defined', () => {

        expect(state.companies).toBeDefined();

    });

    it('Should be return the array of companies', () => {

        expect(state.companies).toEqual([{ "image": "https://via.placeholder.com/56", "name": "Amazon" }, { "image": "https://via.placeholder.com/56", "name": "Oracle" }, { "image": "https://via.placeholder.com/56", "name": "Google" }]);

    });

    it('Should be return the companies', () => {

        expect(state.companies.length).toBeGreaterThan(0);

    });

});

