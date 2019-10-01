import assert from "assert";

describe("Landing Page", () => {
  it("should have the correct title", async () => {
    await browser.url("/");
    const title = await browser.getTitle();
    assert.strictEqual(title, "Lemon - Home");
  });
});
