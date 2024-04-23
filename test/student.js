describe('Import Error details', async() => {

    it('launch', async () => {
         await browser.url('https://sisclientweb-900191.campusnexus.dev/')
         await browser.maximizeWindow()
         await browser.pause(3000)
        });

        it('Login', async () => {
            await $("//input[@type='email']").setValue("$EMAIL") //email here
            await $("//input[@type='submit']").click()
            await browser.pause(3000)
            await $("//input[@name='passwd']").setValue("$PASSWORD") //password here
            await $("//input[@type='submit']").click()
            await browser.pause(3000)
            await $("//input[@type='submit']").click()
            await browser.pause(15000)
            await $ ("//button[@ng-if='!$ctrl.isRequired']").click()
            await browser.pause(3000)
            
            });


            it('Homepage', async () => {
                await $("(//div[@class='tile-content icon'])[1]").click()
                await browser.pause(8000)
                await $("(//span[@class='k-button-text'])[1]").click()
                await browser.pause(8000)

         });

             it('NewStudent', async () => {
                await $("(//input[@type='text'])[6]").click()
                await $("(//input[@type='text'])[6]").setValue("$FIRSTNAME") // firstname here
                await browser.pause(2000)
                await $("(//input[@type='text'])[8]").click()
                await browser.pause(2000)
                await $("(//input[@type='text'])[8]").click()
                await $("(//input[@type='text'])[8]").setValue("$LASTNAME") // lastname here
                await browser.pause(2000)
                await $('(//span[@class="ui-primary-label ng-binding cmc-primary-label"])[3]').click()
                await browser.pause(3000)
                await $('(//span[@class="ui-primary-label ng-binding cmc-primary-label"])[3]').click()
                await browser.pause(1000)
                await $('//input[@aria-controls="recruitMultiSelLeadSource_listbox"]').click()
                await $('(//input[@type="checkbox"])[8]').click()
                await $("#leadVendorSubVendorOkButton").click()
                await browser.pause(3000)
                await $("//div[@class='search-display-flex cmc-required']").click()
                await browser.pause(3000)
                await $('(//input[@type="checkbox"])[4]').click()
                await $('//button[@ng-disabled="$ctrl.selectDisabled"]').click()
                await $("#studentSaveButton").click()
                await browser.pause(5000)
                await browser.saveScreenshot("./Studentcreated.png")


           });

        });


           