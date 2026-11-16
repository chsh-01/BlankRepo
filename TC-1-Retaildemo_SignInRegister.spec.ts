import { leapwork } from "./leapwork";

leapwork.variables.set("emailAddress", "olivia.admin@example.com", leapwork.storage.LOCAL);
const lw__emailAddress = leapwork.variables.get("emailAddress", leapwork.storage.LOCAL) as string;

leapwork.configuration({
  timeoutMs: Number(
    leapwork.team.settings.get("timeoutMs")
    ?? leapwork.workspace.settings.get("timeoutMs")
  ) || 5000,
  enableSelfHeal: 
    (leapwork.team.settings.get("enableSelfHeal")
      ?? leapwork.workspace.settings.get("enableSelfHeal")) !== "false",
  enableXpath: 
    (leapwork.team.settings.get("enableXpath")
     ?? leapwork.workspace.settings.get("enableXpath")) !== "false",
  chromiumArgs:
    leapwork.team.settings.get("chromiumArgs")
      ?? leapwork.workspace.settings.get("chromiumArgs")
      ?? ["--deny-permission-prompts",
          "--disable-notifications"
        ],
  chromiumPrefs: leapwork.team.settings.get("chromiumPrefs")
      ?? leapwork.workspace.settings.get("chromiumPrefs")
      ?? { "credentials_enable_service": false,
          "profile":
          {
            "password_manager_enabled": false,
            "password_manager_leak_detection": false
          }
        },
});

// ai-studio-step-id: pwiyhbbk00
await leapwork.step("Click the Account button in the header.", async () => {
    // Click button "Account"
    await page.getByRole('button', { name: 'Account' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"accountButton\"]" });

// ai-studio-step-id: pw1asftwf0
await leapwork.step("Click the Sign in button in the Account sign in panel", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"accountMenu\"]/div/button[1]" });

// await leapwork.step("Validate the \"Sign in or register\" heading in the Account sign-in panel on Leap & Leash Pet Market", async () => {
    // // Assert heading "Sign in or register" contains "Sign in or register"
    // await expect(page.getByRole('heading', { name: 'Sign in or register' })).toContainText("Sign in or register");
// }, { action: "validate", relativeXpath: "//*[@id=\"authTitle\"]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// ai-studio-step-id: pw1j53fjj0
await leapwork.step("Get value from Sign in or register", async () => {
    // Get value from heading "Sign in or register"
    const lw_value = (await page.getByRole('heading', { name: 'Sign in or register' }).textContent())?.trim() ?? '';
    leapwork.variables.set("lw_signInOrRegister", lw_value, leapwork.storage.LOCAL);
}, { action: "get_value", enableXpath: false, relativeXpath: "//*[@id=\"authTitle\"]" });

// ai-studio-step-id: pw1h760no0
await leapwork.step("Validate the Leap & Leash Pet Market page shows “Sign in or register” heading", async () => {
    // Assert heading "Sign in or register" contains "Sign in or register"
    await expect(page.getByRole('heading', { name: 'Sign in or register' })).toContainText("Sign in or register");
}, { action: "validate", relativeXpath: "//*[@id=\"authTitle\"]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from Sign in or register", async () => {
//     // Get value from heading "Sign in or register"
//     const lw_value = (await page.getByRole('heading', { name: 'Sign in or register' }).textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_signInOrRegister", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: "//*[@id=\"authTitle\"]" });

// ai-studio-step-id: pw14q8mx50
await leapwork.step("Click the Email address field in the Account sign-in section", async () => {
    // Click textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"authEmail\"]" });

// ai-studio-step-id: pwg1ewfm00
await leapwork.step(`Fill the Email address field with ${lw__emailAddress}`, async () => {
    // Fill textbox "Email address"
    await page.getByRole('textbox', { name: 'Email address' }).fill(String(lw__emailAddress));
}, { action: "input", relativeXpath: "//*[@id=\"authEmail\"]" });

// ai-studio-step-id: pw1kdxone0
await leapwork.step("Validate the Leap & Leash Pet Market page heading shows \"Admin\"", async () => {
    // Assert heading "Admin" contains "Admin"
    await expect(page.getByRole('heading', { name: 'Admin' })).toContainText("Admin");
}, { action: "validate", relativeXpath: "//*[@id=\"accountTitle\"]", enableXpath: false });

// Warning: Do not delete this step. It is linked to the validate step above.
// await leapwork.step("Get value from Admin", async () => {
//     // Get value from heading "Admin"
//     const lw_value = (await page.getByRole('heading', { name: 'Admin' }).textContent())?.trim() ?? '';
//     leapwork.variables.set("lw_admin", lw_value, leapwork.storage.LOCAL);
// }, { action: "get_value", enableXpath: false, relativeXpath: "//*[@id=\"accountTitle\"]" });

// ai-studio-step-id: pw16zjpo70
await leapwork.step("Click the Password field in the Account sign-in form", async () => {
    // Click textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"authPassword\"]" });

// ai-studio-step-id: pw14ck4k60
await leapwork.step("Fill the Password field on the Admin login form", async () => {
    // Fill textbox "Password"
    await page.getByRole('textbox', { name: 'Password' }).fill(leapwork.variables.getSecret("pwd_EI8OBh8r"));
}, { action: "input", relativeXpath: "//*[@id=\"authPassword\"]" });

// ai-studio-step-id: pw1mnw9h70
await leapwork.step("Click the Sign in button in the account form", async () => {
    // Click button "Sign in"
    await page.locator('#authSubmit').click();
}, { action: "click", relativeXpath: "//*[@id=\"authSubmit\"]" });

//new 
//updated 2
