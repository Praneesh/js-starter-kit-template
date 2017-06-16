import {expect} from 'chai'; // This is an assertion library as Mocha does not come with one

describe('Our first test',()=>{
    it('should pass',()=>{
        expect(true).to.equal(true);
    });
});

