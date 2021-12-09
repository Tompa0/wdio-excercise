describe('Shoutem Web Stranica', () => {
    it('Ispisuje ispravan h1 naslov', async () => {
        browser.url('https://shoutem.com/pricing/');

        //Definiranje
        const naslov = await $('h1');
        await expect(naslov).toHaveText('There are more ways to create apps with Shoutem');

    })

    it('Ispisuje ispravan h1 naslov', async () => {
        browser.url('https://shoutem.com/apps/social-network/');
        const gumb = await $('a=Build now');
        gumb.click();
        const iduciNaslov = await $('h1');
        await expect(iduciNaslov).toHaveText('Choose an app template');


    });
})
