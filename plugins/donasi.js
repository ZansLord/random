let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [085869074622]
│ • Telkomsel [085869074622]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay, OVO, Dana [085869074622]
│ • https://saweria.co/LitRHap
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
