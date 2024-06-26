// Fallback phrases
const fallbackPhrases = {
    'af-ZA': [
        "Ek is lief vir jou",
        "Jy is my alles",
        "Ek kan nie ophou om aan jou te dink nie",
        "Jy laat my hart vinniger klop",
        "Ek aanbid jou",
        "Jy is die liefde van my lewe",
        "Ek koester elke oomblik met jou",
        "Jy beteken die wêreld vir my",
        "Ek is so dankbaar om jou te hê",
        "Jy is my sonskyn"
    ],
    'ar-XA': [
        "أحبك",
        "أنت كل شيء لي",
        "لا أستطيع التوقف عن التفكير بك",
        "تجعل قلبي ينبض بشكل أسرع",
        "أنا أعبدك",
        "أنت حب حياتي",
        "أعتز بكل لحظة معك",
        "أنت تعني العالم بالنسبة لي",
        "أنا ممتن جدا لوجودك",
        "أنت شمسي"
    ],
    'bn-IN': [
        "আমি তোমাকে ভালবাসি",
        "তুমি আমার সবকিছু",
        "আমি তোমার কথা ভাবা থামাতে পারি না",
        "তুমি আমার হৃদস্পন্দন বাড়িয়ে দাও",
        "আমি তোমাকে পূজা করি",
        "তুমি আমার জীবনের ভালবাসা",
        "আমি তোমার সাথে প্রতিটি মুহূর্তকে মূল্যবান করি",
        "তুমি আমার পৃথিবী",
        "আমি তোমার প্রতি কৃতজ্ঞ",
        "তুমি আমার রোদ"
    ],
    'cs-CZ': [
        "Miluji tě",
        "Jsi všechno, co mám",
        "Nemohu na tebe přestat myslet",
        "Děláš mi srdce rychleji tlouct",
        "Zbožňuji tě",
        "Jsi láska mého života",
        "Vážím si každého okamžiku s tebou",
        "Pro mě znamenáš celý svět",
        "Jsem velmi vděčný, že tě mám",
        "Jsi moje slunce"
    ],
    'da-DK': [
        "Jeg elsker dig",
        "Du er alt for mig",
        "Jeg kan ikke stoppe med at tænke på dig",
        "Du får mit hjerte til at banke hurtigere",
        "Jeg tilbeder dig",
        "Du er kærligheden i mit liv",
        "Jeg værdsætter hvert øjeblik med dig",
        "Du betyder verden for mig",
        "Jeg er så taknemmelig for at have dig",
        "Du er min solskin"
    ],
    'de-DE': [
        "Ich liebe dich",
        "Du bist mein Ein und Alles",
        "Ich kann nicht aufhören, an dich zu denken",
        "Du lässt mein Herz schneller schlagen",
        "Ich bete dich an",
        "Du bist die Liebe meines Lebens",
        "Ich schätze jeden Moment mit dir",
        "Du bedeutest mir die Welt",
        "Ich bin so dankbar, dich zu haben",
        "Du bist mein Sonnenschein"
    ],
    'el-GR': [
        "Σ' αγαπώ",
        "Είσαι τα πάντα για μένα",
        "Δεν μπορώ να σταματήσω να σε σκέφτομαι",
        "Κάνεις την καρδιά μου να χτυπά πιο γρήγορα",
        "Σε λατρεύω",
        "Είσαι η αγάπη της ζωής μου",
        "Αγαπώ κάθε στιγμή μαζί σου",
        "Σημαίνεις τα πάντα για μένα",
        "Είμαι τόσο ευγνώμων που σε έχω",
        "Είσαι ο ήλιος μου"
    ],
    'en-AU': [
        "I love you",
        "You're my everything",
        "I can't stop thinking about you",
        "You make my heart skip a beat",
        "I adore you",
        "You're the love of my life",
        "I cherish every moment with you",
        "You mean the world to me",
        "I am so grateful to have you",
        "You are my sunshine"
    ],
    'en-GB': [
        "I love you",
        "You're my everything",
        "I can't stop thinking about you",
        "You make my heart skip a beat",
        "I adore you",
        "You're the love of my life",
        "I cherish every moment with you",
        "You mean the world to me",
        "I am so grateful to have you",
        "You are my sunshine"
    ],
    'en-IN': [
        "I love you",
        "You're my everything",
        "I can't stop thinking about you",
        "You make my heart skip a beat",
        "I adore you",
        "You're the love of my life",
        "I cherish every moment with you",
        "You mean the world to me",
        "I am so grateful to have you",
        "You are my sunshine"
    ],
    'en-US': [
        "I love you",
        "You're my everything",
        "I can't stop thinking about you",
        "You make my heart skip a beat",
        "I adore you",
        "You're the love of my life",
        "I cherish every moment with you",
        "You mean the world to me",
        "I am so grateful to have you",
        "You are my sunshine"
    ],
    'es-ES': [
        "Te amo",
        "Eres todo para mí",
        "No puedo dejar de pensar en ti",
        "Haces que mi corazón lata más rápido",
        "Te adoro",
        "Eres el amor de mi vida",
        "Valoro cada momento contigo",
        "Significas el mundo para mí",
        "Estoy tan agradecido de tenerte",
        "Eres mi sol"
    ],
    'es-US': [
        "Te amo",
        "Eres todo para mí",
        "No puedo dejar de pensar en ti",
        "Haces que mi corazón lata más rápido",
        "Te adoro",
        "Eres el amor de mi vida",
        "Valoro cada momento contigo",
        "Significas el mundo para mí",
        "Estoy tan agradecido de tenerte",
        "Eres mi sol"
    ],
    'fi-FI': [
        "Rakastan sinua",
        "Olet minulle kaikki",
        "En voi lakata ajattelemasta sinua",
        "Saat sydämeni lyömään nopeammin",
        "Palvon sinua",
        "Olet elämäni rakkaus",
        "Arvostan jokaista hetkeä kanssasi",
        "Merkitsen minulle maailmaa",
        "Olen niin kiitollinen, että sinä olet",
        "Olet minun auringonpaisteeni"
    ],
    'fil-PH': [
        "Mahal kita",
        "Ikaw ang aking lahat",
        "Hindi ako makapagpigil na isipin ka",
        "Pina-pabilis mo ang tibok ng aking puso",
        "Sinasamba kita",
        "Ikaw ang pag-ibig ng aking buhay",
        "Pinahahalagahan ko ang bawat sandali kasama ka",
        "Ibig mong sabihin sa akin ang mundo",
        "Napakapasalamat ko na ikaw ay nasa aking buhay",
        "Ikaw ang aking sikat ng araw"
    ],
    'fr-CA': [
        "Je t'aime",
        "Tu es tout pour moi",
        "Je ne peux pas m'empêcher de penser à toi",
        "Tu fais battre mon cœur plus vite",
        "Je t'adore",
        "Tu es l'amour de ma vie",
        "Je chéris chaque instant avec toi",
        "Tu représentes le monde pour moi",
        "Je suis tellement reconnaissant de t'avoir",
        "Tu es mon soleil"
    ],
    'fr-FR': [
        "Je t'aime",
        "Tu es tout pour moi",
        "Je ne peux pas m'empêcher de penser à toi",
        "Tu fais battre mon cœur plus vite",
        "Je t'adore",
        "Tu es l'amour de ma vie",
        "Je chéris chaque instant avec toi",
        "Tu représentes le monde pour moi",
        "Je suis tellement reconnaissant de t'avoir",
        "Tu es mon soleil"
    ],
    'hi-IN': [
        "मैं तुमसे प्यार करता हूँ",
        "तुम मेरे सब कुछ हो",
        "मैं तुम्हारे बारे में सोचना बंद नहीं कर सकता",
        "तुम मेरे दिल की धड़कन बढ़ा देते हो",
        "मैं तुम्हारी पूजा करता हूँ",
        "तुम मेरे जीवन का प्यार हो",
        "मैं तुम्हारे साथ हर पल को संजोता हूँ",
        "तुम मेरे लिए सब कुछ हो",
        "मैं तुम्हारा आभारी हूँ",
        "तुम मेरी धूप हो"
    ],
    'hu-HU': [
        "Szeretlek",
        "Te vagy mindenem",
        "Nem tudok nem rád gondolni",
        "Gyorsabban ver a szívem miattad",
        "Imádlak",
        "Te vagy életem szerelme",
        "Minden pillanatot nagyra értékelek veled",
        "A világot jelented számomra",
        "Annyira hálás vagyok, hogy veled lehetek",
        "Te vagy a napsugaram"
    ],
    'id-ID': [
        "Aku cinta kamu",
        "Kamu segalanya bagiku",
        "Aku tidak bisa berhenti memikirkanmu",
        "Kamu membuat hatiku berdegup kencang",
        "Aku mengagumimu",
        "Kamu adalah cinta dalam hidupku",
        "Aku menghargai setiap saat bersamamu",
        "Kamu berarti dunia bagiku",
        "Aku sangat bersyukur memilikimu",
        "Kamu adalah sinar matahariku"
    ],
    'it-IT': [
        "Ti amo",
        "Sei tutto per me",
        "Non riesco a smettere di pensarti",
        "Mi fai battere il cuore più velocemente",
        "Ti adoro",
        "Sei l'amore della mia vita",
        "Mi godo ogni momento con te",
        "Significhi il mondo per me",
        "Sono così grato di averti",
        "Sei il mio raggio di sole"
    ],
    'ja-JP': [
        "愛してる",
        "あなたは私のすべてです",
        "あなたのことを考えずにはいられない",
        "あなたが私の心をドキドキさせる",
        "あなたを崇拝しています",
        "あなたは私の人生の愛です",
        "あなたとのすべての瞬間を大切にします",
        "あなたは私にとって世界の意味",
        "あなたを持っていることにとても感謝しています",
        "あなたは私の太陽です"
    ],
    'ko-KR': [
        "사랑해",
        "너는 내 모든 것이야",
        "너 생각을 멈출 수가 없어",
        "너는 내 심장을 빨리 뛰게 해",
        "너를 숭배해",
        "너는 내 인생의 사랑이야",
        "너와 함께 하는 모든 순간이 소중해",
        "너는 나에게 세상을 의미해",
        "너를 갖게 되어 정말 고마워",
        "너는 내 햇살이야"
    ],
    'nl-NL': [
        "Ik hou van jou",
        "Je bent alles voor me",
        "Ik kan niet stoppen met aan je te denken",
        "Je laat mijn hart sneller kloppen",
        "Ik aanbid je",
        "Jij bent de liefde van mijn leven",
        "Ik koester elk moment met jou",
        "Je betekent de wereld voor me",
        "Ik ben zo dankbaar dat ik je heb",
        "Je bent mijn zonneschijn"
    ],
    'no-NO': [
        "Jeg elsker deg",
        "Du er alt for meg",
        "Jeg kan ikke slutte å tenke på deg",
        "Du får hjertet mitt til å slå raskere",
        "Jeg tilber deg",
        "Du er kjærligheten i mitt liv",
        "Jeg setter pris på hvert øyeblikk med deg",
        "Du betyr verden for meg",
        "Jeg er så takknemlig for å ha deg",
        "Du er min solskinn"
    ],
    'pl-PL': [
        "Kocham cię",
        "Jesteś dla mnie wszystkim",
        "Nie mogę przestać o tobie myśleć",
        "Sprawiasz, że moje serce bije szybciej",
        "Uwielbiam cię",
        "Jesteś miłością mojego życia",
        "Doceniam każdą chwilę z tobą",
        "Znaczysz dla mnie cały świat",
        "Jestem bardzo wdzięczny, że cię mam",
        "Jesteś moim słońcem"
    ],
    'pt-BR': [
        "Eu te amo",
        "Você é tudo para mim",
        "Eu não consigo parar de pensar em você",
        "Você faz meu coração bater mais rápido",
        "Eu te adoro",
        "Você é o amor da minha vida",
        "Eu aprecio cada momento com você",
        "Você significa o mundo para mim",
        "Sou muito grato por ter você",
        "Você é o meu raio de sol"
    ],
    'pt-PT': [
        "Eu te amo",
        "Você é tudo para mim",
        "Eu não consigo parar de pensar em você",
        "Você faz meu coração bater mais rápido",
        "Eu te adoro",
        "Você é o amor da minha vida",
        "Eu aprecio cada momento com você",
        "Você significa o mundo para mim",
        "Sou muito grato por ter você",
        "Você é o meu raio de sol"
    ],
    'ru-RU': [
        "Я люблю тебя",
        "Ты для меня всё",
        "Я не могу перестать думать о тебе",
        "Ты заставляешь моё сердце биться чаще",
        "Я тебя обожаю",
        "Ты любовь всей моей жизни",
        "Я ценю каждое мгновение с тобой",
        "Ты значишь для меня весь мир",
        "Я так благодарен, что ты у меня есть",
        "Ты моё солнце"
    ],
    'sv-SE': [
        "Jag älskar dig",
        "Du är allt för mig",
        "Jag kan inte sluta tänka på dig",
        "Du får mitt hjärta att slå snabbare",
        "Jag dyrkar dig",
        "Du är mitt livs kärlek",
        "Jag värdesätter varje ögonblick med dig",
        "Du betyder världen för mig",
        "Jag är så tacksam att ha dig",
        "Du är mitt solsken"
    ],
    'tr-TR': [
        "Seni seviyorum",
        "Sen benim her şeyimsin",
        "Seni düşünmekten kendimi alamıyorum",
        "Kalbimi daha hızlı attırıyorsun",
        "Sana tapıyorum",
        "Sen hayatımın aşkısın",
        "Seninle her anı çok değerli kılıyorum",
        "Sen benim için dünyalar kadar önemlisin",
        "Sana sahip olduğum için çok minnettarım",
        "Sen benim güneşimsin"
    ],
    'uk-UA': [
        "Я люблю тебе",
        "Ти моє все",
        "Я не можу перестати думати про тебе",
        "Ти змушуєш моє серце битися швидше",
        "Я тебе обожнюю",
        "Ти любов усього мого життя",
        "Я ціную кожну мить з тобою",
        "Ти для мене весь світ",
        "Я дуже вдячний, що ти у мене є",
        "Ти моє сонце"
    ],
    'zh-CN': [
        "我爱你",
        "你是我的一切",
        "我无法停止想你",
        "你让我心跳加速",
        "我崇拜你",
        "你是我生命中的挚爱",
        "我珍惜与你在一起的每一刻",
        "你对我来说意味着整个世界",
        "我很感激有你",
        "你是我的阳光"
    ],
    'zh-TW': [
        "我愛你",
        "你是我的一切",
        "我無法停止想你",
        "你讓我心跳加速",
        "我崇拜你",
        "你是我生命中的摯愛",
        "我珍惜與你在一起的每一刻",
        "你對我來說意味著整個世界",
        "我很感激有你",
        "你是我的陽光"
    ]
};

module.exports = fallbackPhrases;