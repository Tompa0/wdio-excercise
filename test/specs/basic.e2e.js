describe('Coinmarket Cap stranica', () => {



    it('Ispisuje ispravan h3 Bitcoin naslov', async () => {
        browser.url('https://coinmarketcap.com/currencies/bitcoin');

        const naslovBtc = await $('h3');
        await expect(naslovBtc).toHaveText('Bitcoin to USD Chart');

    })

    it('Ispisuje ispravan h3 Ethereum naslov', async () => {
        browser.url('https://coinmarketcap.com/currencies/ethereum/');

        const naslovEth = await $('h3');
        await expect(naslovEth).toHaveText('Ethereum to USD Chart');

    })

})
