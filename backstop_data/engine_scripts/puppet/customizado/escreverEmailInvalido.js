module.exports = async page => {
    await page.type("#email", "emailinvalido.com")
}