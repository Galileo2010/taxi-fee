const main = require('../main/main');

describe('taxi fee', function () {
    it("case 1 : 4 km 0 minutes", ()=>{
        let gold = 4 * 0.8 + 0 * 0.25;
        gold = Math.round(gold);
        expect(main(4,0)).toEqual(gold);
    })
    it("case 2 : 5 km 5 minutes", ()=>{
        let gold = 5 * 0.8 + 5 * 0.25;
        gold = Math.round(gold);
        expect(main(5,5)).toEqual(gold);
    })
    it("case 3 : 9 km 0 minutes", ()=>{
        let gold =  8 * 0.8 + 1 * 1.2 + 0 * 0.25;
        gold = Math.round(gold);
        expect(main(9,0)).toEqual(gold);
    })
    it("case 4 : 9 km 5 minutes", ()=>{
        let gold = 8 * 0.8 + 1 * 1.2 + 5 * 0.25;
        gold = Math.round(gold);
        expect(main(9,5)).toEqual(gold);
    })
});
