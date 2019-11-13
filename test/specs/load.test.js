import assert from "assert";

describe("Load", () => {
  const payload =
    "eyJzZWVkIjoxNjQxMzkyODEwLCJjb25maWciOnsibG9hZGluZ0RlbGF5IjowLCJsb2FkaW5nSml0dGVyIjpmYWxzZSwic2hvd0xvYWRpbmdTY3JlZW4iOmZhbHNlLCJ1c2Vyc0Ftb3VudCI6MTAsInBvc3RzQW1vdW50IjoxMDAwfX0=";

  it("should have correct title on shared", () => {
    browser.url(`/_/load?payload=${payload}`);
    assert.strictEqual(browser.getUrl(), `${browser.config.baseUrl}/`);
  });
});
