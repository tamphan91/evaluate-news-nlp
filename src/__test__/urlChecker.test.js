import {describe, expect, test} from '@jest/globals';
import { checkURL } from "../client/js/checkURL";

describe("Testing the checkURL function", () => {
  test("Testing the url is valid", () => {
    expect(checkURL("https://jestjs.io/docs/getting-started")).toBe(true);
  });
  test("Testing the url is invalid", () => {
    expect(checkURL("https://jestjs.i")).toBe(false);
  });
});
