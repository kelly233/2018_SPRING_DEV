const uav = require('../main/main');


describe("use different id to test program", function () {
   const message = "plane1 1 1 1\n" +
       "plane1 1 1 1 1 2 3\n" +
       "plane1 2 3 4 1 1 1\n" +
       "plane1 3 4 5\n" +
       "plane1 1 1 1 1 2 3";
    const message2 = "plane1 1 1 1\n" +
        "plane1 1 1 1 1 2 3\n" +
        "plane1 2 3 4 -3 -3 -3\n";
    const message3 = "plane1 1 1 1\n" +
        "plane1 1 1 1 1 2 3\n" +
        "plane1 2 3 4 0 0 0";
    const message4 = "plane1 1 -1";

    it("returns the result when the id given equals 0 and displacements are positive",function () {
        let result = uav(message,0);
        expect(result).toEqual("plane1 0 1 1 1");
    });
    it("returns the result when the id given equals 2 and displacements are positive",function () {
        let result = uav(message,2);
        expect(result).toEqual("plane1 2 3 4 5");
    });
    it("returns the result when the id given equals 3 and displacements are positive",function () {
        let result = uav(message,3);
        expect(result).toEqual("Error: 3");
    });
    it("returns the result when the id given equals 4 and displacements are positive",function () {
        let result = uav(message,4);
        expect(result).toEqual("Error: 4");
    });
    it("returns the result when the id given equals 100 and displacements are positive",function () {
        let result = uav(message,100);
        expect(result).toEqual("Cannot find 100");
    });
    it("returns the result when the id given equals 2 and displacements are negative",function () {
        let result = uav(message2,2);
        expect(result).toEqual("plane1 2 -1 0 1");
    });
    it("returns the result when the id given equals 2 and displacements are zero",function () {
        let result = uav(message3,2);
        expect(result).toEqual("plane1 2 2 3 4");
    });
    it("returns the result when the id given equals 0 but message is not in the right format",function () {
        let result = uav(message4,0);
        expect(result).toEqual("Error: 0");
    });
});
