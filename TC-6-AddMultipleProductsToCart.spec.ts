import { leapwork } from "./leapwork";

leapwork.variables.set("enterYourEmail", "charita.sharma@example.com", leapwork.storage.LOCAL);
const lw__enterYourEmail = leapwork.variables.get("enterYourEmail", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal:
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
});

// ai-studio-step-id: ggzIRC3U
await leapwork.step("Open chrome-error://chromewebdata/", async () => {
    await page.goto("chrome-error://chromewebdata/", { waitUntil: 'load' });
}, { action: "navigate" });

// ai-studio-step-id: 6tBm8ldf
await leapwork.step("Click the Google sign-in button", async () => {
    // Click span
    await page.getByRole('button', { name: 'Sign in with Google' }).click();
}, { action: "click", relativeXpath: ".//div/div/ul/li[1]/button[@aria-label=\"Sign in with Google\"]/span[2]" });

// ai-studio-step-id: YL2qY55r
await leapwork.step(`Fill the Email field with ${lw__enterYourEmail}`, async () => {
    // Fill textbox "Email*"
    await page.getByRole('textbox', { name: 'Email*' }).fill(String(lw__enterYourEmail));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: RnzpKbNR
await leapwork.step("Click Continue on the email login form", async () => {
    // Click button "Continue"
    await page.getByRole('button', { name: 'Continue' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });