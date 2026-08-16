import type { LocaleText, VratType } from '@/content/types';

export type VratGuide = {
  meaning: LocaleText;
  vidhi: LocaleText;
  food: LocaleText;
  parana: LocaleText;
  samagri: LocaleText;
  who: LocaleText;
};

function L(hi: string, en: string): LocaleText {
  return { hi, en };
}

function join(base: LocaleText, extra?: LocaleText): LocaleText {
  if (!extra) {
    return base;
  }
  return {
    hi: `${base.hi}\n\nइस तिथि पर विशेष:\n${extra.hi}`,
    en: `${base.en}\n\nSpecial on this tithi:\n${extra.en}`,
  };
}

const typeGuides: Record<VratType, VratGuide> = {
  ekadashi: {
    meaning: L(
      'एकादशी भगवान विष्णु को समर्पित है। चंद्रमा की ग्यारहवीं तिथि मन-इंद्रिय पर संयम सिखाती है। पुराण कहते हैं — एकादशी व्रत से पाप कटते हैं, घर में शांति आती है, और भक्त हरि के निकट होता है। यह केवल भूख नहीं, क्रोध-झूठ-विषय से विराम है।',
      'Ekadashi is dedicated to Lord Vishnu — the eleventh lunar tithi trains restraint of mind and senses. The Puranas say the vrat burns sin, brings peace at home, and draws the devotee near Hari. It is not hunger alone: pause anger, falsehood and sense-indulgence.',
    ),
    vidhi: L(
      '१. दशमी को सात्त्विक भोजन, सूर्यास्त के बाद अनाज न खाएँ।\n२. एकादशी की रात्रि जल्दी सोएँ या हरिजागरण करें।\n३. एकादशी प्रातः स्नान, स्वच्छ वस्त्र, तुलसी-दल से विष्णु/शालिग्राम पूजन।\n४. दीप जलाएँ, विष्णुसहस्रनाम, एकादशी कथा या सुंदरकांड पढ़ें।\n५. दिन में जुआ, झूठ, निंदा, मैथुन और क्रोध से बचें।\n६. संध्या आरती (ॐ जय जगदीश हरे) और तुलसी पर जल।\n७. द्वादशी को नियम पालन से पारणा — नीचे देखें।\n८. अशक्त, गर्भवती, रोगी, बच्चे फल-दूध या एक समय फलाहार रख सकते हैं। संकल्प मुख से बोलें: “हे हरि, सामर्थ्य अनुसार व्रत ग्रहण करता/करती हूँ।”',
      '1. On Dashami eat sattvic food; after sunset avoid grain.\n2. Sleep early on Ekadashi night or keep Hari-jagaran.\n3. At dawn bathe, wear clean clothes, worship Vishnu/Shaligram with tulsi.\n4. Light a lamp; read Vishnu Sahasranama, Ekadashi katha or Sundarkand.\n5. Avoid gambling, lies, slander, sex and anger.\n6. Evening aarti (Om Jai Jagdish Hare) and water on tulsi.\n7. Parana on Dwadashi as below.\n8. The weak, pregnant, ill and children may take fruit-milk. Speak the sankalpa: “O Hari, I keep this vrat as I am able.”',
    ),
    food: L(
      'न खाएँ: गेहूँ-चावल-जौ आदि अनाज, मसूर-उड़द सहित अधिकतर दाल, नमक-मसाला भारी भोजन, मांस-मदिरा, प्याज-लहसुन, बासी अन्न।\nखा सकते हैं (फलाहार): फल, दूध, दही, मक्खन, साबूदाना, सिंहारा/कूटू आटा, आलू-शकरकंद कई घरों में, मूंगफली, नारियल, मुनक्का। जल पीना सामान्य एकादशी पर मान्य; निर्जला पर जल भी नहीं।\nभोग: तुलसी-दल सहित फल या पंगत विष्णु को अर्पण कर फिर ग्रहण करें।',
      'Avoid: wheat, rice, barley and other grains; most dals including masoor and urad; heavy spiced food; meat and alcohol; onion-garlic; stale food.\nAllowed (phalahar): fruit, milk, curd, butter, sabudana, water-chestnut/buckwheat flour, potato/sweet potato in many homes, peanuts, coconut, raisins. Water is usual except on Nirjala.\nOffer fruit with tulsi to Vishnu, then eat as prasad.',
    ),
    parana: L(
      'द्वादशी को सूर्योदय के बाद और हरि वासर समाप्त होने के बाद पारणा करें। बहुत से पंचांग “पारणा काल” छापते हैं — उसी में फल-दूध या हल्का अन्न लें, फिर सामान्य भोजन। पारणा से पहले तुलसी-जल और विष्णु स्मरण। यदि द्वादशी बहुत छोटी हो तो पंचांग देखें; कभी-कभी एकादशी वाले दिन ही विशेष नियम होता है। बिना पारणा व्रत अधूरा माना जाता है।',
      'Break the fast on Dwadashi after sunrise and after Hari-vasara ends. Many panchangs print a “parana kala” — take fruit-milk or light grain then, then a normal meal. Remember Vishnu and sip tulsi-water first. If Dwadashi is very short, follow the panchang. Skipping parana leaves the vrat incomplete.',
    ),
    samagri: L(
      'तुलसी दल, गंगाजल या स्वच्छ जल, दीप-घृत, अगरबत्ती, चंदन, पुष्प, फल, पंचामृत (यदि शालिग्राम अभिषेक), पीला/सफेद वस्त्र, आसन, कथा-पुस्तक या यह ऐप।',
      'Tulsi leaves, Ganga or clean water, ghee lamp, incense, sandal, flowers, fruit, panchamrit if you bathe Shaligram, yellow/white cloth, asana, katha book or this app.',
    ),
    who: L(
      'स्त्री-पुरुष दोनों रख सकते हैं। वैष्णव घरों में यह नित्य मासिक व्रत है। बच्चे संकल्प मात्र या आधा दिन रखें।',
      'Women and men both may keep it. In Vaishnava homes it is the monthly vrat. Children may take only sankalpa or a half-day fast.',
    ),
  },
  pradosh: {
    meaning: L(
      'प्रदोष = सूर्यास्त के बाद का संध्या काल (लगभग 1.5 घंटे)। त्रयोदशी की इस वेला में शिव तांडव करते माने जाते हैं। प्रदोष व्रत से दांपत्य सुख, रोग-शांति और विघ्न नाश की कामना की जाती है। शुक्ल प्रदोष अधिक मंगल, कृष्ण प्रदोष पाप-क्षय के लिए प्रसिद्ध।',
      'Pradosh is the twilight after sunset (about 1.5 hours). On Trayodashi in this hour Shiva is said to dance the tandava. The vrat is kept for marital harmony, health and removal of obstacles. Shukla Pradosh is more auspicious; Krishna Pradosh is famed for burning sin.',
    ),
    vidhi: L(
      '१. प्रातः स्नान, शिव-संकल्प: “त्रयोदशी प्रदोष व्रत करता/करती हूँ।”\n२. दिन में एक बार सात्त्विक भोजन या फलाहार।\n३. दोपहर बाद मौन या कम बोलना।\n४. सूर्यास्त से ठीक पहले स्नान, स्वच्छ वस्त्र।\n५. शिवलिंग/घर की प्रतिमा पर जल-दूध-बेलपत्र-धतूरा-सफेद फूल।\n६. पंचामृत अभिषेक यदि संभव हो।\n७. महामृत्युंजय या ॐ नमः शिवाय 108 बार।\n८. शिव आरती (ॐ जय शिव ओंकारा) और प्रदोष कथा।\n९. प्रदोष काल बीतने के बाद हल्का भोजन — लहसुन-प्याज नहीं।',
      '1. Morning bath and sankalpa: “I keep Trayodashi Pradosh.”\n2. One sattvic meal or phalahar by day.\n3. Speak little after noon.\n4. Bathe again just before sunset.\n5. Offer water, milk, bel, datura and white flowers on the linga or home murti.\n6. Panchamrit abhishek if you can.\n7. Mahamrityunjay or Om Namah Shivaya 108 times.\n8. Shiva aarti (Om Jai Shiv Omkara) and Pradosh katha.\n9. After Pradosh kala, a light meal — no onion-garlic.',
    ),
    food: L(
      'दिन: फल, दूध, दही, या एक समय बिना प्याज-लहसुन का सात्त्विक भोजन। मांस-मदिरा वर्जित। कई व्रती चावल भी छोड़ते हैं। सोम प्रदोष पर और सख्त रहें।',
      'By day: fruit, milk, curd, or one onion-garlic-free sattvic meal. No meat or alcohol. Many also skip rice. Be stricter on Soma Pradosh (Monday).',
    ),
    parana: L(
      'प्रदोष पूजा और आरती पूरी होने के बाद उसी रात्रि हल्का सात्त्विक भोजन। कुछ व्रती अगली सुबह पारणा करते हैं — कुल रीति देखें।',
      'After aarti the same night, a light sattvic meal. Some families parana next morning — follow your home custom.',
    ),
    samagri: L(
      'बेलपत्र (सम संख्या, बिना डंठल तोड़ें नहीं), धतूरा, आक, सफेद फूल, दूध, दही, घी, शहद, चीनी, गंगाजल, भस्म/चंदन, दीप।',
      'Bel leaves (even number, do not tear the stem), datura, aak, white flowers, milk, curd, ghee, honey, sugar, Ganga water, bhasma/sandal, lamp.',
    ),
    who: L(
      'शिव भक्त, दांपत्य जोड़े, रोग-मुक्ति चाहने वाले। स्त्री-पुरुष दोनों।',
      'Shiva bhaktas, married couples, those seeking health. Women and men both.',
    ),
  },
  sankashti: {
    meaning: L(
      'कृष्ण पक्ष चतुर्थी को संकष्टी चतुर्थी कहते हैं। गणेश जी संकट हरते हैं। चंद्रदर्शन के बिना पारणा नहीं — चंद्रमा पर पड़े शाप की कथा इसी से जुड़ी है। महीने का नाम बदल-बदल कर गणेश के अलग रूप पूजे जाते हैं (अंगारकी मंगलवार वाली संकष्टी विशेष फलदायी)।',
      'Sankashti Chaturthi falls on Krishna-paksha Chaturthi. Ganesha removes distress. Parana waits for moon-sighting — tied to Chandra’s curse-katha. Each month a different form of Ganesha is worshipped. Angaraki (Tuesday Sankashti) is especially fruitful.',
    ),
    vidhi: L(
      '१. प्रातः संकल्प: “संकट हरने को गणेश व्रत रखता/रखती हूँ।”\n२. दिन में फलाहार या एक समय भोजन — चावल-गेहूँ कई छोड़ते हैं।\n३. शाम को स्नान, लाल/पीला वस्त्र।\n४. गणेश प्रतिमा या सिंदूर-मूर्ति पर दूर्वा (21 या 108), मोदक/लड्डू, लाल फूल, दूर्वा-अक्षत।\n५. गणेश अथर्वशीर्ष या गणेश आरती, संकष्टी कथा।\n६. चंद्र उदय की प्रतीक्षा — छज्जे/आँगन से दर्शन।\n७. चंद्र को अर्घ्य (जल+अक्षत+पुष्प), फिर प्रसाद और पारणा।\n८. यदि बादल हों तो पंचांग का चंद्रोदय देखकर अर्घ्य और पारणा।',
      '1. Morning sankalpa: “I keep Ganesh vrat to remove sankat.”\n2. Phalahar or one meal by day — many skip rice and wheat.\n3. Evening bath, red/yellow clothes.\n4. Offer durva (21 or 108), modak/laddu, red flowers and akshat to Ganesha.\n5. Ganesh Atharvashirsha or aarti, and Sankashti katha.\n6. Wait for moonrise.\n7. Arghya to Chandra (water + akshat + flower), then prasad and parana.\n8. If cloudy, use the panchang moonrise time.',
    ),
    food: L(
      'दिन: फल, दूध, साबूदाना, सिंहारा। मोदक भोग में बनाएँ पर पारणा से पहले न खाएँ। प्याज-लहसुन-मांस नहीं।',
      'By day: fruit, milk, sabudana, singhara. Cook modak as bhog but do not eat before parana. No onion, garlic or meat.',
    ),
    parana: L(
      'केवल चंद्रदर्शन और अर्घ्य के बाद। बहुत से घर रात्रि 8–11 बजे के बीच पारणा करते हैं — स्थानीय चंद्रोदय देखें। बिना चंद्र के पारणा अधूरी।',
      'Only after moon-sighting and arghya. Many homes parana between 8–11 pm — check local moonrise. Parana without Chandra is incomplete.',
    ),
    samagri: L(
      'दूर्वा घास, मोदक या गुड़-तिल लड्डू, लाल फूल, सिंदूर, दूर्वा-जल, दीप, गणेश आरती, चंद्र-अर्घ्य पात्र।',
      'Durva grass, modak or jaggery-sesame laddus, red flowers, sindoor, lamp, Ganesh aarti, a vessel for moon arghya.',
    ),
    who: L(
      'संकट, विघ्न, ऋण, विवाह-संतान की बाधा हो तो विशेष। कोई भी गणेश भक्त।',
      'Especially if there is distress, debt, or obstacle in marriage/children. Any Ganesh bhakta.',
    ),
  },
  shivratri: {
    meaning: L(
      'शिवरात्रि — कृष्ण चतुर्दशी की रात्रि जब शिव-शक्ति का मिलन और लिंगोद्भव माना जाता है। मासिक शिवरात्रि हर माह; महाशिवरात्रि फाल्गुन में वर्ष का महापर्व। जागरण और चार पहर अभिषेक से काम-क्रोध जीतने का अभ्यास है।',
      'Shivratri is the Krishna Chaturdashi night of Shiva-Shakti union and lingodbhava. Monthly Shivratri comes every month; Mahashivratri in Phalguna is the year’s great festival. Jagaran and four-prahar abhishek train victory over lust and anger.',
    ),
    vidhi: L(
      '१. प्रातः संकल्प, निराहार या फलाहार।\n२. दिन में शिवालय दर्शन या घर शिवलिंग स्वच्छ करें।\n३. रात्रि चार पहर (प्रायः 6 बजे शाम से 6 बजे सुबह): प्रत्येक पहर जल/दूध/दही/घी-मधु से अभिषेक, बेलपत्र, ॐ नमः शिवाय।\n४. जागरण — कथा, आरती, भजन। सोना वर्जित यदि सामर्थ्य हो।\n५. भंग-धूम्रपान को “शिव प्रसाद” समझकर न लें यदि व्रत सख्त है — शास्त्रीय व्रत सात्त्विक है।\n६. प्रातः आरती और हल्का फलाहार या पारणा।',
      '1. Morning sankalpa; water-only or phalahar.\n2. Visit a Shiva temple or clean the home linga.\n3. Night in four prahars (often 6 pm–6 am): each prahar abhishek with water/milk/curd/ghee-honey, bel, Om Namah Shivaya.\n4. Jagaran — katha, aarti, bhajan. Avoid sleep if able.\n5. Do not treat intoxicants as “Shiva prasad” if the vrat is strict — the shastric vrat is sattvic.\n6. Morning aarti, then light phalahar or parana.',
    ),
    food: L(
      'दिन-रात: जल या फल-दूध। अनाज, नमक, प्याज-लहसुन नहीं। महाशिवरात्रि पर कई निराहार रहते हैं।',
      'Day and night: water or fruit-milk. No grain, salt, onion-garlic. Many stay nirahar on Mahashivratri.',
    ),
    parana: L(
      'चतुर्दशी समाप्त और प्रातः पूजा के बाद। पंचांग का पारणा काल देखें।',
      'After Chaturdashi ends and morning puja. Check the panchang parana window.',
    ),
    samagri: L(
      'बेलपत्र, धतूरा, आक, दूध, गंगाजल, भस्म, रुद्राक्ष, दीप, सफेद वस्त्र।',
      'Bel, datura, aak, milk, Ganga water, bhasma, rudraksha, lamp, white cloth.',
    ),
    who: L(
      'शिव भक्त, अविवाहित (अच्छे वर/वधू की कामना), गृहस्थ (सुख-शांति)।',
      'Shiva bhaktas; unmarried devotees seeking a good match; householders seeking peace.',
    ),
  },
  purnima: {
    meaning: L(
      'पूर्णिमा — चंद्रमा पूर्ण, मन भी पूर्णता की ओर। सत्यनारायण व्रत, दान और सात्त्विक भोजन का दिन। कई पूर्णिमाओं पर स्नान-दान का विशेष फल (कार्तिक, वैशाख, ज्येष्ठ)।',
      'Purnima — the moon is full; the mind turns toward completeness. Day for Satyanarayan vrat, charity and sattvic food. Some Purnimas (Kartik, Vaishakha, Jyeshtha) give special fruit for snan-daan.',
    ),
    vidhi: L(
      '१. प्रातः स्नान (नदी/कुंड यदि संभव)।\n२. सत्यनारायण की स्थापना: कलश, केले के पत्ते, पंचामृत, कथा के पाँच अध्याय।\n३. कथा पूरी होने तक उठें नहीं; प्रसाद पहले बालक-ब्राह्मण को।\n४. दान: अन्न, वस्त्र, दक्षिणा सामर्थ्य अनुसार।\n५. उपवास रखने वाले कथा-प्रसाद के बाद पारणा करें।',
      '1. Morning bath (river/tank if possible).\n2. Install Satyanarayan: kalash, banana leaves, panchamrit, five katha chapters.\n3. Do not leave mid-katha; offer prasad first to children/brahmins.\n4. Charity: grain, cloth, dakshina as able.\n5. Fasters parana after katha-prasad.',
    ),
    food: L(
      'व्रती: कथा तक फलाहार। फिर प्रसाद सहित सात्त्विक भोजन। मांस-मदिरा नहीं।',
      'Fasters: phalahar until katha. Then sattvic meal with prasad. No meat or alcohol.',
    ),
    parana: L(
      'कथा और आरती के बाद उसी दिन। जो उपवास न रखें वे भी प्रसाद अवश्य लें।',
      'After katha and aarti the same day. Even non-fasters should take prasad.',
    ),
    samagri: L(
      'कलश, केले के पत्ते, पंचामृत, गेहूँआटा-शक्कर-घी का शीरा/प्रसाद, तुलसी, कथा पुस्तक, दक्षिणा।',
      'Kalash, banana leaves, panchamrit, wheat-flour/sugar/ghee prasad, tulsi, katha book, dakshina.',
    ),
    who: L(
      'गृहस्थ परिवार, मनौती पूरी होने पर, गृहप्रवेश या शुभ कार्य के बाद।',
      'Householders; after a mannat is fulfilled; after griha pravesh or auspicious work.',
    ),
  },
  amavasya: {
    meaning: L(
      'अमावस्या — चंद्रमा अदृश्य, पितृ-तिथि। तर्पण, दीपदान और मौन से पितर तृप्त होते हैं। कलह, नए बड़े सौदे और केश-कर्म कई कुल में नहीं करते।',
      'Amavasya — the moon is unseen, a pitru tithi. Tarpan, lamps and quiet please the ancestors. Many families avoid quarrels, big new deals and haircuts.',
    ),
    vidhi: L(
      '१. प्रातः स्नान, स्वच्छ वस्त्र।\n२. यदि कुल रीति हो: तिल-जल-कुश से पितृ तर्पण, मुख दक्षिण।\n३. कौओं/गाय को ग्रास, अन्नदान।\n४. दीपदान मंदिर या चौराहे/तुलसी पर।\n५. सत्य बोलें, झगड़ा न करें, सात्त्विक भोजन।\n६. श्राद्ध पक्ष की अमावस्या (पितृ विसर्जन) पर विधि और सख्त।',
      '1. Morning bath, clean clothes.\n2. If family custom: pitru tarpan with til, water and kush, facing south.\n3. Offer a morsel to crows/cows; grain charity.\n4. Lamp at temple, crossroads or tulsi.\n5. Speak truth, avoid fights, eat sattvic food.\n6. On Pitru Visarjan Amavasya, be stricter.',
    ),
    food: L(
      'सात्त्विक, गरम ताजा भोजन। कई घर मांसाहारी नहीं बनाते। व्रती एक समय।',
      'Sattvic, hot fresh food. Many homes cook no meat. Fasters take one meal.',
    ),
    parana: L(
      'अमावस्या पर कठोर निराहार अनिवार्य नहीं। जो रखें वे सूर्यास्त बाद या अगली सुबह कुल रीति से।',
      'A hard fast is not mandatory. Those who fast follow family custom after sunset or next morning.',
    ),
    samagri: L(
      'काले तिल, कुश, जलपात्र, दीप, अन्नदान का अन्न, गाय के लिए रोटी।',
      'Black sesame, kush, water vessel, lamp, grain for charity, roti for a cow.',
    ),
    who: L(
      'जिनके पितर गए हों, श्राद्ध करने वाले। सबके लिए मौन-दान लाभकारी।',
      'Those who perform shradh for departed elders. Silence and charity help everyone.',
    ),
  },
  festival: {
    meaning: L(
      'त्योहार इष्ट-देव के लीला-दिन हैं। व्रत, भोग, दान और परिवार-मिलन साथ चलते हैं। प्रत्येक पर्व की अपनी कथा और निषेध हैं — नीचे इस तिथि की विधि पढ़ें।',
      'Festivals are lila-days of the ishta. Vrat, bhog, charity and family gathering move together. Each has its own katha and rules — read this tithi’s vidhi below.',
    ),
    vidhi: L(
      '१. प्रातः स्नान, स्वच्छ/नए वस्त्र।\n२. घर-आँगन लीपें, द्वार पर रंगोली/तोरण।\n३. इष्ट की प्रतिमा स्वच्छ कर दीप-धूप-नैवेद्य।\n४. आरती परिवार संग, प्रसाद बाँटें।\n५. दान और क्षमा — शत्रुता इस दिन न बढ़ाएँ।',
      '1. Morning bath, clean/new clothes.\n2. Sweep the yard; rangoli/toran at the door.\n3. Clean the ishta murti; lamp, incense, naivedya.\n4. Aarti with family; share prasad.\n5. Charity and forgiveness — do not grow enmity this day.',
    ),
    food: L(
      'सात्त्विक भोग पहले देवता को, फिर परिवार। मांस-मदिरा अधिकतर व्रत-त्योहार पर नहीं।',
      'Sattvic bhog to the deity first, then the family. Most vrats and festivals skip meat and alcohol.',
    ),
    parana: L(
      'जिस पर्व पर उपवास हो (जन्माष्टमी, करवा चौथ, छठ) उसकी पारणा अलग लिखी है। अन्य पर भोग-आरती के बाद सामान्य भोजन।',
      'Where there is a fast (Janmashtami, Karva Chauth, Chhath), parana is given on that tithi. Otherwise eat after bhog-aarti.',
    ),
    samagri: L(
      'दीप, पुष्प, नैवेद्य, आरती थाली, इष्ट के अनुसार वस्त्र-आभूषण, दान की वस्तु।',
      'Lamp, flowers, naivedya, aarti thali, clothes/ornaments for the ishta, items for charity.',
    ),
    who: L(
      'पूरा परिवार। व्रत की कठोरता आयु और स्वास्थ्य देखकर बाँटें।',
      'The whole family. Share the strictness of any fast by age and health.',
    ),
  },
};

