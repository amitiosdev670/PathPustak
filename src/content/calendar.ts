import type { LocaleText, VratEvent, VratType } from '@/content/types';

const vishnu: LocaleText = { hi: 'भगवान विष्णु', en: 'Lord Vishnu' };
const shiva: LocaleText = { hi: 'भगवान शिव', en: 'Lord Shiva' };
const ganesh: LocaleText = { hi: 'भगवान गणेश', en: 'Lord Ganesha' };
const durga: LocaleText = { hi: 'माँ दुर्गा', en: 'Maa Durga' };
const lakshmi: LocaleText = { hi: 'माँ लक्ष्मी', en: 'Maa Lakshmi' };
const krishna: LocaleText = { hi: 'भगवान कृष्ण', en: 'Lord Krishna' };
const ram: LocaleText = { hi: 'श्री राम', en: 'Shri Ram' };
const hanuman: LocaleText = { hi: 'हनुमान जी', en: 'Hanuman Ji' };
const surya: LocaleText = { hi: 'सूर्य देव', en: 'Surya Dev' };
const family: LocaleText = { hi: 'कुलदेवता / परिवार', en: 'Family deity' };

const ekadashiHow: LocaleText = {
  hi: 'दशमी शाम से अनाज छोड़ें। एकादशी को फल-दूध या निराहार। विष्णु पूजन, सत्यनारायण/एकादशी कथा या सुंदरकांड। द्वादशी को सूर्योदय के बाद पारणा।',
  en: 'Leave grain from Dashami evening. On Ekadashi take fruit-milk or a full fast. Worship Vishnu; read Ekadashi katha or Sundarkand. Parana after sunrise on Dwadashi.',
};
const pradoshHow: LocaleText = {
  hi: 'दिन में एक समय सात्त्विक भोजन। सूर्यास्त के आसपास शिवालय या घर पर बेलपत्र-अभिषेक, शिव आरती। प्रदोष कथा सुनें।',
  en: 'One sattvic meal by day. Near sunset, bel-abhishek and Shiva aarti at temple or home. Hear the Pradosh katha.',
};
const sankashtiHow: LocaleText = {
  hi: 'दिन में फल या एक समय भोजन। शाम को गणेश पूजन, मोदक, आरती। चंद्रदर्शन कर अर्घ्य दें, फिर पारणा।',
  en: 'Fruit or one meal by day. Evening Ganesh puja, modak and aarti. Sight the moon, offer arghya, then parana.',
};
const festivalHow: LocaleText = {
  hi: 'स्नान, स्वच्छ वस्त्र, दीप और अपने इष्ट की आरती। परिवार संग प्रसाद बाँटें।',
  en: 'Bathe, wear clean clothes, light a lamp and offer aarti to your ishta. Share prasad with family.',
};
const purnimaHow: LocaleText = {
  hi: 'सत्यनारायण कथा, दान और सात्त्विक भोजन। कई घरों में उपवास कर कथा के बाद पारणा।',
  en: 'Satyanarayan katha, charity and sattvic food. Many homes fast until the katha is done.',
};
const amavasyaHow: LocaleText = {
  hi: 'पितृ तर्पण यदि कुल रीति हो। दीपदान, सात्त्विक भोजन, विवाद से दूर रहें।',
  en: 'Pitru tarpan if that is family custom. Offer a lamp, eat sattvic food, avoid quarrels.',
};
const shivratriHow: LocaleText = {
  hi: 'दिन भर निराहार या फल। रात्रि चार पहर में अभिषेक और जागरण। भंग-तमबाकू से दूर रहें यदि व्रत सख्त हो।',
  en: 'Fruit or water-only by day. Four prahar abhishek and jagaran at night. Skip intoxicants if the vrat is strict.',
};

function event(
  date: string,
  slug: string,
  type: VratType,
  title: LocaleText,
  deity: LocaleText,
  description: LocaleText,
  extra?: Partial<VratEvent>,
): VratEvent {
  const howTo =
    type === 'ekadashi'
      ? ekadashiHow
      : type === 'pradosh'
        ? pradoshHow
        : type === 'sankashti'
          ? sankashtiHow
          : type === 'purnima'
            ? purnimaHow
            : type === 'amavasya'
              ? amavasyaHow
              : type === 'shivratri'
                ? shivratriHow
                : festivalHow;

  const related =
    type === 'ekadashi'
      ? { relatedKind: 'katha' as const, relatedId: 'ekadashi-mahatmya' }
      : type === 'pradosh' || type === 'shivratri'
        ? { relatedKind: 'katha' as const, relatedId: 'pradosh-katha' }
        : type === 'sankashti'
          ? { relatedKind: 'katha' as const, relatedId: 'sankashti-katha' }
          : type === 'purnima'
            ? { relatedKind: 'katha' as const, relatedId: 'satyanarayan' }
            : {};

  return {
    id: `${date}-${slug}`,
    date,
    type,
    title,
    deity,
    description,
    howTo,
    ...related,
    ...extra,
  };
}

