const { getPrice } = require("../index");

describe("getPrice", () => {
	test("should return integer", () => {
		const result = getPrice(1);
		const result2 = getPrice(5000);

		expect(Number.isInteger(result)).toBe(true);
		expect(Number.isInteger(result2)).toBe(true);
	});
	test("should return cheapest price for a single minute", () => {
		expect(getPrice(1)).toBe(2);
	});
	test("should return cheapest price for 2 - 10 minutes", () => {
		expect(getPrice(2)).toBe(4);
		expect(getPrice(10)).toBe(20);
	});
	test("should return cheapest price for 11 - 60 minutes", () => {
		expect(getPrice(11)).toBe(22);
		expect(getPrice(30)).toBe(22);
		expect(getPrice(60)).toBe(22);
	});
	test("should return cheapest price for 61 - 120 minutes", () => {
		expect(getPrice(61)).toBe(44);
		expect(getPrice(90)).toBe(44);
		expect(getPrice(120)).toBe(44);
	});
	test("should return cheapest price for 121 - 1440 minutes", () => {
		expect(getPrice(121)).toBe(60);
		expect(getPrice(500)).toBe(60);
		expect(getPrice(1440)).toBe(60);
	});
	test("should return cheapest price for 1441 - 10080 minutes", () => {
		expect(getPrice(1441)).toBe(105);
		expect(getPrice(5000)).toBe(105);
		expect(getPrice(10080)).toBe(105);
	});
	test("should return cheapest price for 10081+ minutes", () => {
		expect(getPrice(10081)).toBe(210);
		expect(getPrice(20160)).toBe(210);
		expect(getPrice(100800)).toBe(1050);
	});
});
