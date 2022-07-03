let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│Dana   [081248537085]
│Pulsa  [081248537085]
│Gopay  [081248537085]
│OvO  [081248537085]
│Trakteer [https://trakteer.id/RezzBot]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