export const vratEvents: VratEvent[] = [
  event('2026-01-01', 'pradosh', 'pradosh', { hi: 'प्रदोष व्रत (शुक्ल)', en: 'Pradosh Vrat (Shukla)' }, shiva, {
    hi: 'नववर्ष का पहला शिव प्रदोष।',
    en: 'First Shiva Pradosh of the year.',
  }),
  event('2026-01-03', 'paush-purnima', 'purnima', { hi: 'पौष पूर्णिमा', en: 'Paush Purnima' }, vishnu, {
    hi: 'सत्यनारायण कथा और दान का दिन।',
    en: 'A day for Satyanarayan katha and charity.',
  }),
  event('2026-01-06', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'वर्ष की पहली संकष्टी।',
    en: 'First Sankashti of the year.',
  }),
  event('2026-01-13', 'lohri', 'festival', { hi: 'लोहड़ी', en: 'Lohri' }, family, {
    hi: 'पंजाब और उत्तर में लौहड़ी की अग्नि और फसल उत्सव।',
    en: 'Lohri fire and harvest festival in Punjab and the North.',
  }),
  event('2026-01-14', 'shattila', 'ekadashi', { hi: 'षटतिला एकादशी / मकर संक्रांति', en: 'Shattila Ekadashi / Makar Sankranti' }, surya, {
    hi: 'तिल दान वाली एकादशी और मकर संक्रांति / पोंगल / उत्तरायण एक साथ।',
    en: 'Ekadashi of sesame charity, with Makar Sankranti / Pongal / Uttarayan.',
  }),
  event('2026-01-16', 'pradosh-k', 'pradosh', { hi: 'प्रदोष व्रत (कृष्ण)', en: 'Pradosh Vrat (Krishna)' }, shiva, {
    hi: 'मासिक शिवरात्रि के निकट कृष्ण प्रदोष।',
    en: 'Krishna Pradosh near monthly Shivratri.',
  }),
  event('2026-01-18', 'magha-amavasya', 'amavasya', { hi: 'माघ अमावस्या', en: 'Magha Amavasya' }, family, {
    hi: 'पितृ तर्पण और स्नान-दान।',
    en: 'Pitru tarpan, snan and daan.',
  }),
  event('2026-01-23', 'basant', 'festival', { hi: 'बसंत पंचमी / सरस्वती पूजा', en: 'Basant Panchami / Saraswati Puja' }, {
    hi: 'माँ सरस्वती',
    en: 'Maa Saraswati',
  }, {
    hi: 'पीला वस्त्र, पुस्तक पूजन, विद्यारंभ।',
    en: 'Yellow clothes, worship of books, start of learning.',
  }),
  event('2026-01-29', 'jaya', 'ekadashi', { hi: 'जया एकादशी', en: 'Jaya Ekadashi' }, vishnu, {
    hi: 'पाप नाश और विजय के लिए जया एकादशी।',
    en: 'Jaya Ekadashi for the destruction of sin and for victory.',
  }),
  event('2026-02-05', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'माघ कृष्ण संकष्टी।',
    en: 'Magha Krishna Sankashti.',
  }),
  event('2026-02-13', 'vijaya', 'ekadashi', { hi: 'विजया एकादशी', en: 'Vijaya Ekadashi' }, vishnu, {
    hi: 'कार्यों में विजय की एकादशी।',
    en: 'Ekadashi observed for success in undertakings.',
  }),
  event('2026-02-14', 'pradosh-k', 'pradosh', { hi: 'प्रदोष व्रत (कृष्ण)', en: 'Pradosh Vrat (Krishna)' }, shiva, {
    hi: 'महाशिवरात्रि से एक दिन पहले प्रदोष।',
    en: 'Pradosh a day before Mahashivratri.',
  }),
  event('2026-02-15', 'mahashivratri', 'shivratri', { hi: 'महाशिवरात्रि', en: 'Mahashivratri' }, shiva, {
    hi: 'वर्ष का सबसे बड़ा शिव जागरण। बेलपत्र, अभिषेक, चार पहर पूजा।',
    en: 'The year’s great Shiva night. Bel, abhishek, four prahar puja.',
  }, { relatedKind: 'aarti', relatedId: 'shiv' }),
  event('2026-02-27', 'amalaki', 'ekadashi', { hi: 'आमलकी एकादशी', en: 'Amalaki Ekadashi' }, vishnu, {
    hi: 'आँवले के वृक्ष पूजन वाली एकादशी।',
    en: 'Ekadashi associated with worship of the amla tree.',
  }),
  event('2026-03-03', 'holika', 'festival', { hi: 'होलिका दहन / फाल्गुन पूर्णिमा', en: 'Holika Dahan / Phalguna Purnima' }, krishna, {
    hi: 'होलिका दहन की रात्रि और पूर्णिमा व्रत।',
    en: 'Holika Dahan night and Purnima vrat.',
  }),
  event('2026-03-04', 'holi', 'festival', { hi: 'होली', en: 'Holi' }, krishna, {
    hi: 'रंगों का पर्व। प्रातः रंग, दोपहर बाद परिवार मिलन।',
    en: 'Festival of colours. Play in the morning; family visits later.',
  }),
  event('2026-03-06', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'फाल्गुन संकष्टी।',
    en: 'Phalguna Sankashti.',
  }),
  event('2026-03-15', 'papamochani', 'ekadashi', { hi: 'पापमोचनी एकादशी', en: 'Papamochani Ekadashi' }, vishnu, {
    hi: 'पाप से मुक्ति की एकादशी।',
    en: 'Ekadashi for release from sin.',
  }),
  event('2026-03-19', 'gudi-padwa', 'festival', { hi: 'गुड़ी पड़वा / उगादि / चैत्र नवरात्रि घटस्थापना', en: 'Gudi Padwa / Ugadi / Chaitra Navratri' }, durga, {
    hi: 'चैत्र शुक्ल प्रतिपदा — नववर्ष और नवरात्रि आरंभ।',
    en: 'Chaitra Shukla Pratipada — new year and Navratri begin.',
  }),
  event('2026-03-26', 'ram-navami', 'festival', { hi: 'राम नवमी', en: 'Ram Navami' }, ram, {
    hi: 'श्री राम जन्म। सुंदरकांड या रामचरित मानस पाठ।',
    en: 'Birth of Shri Ram. Read Sundarkand or Ramcharitmanas.',
  }, { relatedKind: 'path', relatedId: 'sundarkand-01' }),
  event('2026-03-29', 'kamada', 'ekadashi', { hi: 'कामदा एकादशी', en: 'Kamada Ekadashi' }, vishnu, {
    hi: 'मनोरथ पूर्ण करने वाली एकादशी।',
    en: 'Ekadashi said to fulfill heartfelt wishes.',
  }),
  event('2026-04-02', 'hanuman-jayanti', 'purnima', { hi: 'हनुमान जयंती / चैत्र पूर्णिमा', en: 'Hanuman Jayanti / Chaitra Purnima' }, hanuman, {
    hi: 'हनुमान जन्मोत्सव। चालीसा और सुंदरकांड।',
    en: 'Hanuman’s jayanti. Chalisa and Sundarkand.',
  }, { relatedKind: 'path', relatedId: 'hanuman-chalisa' }),
  event('2026-04-05', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'चैत्र संकष्टी।',
    en: 'Chaitra Sankashti.',
  }),
  event('2026-04-13', 'varuthini', 'ekadashi', { hi: 'वरूथिनी एकादशी', en: 'Varuthini Ekadashi' }, vishnu, {
    hi: 'रक्षा और वैभव की एकादशी।',
    en: 'Ekadashi of protection and prosperity.',
  }),
  event('2026-04-19', 'akshaya', 'festival', { hi: 'अक्षय तृतीया', en: 'Akshaya Tritiya' }, lakshmi, {
    hi: 'अक्षय पुण्य का दिन — दान, सोना, नए काम का आरंभ।',
    en: 'Day of imperishable merit — charity, gold, new beginnings.',
  }),
  event('2026-04-27', 'mohini', 'ekadashi', { hi: 'मोहिनी एकादशी', en: 'Mohini Ekadashi' }, vishnu, {
    hi: 'वैशाख शुक्ल मोहिनी एकादशी।',
    en: 'Vaishakha Shukla Mohini Ekadashi.',
  }),
  event('2026-05-05', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'वैशाख संकष्टी।',
    en: 'Vaishakha Sankashti.',
  }),
  event('2026-05-13', 'apara', 'ekadashi', { hi: 'अपरा एकादशी', en: 'Apara Ekadashi' }, vishnu, {
    hi: 'दुष्कर्म के फल काटने वाली एकादशी।',
    en: 'Ekadashi said to cut the fruit of misdeeds.',
  }),
  event('2026-05-27', 'padmini', 'ekadashi', { hi: 'पद्मिनी एकादशी', en: 'Padmini Ekadashi' }, vishnu, {
    hi: 'अधिमास की पद्मिनी एकादशी।',
    en: 'Padmini Ekadashi of the adhik maas.',
  }),
  event('2026-06-03', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'ज्येष्ठ संकष्टी।',
    en: 'Jyeshtha Sankashti.',
  }),
  event('2026-06-11', 'parama', 'ekadashi', { hi: 'परमा एकादशी', en: 'Parama Ekadashi' }, vishnu, {
    hi: 'अधिमास की परमा एकादशी।',
    en: 'Parama Ekadashi of the extra month.',
  }),
  event('2026-06-25', 'nirjala', 'ekadashi', { hi: 'निर्जला एकादशी', en: 'Nirjala Ekadashi' }, vishnu, {
    hi: 'भीम एकादशी — जल भी त्याग। वर्ष की सबसे कठोर एकादशी।',
    en: 'Bhima Ekadashi — even water is given up. The year’s strictest Ekadashi.',
  }),
  event('2026-06-29', 'jyeshtha-purnima', 'purnima', { hi: 'ज्येष्ठ पूर्णिमा', en: 'Jyeshtha Purnima' }, vishnu, {
    hi: 'सत्यनारायण कथा और दान।',
    en: 'Satyanarayan katha and charity.',
  }),
  event('2026-07-03', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'आषाढ़ संकष्टी।',
    en: 'Ashadha Sankashti.',
  }),
  event('2026-07-10', 'yogini', 'ekadashi', { hi: 'योगिनी एकादशी', en: 'Yogini Ekadashi' }, vishnu, {
    hi: 'आषाढ़ कृष्ण योगिनी एकादशी।',
    en: 'Ashadha Krishna Yogini Ekadashi.',
  }),
  event('2026-07-16', 'rath-yatra', 'festival', { hi: 'जगन्नाथ रथ यात्रा', en: 'Jagannath Rath Yatra' }, { hi: 'भगवान जगन्नाथ', en: 'Lord Jagannath' }, {
    hi: 'पुरी रथ यात्रा। घर पर जगन्नाथ आरती कर सकते हैं।',
    en: 'Puri Rath Yatra. Offer Jagannath aarti at home.',
  }),
  event('2026-07-25', 'devshayani', 'ekadashi', { hi: 'देवशयनी एकादशी', en: 'Devshayani Ekadashi' }, vishnu, {
    hi: 'भगवान योगनिद्रा में — चातुर्मास आरंभ। विवाह आदि मंगल कार्य प्रायः रुकते हैं।',
    en: 'The Lord enters yoga-nidra — Chaturmas begins. Auspicious events like weddings are often paused.',
  }),
  event('2026-07-29', 'guru-purnima', 'purnima', { hi: 'गुरु पूर्णिमा', en: 'Guru Purnima' }, { hi: 'श्री गुरु / व्यास', en: 'Shri Guru / Vyasa' }, {
    hi: 'गुरु वंदना और व्यास पूजा।',
    en: 'Guru vandana and Vyasa puja.',
  }),
  event('2026-08-02', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'श्रावण संकष्टी।',
    en: 'Shravana Sankashti.',
  }),
  event('2026-08-09', 'kamika', 'ekadashi', { hi: 'कामिका एकादशी', en: 'Kamika Ekadashi' }, vishnu, {
    hi: 'सावन की कामिका एकादशी — आज का विशेष व्रत। दीपदान और विष्णु स्मरण।',
    en: 'Kamika Ekadashi in Sawan — today’s special vrat. Offer a lamp and remember Vishnu.',
  }),
  event('2026-08-10', 'pradosh-k', 'pradosh', { hi: 'प्रदोष व्रत (कृष्ण)', en: 'Pradosh Vrat (Krishna)' }, shiva, {
    hi: 'सावन का कृष्ण प्रदोष।',
    en: 'Krishna Pradosh in Sawan.',
  }),
  event('2026-08-11', 'masik-shivratri', 'shivratri', { hi: 'मासिक शिवरात्रि', en: 'Monthly Shivratri' }, shiva, {
    hi: 'सावन की मासिक शिवरात्रि — अभिषेक और आरती।',
    en: 'Sawan monthly Shivratri — abhishek and aarti.',
  }),
  event('2026-08-15', 'hariyali-teej', 'festival', { hi: 'हरियाली तीज', en: 'Hariyali Teej' }, durga, {
    hi: 'सावन तीज — हरियाली, झूला और गौरी पूजन।',
    en: 'Sawan Teej — greenery, swings and Gauri puja.',
  }),
  event('2026-08-17', 'nag-panchami', 'festival', { hi: 'नाग पंचमी', en: 'Nag Panchami' }, { hi: 'नाग देवता', en: 'Naga Devata' }, {
    hi: 'नाग पूजन, दूध-अक्षत। खेत-खलिहान में हल न चलाएँ।',
    en: 'Naga puja with milk and akshat. Do not plough the fields.',
  }),
  event('2026-08-23', 'putrada', 'ekadashi', { hi: 'श्रावण पुत्रदा एकादशी', en: 'Shravana Putrada Ekadashi' }, vishnu, {
    hi: 'संतान सुख और परिवार मंगल की एकादशी।',
    en: 'Ekadashi for children and family welfare.',
  }),
  event('2026-08-25', 'pradosh-s', 'pradosh', { hi: 'प्रदोष व्रत (शुक्ल)', en: 'Pradosh Vrat (Shukla)' }, shiva, {
    hi: 'सावन शुक्ल प्रदोष।',
    en: 'Shravana Shukla Pradosh.',
  }),
  event('2026-08-28', 'raksha', 'purnima', { hi: 'रक्षाबंधन / श्रावण पूर्णिमा', en: 'Raksha Bandhan / Shravana Purnima' }, family, {
    hi: 'राखी, सत्यनारायण कथा और श्रावणी उपाकर्म कई कुल में आज।',
    en: 'Rakhi, Satyanarayan katha, and Shravani Upakarma in many families.',
  }),
  event('2026-08-31', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी / कजरी तीज', en: 'Sankashti Chaturthi / Kajari Teej' }, ganesh, {
    hi: 'भाद्रपद संकष्टी और कजरी तीज एक साथ।',
    en: 'Bhadrapada Sankashti with Kajari Teej.',
  }),
  event('2026-09-04', 'janmashtami', 'festival', { hi: 'कृष्ण जन्माष्टमी', en: 'Krishna Janmashtami' }, krishna, {
    hi: 'मध्यरात्रि जन्म। निराहार, झूलन, कृष्ण आरती।',
    en: 'Midnight birth. Fast, jhulan, Krishna aarti.',
  }, { relatedKind: 'aarti', relatedId: 'krishna' }),
  event('2026-09-07', 'aja', 'ekadashi', { hi: 'अजा एकादशी', en: 'Aja Ekadashi' }, vishnu, {
    hi: 'भाद्रपद कृष्ण अजा एकादशी।',
    en: 'Bhadrapada Krishna Aja Ekadashi.',
  }),
  event('2026-09-14', 'ganesh-chaturthi', 'festival', { hi: 'गणेश चतुर्थी / हरतालिका तीज', en: 'Ganesh Chaturthi / Hartalika Teej' }, ganesh, {
    hi: 'घर में गणेश स्थापना। मोदक, आरती, पर्यावरण के अनुकूल विसर्जन।',
    en: 'Install Ganesha at home. Modak, aarti, eco-friendly visarjan.',
  }, { relatedKind: 'aarti', relatedId: 'ganesh' }),
  event('2026-09-22', 'parivartini', 'ekadashi', { hi: 'परिवर्तिनी / पार्श्व एकादशी', en: 'Parivartini / Parshva Ekadashi' }, vishnu, {
    hi: 'भगवान की करवट — चातुर्मास का मध्य।',
    en: 'The Lord’s turning — midpoint of Chaturmas.',
  }),
  event('2026-09-25', 'anant', 'festival', { hi: 'अनंत चतुर्दशी', en: 'Anant Chaturdashi' }, vishnu, {
    hi: 'अनंत सूत्र और कई नगरों में गणेश विसर्जन।',
    en: 'Anant thread, and Ganesh visarjan in many cities.',
  }),
  event('2026-09-29', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'आश्विन संकष्टी।',
    en: 'Ashwin Sankashti.',
  }),
  event('2026-10-06', 'indira', 'ekadashi', { hi: 'इंदिरा एकादशी', en: 'Indira Ekadashi' }, vishnu, {
    hi: 'पितरों की मुक्ति के लिए इंदिरा एकादशी।',
    en: 'Indira Ekadashi for the peace of ancestors.',
  }),
  event('2026-10-11', 'sharad-navratri', 'festival', { hi: 'शारदीय नवरात्रि घटस्थापना', en: 'Sharad Navratri Ghatasthapana' }, durga, {
    hi: 'नवरात्रि आरंभ — कलश स्थापना, दुर्गा आरती।',
    en: 'Navratri begins — kalash sthapana, Durga aarti.',
  }, { relatedKind: 'aarti', relatedId: 'durga' }),
  event('2026-10-19', 'durga-ashtami', 'festival', { hi: 'दुर्गा अष्टमी / महानवमी', en: 'Durga Ashtami / Maha Navami' }, durga, {
    hi: 'कन्या पूजन और अष्टमी-नवमी की विशेष पूजा।',
    en: 'Kanya puja and the special Ashtami-Navami worship.',
  }),
  event('2026-10-20', 'dussehra', 'festival', { hi: 'दशहरा / विजयदशमी', en: 'Dussehra / Vijayadashami' }, ram, {
    hi: 'राम की विजय। शस्त्र पूजा, रावण दहन, नया काम आरंभ।',
    en: 'Ram’s victory. Shastra puja, Ravana dahan, start new work.',
  }),
  event('2026-10-22', 'papankusha', 'ekadashi', { hi: 'पापांकुशा एकादशी', en: 'Papankusha Ekadashi' }, vishnu, {
    hi: 'आश्विन शुक्ल पापांकुशा एकादशी।',
    en: 'Ashwin Shukla Papankusha Ekadashi.',
  }),
  event('2026-10-29', 'karva', 'sankashti', { hi: 'करवा चौथ / संकष्टी', en: 'Karva Chauth / Sankashti' }, { hi: 'गौरी / गणेश', en: 'Gauri / Ganesha' }, {
    hi: 'सुहागिन व्रत — दिन भर निराहार, चंद्रदर्शन के बाद पारणा। कई पंचांगों में संकष्टी भी आज।',
    en: 'Married women’s vrat — fast until moonrise. Some panchangs also mark Sankashti today.',
  }),
  event('2026-11-05', 'rama-ekadashi', 'ekadashi', { hi: 'रमा एकादशी', en: 'Rama Ekadashi' }, vishnu, {
    hi: 'कार्तिक कृष्ण रमा एकादशी — धनतेरस के निकट।',
    en: 'Kartik Krishna Rama Ekadashi, near Dhanteras.',
  }),
  event('2026-11-06', 'dhanteras', 'festival', { hi: 'धनतेरस', en: 'Dhanteras' }, lakshmi, {
    hi: 'धन्वंतरि और लक्ष्मी-कुबेर पूजन। दीपदान।',
    en: 'Dhanvantari and Lakshmi-Kubera puja. Offer lamps.',
  }),
  event('2026-11-08', 'diwali', 'festival', { hi: 'दीपावली / नरक चतुर्दशी', en: 'Diwali / Naraka Chaturdashi' }, lakshmi, {
    hi: 'लक्ष्मी-गणेश पूजन, दीपमाला, सत्यनारायण या लक्ष्मी आरती।',
    en: 'Lakshmi-Ganesha puja, rows of lamps, Satyanarayan or Lakshmi aarti.',
  }, { relatedKind: 'aarti', relatedId: 'lakshmi' }),
  event('2026-11-10', 'govardhan', 'festival', { hi: 'गोवर्धन पूजा / अन्नकूट', en: 'Govardhan Puja / Annakut' }, krishna, {
    hi: 'गोवर्धन पूजा और अन्नकूट भोग।',
    en: 'Govardhan worship and Annakut bhog.',
  }),
  event('2026-11-11', 'bhai-dooj', 'festival', { hi: 'भाई दूज', en: 'Bhai Dooj' }, family, {
    hi: 'बहनें भाई को तिलक और मिठाई।',
    en: 'Sisters offer tilak and sweets to brothers.',
  }),
  event('2026-11-15', 'chhath', 'festival', { hi: 'छठ पूजा', en: 'Chhath Puja' }, surya, {
    hi: 'सूर्य षष्ठी — डुबकी, खरना, अर्घ्य। बिहार-पूर्वांचल का महापर्व।',
    en: 'Surya Shashthi — holy dip, kharna, arghya. The great festival of Bihar and the East.',
  }),
  event('2026-11-20', 'devutthana', 'ekadashi', { hi: 'देवुत्थान / देवउठनी एकादशी', en: 'Devutthana Ekadashi' }, vishnu, {
    hi: 'भगवान निद्रा से जागे — चातुर्मास समाप्त। तुलसी-शालिग्राम विवाह कई घरों में।',
    en: 'The Lord wakes — Chaturmas ends. Tulsi-Shaligram vivah in many homes.',
  }),
  event('2026-11-24', 'kartik-purnima', 'purnima', { hi: 'कार्तिक पूर्णिमा / देव दीवाली', en: 'Kartik Purnima / Dev Diwali' }, vishnu, {
    hi: 'गंगा स्नान, दीपदान, सत्यनारायण कथा।',
    en: 'Ganga snan, lamps, Satyanarayan katha.',
  }),
  event('2026-11-27', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'मार्गशीर्ष संकष्टी।',
    en: 'Margashirsha Sankashti.',
  }),
  event('2026-12-04', 'utpanna', 'ekadashi', { hi: 'उत्पन्ना एकादशी', en: 'Utpanna Ekadashi' }, vishnu, {
    hi: 'एकादशी देवी की उत्पत्ति की कथा — व्रत श्रृंखला का बीज।',
    en: 'Katha of Ekadashi Devi’s origin — seed of the vrat cycle.',
  }),
  event('2026-12-20', 'mokshada', 'ekadashi', { hi: 'मोक्षदा एकादशी / गीता जयंती', en: 'Mokshada Ekadashi / Gita Jayanti' }, vishnu, {
    hi: 'गीता उपदेश और मोक्षदा एकादशी एक साथ। गीता पाठ करें।',
    en: 'Gita Jayanti with Mokshada Ekadashi. Read the Gita.',
  }),
  event('2026-12-23', 'margashirsha-purnima', 'purnima', { hi: 'मार्गशीर्ष पूर्णिमा', en: 'Margashirsha Purnima' }, vishnu, {
    hi: 'दत्त जयंती कई पंचांगों में इसी पूर्णिमा के निकट।',
    en: 'Datta Jayanti falls near this Purnima in many panchangs.',
  }),
  event('2026-12-26', 'sankashti', 'sankashti', { hi: 'संकष्टी चतुर्थी', en: 'Sankashti Chaturthi' }, ganesh, {
    hi: 'वर्ष की अंतिम संकष्टी।',
    en: 'Last Sankashti of the year.',
  }),
];

const FAST_SLUGS = new Set([
  'janmashtami',
  'karva',
  'chhath',
  'hariyali-teej',
  'ram-navami',
  'durga-ashtami',
  'ganesh-chaturthi',
  'nirjala',
  'mahashivratri',
  'masik-shivratri',
]);

export function isUpvaas(item: VratEvent): boolean {
  if (item.type === 'ekadashi' || item.type === 'pradosh' || item.type === 'sankashti' || item.type === 'shivratri') {
    return true;
  }
  const slug = item.id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
  return FAST_SLUGS.has(slug);
}

export function eventsOn(date: string): VratEvent[] {
  return vratEvents.filter((item) => item.date === date);
}

export function upcomingEvents(fromDate: string, limit = 8): VratEvent[] {
  return vratEvents.filter((item) => item.date >= fromDate).slice(0, limit);
}

export function eventsInMonth(yearMonth: string): VratEvent[] {
  return vratEvents.filter((item) => item.date.startsWith(yearMonth));
}

export function getEventById(id: string): VratEvent | undefined {
  return vratEvents.find((item) => item.id === id);
}
