/*
 * デジタル名刺のデータ
 * Claude Code が CLAUDE.md の手順に沿ってこのファイルを書き換えます。
 * 手で直す場合も、左側の項目名は変えないでください。
 * 値が "" の項目は名刺に表示されません。改行は \n で書きます。
 */
window.PROFILE = {
  __TEMPLATE__: false, // 作成が終わると false（true の間は「サンプル表示中」の注意が出ます）

  // 1) 基本情報（title 以外は必須）
  basic: {
    name: "北條 亮",            // 姓と名の間に空白を1つ
    company: "Repro株式会社",
    address: "東京都渋谷区代々木1-36-4　全理連ビル4階",
    department: "Repro MA & Solutions Division Enterprise Sales Team",
    title: "",         // 役職（任意）
    email: "tasuku.hojo@repro.io",
    phone: "080-4154-6612"
  },

  // 2) 起動アニメーションのロゴ: "company"（会社ロゴ）または "app"（アプリロゴ）
  splash: { logo: "company" },

  // 3) 起動後にスクランブル表示する文字（任意）と、ツアー1枚目「ようこそ！」のひとこと（任意）
  scramble: "心を武装し\n我ら最前線に立つ\n自由をこの手に",
  welcome: "",

  // 4) SNS（URLで保存。使わないものは ""）
  sns: {
    sansan: "https://ap.sansan.com/v/vc/kaxf6xypy4junkcitiuiw5d4l4/",
    instagram: "",
    facebook: "https://m.me/61595367621103",
    x: "",
    linkedin: "",
    whatsapp: "",           // 例: "https://wa.me/819012345678"
    others: [
      // { label: "note", url: "https://note.com/xxxx" }
    ]
  },

  // 5) 自己紹介（300文字程度）
  intro: "初めまして。Reproの北條です。趣味は、Spartan RaceなどのOCR（障害物レース）に参戦することです。日本人がいなさそうな大会に出るのにはまっています！",

  // 6) 付帯情報（すべて任意。空欄の項目は表示されません）
  extra: {
    age: "43",         // 数字だけなら「歳」を付けて表示
    birthday: "",    // 例: "4月1日"
    hometown: "埼玉",
    hobbies: "運動"
  },

  // 7) 写真（assets/ に置いたファイル。"" ならイニシャルを表示）
  photo: "assets/IMG_1041.jpeg",

  // 8) 背景色（#RRGGBB）。文字色は自動で読みやすい色になります
  theme: { background: "#9CC9BC" }
};
