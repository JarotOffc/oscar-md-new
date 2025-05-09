
const translations = {
    
    afktemx: 'Mames kamu mau ninggalin surat wasiat atau apax',
    afkdone: 'AFK diatur',
    afkdel: 'Selamat datang kembali',
    afktime: 'Tidak hadir sejak',
    with: 'Dengan alasan',
    afkmsg: 'Akan memberi tahu mereka yang menyebutkan Anda',
    afktag: 'Pengguna sedang AFK',
    name: 'Nama',
    noMention: 'Sebutkan pengguna',
    userDb: 'Pengguna tidak ada dalam database saya',
    example: 'Contoh',

    //-- Stick reaction
    killmsg: 'Membunuh',
    kismsg: 'Memberi ciuman pada',
    patmsg: 'Mengelus',
    slapmsg: 'Menampar',

    next: 'Selanjutnya',
    hi: 'Halo',
    gp: 'Grup',
    nobbot: 'Perintah ini hanya dapat digunakan di bot utamal',
    botqr: '*Gunakan Kode Ini untuk Menjadi Bot*\n\n1. Ketuk tiga titik di sudut kanan atas.\n2. Ketuk Perangkat yang Terhubung\n3. Pilih *Hubungkan dengan Nomor Telepon*\n\n*Catatan:* Kode ini hanya berlaku untuk nomor ini',
    recon: 'Koneksi terputus...',
    sesClose: 'Koneksi ditutup, Anda harus terhubung secara manual dengan mengirimkan *ID*',
    connet: 'Terhubung berhasil',
    connID: '*Terhubung berhasil!*\n\nDalam beberapa detik, kami akan mengirimkan *ID* yang harus Anda gunakan untuk terhubung kembali\n\n*NOTE:* Ikuti Chanel Wa Bot Oscar Biar Ga Ketinggal Info Update Bot*\nsimpan tautan ini agar Anda dapat bergabung lagi nanti\nhttps://whatsapp.com/channel/0029Vafxmss3wtb42PjN371r',
    connMsg: 'Ketika Anda terhubung selanjutnya, kirim pesan berikut untuk masuk tanpa memindai kode QR lainnya',
    botlist: 'Daftar Sub Bot Aktif',
    newcode: (usedPrefix) => `Baik! Anda sekarang dapat menggunakan *${usedPrefix}jadibot* untuk meminta kode QR baru`,
    nsbot: 'Perintah ini hanya untuk *Sub Bot Aktif*',
    msgcode: 'Kode baru telah dikirim ke pesan pribadi Anda',
    stopbot: 'Bot terputus',

    total: 'Total',
    tx: 'Transmisi',
    txdone: 'Transmisi terkirim',
    cmdlist: '*DAFTAR PERINTAH*\n\n▢ *Info:* Jika ada yang *tebal*, itu terkunci',
    notext: 'Ulangi dengan menambahkan teks',
    textSe: 'Pisahkan teks dengan',
    reply: 'Balas pesan',
    replyImg: 'Balas gambar',
    cmdSave: 'Perintah disimpan',

    oversizePrem: 'Ukuran file melebihi batas unduhan',
    error: 'Terjadi kesalahan, coba lagi nanti',
    size: 'Ukuran',
    link: 'Tautan',
    dev: 'Pengembang',
    version: 'Versi',
    searchTo: (value, usedPrefix, command) => `Untuk mencari di ${value}:\n\n📌Gunakan: *${usedPrefix + command} <teks>*\n\nUntuk mengunduh dari URL:\n*${usedPrefix + command}* <tautan>`,
    search: (value) => `Masukkan yang ingin Anda cari di *${value}*`,
    lastUp: 'Pembaruan Terakhir',
    noLink: (value) => `Masukkan tautan ${value}`,
    title: 'Judul',
    noUsername: 'Masukkan nama Pengguna',
    username: 'Nama Pengguna',
    followers: 'Pengikut',
    follows: 'Mengikuti',
    bio: 'Biografi',
    posts: 'Postingan',
    aploud: 'Diunggah',
    limitdl: 'File melebihi batas unduhan',
    limitdlTe: 'Upgrade ke premium untuk mengunduh file hingga',
    duration: 'Durasi',
    views: 'Tampilan',
    quality: 'Kualitas',
    type: 'Tipe',
    desc: 'Deskripsi',
    useCmd: 'Penggunaan perintah',
    noNum: 'Masukkan hanya angka',
    random: 'Acak',

    purse: 'Dompet',
  dmd: 'Berlian',
  money: 'Koin',
  bank: 'Bank',
  itemV: 'Untuk melihat semua *Item*',
  isNan: 'Jumlah harus angka yang valid',
  voucher: 'Voucher',
  buy: 'Dibeli',
  buyCount: 'Jumlah yang dibeli',
  spent: 'Dibelanjakan',
  buyNan: (value) => `Anda tidak memiliki cukup *${value}* untuk membeli`,
  noItem: (usedPrefix) => `Item tersebut tidak ada:\n\n*${usedPrefix}shop* untuk melihat item yang tersedia`,
  noTime: 'Format waktu tidak valid',
  second: 'Detik',
  hour: 'Jam',
  minute: 'Menit',
  day: 'Hari',

  robCd: 'Anda tidak dapat melakukan *Kejahatan* saat ini. Anda harus menunggu',
  crime: 'Anda telah berhasil melakukan kejahatan',
  crimeAl: 'Anda tidak terlalu berhati-hati saat masuk untuk mencuri dan mengaktifkan alarm. Anda hanya bisa membawa',
  robMul: 'Oh tidak! Kejahatan Anda gagal dan Anda dikenakan denda sebesar',
  victin: 'Korban',
  robDo: 'Anda mencuri',
  tag: 'Tag',
  dailyCd: 'Anda sudah mengambil hadiah harian Anda. Kembali dalam',
  daily: 'Hadiah Harian',
  amount: 'Jumlah',
  dep: (value) => `Anda telah mendepositokan *${value}🪙* ke Bank`,
  depNan: 'Anda tidak memiliki uang untuk mendepositokan',
  resBt: 'Restart',
  lbTitle: 'Tabel Peringkat',
  top: 'Teratas',
  lvl: 'Level',
  of: 'dari',
  you: 'Anda',
  rank: 'Peringkat',
    fxp: 'Tinggal sedikit lagi untuk naik level',
    lvlbfor: 'Level sebelumnya',
    lvlup: 'Level saat ini',
    mineCd: 'Anda dapat kembali ke tambang dalam',
    mine: 'Hebat! Anda menambang',
    restEcon: 'Ekonomi bot telah pulih',
    shop: 'Toko',
    shopMsg: 'Anda dapat membeli menggunakan',
    prem: 'Premium',
    onTransfer: 'Anda sedang melakukan transfer',
    transItem: 'Item yang dapat ditransfer',
    confirm: 'Anda yakin ingin mentransfer',
    to: 'Ke',
    payNan: 'Tidak cukup untuk mentransfer',
    payCd: 'Waktu habis',
    cancelPay: 'Transfer dibatalkan',
    pay: 'Transfer berhasil dilakukan sejumlah',
    payError: 'Kesalahan saat mentransfer',
    wd: 'Berapa banyak *Coins* yang ingin Anda tarik?',
    wdYes: 'Anda telah menarik',
    noWd: 'Anda tidak dapat menarik lebih dari yang ada di bank',
    weeklyCd: 'Ini adalah hadiah mingguan 😉. Kembali dalam',
    weekly: '*HADIAH MINGGUAN*\n\nOh! Sudah seminggu berlalu? Bagaimanapun, inilah hadiah Anda',
    workCd: 'Anda dapat kembali bekerja dalam',

    nable: 'Aktif',
    disable: 'Nonaktif',
    toBot: 'Untuk bot ini',
    toGp: 'Untuk grup ini',
    gaytex: 'Siapa yang ingin memperkosa gay ini?',
    result: 'Hasil',
    shipCd: 'Anda dapat memilih pasangan lain dalam',
    shipp: 'Pasangan Hari Ini',
    toaud: 'Balas video atau catatan suara yang ingin Anda konversi ke mp3 dengan perintah',
    toav: 'Balas audio yang ingin Anda konversi ke catatan suara dengan',

    noGame: 'Tidak dalam permainan',
    resGame: 'Sesi *TicTacToe* telah direset',
    gameOff: 'Permainan telah berakhir',
    gaDone: 'Jawaban yang benar',
    win: 'Anda menang',
    mathOff: 'Kesempatan telah habis',
    chance: 'Kesempatan',
    answer: 'Jawaban',
    mathError: '*Jawaban salah*\n\nMasih ada',
    gameMode: 'Mode Permainan Tersedia',
    mathOn: 'Masih ada pertanyaan yang belum dijawab di grup ini',
    time: 'Waktu',
    timeOff: 'Waktu telah habis!\nJawabannya adalah:',
    reward: 'Hadiah',
    pptCd: 'Anda harus menunggu sebelum bermain lagi',
    ppt: (usedPrefix, command) => `Pilih batu/kertas/gunting\n\n📌 Contoh: *${usedPrefix + command}* kertas`,
    coinNan: 'Anda tidak memiliki cukup *Coins* untuk bermain',
    stone: 'batu',
    sciss: 'gunting',
    paper: 'kertas',
    tie: 'Seri',
    win: 'Anda menang',
    lost: 'Anda kalah',
    roulet: (usedPrefix) => `Anda dapat melakukan beberapa taruhan dalam permainan roulette.\n\nPenggunaan: *${usedPrefix}roulette* <jumlah> <spasi>\n\nPerkalian pembayaran`,
    rouletCd: 'Anda sudah melakukan taruhan. Tunggu',
    moreInfo: 'Untuk informasi lebih lanjut',
    betMin: 'Jumlah taruhan harus lebih besar dari',
    betMax: 'Jumlah taruhan melebihi batas maksimum',
    betNan: 'Anda tidak memiliki cukup *Coins* untuk melakukan taruhan tersebut',
    in: 'dalam',
    bet: 'Anda telah melakukan taruhan sejumlah',
    fell: 'Roulette jatuh pada',
    slotC: 'Hampir berhasil, terus coba :)',

    delWarnUser: 'Seorang admin mengurangi peringatan Anda, sekarang Anda memiliki',
    warnNan: 'Pengguna tidak memiliki peringatan',
    delwarn: 'Unwarn',
    warns: 'Peringatan',
    warn: 'Peringatan',
    warnRec: 'Anda menerima peringatan dari admin',
    numError: 'Nomor Salah',
    promote: 'Pengguna Dipromosikan',
    demote: 'Pengguna Diturunkan',
    gpInfo: 'Info Grup',
    members: 'Anggota',
    gpOwner: 'Pemilik Grup',
    admin: 'Admin',
    gpConf: 'Konfigurasi grup',
    gpConfMsg: 'Konfigurasi Pesan',
    kick: 'Pengguna Dikeluarkan',
    linkGp: 'Tautan Grup',
    preNan: 'Masukkan awalan nomor yang valid',
    gpNanPre: 'Grup tidak memiliki anggota dengan awalan',
    userPref: 'Pengguna dengan awalan',
    profile: 'Profil',
    number: 'Nomor',
    age: 'Usia',
    gender: 'Jenis Kelamin',
    lang: 'Bahasa',
    regOn: 'Terdaftar',
    xpUp: 'Siap naik',
    upNan: 'Tinggal sedikit lagi untuk naik level',
    gpRulesNan: 'Grup ini belum memiliki aturan',
    gpRules: 'Aturan Grup',
    rulesMsgOn: 'Aturan Grup telah ditetapkan',
    rulesMsg: 'Masukkan Aturan Grup',
    welMsgOn: 'Pesan Selamat Datang telah ditetapkan',
    leaMsgOn: 'Pesan Perpisahan telah ditetapkan',
    welMsg: 'Masukkan Pesan Selamat Datang\n\n@user (mention)\n@group (Nama grup)\n@desc (deskripsi grup)',
    leaMsg: 'Masukkan Pesan Perpisahan\n\n@user (mention)',
    gpSetting: 'Pengaturan grup\n\nBuka dan tutup grup',
    user: 'Pengguna',
    userWarn: 'Pengguna Diberi Peringatan',
    wningUser: (war) => `Jika Anda menerima *${war}* peringatan, Anda akan otomatis dikeluarkan dari grup`,
    warnMaxU: (war) => `Pengguna telah mencapai batas *${war}* peringatan dan akan dikeluarkan`,
    blockNan: 'Tidak ada Nomor yang Diblokir',
    bckList: 'Daftar yang Diblokir',
    donate: '*DONASI*\nAnda dapat berdonasi jika ingin membantu menjaga bot tetap aktif',
    langList: 'Pilih bahasa yang ingin Anda gunakan\n\n≡ *Bahasa yang Tersedia*',
    expire: 'Kadaluarsa dalam',
    ping: 'Kecepatan',
    uptime: 'Waktu Aktif',
    gpNsfw: (usedPrefix) => `Grup ini tidak mengizinkan konten nsfw\nGunakan grup ini\n${bgp3}\n\nJika Anda adalah admin, aktifkan dengan\n*${usedPrefix}enable* nsfw`,
    nsfwAge: 'Anda masih di bawah umur! Kembali ketika Anda berusia di atas 18 tahun',
    addPremUser: 'Anda sekarang menjadi Pengguna Premium',
    banChat: 'Bot dinonaktifkan di grup ini',
    unBanChat: 'Bot aktif di grup ini',
    banUser: 'Anda tidak dapat menggunakan perintah saya lagi',
    unBanUser: 'Pengguna telah di-unban',
    restartBot: 'Merestart Bot...\nHarap tunggu sebentar',

    genderList: 'Jenis Kelamin yang Tersedia',
    man: 'Pria',
    woman: 'Wanita',
    other: 'Lainnya',
    regIsOn: 'Anda sudah terdaftar\n\nIngin mendaftar lagi?\n\n 📌 Gunakan perintah ini untuk menghapus pendaftaran Anda',
    nameMax: 'Nama terlalu panjang',
    oldReg: 'Wow, kakek ingin bermain bot',
    numSn: 'Nomor Seri',
    snVerify: 'Verifikasi nomor seri Anda dengan perintah',
    snError: 'Nomor seri salah',
    unReg: 'Pendaftaran Dihapus',
    stickError: 'Konversi gagal, coba kirim terlebih dahulu *gambar/video/gif* dan kemudian balas dengan perintah',
    tgStick: 'Masukkan tautan pack stiker telegram',
    replyStick: 'Balas Stiker',
    ssWeb: 'Masukkan URL halaman web',
    tradList: 'Daftar Bahasa yang Dapat Digunakan',
    searchError: 'Tidak ada hasil ditemukan',

    rownerH: 'Perintah ini hanya bisa digunakan oleh *Pembuat bot*',
    ownerH: 'Perintah ini hanya bisa digunakan oleh *Pemilik dan Sub Bot*',
    modsH: 'Fungsi ini hanya untuk *Moderator Bot*',
    premH: 'Perintah ini hanya untuk anggota *Premium*\n\nKetik */premium* untuk info lebih lanjut',
    groupH: 'Perintah ini hanya dapat digunakan di grup',
    privateH: 'Perintah ini hanya dapat digunakan di *chat pribadi Bot*',
    adminH: 'Perintah ini hanya untuk *Admin Grup*',
    botAdmin: 'Untuk menggunakan perintah ini, saya perlu menjadi *Admin!*',
    unregH: 'Daftar untuk menggunakan fungsi ini. Ketik:\n\n*/reg*',
    ig: `▢ Ikuti saya di Instagram\n${ig}`
}

export default translations
