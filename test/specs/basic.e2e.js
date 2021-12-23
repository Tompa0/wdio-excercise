describe('OpenMRS stranica', () => {
    it('Prijava sa netočnim podacima', async () => {
        browser.url("https://demo.openmrs.org/openmrs/login.htm");

        const usernameInput = await $('#username');
        const passwordInput = await $('#password');
        const pharmacyButton = await $('#Laboratory');
        const loginButton = await $('#loginButton');

        await usernameInput.addValue('user');
        await passwordInput.addValue('password');
        await pharmacyButton.click();
        await loginButton.click();

        const errorMessage = await $('#error-message');
        await expect(errorMessage).toHaveText("Invalid username/password. Please try again.");
    });


    it('Prijava sa točnim podacima', async () => {
        browser.url("https://demo.openmrs.org/openmrs/login.htm");

        const usernameInput = await $('#username');
        const passwordInput = await $('#password');
        const pharmacyButton = await $('#Laboratory');
        const loginButton = await $('#loginButton');

        await usernameInput.addValue('Admin');
        await passwordInput.addValue('Admin123');
        await pharmacyButton.click();
        await loginButton.click();

        const h4 = await $('h4');
        await expect(h4).toHaveText("Logged in as Super User (admin) at Laboratory.");
    });
})