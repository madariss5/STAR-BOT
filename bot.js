import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭───[𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻]───╮
│╭────────────────────
┴│👋 Hey there, ${conn.getName(m.sender)}!
⬡│🤖 𝙸'𝚖 𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻 \n⬡│ I'm up and running! 🚀
│╰────────────────────
┠───[ BOT INFO ]────╮
│╭────────────────────
┴│       𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻
⬡│💻 A WhatsApp bot created by:
⬡│👨‍💻 Martin
⬡│📞 For any inquiries, contact:
⬡│📱 wa.me/4915563151347
⬡│🙅‍♂️ Don't call the owner or you\'ll be
⬡│ ignored or blocked! 😬
│╰────────────────────
┠───[ HOW TO USE ]────⋆
┴│💡 Some commands you can use:
⬡│🔸 .menu \n⬡│- Shows a list of available commands
⬡│🔸 .play \n⬡│- Plays a YouTube video or audio.
⬡│🔸 .sticker \n⬡│- Converts an image to a sticker
┬│🔸 .translate \n⬡│- Translates text to other lang
│╰──────────────
╰────────═┅═───────
*Thank you for choosing 𝔹𝕃𝔸ℂ𝕂𝕊𝕂𝕐-𝕄𝔻 🌟✨*
`.trim()
  m.reply(caption)
}
handler.help = ['bot']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
