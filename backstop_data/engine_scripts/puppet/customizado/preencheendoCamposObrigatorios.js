module.exports = async page => {
    await page.type("#first-name", "Luiz")
    await page.type("#last-name", "Eduardo")
    await page.type("#email", "luizeduardop@outlook.com")
    await page.click("#agree")
    await page.waitForTimeout(1000)
}