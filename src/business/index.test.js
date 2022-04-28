const { draw } = require("./");


const expectConwaySuite = (line, deep, ...expected) => {
    return expect(draw(line, deep)).toBe(expected.join("\n"));
}

describe('Conway suite', () => {
    it("should draw next line of conway suite", () => {
        expectConwaySuite("1", 1, "1", "11");
        expectConwaySuite("2", 1, "2", "12");
        expectConwaySuite("3", 1, "3", "13");
        expectConwaySuite("22", 1, "22", "22");
        expectConwaySuite("21", 1, "21", "1211");
        expectConwaySuite("213", 1, "213", "121113");
        expectConwaySuite("2111", 1, "2111", "1231");
        expectConwaySuite("2331", 1, "2331", "122311");
        expectConwaySuite("34512321342213112223331", 1, "34512321342213112223331", "1314151112131211131422111321323311");
    })

    it("should draw several line of conway suite", () => {
        expectConwaySuite("1", 2, "1", "11", "21");
        expectConwaySuite("1", 3, "1", "11", "21", "1211");
        expectConwaySuite("1", 4, "1", "11", "21", "1211", "111221");
    });
});