const slugExtra: Record<string, Partial<VratGuide>> = {
  'pradosh-k': {
    meaning: L(
      'कृष्ण प्रदोष — कृष्ण पक्ष त्रयोदशी की संध्या। पाप-क्षय और कष्ट-निवृत्ति के लिए प्रसिद्ध। मासिक शिवरात्रि से एक रात पहले अक्सर पड़ता है।',
      'Krishna Pradosh — twilight of Krishna-paksha Trayodashi. Famed for burning sin and distress. Often falls the night before monthly Shivratri.',
    ),
  },
  'pradosh-s': {
    meaning: L(
      'शुक्ल प्रदोष — शुक्ल पक्ष त्रयोदशी। मंगल, विवाह-सुख और नए काम के विघ्न हरने के लिए उत्तम।',
      'Shukla Pradosh — Shukla-paksha Trayodashi. Excellent for mangal, marital harmony and removing obstacles from new work.',
    ),
  },
  pradosh: {
    meaning: L(
      'शुक्ल प्रदोष — वर्ष का पहला शिव संध्या-व्रत। नये वर्ष की बाधाएँ हरने को बेलपत्र और आरती।',
      'Shukla Pradosh — first Shiva twilight-vrat of the year. Bel and aarti to clear the year’s obstacles.',
    ),
  },
  'magha-amavasya': {
    meaning: L(
      'माघ अमावस्या — माघ स्नान का पुण्य, पितृ तर्पण। प्रयाग/गंगा स्नान यदि संभव; घर पर तिल-दान और मौन।',
      'Magha Amavasya — fruit of Magha snan and pitru tarpan. Prayag/Ganga bath if possible; at home til-daan and quiet.',
    ),
  },
  shattila: {
    meaning: L(
      'षटतिला एकादशी — तिल के छह प्रयोग (स्नान, दान, होम, भक्षण, उबटन, पितृ तर्पण) से पाप क्षय। २०२६ में मकर संक्रांति/पोंगल/उत्तरायण से जुड़ी है — सूर्य उत्तरायण होते पुण्य बढ़ता है।',
      'Shattila Ekadashi — six uses of sesame (bath, charity, homa, eating, ubtan, pitru tarpan) burn sin. In 2026 it joins Makar Sankranti/Pongal/Uttarayan — merit grows as the sun turns north.',
    ),
    vidhi: L(
      'तिल मिला जल से स्नान। तिल दान, तिल-गुड़ का प्रसाद, गाय को तिल-रोटी। विष्णु पूजन के साथ सूर्य को अर्घ्य (संक्रांति विधि)। खिचड़ी/पोंगल भोग संक्रांति वाले घरों में।',
      'Bathe with sesame in water. Donate til, offer til-jaggery prasad, feed a cow. With Vishnu puja, give arghya to Surya (Sankranti vidhi). Khichdi/Pongal bhog in Sankranti homes.',
    ),
    food: L(
      'एकादशी फलाहार + तिल-गुड़। संक्रांति वाले अन्न (खिचड़ी) द्वादशी/पारणा पर या जो एकादशी न रखें वे नियम से।',
      'Ekadashi phalahar plus til-jaggery. Sankranti grain (khichdi) at Dwadashi parana, or for those not fasting Ekadashi.',
    ),
  },
  jaya: {
    meaning: L(
      'जया एकादशी — पुराण में इंद्र-सभा और माल्यवान/पुष्पदंत शाप-मुक्ति की कथा। व्रत से पराजय, अपमान और पुराने पाप कटते हैं। विजय और कीर्ति की कामना से रखें।',
      'Jaya Ekadashi — Puranic katha of Indra’s court and the release of Malyavan/Pushpadant. The vrat cuts defeat, insult and old sin. Keep it for victory and good name.',
    ),
  },
  vijaya: {
    meaning: L(
      'विजया एकादशी — राम जब लंका जाने को समुद्र किनारे थे, यह व्रत बताया गया। बड़े काम, यात्रा, मुकदमा, परीक्षा से पहले रखें। सुंदरकांड/रामायण पाठ विशेष फल देता है।',
      'Vijaya Ekadashi — taught when Ram stood at the ocean before Lanka. Keep it before a great task, journey, case or exam. Sundarkand/Ramayan path gives special fruit.',
    ),
    vidhi: L(
      'विष्णु पूजन के साथ राम-नाम और सुंदरकांड का कुछ अंश अवश्य पढ़ें। पीला वस्त्र शुभ।',
      'With Vishnu puja, recite Ram-naam and at least a portion of Sundarkand. Yellow cloth is auspicious.',
    ),
  },
  amalaki: {
    meaning: L(
      'आमलकी एकादशी — आँवला विष्णु-वासा माना जाता है। वृक्ष की परिक्रमा, तर्पण और आँवले का दान आयु-स्वास्थ्य देता है। होली से पहले की शुद्धि।',
      'Amalaki Ekadashi — the amla tree is a seat of Vishnu. Circumambulation, tarpan and amla-daan give life and health. A purification before Holi.',
    ),
    vidhi: L(
      'आँवला वृक्ष या टहनी पूजें, पीला धागा बाँधें, परिक्रमा करें, आँवला-जल से आचमन। आँवला फल दान करें।',
      'Worship an amla tree or twig, tie a yellow thread, circumambulate, sip amla-water. Donate amla fruit.',
    ),
  },
  papamochani: {
    meaning: L(
      'पापमोचनी एकादशी — लोभ-काम से लगे पाप धोती है। कथा में यक्षी/अपराध से मुक्ति का उल्लेख। क्षमा माँगें, दान दें, किसी से बैर न रखें।',
      'Papamochani Ekadashi — washes sin born of greed and lust. The katha speaks of release from a yakshi/crime. Ask forgiveness, give charity, hold no feud.',
    ),
  },
  kamada: {
    meaning: L(
      'कामदा एकादशी — सच्चे मनोरथ पूर्ण करती है। पति-पत्नी व्रत से दांपत्य दोष कटते माने गए। संकल्प लिखकर तुलसी के नीचे रखें।',
      'Kamada Ekadashi — fulfills a true heart’s wish. Couples keeping it are said to clear marital faults. Write the sankalpa and place it under tulsi.',
    ),
  },
  varuthini: {
    meaning: L(
      'वरूथिनी एकादशी — “वरूथ” = रक्षा-कवच। धन-वैभव की रक्षा और दुष्ट ग्रह-बाधा से बचाव। स्त्री-पुरुष दोनों के लिए पुराण प्रशंसा करते हैं।',
      'Varuthini Ekadashi — varutha means a shield. Protects wealth and wards cruel planetary/obstacle forces. Puranas praise it for women and men.',
    ),
    food: L(
      'इस एकादशी पर कुछ व्रती तेल-नमक भी छोड़ते हैं — केवल दूध-फल। सामर्थ्य देखें।',
      'Some fasters also drop oil and salt this day — milk and fruit only. Do as you are able.',
    ),
  },
  mohini: {
    meaning: L(
      'मोहिनी एकादशी — विष्णु के मोहिनी रूप की स्मृति। माया-मोह छूटे, भक्ति स्थिर हो। वैशाख शुक्ल में स्नान-दान का फल सहस्रगुना कहा गया।',
      'Mohini Ekadashi — remembers Vishnu’s Mohini form. May delusion fall and bhakti stand firm. Snan-daan in Vaishakha Shukla is called thousand-fold.',
    ),
  },
  apara: {
    meaning: L(
      'अपरा एकादशी — ब्रह्महत्या तुल्य महापाप तक काटने वाली कही गई। झूठी गवाही, गुरु-द्रोह, गो-हिंसा के प्रायश्चित्त में रखें। दान अवश्य करें।',
      'Apara Ekadashi — said to cut even sins compared to brahmahatya. Keep it as prayashchitta for false witness, guru-droha, harm to cows. Give charity.',
    ),
  },
  padmini: {
    meaning: L(
      'पद्मिनी एकादशी — पुरुषोत्तम/अधिमास की विशेष एकादशी। Extra month में विष्णु आराधना का द्वार। जो मास “मलमास” समझकर पूजा छोड़ते हैं, उन्हें यही एकादशी थाम ले।',
      'Padmini Ekadashi — special to Purushottam/adhik maas. A door of Vishnu worship in the extra month. Those who skip puja in malmas should hold this Ekadashi.',
    ),
  },
  parama: {
    meaning: L(
      'परमा एकादशी — अधिमास की दूसरी एकादशी। परम गति/मोक्ष की कामना। व्रत के साथ दीन-अन्नदान विशेष।',
      'Parama Ekadashi — the second Ekadashi of adhik maas. Kept for parama gati/moksha. Grain-charity to the poor is special.',
    ),
  },
  nirjala: {
    meaning: L(
      'निर्जला (भीमसेनी) एकादशी — भीम व्यास से पूछते हैं: मुझे क्षुधा अधिक, सब एकादशी कैसे रखूँ? व्यास कहते हैं — ज्येष्ठ शुक्ल निर्जला जल-सहित त्याग दो, चौबीसों एकादशी का फल मिलेगा। वर्ष की सबसे कठोर एकादशी। गर्मी में स्वास्थ्य देखें।',
      'Nirjala (Bhimseni) Ekadashi — Bhima asks Vyasa how he can keep every Ekadashi despite hunger. Vyasa says: in Jyeshtha Shukla give up even water once, and gain the fruit of all twenty-four. The year’s strictest Ekadashi. In heat, watch health.',
    ),
    vidhi: L(
      'दशमी शाम से जल भी सीमित। एकादशी को सूर्योदय से द्वादशी पारणा तक जल-अन्न दोनों नहीं — यदि पूर्ण निर्जला संकल्प हो। तुलसी पूजन, विष्णु नाम, छाया में रहें, अधिक श्रम न करें। अशक्त व्रती जल या मौसमी फल रख सकते हैं — अभिमान न करें, संकल्प ईमानदार हो। गाय-प्याऊ दान उत्तम।',
      'Limit water from Dashami evening. From Ekadashi sunrise to Dwadashi parana, neither water nor grain if the sankalpa is full Nirjala. Tulsi puja, Vishnu-naam, stay in shade, avoid hard labour. The weak may take water or seasonal fruit — no pride, honest sankalpa. Donating a water-stall/cow-feed is excellent.',
    ),
    food: L(
      'पूर्ण निर्जला: कुछ नहीं। आंशिक: केवल जल या नारियल पानी — अनाज कदापि नहीं।',
      'Full Nirjala: nothing. Partial: only water or coconut water — never grain.',
    ),
    parana: L(
      'द्वादशी को पंचांग का पारणा काल — पहले तुलसी-जल की बूँद, फिर फल, फिर अन्न। गर्मी में अचानक भारी भोजन न करें।',
      'In the Dwadashi parana window — first drops of tulsi-water, then fruit, then grain. In summer do not suddenly eat a heavy meal.',
    ),
  },
  yogini: {
    meaning: L(
      'योगिनी एकादशी — कथा में कुबेर-सेवक और माँस-दोष से मुक्ति। योग = जुड़ाव हरि से। वाणी और आहार दोनों सात्त्विक रखें।',
      'Yogini Ekadashi — katha of Kubera’s servant and release from the fault of meat. Yoga here is union with Hari. Keep both speech and diet sattvic.',
    ),
  },
  devshayani: {
    meaning: L(
      'देवशयनी (आषाढ़ी) एकादशी — विष्णु योगनिद्रा में क्षीरसागर। आज से चातुर्मास: विवाह, उपनयन, गृहप्रवेश कई कुल में देवउठनी तक नहीं। व्रत, दान, जप का समय। आषाढ़ी एकादशी वारी-पंढरपुर से भी जुड़ी।',
      'Devshayani (Ashadhi) Ekadashi — Vishnu enters yoga-nidra on the milk-ocean. Chaturmas begins: many families pause weddings, upanayana, griha pravesh until Devutthana. A season of vrat, daan and japa. Also linked to Pandharpur wari.',
    ),
    vidhi: L(
      'विष्णु शयन की कल्पना: शालिग्राम/प्रतिमा को लेटाएँ या शयन-मंडप बनाएँ। चातुर्मास संकल्प — एक भोग या एक दोष छोड़ने का। तुलसी सेवा नित्य।',
      'Imagine Vishnu’s sleep: lay Shaligram/murti to rest or make a shayan mandap. Take a Chaturmas sankalpa — drop one food or one fault. Serve tulsi daily.',
    ),
  },
  kamika: {
    meaning: L(
      'कामिका एकादशी — सावन कृष्ण पक्ष। दीपदान का महात्म्य: अंधकार में भी एक दीप हरि तक पहुँचता है। कामनाएँ शुद्ध हों तो पूर्ण होती हैं। सावन में शिव-विष्णु दोनों स्मरण।',
      'Kamika Ekadashi — Sawan Krishna paksha. Mahatmya of deep-daan: even one lamp in darkness reaches Hari. Pure wishes are fulfilled. In Sawan remember both Shiva and Vishnu.',
    ),
    vidhi: L(
      'संध्या को घर-तुलसी-मंदिर में घृत दीप। गरीब को दीप-तेल दान। विष्णु कथा + यदि सावन सोम हो तो शिव अभिषेक अलग दिन न छोड़ें।',
      'At twilight, ghee lamps at home, tulsi and temple. Donate oil/lamps to the poor. Vishnu katha; if it is Sawan, do not skip Shiva abhishek on Mondays.',
    ),
  },
  putrada: {
    meaning: L(
      'पुत्रदा एकादशी — संतान सुख, संतान का सदाचार और वंश-शांति। श्रावण शुक्ल वाली विशेष मानी गई। संतान न हो या संतान के विघ्न हों तो पति-पत्नी साथ रखें। पुत्र = संतान, केवल लड़का नहीं — कई आचार्य यही कहते हैं।',
      'Putrada Ekadashi — for children, their character and peace of the line. The Shravana Shukla one is special. Couples keep it together if there is no child or there is obstacle. Many acharyas read putra as santan — a child, not only a son.',
    ),
    vidhi: L(
      'दंपति एक आसन पर संकल्प। विष्णु-लक्ष्मी पूजन। बालकों को भोजन/वस्त्र दान। कथा सुनें।',
      'Couple takes sankalpa on one asana. Vishnu-Lakshmi puja. Feed/clothe children. Hear the katha.',
    ),
  },
  aja: {
    meaning: L(
      'अजा एकादशी — “अज” अजन्मा हरि। कथा में राजा हरीश्चंद्र/पाप-क्षय का उल्लेख विभिन्न पाठों में। झूठ छोड़ने और सत्य व्रत की एकादशी।',
      'Aja Ekadashi — Aja, the unborn Hari. Versions mention Harishchandra / destruction of sin. An Ekadashi of dropping falsehood and holding truth.',
    ),
  },
  parivartini: {
    meaning: L(
      'परिवर्तिनी / पार्श्व एकादशी — निद्रित विष्णु करवट बदलते हैं। चातुर्मास का मध्य। दान और संयम जारी रखें; अधूरा चातुर्मास संकल्प यहाँ मजबूत करें।',
      'Parivartini / Parshva Ekadashi — sleeping Vishnu turns on his side. Midpoint of Chaturmas. Keep daan and restraint; strengthen any unfinished Chaturmas vow.',
    ),
    vidhi: L(
      'शालिग्राम/विग्रह को दूसरी करवट लिटाएँ (पुरोहित रीति से)। दीप अखंड यदि संभव।',
      'Turn Shaligram/vigraha onto the other side (as your priest teaches). Keep an akhand lamp if possible.',
    ),
  },
  indira: {
    meaning: L(
      'इंदिरा एकादशी — पितृ पक्ष के निकट। पितरों की गति सुधरती है। तर्पण + एकादशी व्रत दोनों। जो श्राद्ध न कर सकें वे यह व्रत पितरों के नाम से रखें।',
      'Indira Ekadashi — near Pitru Paksha. Uplifts the ancestors. Combine tarpan and Ekadashi. Those who cannot do full shradh may keep this vrat in the pitrs’ name.',
    ),
    vidhi: L(
      'विष्णु पूजन के बाद तिल-जल से पितृ तर्पण। अन्नदान पितरों के नाम।',
      'After Vishnu puja, pitru tarpan with til-water. Grain charity in the ancestors’ name.',
    ),
  },
  papankusha: {
    meaning: L(
      'पापांकुशा एकादशी — पाप पर अंकुश। आश्विन शुक्ल, विजयदशमी के बाद शुद्धि। दशहरा के अहंकार को उतारकर हरि की शरण।',
      'Papankusha Ekadashi — a goad upon sin. Ashwin Shukla, purification after Vijayadashami. Drop the ego of Dussehra and take Hari’s refuge.',
    ),
  },
  'rama-ekadashi': {
    meaning: L(
      'रमा एकादशी — रमा = लक्ष्मी। कार्तिक कृष्ण, दीपावली सप्ताह के आरंभ के निकट। धन के साथ दया। लक्ष्मी-नारायण पूजन।',
      'Rama Ekadashi — Rama is Lakshmi. Kartik Krishna, near Diwali week. Wealth with compassion. Lakshmi-Narayan puja.',
    ),
  },
  devutthana: {
    meaning: L(
      'देवउठनी / प्रबोधिनी एकादशी — विष्णु निद्रा त्यागते हैं। चातुर्मास समाप्त। तुलसी-शालिग्राम विवाह कई घरों में आज या निकट तिथि पर। विवाह आदि मंगल कार्य खुलते हैं। कार्तिक स्नान का महात्म्य।',
      'Devutthana / Prabodhini Ekadashi — Vishnu leaves sleep. Chaturmas ends. Tulsi-Shaligram vivah in many homes today or nearby. Auspicious works like marriage reopen. Kartik snan has great fruit.',
    ),
    vidhi: L(
      'प्रात: विष्णु को जगाएँ — शंख, आरती, भोग। तुलसी विवाह विधि: मंडप, हल्दी-कुमकुम, फेरे कुल रीति से। कार्तिक दीपदान।',
      'At dawn wake Vishnu — conch, aarti, bhog. Tulsi vivah: mandap, haldi-kumkum, pheras per family rite. Kartik deep-daan.',
    ),
  },
  utpanna: {
    meaning: L(
      'उत्पन्ना एकादशी — एकादशी देवी की उत्पत्ति: विष्णु की देह से जागी शक्ति ने मुरासुर का वध किया। सभी एकादशियों की जननी। व्रत श्रृंखला यहीं से समझें।',
      'Utpanna Ekadashi — birth of Ekadashi Devi: shakti from Vishnu’s body slew Murasura. Mother of all Ekadashis. Understand the whole vrat cycle from this katha.',
    ),
    vidhi: L(
      'एकादशी माहात्म्य कथा अवश्य सुनें। वर्ष भर एकादशी रखने का संकल्प आज ले सकते हैं।',
      'Hear the Ekadashi mahatmya katha. You may take sankalpa today to keep Ekadashi all year.',
    ),
  },
  mokshada: {
    meaning: L(
      'मोक्षदा एकादशी — मोक्ष देने वाली। इसी दिन गीता जयंती: कुरुक्षेत्र में श्रीकृष्ण का उपदेश। व्रत + गीता पाठ। पितरों को भी गति मिलती कही गई।',
      'Mokshada Ekadashi — giver of moksha. Also Gita Jayanti: Krishna’s teaching at Kurukshetra. Vrat plus Gita path. Said to uplift ancestors too.',
    ),
    vidhi: L(
      'विष्णु-कृष्ण पूजन। गीता का कम से कम एक अध्याय (कई घर 15वाँ या 18वाँ, या 2.47 कर्मण्येवाधिकारस्ते)। गीता दान उत्तम।',
      'Vishnu-Krishna puja. Read at least one Gita chapter (many homes 15 or 18, or 2.47). Gifting a Gita is excellent.',
    ),
  },
  mahashivratri: {
    meaning: L(
      'महाशिवरात्रि — फाल्गुन कृष्ण चतुर्दशी। लिंगोद्भव, शिव-पार्वती विवाह और काम-दहन की स्मृति। वर्ष का सबसे बड़ा शिव जागरण। निराहार, चार पहर, भस्म, रुद्राक्ष।',
      'Mahashivratri — Phalguna Krishna Chaturdashi. Lingodbhava, Shiva-Parvati vivah and the burning of Kama. The year’s great Shiva night. Nirahar, four prahars, bhasma, rudraksha.',
    ),
    vidhi: L(
      'पूरा शिवरात्रि विधि चार पहर के साथ। मंदिर अधिक भीड़ — घर पर भी पूरा अभिषेक हो सकता है। बिल्वाष्टक पढ़ें। स्त्रियाँ सुहाग/अच्छे वर की कामना से गौरी-शिव पूजें। प्रातः पारणा से पहले शिव को जल अवश्य चढ़ाएँ।',
      'Full Shivratri vidhi with four prahars. Temples are crowded — complete abhishek can be done at home. Recite Bilvashtakam. Women worship Gauri-Shiva for suhag/a good match. Offer water to Shiva before morning parana.',
    ),
  },
  'masik-shivratri': {
    meaning: L(
      'मासिक शिवरात्रि — प्रत्येक कृष्ण चतुर्दशी। महाशिवरात्रि का लघु रूप। सावन की मासिक शिवरात्रि विशेष फलदायी।',
      'Monthly Shivratri — every Krishna Chaturdashi. A smaller Mahashivratri. Sawan’s monthly Shivratri is especially fruitful.',
    ),
  },
  karva: {
    meaning: L(
      'करवा चौथ — सुहागिन स्त्रियों का निराहार व्रत पति की दीर्घायु के लिए। कथा: करवा/वीरवती। चंद्रदर्शन तक जल भी कई नहीं लेतीं। २०२६ में संकष्टी से निकट/साथ — गणेश-गौरी दोनों स्मरण।',
      'Karva Chauth — married women’s nirahar vrat for the husband’s long life. Katha of Karva/Veeravati. Many take no water until moon-sighting. In 2026 it is near/with Sankashti — remember both Ganesh and Gauri.',
    ),
    vidhi: L(
      'सगी/सर्गी सुबह जल्दी (कुछ घरों में)। दिन भर निराहार। शाम सर्गि/13/16 श्रृंगार, मेहँदी, करवा (घड़ा) पूजन, गौरी-पार्वती कथा। ननद/सखियों संग छलनी से चंद्र, फिर पति के मुख, प्रथम घूँट जल पति हाथ से। पुरुष भी पत्नी के व्रत का सम्मान कर सात्त्विक रहें।',
      'Sargi before dawn in some homes. Nirahar all day. Evening shringar, mehndi, karva (pot) puja, Gauri katha. See the moon through a sieve, then the husband’s face; first sip of water from his hand. Husbands should honour the vrat and stay sattvic.',
    ),
    food: L(
      'सूर्योदय के बाद कुछ नहीं जब तक चंद्र-पारणा। सर्गी: फल, फेनी, पानी, सूखे मेवे।',
      'Nothing after sunrise until moon-parana. Sargi: fruit, pheni, water, dry fruit.',
    ),
    parana: L(
      'चंद्रदर्शन + पति मुखदर्शन के बाद ही जल-भोजन। बादल हों तो पंचांग चंद्रोदय और घर की रीति।',
      'Water and food only after moon-sighting and seeing the husband’s face. If cloudy, use panchang moonrise and family custom.',
    ),
    who: L(
      'विवाहिता स्त्रियाँ मुख्य। अविवाहित कभी अच्छे वर की कामना से कुल रीति से। विधवा पर न थोपें।',
      'Primarily married women. Unmarried women sometimes keep it for a good match per custom. Do not force widows.',
    ),
  },
  janmashtami: {
    meaning: L(
      'जन्माष्टमी — भाद्रपद कृष्ण अष्टमी, मध्यरात्रि श्रीकृष्ण जन्म। निराहार, झूलन, वात्सल्य भोग, आरती 12 बजे रात्रि के आसपास (पंचांग निशित काल)।',
      'Janmashtami — Bhadrapada Krishna Ashtami, midnight birth of Krishna. Nirahar, jhulan, vatsalya bhog, aarti near midnight (panchang nishita kala).',
    ),
    vidhi: L(
      'दिन भर फलाहार/निराहार। घर जेल/मथुरा सजावट, झूला। भोग: मक्खन-मिश्री, पंहा, फल। निशित काल में अभिषेक, जन्माष्टमी आरती, दही-हंडी केवल रीति जहाँ हो। पारणा अगले दिन अष्टमी समाप्ति पर — कई नवमी प्रातः करते हैं।',
      'Phalahar/nirahar by day. Decorate a jail/Mathura corner and a swing. Bhog: butter-mishri, panha, fruit. In nishita kala: abhishek, Janmashtami aarti, dahi-handi only where that is custom. Parana next day when Ashtami ends — many on Navami morning.',
    ),
    food: L(
      'अनाज नहीं जब तक जन्म-आरती न हो। उसके बाद प्रसाद; पूर्ण पारणा नवमी नियम से।',
      'No grain until birth-aarti. Then prasad; full parana per Navami rule.',
    ),
    parana: L(
      'अष्टमी तिथि समाप्त होने के बाद। पंचांग देखें — कभी रात्रि बाद, अधिकतर अगली सुबह।',
      'After Ashtami tithi ends. Check the panchang — sometimes late night, usually next morning.',
    ),
  },
  'ganesh-chaturthi': {
    meaning: L(
      'गणेश चतुर्थी — भाद्रपद शुक्ल चतुर्थी, गणपति जन्म। घर में मूर्ति स्थापना, 1.5/3/5/7/11 दिनों तक पूजा, अनंत चतुर्दशी विसर्जन। हरतालिका तीज स्त्रियों का शिव-गौरी व्रत अक्सर साथ।',
      'Ganesh Chaturthi — Bhadrapada Shukla Chaturthi, Ganapati’s birth. Install a murti at home for 1.5/3/5/7/11 days, visarjan on Anant Chaturdashi. Hartalika Teej (women’s Shiva-Gauri vrat) often coincides.',
    ),
    vidhi: L(
      'प्रातः स्थापना मुहूर्त में कलश-मंडप, प्राण प्रतिष्ठा सरल मंत्र से। नित्य 21 दूर्वा, मोदक, आरती। हाथ से बने मिट्टी के गणेश बेहतर। विसर्जन: विसर्जन मंत्र, दान, जलाशय या इको-पॉट। हरतालिका रखने वाली स्त्रियाँ निराहार गौरी-शिव पूजें।',
      'At the morning sthapana muhurat: kalash-mandap, simple prana pratishtha. Daily 21 durva, modak, aarti. Prefer handmade clay Ganesha. Visarjan mantra, charity, water-body or eco-pot. Women on Hartalika stay nirahar and worship Gauri-Shiva.',
    ),
  },
  chhath: {
    meaning: L(
      'छठ — कार्तिक षष्ठी, सूर्य और छठी मईया। बिहार-झारखंड-पूर्वांचल-नेपाल का महाव्रत। 36 घंटे के पास सात्त्विक शुद्धि, डुबकी, खरना, संध्या अर्घ्य, उषा अर्घ्य।',
      'Chhath — Kartik Shashthi, Surya and Chhathi Maiya. The great vrat of Bihar, Jharkhand, the East and Nepal. Nearly 36 hours of sattvic purity: holy dip, kharna, evening arghya, dawn arghya.',
    ),
    vidhi: L(
      'दिन 1 नहाय-खाय: स्नान, एक समय सात्त्विक भोजन (कद्दू-बाटी आदि रीति अनुसार)।\nदिन 2 खरना: दिन निराहार, शाम गुड़ की खीर-रोटी सूर्य को देकर व्रती खाते, फिर जल तक नहीं।\nदिन 3 संध्या अर्घ्य: बाँस की सूप, ठेकुआ, गन्ना, दीया लिए घाट, डूबते सूर्य को अर्घ्य। रात घाट/आँगन जागरण।\nदिन 4 उषा अर्घ्य: उगते सूर्य को अर्घ्य, प्रसाद बाँट, व्रत तोड़ (अदरक-जल आदि)।\nव्रती रसोई अग्नि-शुद्धि, लहसुन-प्याज नहीं, छुआछूत की सख्ती कुल रीति से।',
      'Day 1 Nahay-Khay: bath, one sattvic meal (kaddu-bati etc. per custom).\nDay 2 Kharna: nirahar by day; at dusk offer jaggery kheer-roti to Surya, vratis eat, then not even water.\nDay 3 Evening arghya: bamboo soop, thekua, sugarcane, diya at the ghat to the setting sun. Night jagaran.\nDay 4 Usha arghya: to the rising sun, share prasad, break fast (ginger-water etc.).\nKitchen fire-purity, no onion-garlic; purity rules per family.',
    ),
    food: L(
      'खरना के बाद उषा अर्घ्य तक अन्न-जल नहीं। ठेकुआ, फल भोग में; व्रती पारणा के बाद ही।',
      'No grain or water from after kharna until usha arghya. Thekua and fruit are bhog; vratis eat only after parana.',
    ),
    parana: L(
      'उषा अर्घ्य पूरी कर प्रसाद ग्रहण — अदरक, गुड़, ठेकुआ हल्का। भारी भोजन बाद में।',
      'After usha arghya take prasad — ginger, jaggery, light thekua. Heavy food later.',
    ),
    who: L(
      'पुरुष-स्त्री दोनों व्रती हो सकते हैं। खड़ा रहना, ठंडे जल में अर्घ्य — स्वास्थ्य देखें; सहायक परिवार साथ रहे।',
      'Men and women both may be vratis. Standing in cold water — watch health; family should support.',
    ),
  },
  'hariyali-teej': {
    meaning: L(
      'हरियाली तीज — सावन शुक्ल तृतीया। गौरी पूजन, हरियाली, झूला, सुहाग गीत। विवाहिताएँ पति के सुख-आयु के लिए; अविवाहिताएँ अच्छे वर के लिए।',
      'Hariyali Teej — Shravana Shukla Tritiya. Gauri puja, greenery, swings, suhag songs. Married women for the husband’s welfare; unmarried for a good match.',
    ),
    vidhi: L(
      'हरी चूड़ी, मेहँदी, हरियाली तोरण। गौरी-शिव की सजावट, कथा, झूला। कई निराहार या फलाहार। सास-ननद को मिठाई।',
      'Green bangles, mehndi, green toran. Decorate Gauri-Shiva, katha, swing. Many nirahar or phalahar. Sweets to mother-in-law and nanad.',
    ),
  },
  'nag-panchami': {
    meaning: L(
      'नाग पंचमी — सावन शुक्ल पंचमी। नाग देवता, शेष-वासुकि स्मरण। खेत में नागों की रक्षा, विष-भय शांति। इस दिन हल नहीं चलता।',
      'Nag Panchami — Shravana Shukla Panchami. Naga devata, Shesha-Vasuki. Protects snakes in the fields, calms fear of poison. Do not plough this day.',
    ),
    vidhi: L(
      'नाग-चित्र/मूर्ति पर दूध-अक्षत-पुष्प। बिल में दूध डालने की प्रथा पर्यावरण के लिए विवादित — चित्र-पूजन पर्याप्त। हल-कृषि औजार बंद।',
      'Milk, akshat, flowers on a naga image. Pouring milk in burrows is environmentally disputed — image-puja is enough. No plough or farm-tools.',
    ),
  },
  raksha: {
    meaning: L(
      'रक्षाबंधन / श्रावण पूर्णिमा — बहन राखी बाँधती है, भाई रक्षा का वचन। ब्राह्मण यज्ञोपवीत/श्रावणी उपाकर्म कई कुल में आज। सत्यनारायण कथा भी।',
      'Raksha Bandhan / Shravana Purnima — sister ties rakhi, brother vows protection. Brahmin yajnopavita/Shravani upakarma in many lines. Also Satyanarayan katha.',
    ),
    vidhi: L(
      'स्नान, तिलक, राखी, मिठाई, दक्षिणा। भाई बहन को वस्त्र/धन सामर्थ्य से। उपाकर्म वाले गायत्री-जप और नया जनेऊ।',
      'Bath, tilak, rakhi, sweets, dakshina. Brother gifts cloth/money as able. Those doing upakarma: Gayatri japa and new janeu.',
    ),
  },
  'ram-navami': {
    meaning: L(
      'राम नवमी — चैत्र शुक्ल नवमी, श्री राम जन्म मध्याह्न। व्रत, रामनाम, सुंदरकांड/मानस पाठ, मध्याह्न आरती।',
      'Ram Navami — Chaitra Shukla Navami, noon birth of Shri Ram. Vrat, Ram-naam, Sundarkand/Manas path, midday aarti.',
    ),
    vidhi: L(
      'फलाहार। मध्याह्न जन्म-मुहूर्त में अभिषेक, लड्डू-फल भोग, राम स्तुति/सुंदरकांड। दशनामी/मंदिर में कलश-यात्रा जहाँ रीति हो।',
      'Phalahar. At the noon birth muhurat: abhishek, laddu-fruit bhog, Ram stuti/Sundarkand. Kalash yatra where that is custom.',
    ),
  },
  'hanuman-jayanti': {
    meaning: L(
      'हनुमान जयंती — अधिकतर चैत्र पूर्णिमा (दक्षिण में अन्य तिथियाँ भी)। पवनपुत्र का प्राकट्य। चालीसा, सुंदरकांड, सिंदूर-तेल चढ़ाना।',
      'Hanuman Jayanti — mostly Chaitra Purnima (other tithis in the South). Appearance of Pavanputra. Chalisa, Sundarkand, sindoor and oil.',
    ),
    vidhi: L(
      'मंगल/प्रातः हनुमान मंदिर। सिंदूर-मूंगफली-बेसन लड्डू, चालीसा 11/21 बार या सुंदरकांड। संकल्प: क्रोध और भय छोड़ने का।',
      'Morning Hanuman temple. Sindoor, peanuts, besan laddu; Chalisa 11/21 times or Sundarkand. Sankalpa to drop anger and fear.',
    ),
  },
  'gudi-padwa': {
    meaning: L(
      'गुड़ी पड़वा / उगादि / चैत्र शुक्ल प्रतिपदा — विक्रम/शक नववर्ष, नवरात्रि घटस्थापना। गुड़ी = जीत का ध्वज (ब्रह्मा का दिन भी)।',
      'Gudi Padwa / Ugadi / Chaitra Shukla Pratipada — Vikram/Shaka new year and Navratri ghatasthapana. Gudi is a victory flag (also Brahma’s day).',
    ),
    vidhi: L(
      'गुड़ी: नीम-आम्र पल्लव, गड़वे पर रेशमी वस्त्र, मीठी बेर, कलश उलटा। द्वार पर फहराएँ। उगादि पच्चड़ी (खट्ट-मीठ-कड़वी) जीवन के रस। घटस्थापना: मिट्टी कलश, जौ बोएँ, नवरात्रि आरंभ।',
      'Gudi: neem-mango leaves, silk on a pot, sweet berries, inverted kalash. Raise it at the door. Ugadi pachadi (sweet-sour-bitter) for life’s rasas. Ghatasthapana: clay kalash, sow barley, begin Navratri.',
    ),
  },
  'sharad-navratri': {
    meaning: L(
      'शारदीय नवरात्रि — आश्विन शुक्ल 1 से 9। दुर्गा के नौ रूप। घटस्थापना से आरंभ, अष्टमी-नवमी कन्या पूजन, दशमी विसर्जन/विजय।',
      'Sharad Navratri — Ashwin Shukla 1 to 9. Nine forms of Durga. Begins with ghatasthapana, kanya puja on Ashtami-Navami, visarjan/vijaya on Dashami.',
    ),
    vidhi: L(
      'घटस्थापना मुहूर्त में कलश, जौ। नित्य एक रूप की आरती (शैलपुत्री से सिद्धिदात्री)। फलाहार या एक अन्न। अष्टमी/नवमी कन्या-भोजन (9/7/5 कन्या + 1 बालक कई घर)।',
      'Ghatasthapana muhurat: kalash, barley. Daily aarti to one form (Shailaputri to Siddhidatri). Phalahar or one grain. Ashtami/Navami kanya-bhoj (9/7/5 girls + one boy in many homes).',
    ),
    food: L(
      'नवरात्रि: कूटू/सिंहारा/साबूदाना, दूध-फल। कई एक अन्न (दूध-चावल) रखते। प्याज-लहसुन-मांस नहीं।',
      'Navratri: kuttu/singhara/sabudana, milk-fruit. Some keep one grain (milk-rice). No onion, garlic or meat.',
    ),
  },
  'durga-ashtami': {
    meaning: L(
      'दुर्गा अष्टमी / महानवमी — शक्ति का चरम। कन्या पूजन, हवन, अष्टमी व्रत। कई घर नवमी तक निराहार।',
      'Durga Ashtami / Maha Navami — peak of Shakti. Kanya puja, havan, Ashtami vrat. Many stay nirahar through Navami.',
    ),
    vidhi: L(
      'कन्याओं के चरण धोएँ, तिलक, भोजन, दक्षिणा, वस्त्र। हवन यदि कुल रीति। दुर्गा सप्तशती का चरित्र/अध्याय।',
      'Wash the girls’ feet, tilak, meal, dakshina, cloth. Havan if that is custom. Recite Durga Saptashati chapters.',
    ),
  },
  dussehra: {
    meaning: L(
      'विजयदशमी — राम की विजय, दुर्गा का विसर्जन, शस्त्र पूजा। नए विद्या/शस्त्र/व्यवसाय का शुभारंभ।',
      'Vijayadashami — Ram’s victory, Durga visarjan, shastra puja. Auspicious start of study, tools or trade.',
    ),
    vidhi: L(
      'अपराजिता पूजन, शमी/आप्टा पत्ते (दक्षिण/पश्चिम रीति), शस्त्र-औजार-किताब पूजा, रावण दहन जहाँ हो, सीमोलंघन। जौ के अंकुर (जवारा) विसर्जन।',
      'Aparajita puja, shami/apta leaves (South/West custom), worship tools/books/weapons, Ravana dahan where done, crossing the boundary. Immerse barley sprouts (jawara).',
    ),
  },
  diwali: {
    meaning: L(
      'दीपावली — नरक चतुर्दशी/काली चौदस से लेकर लक्ष्मी-गणेश पूजन अमावस्या रात्रि। राम की अयोध्या वापसी, लक्ष्मी प्रवेश, दानव-अंधकार नाश।',
      'Diwali — from Naraka Chaturdashi/Kali Chaudas to Lakshmi-Ganesha puja on Amavasya night. Ram’s return to Ayodhya, Lakshmi’s entry, destruction of demonic darkness.',
    ),
    vidhi: L(
      'घर की सफाई दिनों पहले। प्रातः अभ्यंग स्नान (नरक चतुर्दशी)। संध्या लक्ष्मी-गणेश: मुद्रा/खाता पूजन, 13/21 दीप, मोदक-मिठाई, लक्ष्मी आरती। जुआ लक्ष्मी-प्रीत्यर्थ कुछ घरों में — सीमा रखें, क्रोध न हो। अमावस्या श्राद्ध न भूलें यदि कुल रीति।',
      'Clean the house days ahead. Morning oil-bath (Naraka Chaturdashi). Evening Lakshmi-Ganesha: worship ledger/cash, 13/21 lamps, modak-sweets, Lakshmi aarti. Some gamble “for Lakshmi” — keep limits, no anger. Do not skip Amavasya shradh if that is custom.',
    ),
  },
  dhanteras: {
    meaning: L(
      'धनतेरस — कार्तिक कृष्ण त्रयोदशी। धन्वंतरि प्रकट, लक्ष्मी-कुबेर। धातु (सोना/पीतल/बर्तन) खरीद, यम-दीपदान।',
      'Dhanteras — Kartik Krishna Trayodashi. Dhanvantari appears; Lakshmi-Kubera. Buy metal (gold/brass/vessels); Yama deep-daan.',
    ),
    vidhi: L(
      'संध्या यम दक्षिण दिशा में दीप। धन्वंतरि-लक्ष्मी पूजन। नया बर्तन/सिक्का घर में लाकर लक्ष्मी स्थान पर रखें। औषध दान उत्तम।',
      'At dusk a lamp to Yama in the south. Dhanvantari-Lakshmi puja. Bring a new vessel/coin to the Lakshmi sthana. Donating medicine is excellent.',
    ),
  },
  govardhan: {
    meaning: L(
      'गोवर्धन / अन्नकूट — कृष्ण ने गोवर्धन उठाया, इंद्र-यज्ञ की जगह गो-पर्वत पूजा। अन्नकूट: पहाड़ी जैसा भोग।',
      'Govardhan / Annakut — Krishna lifts Govardhan; worship cow and hill instead of Indra-yajna. Annakut: a mountain of bhog.',
    ),
    vidhi: L(
      'गोबर/मिट्टी का गोवर्धन, गो-पूजा, 56/चौवन व्यंजन जहाँ संभव अन्यथा जितना सात्त्विक बने। परिक्रमा, दही-हांडी नहीं — यह अलग है।',
      'Govardhan of dung/clay, cow puja, 56 bhog dishes where possible else as much sattvic food as you can. Parikrama. Not dahi-handi.',
    ),
  },
  'bhai-dooj': {
    meaning: L(
      'भाई दूज — यम-यमी कथा। बहन तिलक कर भाई की आरती, दीर्घायु कामना।',
      'Bhai Dooj — Yama-Yami katha. Sister applies tilak, aarti for the brother’s long life.',
    ),
    vidhi: L(
      'बहन आरती थाली, तिलक, मिठाई, दक्षिणा। भाई उपहार। जो दूर हों वे फोन पर भी संकल्प पूरा करें।',
      'Sister’s aarti thali, tilak, sweets, dakshina. Brother’s gift. Those far away may complete sankalpa by phone.',
    ),
  },
  holi: {
    meaning: L(
      'होली — फाल्गुन पूर्णिमा के बाद रंग। प्रह्लाद-होलिका: अहंकार दहन, भक्ति रक्षा। रंग से पहले होलिका दहन रात्रि।',
      'Holi — colour after Phalguna Purnima. Prahlad-Holika: ego burns, bhakti is protected. Holika dahan the night before colour.',
    ),
    vidhi: L(
      'होलिका दहन: बाएँ और परिक्रमा, जौ/गेहूँ की बालें, आरती। रंग: प्राकृतिक गुलाल बेहतर। दोपहर बाद मिलन, क्षमा। नशा-लड़ाई से बचें।',
      'Holika dahan: keep it to your left, parikrama, barley/wheat ears, aarti. Colour: natural gulal is better. Visits after noon, forgiveness. Avoid drink and fights.',
    ),
  },
  holika: {
    meaning: L(
      'होलिका दहन / फाल्गुन पूर्णिमा — होलिका के अहंकार की अग्नि, प्रह्लाद की भक्ति। पूर्णिमा व्रत/सत्यनारायण कई घरों में उसी दिन।',
      'Holika Dahan / Phalguna Purnima — fire of Holika’s pride, Prahlad’s bhakti. Purnima vrat/Satyanarayan in many homes the same day.',
    ),
    vidhi: L(
      'पूर्णिमा स्नान-दान। संध्या होलिका पूजन: राक्षसी का पुतला/लकड़ी, प्रह्लाद की मूर्ति अलग सुरक्षित, अग्नि, परिक्रमा, नारियल, आरती।',
      'Purnima snan-daan. Evening Holika puja: effigy/wood, a separate safe Prahlad figure, fire, parikrama, coconut, aarti.',
    ),
  },
  akshaya: {
    meaning: L(
      'अक्षय तृतीया — वैशाख शुक्ल तृतीया। जो पुण्य आज किया अक्षय। सत्ययुग आरंभ, परशुराम जयंती कई पंचांगों में, गंगावतरण स्मृति। दान-सोना-नए काम का दिन।',
      'Akshaya Tritiya — Vaishakha Shukla Tritiya. Merit done today is akshaya (undecaying). Satyuga’s start, Parashurama Jayanti in many panchangs, Ganga’s descent remembered. Day of charity, gold and new work.',
    ),
    vidhi: L(
      'स्नान, विष्णु-लक्ष्मी पूजन, छाता-पंखा-जल दान गर्मी में उत्तम। नया व्यवसाय/खाता शुभ। दिखावे का कर्ज लेकर सोना न खरीदें — दान बड़ा है।',
      'Bath, Vishnu-Lakshmi puja; donating umbrella, fan, water is excellent in heat. New trade/account is auspicious. Do not buy gold on showy debt — charity is greater.',
    ),
  },
  basant: {
    meaning: L(
      'बसंत पंचमी — माघ शुक्ल पंचमी, सरस्वती पूजन, विद्या-संगीत-आरंभ। पीला रंग बसंत का।',
      'Basant Panchami — Magha Shukla Panchami, Saraswati puja, start of learning and music. Yellow is the colour of spring.',
    ),
    vidhi: L(
      'पुस्तक-वाद्य-कलम सरस्वती के चरण। बच्चों का विद्यारंभ (अक्षरारंभ)। पीला भोजन/वस्त्र। सरस्वती आरती, मौन अध्ययन कुछ घंटे।',
      'Books, instruments, pens at Saraswati’s feet. Children’s aksharabhyasa. Yellow food/clothes. Saraswati aarti; a few hours of quiet study.',
    ),
  },
  lohri: {
    meaning: L(
      'लोहड़ी — माघ की रात्रि, पंजाब-हरियाणा-हिमाचल फसल अग्नि पर्व। संक्रांति से एक रात पहले। अग्नि को तिल-गुड़-पॉपकॉर्न, नवाँ अनाज।',
      'Lohri — Magha night, harvest fire festival of Punjab-Haryana-Himachal. The night before Sankranti. Sesame, jaggery, popcorn, new grain to the fire.',
    ),
    vidhi: L(
      'आँगन अग्नि, परिक्रमा, गीत। नवजात/नए विवाह वाले घर विशेष मिठाई बाँटते हैं। अग्नि में प्लास्टिक न डालें।',
      'Yard fire, parikrama, songs. Homes with a newborn or new marriage share extra sweets. Do not put plastic in the fire.',
    ),
  },
  'rath-yatra': {
    meaning: L(
      'जगन्नाथ रथ यात्रा — आषाढ़ शुक्ल द्वितीया, पुरी। कृष्ण-बलराम-सुभद्रा रथ पर। घर पर भी काष्ठ/चित्र रथ निकाल सकते हैं।',
      'Jagannath Rath Yatra — Ashadha Shukla Dwitiya, Puri. Krishna-Balaram-Subhadra on chariots. You may take a small wood/picture rath at home.',
    ),
    vidhi: L(
      'जगन्नाथ त्री की आरती, महाप्रसाद यदि उपलब्ध, रथ खींचने का संकल्प (सेवा भाव)। गुड़िया/कागज़ का रथ बच्चों संग।',
      'Aarti of the Jagannath triad, mahaprasad if available, sankalpa to pull the rath as seva. A toy/paper rath with children.',
    ),
  },
  'guru-purnima': {
    meaning: L(
      'गुरु पूर्णिमा — आषाढ़ पूर्णिमा, व्यास जयंती। गुरु, माता-पिता, विद्या-गुरु को वंदन।',
      'Guru Purnima — Ashadha Purnima, Vyasa Jayanti. Vandana to guru, parents and teachers of vidya.',
    ),
    vidhi: L(
      'गुरु के चरण/चित्र पर पुष्प, दक्षिणा, मौन श्रवण। व्यास-पूजा: ग्रंथ पर पुष्प। जो गुरु दूर हों पत्र/सेवा संकल्प।',
      'Flowers and dakshina at the guru’s feet/photo; listen in silence. Vyasa puja: flowers on a granth. If the guru is far, a letter or seva sankalpa.',
    ),
  },
  anant: {
    meaning: L(
      'अनंत चतुर्दशी — भाद्रपद शुक्ल 14, अनंत नाग/विष्णु सूत्र। कई नगरों में गणेश विसर्जन।',
      'Anant Chaturdashi — Bhadrapada Shukla 14, Ananta naga/Vishnu thread. Ganesh visarjan in many cities.',
    ),
    vidhi: L(
      'अनंत डोर दाहिने हाथ (पुरुष) / बाएँ (स्त्री) कई रीतियों में — पुरोहित से पूछें। 14 गाँठ, 14 भोग। गणेश विसर्जन विसर्जन मंत्र से विनम्रता से।',
      'Ananta thread on the right wrist (men) / left (women) in many rites — ask your priest. 14 knots, 14 bhog. Ganesh visarjan with mantra and humility.',
    ),
  },
  'kartik-purnima': {
    meaning: L(
      'कार्तिक पूर्णिमा / देव दीवाली — गंगा स्नान, त्रिपुरासुर वध स्मृति, देवलोक की दीपावली। कार्तिक व्रत का समापन।',
      'Kartik Purnima / Dev Diwali — Ganga snan, Tripurasura’s end, Diwali of the gods. Close of Kartik vrat.',
    ),
    vidhi: L(
      'प्रातः स्नान-दान। संध्या घाट/घर पर माला-दीप। सत्यनारायण या कार्तिक कथा। तुलसी के नीचे दीप।',
      'Morning snan-daan. Evening lamps at ghat/home. Satyanarayan or Kartik katha. Lamp under tulsi.',
    ),
  },
};

export function eventSlug(eventId: string): string {
  return eventId.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function getVratGuide(type: VratType, slug: string): VratGuide {
  const base = typeGuides[type];
  const extra = slugExtra[slug];
  if (!extra) {
    return base;
  }
  return {
    meaning: extra.meaning ?? base.meaning,
    vidhi: join(base.vidhi, extra.vidhi),
    food: extra.food ?? base.food,
    parana: extra.parana ?? base.parana,
    samagri: extra.samagri ?? base.samagri,
    who: extra.who ?? base.who,
  };
}
