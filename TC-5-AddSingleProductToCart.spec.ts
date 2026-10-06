import { leapwork } from "./leapwork";

import { LoginToRetailDemo } from "@assets/TestCases/Regression/LoginToRetailDemo";

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: pw1ylq0u80
await leapwork.step("Use test case: LoginToRetailDemo", async () => {
    return await LoginToRetailDemo();
}, { action: "asset_reference", linkedAssetType: "test-case" });

// ai-studio-step-id: yOMSmAKm
await leapwork.step("Click the Products link in the primary navigation", async () => {
    // Click link "Products"
    await page.getByRole('link', { name: 'Products', exact: true }).click();
}, { action: "click", relativeXpath: ".//body/header/div/nav[@aria-label=\"Primary navigation\"]/a[1]" });

// ai-studio-step-id: nmbyIzLG
await leapwork.step("Click View details for Leap & Leash Chicken Kibble ($28.00)", async () => {
    // Click button "View details for Leap & Leash Chicken Kibble, $28.00"
    await page.getByRole('button', { name: 'View details for Leap & Leash' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productGrid\"]/article[@aria-label=\"View details for Leap & Leash Chicken Kibble, $28.00\"]" });

// ai-studio-step-id: xehyZKNs
await leapwork.step("Click Add to cart for Leap & Leash Chicken Kibble ($28.00)", async () => {
    // Click button "Add to cart"
    await page.getByRole('button', { name: 'Add to cart' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"productDialogContent\"]/div/div[2]/button" });

// ai-studio-step-id: JWFaiBte
await leapwork.step("Validate the Leap & Leash Pet Market cart shows Chicken Kibble quantity as 1", async () => {
    // Assert strong contains "1"
    await expect(page.getByLabel('Shopping cart').getByText('1', { exact: true })).toContainText("1");
}, { action: "validate", relativeXpath: "//*[@id=\"cartItems\"]/div/div[@aria-label=\"Leap & Leash Chicken Kibble quantity\"]/strong" });