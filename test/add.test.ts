import {add} from "../src/add";

describe("add function", () => {
    it("1+1", () => {
        expect(add(1, 1)).toEqual(2);
    })
})