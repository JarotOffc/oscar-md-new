let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://www.threads.net/@cindyyuvia/post/C_Nqx3khgkI/?xmt=AQGzpsCvidh8IwIqOvq4Ov05Zd5raANiVdvCujM_pjBa1Q`;
  }
  if (!args[0].match(/threads/gi)) {
    throw `URL Tidak Ditemukan!`;
  }
  m.reply(wait);
  try {
    const api = await fetch(`https://api.botcahx.eu.org/api/download/threads?url=${args[0]}&apikey=${btc}`).then(results => results.json());
    const foto = api.result.image_urls[0] || null;
    const video = api.result.video_urls[0] || null;   
    if (video) {
      try { 
        conn.sendFile(m.chat, video.download_url, 'threads.mp4', '> ' + wm, m);
      } catch (e) {
        throw `Media video tidak ditemukan!`;
      }
    } else if (foto) {
      try {
        conn.sendFile(m.chat, foto, 'threads.jpeg', '> ' + wm, m);
      } catch (e) {
        throw `Media foto tidak ditemukan!`;
      }
    } else {
      throw `Konten tidak ditemukan!`;
    }
  } catch (e) {
    throw eror
  }
};
handler.command = handler.help = ['threads', 'threadsdl'];
handler.tags = ['downloader', 'premium'];
handler.premium = true;

export default handler;