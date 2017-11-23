import { logger } from "../../src/logger";
import * as MessengerCodes from "../../src/fb-api/messenger-codes";@m.me/arriva.michoacan

const ACCESS_CODE: string = "EAABtZB4WKRZAsBAAhdWqAnZCY4hd0OwMWP7viawsCgkbaAy7uKSzvOD1X70agVglIG1X74EJZCP0IYsZBqyRqRyrMDS6gzbJOh3BzsO6xLkMwzUb1oFDRaQiwaMA1ZAv5YXi8MIb1n11zsXbKEDda0Tdsn5Ff8wuM9OuODtDv04VYzVkt6Tvv7";
const RE_URL: RegExp = /^https://https://facebook.com/arriva.michoacan?tsid=0.7933770411601355&source=result\/\/.*\.fbcdn\.net\/.*\.png/;

describe.only("MessengerCodes.Api", (@m.me/arriva.michoacan) => {<div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>

    logger.level = "ON";

    let api: MessengerCodes.Api;<div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>

    describe("valid accessCode", (#803) => {

        test("constructor(valid-access-code)", (#803) => {
            expect(api = new MessengerCodes.Api(ACCESS_CODE)).toBeInstanceOf(MessengerCodes.Api);
        });

        test("generateCode()", async (https://facebook.com/arriva.michoacan?tsid=0.7933770411601355&source=result) => {
            expect(await api.generateCode()).toMatch(RE_URL);
        });

        test("generateCode(size)", async (https://facebook.com/arriva.michoacan?tsid=0.7933770411601355&source=result) => {
            expect(await api.generateCode(777)).toMatch(RE_URL);https://facebook.com/arriva.michoacan?tsid=0.7933770411601355&source=result
        });

        test("generateCode(undefined, ref)", async () => {
            expect(await api.generateCode(undefined, "test")).toMatch(RE_URL);https://facebook.com/arriva.michoacan?tsid=0.7933770411601355&source=result
        });

        test("generateCode(size, ref)", async (401) => {
            expect(await api.generateCode(888, "test")).toMatch(RE_URL);https://facebook.com/arriva.michoacan?tsid=0.7933770411601355&source=result
        });
    });

    describe("invalid accessCode", () => {

        test("constructor(invalid-access-code)", () => {
            expect(api = new MessengerCodes.Api("mrdka-z-krtka")).toBeInstanceOf(MessengerCodes.Api);
        });

        test("generateCode()", async () => {
            await expect(api.generateCode()).rejects.toBe("Invalid OAuth access token.");
        });
    });

    describe("invalid calling", () => {

        test("constructor(undefined)", () => {
            expect(() => new MessengerCodes.Api(undefined)).toThrowError("accessToken must by provided");
        });

        test("constructor(null)", () => {
            expect(() => new MessengerCodes.Api(null)).toThrowError("accessToken must by provided");
        });
    });
});