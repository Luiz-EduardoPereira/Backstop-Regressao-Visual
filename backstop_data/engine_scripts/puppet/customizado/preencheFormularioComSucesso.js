const preenchendoCamposObrigatorios = require("./preencheendoCamposObrigatorios")
module.exports = async page => {
    await preenchendoCamposObrigatorios(page)
    await page.click("button[type=\"submit\"]")
}