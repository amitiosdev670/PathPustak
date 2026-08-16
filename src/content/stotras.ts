import type { Scripture } from '@/content/types';

const hanuman = { hi: 'हनुमान जी', en: 'Hanuman Ji' };
const ram = { hi: 'श्री राम', en: 'Shri Ram' };
const ganesh = { hi: 'भगवान गणेश', en: 'Lord Ganesha' };
const gayatriDevi = { hi: 'गायत्री माता / सूर्य', en: 'Gayatri Mata / Surya' };
const shiva = { hi: 'भगवान शिव', en: 'Lord Shiva' };

export const stotras: Scripture[] = [
  {
    id: 'hanuman-chalisa',
    kind: 'path',
    group: 'stotra',
    deity: hanuman,
    title: { hi: 'हनुमान चालीसा', en: 'Hanuman Chalisa' },
    summary: {
      hi: 'गोस्वामी तुलसीदास कृत पूर्ण चालीसा — दो दोहे, चालीस चौपाई, अंत का दोहा।',
      en: 'The complete Chalisa of Tulsidas — opening dohas, forty chaupais, closing doha.',
    },
    verses: [
      {
        label: 'doha',
        hi: 'श्रीगुरु चरन सरोज रज निज मनु मुकुर सुधारि।\nबरनउँ रघुबर बिमल जसु जो दायकु फल चारि॥',
        en: 'With the dust of the Guru’s lotus feet I clean the mirror of the mind, and tell Raghuvar’s pure glory, giver of the four fruits.',
      },
      {
        label: 'doha',
        hi: 'बुद्धिहीन तनु जानिके सुमिरौं पवनकुमार।\nबल बुधि बिद्या देहु मोहिं हरहु कलेस बिकार॥',
        en: 'Knowing this body dull, I remember the son of Wind: give strength, wisdom, learning; remove affliction and distortion.',
      },
      {
        label: 'chaupai',
        hi: 'जय हनुमान ज्ञान गुन सागर। जय कपीस तिहुँ लोक उजागर॥\nराम दूत अतुलित बल धामा। अंजनि पुत्र पवनसुत नामा॥',
        en: 'Victory to Hanuman, ocean of wisdom and virtue, light of the three worlds. Ram’s messenger, abode of matchless strength, Anjani’s son, called Pavansut.',
      },
      {
        label: 'chaupai',
        hi: 'महाबीर बिक्रम बजरंगी। कुमति निवार सुमति के संगी॥\nकंचन बरन बिराज सुबेसा। कानन कुंडल कुंचित केसा॥',
        en: 'Great hero, thunder-limbed. You drive out crooked thought and keep company with right mind. Golden-hued, well-adorned, earrings and curly hair.',
      },
      {
        label: 'chaupai',
        hi: 'हाथ बज्र औ ध्वजा बिराजै। काँधे मूँज जनेऊ साजै॥\nशंकर सुवन केसरीनंदन। तेज प्रताप महा जग बंदन॥',
        en: 'Vajra and banner in hand, sacred thread of munja on the shoulder. Shiva’s spark, Kesari’s joy — the world bows to your splendour.',
      },
      {
        label: 'chaupai',
        hi: 'विद्यावान गुनी अति चातुर। राम काज करिबे को आतुर॥\nप्रभु चरित्र सुनिबे को रसिया। राम लखन सीता मन बसिया॥',
        en: 'Learned, virtuous, most clever, eager for Ram’s work. You delight in the Lord’s story; Ram, Lakshman and Sita dwell in your mind.',
      },
      {
        label: 'chaupai',
        hi: 'सूक्ष्म रूप धरि सियहिं दिखावा। बिकट रूप धरि लंक जरावा॥\nभीम रूप धरि असुर संहारे। रामचंद्र के काज सँवारे॥',
        en: 'In tiny form you showed yourself to Sita; in fierce form you burned Lanka; in terrible form you slew asuras and completed Ram’s work.',
      },
      {
        label: 'chaupai',
        hi: 'लाय सजीवन लखन जियाये। श्रीरघुबीर हरषि उर लाये॥\nरघुपति कीन्ही बहुत बड़ाई। तुम मम प्रिय भरतहि सम भाई॥',
        en: 'You brought Sanjeevani and revived Lakshman. Raghuvir clasped you to His heart: “You are as dear to me as brother Bharat.”',
      },
      {
        label: 'chaupai',
        hi: 'सहस बदन तुम्हरो जस गावैं। अस कहि श्रीपति कंठ लगावैं॥\nसनकादिक ब्रह्मादि मुनीसा। नारद सारद सहित अहीसा॥',
        en: '“A thousand mouths sing your fame,” said the Lord of Shri, embracing you. Sanaka, Brahma, Narad, Sharada and the serpent-king praise you.',
      },
      {
        label: 'chaupai',
        hi: 'जम कुबेर दिगपाल जहाँ ते। कबि कोबिद कहि सके कहाँ ते॥\nतुम उपकार सुग्रीवहिं कीन्हा। राम मिलाय राज पद दीन्हा॥',
        en: 'Yama, Kubera and the direction-guardians cannot finish your praise. You helped Sugriva — joined him to Ram and restored the throne.',
      },
      {
        label: 'chaupai',
        hi: 'तुम्हरो मंत्र बिभीषण माना। लंकेश्वर भए सब जग जाना॥\nजुग सहस्र जोजन पर भानु। लील्यो ताहि मधुर फल जानू॥',
        en: 'Vibhishan heeded your counsel and became lord of Lanka. You took the sun, thousands of yojanas away, as a sweet fruit.',
      },
      {
        label: 'chaupai',
        hi: 'प्रभु मुद्रिका मेलि मुख माहीं। जलधि लाँघि गये अचरज नाहीं॥\nदुर्गम काज जगत के जेते। सुगम अनुग्रह तुम्हरे तेते॥',
        en: 'With the Lord’s ring in your mouth you crossed the ocean — no wonder. Hard tasks of the world become easy by your grace.',
      },
      {
        label: 'chaupai',
        hi: 'राम दुआरे तुम रखवारे। होत न आज्ञा बिनु पैसारे॥\nसब सुख लहै तुम्हारी सरना। तुम रक्षक काहू को डर ना॥',
        en: 'You guard Ram’s door; none enters without leave. All joy is found in your refuge; with you as protector, who is afraid?',
      },
      {
        label: 'chaupai',
        hi: 'आपन तेज सम्हारो आपै। तीनों लोक हाँक तें काँपै॥\nभूत पिशाच निकट नहिं आवै। महाबीर जब नाम सुनावै॥',
        en: 'You alone contain your own blaze; the three worlds shake at your shout. Ghosts and pishachas stay away when Mahavir’s name is spoken.',
      },
      {
        label: 'chaupai',
        hi: 'नासै रोग हरै सब पीरा। जपत निरंतर हनुमत बीरा॥\nसंकट तें हनुमान छुड़ावै। मन क्रम बचन ध्यान जो लावै॥',
        en: 'Disease and pain perish when brave Hanuman is recited without break. He frees from crisis those who hold him in mind, deed and word.',
      },
      {
        label: 'chaupai',
        hi: 'सब पर राम तपस्वी राजा। तिन के काज सकल तुम साजा॥\nऔर मनोरथ जो कोई लावै। सोई अमित जीवन फल पावै॥',
        en: 'Ram, the ascetic king, is over all — you accomplish His every work. Whatever wish a devotee brings, they receive unbounded fruit of life.',
      },
      {
        label: 'chaupai',
        hi: 'चारों जुग परताप तुम्हारा। है परसिद्ध जगत उजियारा॥\nसाधु संत के तुम रखवारे। असुर निकंदन राम दुलारे॥',
        en: 'Your glory spans the four ages and lights the world. Guardian of saints, destroyer of asuras, beloved of Ram.',
      },
      {
        label: 'chaupai',
        hi: 'अष्ट सिद्धि नौ निधि के दाता। अस बर दीन जानकी माता॥\nराम रसायन तुम्हरे पासा। सदा रहो रघुपति के दासा॥',
        en: 'Mother Janaki gave you the boon of eight siddhis and nine nidhis. The elixir of Ram is with you; remain forever Raghupati’s servant.',
      },
      {
        label: 'chaupai',
        hi: 'तुम्हरे भजन राम को पावै। जनम जनम के दुख बिसरावै॥\nअंत काल रघुबर पुर जाई। जहाँ जन्म हरिभक्त कहाई॥',
        en: 'By your worship one reaches Ram and forgets the sorrow of many births. At the end one goes to Raghuvar’s city and is born a Hari-bhakta.',
      },
      {
        label: 'chaupai',
        hi: 'और देवता चित्त न धरई। हनुमत सेई सर्व सुख करई॥\nसंकट कटै मिटै सब पीरा। जो सुमिरै हनुमत बलबीरा॥',
        en: 'Hold no other deity in anxiety: serving Hanuman brings all joy. Crisis and pain end for whoever remembers mighty Hanuman.',
      },
      {
        label: 'chaupai',
        hi: 'जय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥\nजो शत बार पाठ कर कोई। छूटहि बंदि महा सुख होई॥',
        en: 'Victory, victory, victory to Lord Hanuman; bless us as a guru does. Whoever recites a hundred times is freed from bondage and finds great joy.',
      },
      {
        label: 'chaupai',
        hi: 'जो यह पढ़ै हनुमान चालीसा। होय सिद्धि साखी गौरीसा॥\nतुलसीदास सदा हरि चेरा। कीजै नाथ हृदय महँ डेरा॥',
        en: 'Whoever reads this Hanuman Chalisa attains success — Gauri’s Lord is witness. Tulsidas is forever Hari’s servant; O Lord, dwell in the heart.',
      },
      {
        label: 'doha',
        hi: 'पवनतनय संकट हरन मंगल मूरति रूप।\nराम लखन सीता सहित हृदय बसहु सुर भूप॥',
        en: 'Son of Wind, remover of crisis, auspicious form: with Ram, Lakshman and Sita, dwell in the heart, O king of gods.',
      },
    ],
  },
  {
    id: 'bajrang-baan',
    kind: 'path',
    group: 'stotra',
    deity: hanuman,
    title: { hi: 'बजरंग बाण', en: 'Bajrang Baan' },
    summary: {
      hi: 'तुलसीदास कृत पूर्ण बजरंग बाण — संकट और बाधा काटने का पाठ।',
      en: 'The complete Bajrang Baan of Tulsidas — recited to cut crisis and obstruction.',
    },
    verses: [
      {
        label: 'doha',
        hi: 'निश्चय प्रेम प्रतीति ते, बिनय करैं सनमान।\nतेहि के कारज सकल शुभ, सिद्ध करैं हनुमान॥',
        en: 'With sure love and trust, whoever prays with honour — Hanuman fulfills all their auspicious work.',
      },
      {
        label: 'doha',
        hi: 'जय हनुमंत संत हितकारी। सुन लीजै प्रभु अरज हमारी॥\nजन के काज बिलंब न कीजै। आतुर दौरि महा सुख दीजै॥',
        en: 'Victory to Hanuman, friend of saints. Lord, hear our prayer. Do not delay a devotee’s work; run eager and give great joy.',
      },
      {
        label: 'chaupai',
        hi: 'जैसे कूदि सिंधु महि पारा। सुरसा बदन पैठि बिस्तारा॥\nआगे जाइ लंकिनी रोका। मारेहु लात गई सुर लोका॥',
        en: 'As you leapt the sea and entered Surasa’s mouth growing vast; as Lankini blocked you ahead and by your kick went to the gods’ world —',
      },
      {
        label: 'chaupai',
        hi: 'जाय विभीषण को सुख दीन्हा। सीता निरखि परम पद लीन्हा॥\nबाग उजारि सिंधु महँ बोरा। अति आतुर यम कातर तोरा॥',
        en: 'you gave Vibhishan joy, saw Sita and took the supreme state; wrecked the garden, cooled the tail in the sea, and in great haste broke Yama’s fear.',
      },
      {
        label: 'chaupai',
        hi: 'अक्षयकुमार मारि संहारा। लूम लपेटि लंक को जारा॥\nलाह समान लंक जरि गई। जय जय धुनि सुरपुर महँ भई॥',
        en: 'You slew Akshayakumar, wrapped the tail and burned Lanka. Lanka burned like lac; “victory, victory” sounded in the city of gods.',
      },
      {
        label: 'chaupai',
        hi: 'अब बिलंब केहि कारण स्वामी। कृपा करहु उर अंतरजामी॥\nजय जय लखन प्राण के दाता। आतुर होइ दुख करहु निपाता॥',
        en: 'Why delay now, Master? Show grace, O inner witness. Victory to the giver of Lakshman’s life; be eager and strike down this sorrow.',
      },
      {
        label: 'chaupai',
        hi: 'जय गिरिधर जय जय सुख सागर। सुर समूह समरथ भट नागर॥\nॐ हनु हनु हनु हनुमंत हठीले। बैरिहि मारु बज्र की कीले॥',
        en: 'Victory to the mountain-bearer, ocean of joy, able champion among the gods. Om Hanu Hanu Hanu — stubborn Hanuman, strike the foe with a spike of thunder.',
      },
      {
        label: 'chaupai',
        hi: 'गदा बज्र लै बैरिहि मारो। महाराज प्रभु दास उबारो॥\nॐकार हुंकार महाबीर। द्वार पै धरु गदा अति धीर॥',
        en: 'Take mace and vajra, strike the enemy; Maharaj, save this servant. Om-kara, hum-kara, great hero — set the mace at the door, most steadfast.',
      },
      {
        label: 'chaupai',
        hi: 'बैरी कटक संहारो भारी। सुमिरौं आनि कोपि बजरंगी॥\nॐ ह्रीं ह्रीं ह्रीं हनुमंत कपीसा।\nॐ हुं हुं हुं हनु अरि उर शीशा॥',
        en: 'Destroy the enemy host. I remember Bajrangi, bringing wrath. Om Hrim Hrim Hrim, Hanuman lord of monkeys. Om Hum Hum Hum — Hanu, the foe’s heart and head.',
      },
      {
        label: 'chaupai',
        hi: 'सत्य होहु हरि शपथ पाय के। रामदूत धरु मारु लाय के॥\nजय जय जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥',
        en: 'Be true, taking Hari’s oath: O Ram’s messenger, seize and strike. Victory, victory, victory to Lord Hanuman; bless as a guru does.',
      },
      {
        label: 'chaupai',
        hi: 'ॐ हं हं हां हनुमंत अथाई। बैरिहि मारु गदा बैसाई॥\nजयति जयति जय हनुमान गोसाईं। कृपा करहु गुरुदेव की नाईं॥',
        en: 'Om Ham Ham Ham, boundless Hanuman — strike the foe, seating the mace. Victory upon victory to Lord Hanuman; show a guru’s grace.',
      },
      {
        label: 'chaupai',
        hi: 'पवन तनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप॥',
        en: 'Son of Wind, remover of crisis, auspicious form: with Ram, Lakshman and Sita dwell in the heart, O king of gods.',
      },
      {
        label: 'doha',
        hi: 'बजरंग बाण जेहि पढ़ै, हनुमान कपिधूर।\nतासु कष्ट सब मिटहिं, सुख संपति बहु कूर॥',
        en: 'Whoever reads this Bajrang Baan of Hanuman, lord of monkeys — all their distress ends, and joy and wealth increase.',
      },
      {
        label: 'doha',
        hi: 'सिवा रक्षा करे तेहि, सब विधि और न कोय।\nजो यह पढ़ै हनुमान लल, छाया भूत न होय॥',
        en: 'Shiva himself protects that one; there is no other way needed. Whoever recites this of dear Hanuman — ghost and shadow-harm do not remain.',
      },
    ],
  },
  {
    id: 'sankat-mochan-ashtak',
    kind: 'path',
    group: 'stotra',
    deity: hanuman,
    title: { hi: 'संकट मोचन हनुमानाष्टक', en: 'Sankat Mochan Hanuman Ashtak' },
    summary: {
      hi: 'तुलसीदास कृत आठ छंद — बालरूप से संकट हरने वाला पाठ।',
      en: 'Eight verses of Tulsidas — the path of Hanuman who removes crisis even in child-form.',
    },
    verses: [
      {
        label: 'chaupai',
        hi: 'बाल समय रवि भक्षि लियो तब तीनहुँ लोक भयो अँधियारो।\nताहि सों त्रास भयो जग को यह संकट काहु सों जात न टारो॥\nदेवन आनि करी बिनती तब छाँड़ि दियो रवि कष्ट निवारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'In childhood you swallowed the sun and the three worlds went dark. The world’s fear could not be removed by anyone. The gods came and prayed; you released the sun and took the pain away. Who in the world does not know you, monkey, named Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'बालि की त्रास कपीस बसैं गिरि जात महाप्रभु पंथ निहारो।\nचौंकि महा मुनि शाप दियो तब चाहिय कौन बिचार बिचारो॥\nकै द्विज रूप लिवाय महाप्रभु सो तुम दास के शोक निवारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'In fear of Bali the monkey-lord lived on the mountain, watching the great Lord’s path. The great sage’s curse had fallen — what thought was left? In a twice-born form you brought the great Lord and removed the servant’s grief. Who does not know you, Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'अंगद के संग लेन गए सिय खोज कपीस यह बैन उचारो।\nजीवत ना बचिहौ हम सो जु बिना सुधि लाये इहाँ पगु धारो॥\nहेरी थके तट सिंधु सबै तब लाय सिया-सुधि प्राण उबारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'With Angad they went to search for Sita; the monkey-lord said: “You will not live if you set foot here without news.” All were exhausted on the ocean’s shore — then you brought Sita’s news and saved their lives. Who does not know you, Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'रावन त्रास दई सिय को सब राक्षसी सों कहि शोक निवारो।\nताहि समय हनुमान महाप्रभु जाय महा रजनीचर मारो॥\nचाहत सीय असोक सों आगि सु दै प्रभु मुद्रिका शोक निवारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'Ravan’s terror was on Sita; you told the rakshasis and took her grief. Then great Hanuman went and slew the night-rovers. Sita wished fire from the Ashoka — you gave the Lord’s ring and removed the sorrow. Who does not know you, Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'बान लग्यो उर लछिमन के तब प्राण तजे सुत रावन मारो।\nलै गृह बैद्य सुषेन समेत तबै गिरि द्रोण सु बीर उपारो॥\nआनि सजीवन हाथ दई तब लछिमन के तुम प्राण उबारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'When the arrow struck Lakshman’s chest and Ravan’s son seemed to take his life, you brought the physician Sushena’s house and tore up Mount Drona. You placed Sanjeevani in hand and saved Lakshman’s life. Who does not know you, Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'रावन युद्ध अजान कियो तब नाग कि फाँस सबै सिर डारो।\nश्रीरघुनाथ समेत सबै दल मोह भयो यह संकट भारो॥\nआनि खगेस तबै हनुमान जु बंधन काटि सुत्रास निवारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'In war Ravan, unknowing, cast the serpent-noose on every head. With Shri Raghunath the whole host was stunned — a heavy crisis. Then Hanuman brought the lord of birds and cut the bonds, removing the terror. Who does not know you, Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'बंधु समेत जबै अहिरावन लै रघुनाथ पताल सिधारो।\nदेबिहिं पूजि भली विधि सों बलि देउ सबै मिथि देखा डारो॥\nजाय सहाय भयो तब ही अहिरावन सैन्य समेत संहारो।\nको नहिं जानत है जग में कपि संकटमोचन नाम तिहारो॥',
        en: 'When Ahiravan took Raghunath with the brother to Patal, and after worshipping the goddess well was about to offer them as bali — that instant you became help, and destroyed Ahiravan with his army. Who does not know you, Sankat Mochan?',
      },
      {
        label: 'chaupai',
        hi: 'काज किये बड़े संकट मोचन माँगि लिये यह फल चारि।\nकीजै दया महाराज की जय कपि संकटमोचन नाम तिहारो॥\nजो यह पढ़ै हनुमानलला की अष्टक होय सिद्धि साखी गौरीसा।\nतुलसीदास सदा हरि चेरा कीजै नाथ हृदय महँ डेरा॥',
        en: 'O Sankat Mochan, great works you have done; we ask the four fruits. Show mercy, Maharaj — victory to the name Sankat Mochan. Whoever reads this Ashtak of dear Hanuman attains success — Gauri’s Lord is witness. Tulsidas is forever Hari’s servant; O Lord, dwell in the heart.',
      },
    ],
  },
  {
    id: 'ram-stuti',
    kind: 'path',
    group: 'stotra',
    deity: ram,
    title: { hi: 'राम स्तुति — मंगल भवन', en: 'Ram Stuti — Mangal Bhavan' },
    summary: {
      hi: 'रामचरितमानस बालकांड की मंगल स्तुति — मंगल भवन अमंगल हारी।',
      en: 'The auspicious stuti from Ramcharitmanas Balkand — Mangal Bhavan, destroyer of the inauspicious.',
    },
    verses: [
      {
        label: 'doha',
        hi: 'मंगल भवन अमंगल हारी। द्रवउ सो दसरथ अजिर बिहारी॥',
        en: 'May He melt with grace — the home of auspiciousness, destroyer of the inauspicious, who plays in Dasharath’s courtyard.',
      },
      {
        label: 'chaupai',
        hi: 'भए प्रगट कृपाला दीनदयाला कौसल्या हितकारी।\nहरषित महतारी मुनि मन हारी अद्भुत रूप बिचारी॥',
        en: 'The Compassionate appeared, merciful to the lowly, Kaushalya’s benefactor. The mother rejoiced; even sages’ minds were stolen, thinking on that wondrous form.',
      },
      {
        label: 'chaupai',
        hi: 'लोचन अभिरामा तनु घनस्यामा निज आयुध भुज चारी।\nभूषन बनमाला नयन बिसाला सोभासिंधु खरारी॥',
        en: 'Delight of the eyes, body dark as cloud, four arms with His own weapons, ornaments and forest-garland, wide eyes — ocean of beauty, foe of Khara.',
      },
      {
        label: 'chaupai',
        hi: 'कह दुइ कर जोरी अस्तुति तोरी केहि बिधि करौं अनंता।\nमाया गुन ग्यानातीत अमाना बेद पुरान भनंता॥',
        en: 'Joining two palms she said: “How shall I hymn You, O Endless? The Vedas and Puranas declare You beyond Maya, beyond guna and knowledge, without measure.”',
      },
      {
        label: 'chaupai',
        hi: 'करुना सुख सागर सब गुन आगर जेहि गावहिं श्रुति संता।\nसो मम हित लागी जन अनुरागी भयउ प्रगट श्रीकंता॥',
        en: 'Ocean of compassion and joy, store of all virtues, whom Shruti and saints sing — that Lord of Shri has appeared for my good, loving His devotees.',
      },
      {
        label: 'chaupai',
        hi: 'ब्रह्मांड निकाया निर्मित माया रोम रोम प्रति बेद कहै।\nमम उर सो बासी यह उपहासी सुनत धीर मति थिर न रहै॥',
        en: 'The Vedas say: in every hair-root You hold universes made of Maya. That You dwell in my heart — this wonder, hearing it, even a steady mind cannot stay still.',
      },
      {
        label: 'doha',
        hi: 'मंगल भवन अमंगल हारी। द्रवउ सो दसरथ अजिर बिहारी॥\nसीता राम चरन रति मोरें। अनुदिन बढ़उ अनुग्रह तोरें॥',
        en: 'May He melt — home of the auspicious, destroyer of the inauspicious, player in Dasharath’s court. May love for Sita-Ram’s feet grow in me daily by Your grace.',
      },
    ],
  },
  {
    id: 'ganesh-chalisa',
    kind: 'path',
    group: 'stotra',
    deity: ganesh,
    title: { hi: 'श्री गणेश चालीसा', en: 'Shri Ganesh Chalisa' },
    summary: {
      hi: 'पूर्ण गणेश चालीसा — संकष्टी, शुभ आरंभ और विघ्न नाश का पाठ।',
      en: 'The complete Ganesh Chalisa — path for Sankashti, auspicious starts and the end of obstacles.',
    },
    verses: [
      {
        label: 'doha',
        hi: 'जय गणपति सद्गुण सदन, कविवर बदन कृपाल।\nविघ्न हरन मंगल करन, जय जय गिरिजालाल॥',
        en: 'Victory to Ganapati, home of true virtues, gracious poet-faced one. Remover of obstacles, maker of the auspicious — victory to Girija’s dear son.',
      },
      {
        label: 'chaupai',
        hi: 'जय जय जय गणपति गनराजू। मंगल भरन करन शुभकाजू॥\nजय गजबदन सदन सुखदाता। विश्व विनायक बुद्धि विधाता॥',
        en: 'Victory to Ganapati, king of ganas, filler of auspiciousness, doer of fair work. Victory to the elephant-faced, giver of joy, Vinayak of the world, disposer of intellect.',
      },
      {
        label: 'chaupai',
        hi: 'वक्रतुण्ड शुचि शुण्ड सुहावन। तिलक त्रिपुण्ड भाल मन भावन॥\nराजत मणिमुकुट शिर साजे। चार भुजा तनु सहज विराजे॥',
        en: 'Curved trunk, pure lovely tusk; tripundra on the brow that steals the mind. A jewelled crown adorns the head; four arms grace the body by nature.',
      },
      {
        label: 'chaupai',
        hi: 'स्वास्तिक रुद्र अक्षमाला सोहे। परम किरीट विमल मन मोहे॥\nमुक्तामाल गले शोभा भारी। चन्द्रकला सिर ज्योति उजारी॥',
        en: 'Swastika, rudraksha-mala and a pure crown steal the mind. A heavy pearl garland at the throat; the moon-digit on the head sheds light.',
      },
      {
        label: 'chaupai',
        hi: 'लंबोदर उदर अति विशाला। संतत पूजत सुर मुनि बाला॥\nमोदक प्रिय मुद मंगल दाता। विद्या बुद्धि ऋद्धि सिद्धि दाता॥',
        en: 'Lambodar of vast belly — gods, sages and children worship without break. Lover of modak, giver of joy and auspiciousness, giver of learning, intellect, riddhi and siddhi.',
      },
      {
        label: 'chaupai',
        hi: 'मूषक वाहन सोहत कैसे। क्षीरसिन्धु शेषहु जैसे॥\nपार्वती नंदन शंकर सुवन। प्रथम पूज्य जग मंगल भवन॥',
        en: 'How fair the mouse-mount looks — as Shesha on the milk-ocean. Parvati’s joy, Shiva’s son, first to be worshipped, home of the world’s welfare.',
      },
      {
        label: 'chaupai',
        hi: 'मातु ने द्वारपाल जब कीन्हा। स्नान करन निज भवन मँझारी लीन्हा॥\nशिव आए बालक ने रोका। क्रोधित भए काटे सिर धोका॥',
        en: 'The Mother set him as doorkeeper while she bathed within. Shiva came; the child stopped Him. In wrath the head was struck off — a terrible blow.',
      },
      {
        label: 'chaupai',
        hi: 'मातु विलाप सुन्यो जब स्वामी। गज सिर जोरि दियो अभिरामी॥\nवर दियो प्रथम पूजा तोही। बिना पुकारे आवहु मोही॥',
        en: 'Hearing the Mother’s cry the Lord joined an elephant head, most dear. He granted: “You shall have first worship; come even uncalled.”',
      },
      {
        label: 'chaupai',
        hi: 'सिद्धि चतुर्थी व्रत कर जोई। तिनके काज पूर्ण सब होई॥\nसंकष्टी की साँझ चन्द्रार्घ्य। कथा सुनत मिटै भव भार्य॥',
        en: 'Whoever keeps Siddhi Chaturthi finds every work complete. On Sankashti evening, moon-arghya and hearing the katha lift the world’s weight.',
      },
      {
        label: 'chaupai',
        hi: 'अन्ध को दृष्टि कोढ़ि को काया। बाँझहि पुत्र निर्धनहि माया॥\nमूक को वाणी मूर्खहि ग्याना। दीनन को तुम हो बलवाना॥',
        en: 'Sight to the blind, body to the afflicted, a child to the childless, means to the poor; speech to the mute, wisdom to the dull — you are strength for the lowly.',
      },
      {
        label: 'chaupai',
        hi: 'विद्या बुद्धि यश बल देहू। क्लेश कष्ट संकट सब लेहू॥\nपर घर वस्तु न लेहु चुरई। परनिंदा तजि करहु भलाई॥',
        en: 'Give learning, intellect, fame and strength; take away affliction, pain and crisis. Do not steal another’s goods; leave slander and do good.',
      },
      {
        label: 'chaupai',
        hi: 'माता पिता गुरु पद मन ल्यावो। हरि हर ब्रह्म एक करि पावो॥\nसंकट में सुमिरन जो करई। तो संकट कतहुँ नहिं रहई॥',
        en: 'Set the mind on the feet of mother, father and guru. Know Hari, Hara and Brahma as one. Whoever remembers you in crisis — that crisis does not remain.',
      },
      {
        label: 'chaupai',
        hi: 'दूर्वा लड्डू मोदक मीठा। भोग लगावत संत विनीता॥\nदीप धूप नित आरती कीजै। जन्म जन्म के दुख सब पीजै॥',
        en: 'Humble saints offer durva, laddu and sweet modak. Light lamp and incense, do aarti daily — the sorrows of birth after birth are drunk away.',
      },
      {
        label: 'chaupai',
        hi: 'जय गणेश जय जय सुखरासी। जो सुमिरै सो पावै खासी॥\nसंकट में तुमही हो रक्षक। विघ्न विनाशक मंगल कारक॥',
        en: 'Victory to Ganesh, store of joy. Whoever remembers you finds the special fruit. In crisis you alone are guardian — destroyer of obstacles, maker of the auspicious.',
      },
      {
        label: 'chaupai',
        hi: 'भक्तन के तुम हो रखवारे। अशुभ निकंदन शुभ हितकारे॥\nचारों जुग परताप तुम्हारा। है प्रसिद्ध जगत उजियारा॥',
        en: 'You guard devotees, cut the inauspicious, work the good. Your glory spans the four ages and is famed as the world’s light.',
      },
      {
        label: 'chaupai',
        hi: 'जो यह चालीसा पढ़ै सोई। सुख संपति मंगल नित होई॥\nनित नव मंगल गृह में होई। कष्ट मिटै सुख संपति होई॥',
        en: 'Whoever reads this Chalisa finds daily joy, wealth and auspiciousness. New welfare stays in the house; pain ends and prosperity remains.',
      },
      {
        label: 'chaupai',
        hi: 'ऋद्धि सिद्धि घर में रहैं सदा। पुत्र मित्र धन धान्य सदा॥\nजो यह पाठ करे चित लाई। ता पर कृपा करैं गिरिजाई॥',
        en: 'Riddhi and Siddhi dwell always in the home, with children, friends, grain and wealth. Whoever recites this with the mind held — Girija’s son shows that one grace.',
      },
      {
        label: 'chaupai',
        hi: 'चन्द्रमा जब हँस्यो तुम्हारा। शाप दियो क्षय रूप निहारा॥\nबाद में वर दियो दयाल। संकष्टी दर्शन मंगलाल॥',
        en: 'When the moon mocked you, the waning curse was seen. Later the compassionate one gave a boon: Sankashti moon-sighting is auspicious.',
      },
      {
        label: 'chaupai',
        hi: 'शुक्ल चतुर्थी सिद्ध कहावै। कृष्ण संकष्टी संकट जावै॥\nलाल फूल मोदक दीप धरा। आरती करत विघ्न सब हरा॥',
        en: 'Shukla Chaturthi is called Siddhi; Krishna Chaturthi is Sankashti, when crisis goes. Red flowers, modak and a lamp — doing aarti, all obstacles perish.',
      },
      {
        label: 'chaupai',
        hi: 'ॐ गं गणपतये नमः जपहू। मनवांछित फल शीघ्र लहहू॥\nतुलसीदास यह विनय हमारी। राखहु लाज दीन हितकारी॥',
        en: 'Japa “Om Gam Ganapataye Namah” and quickly receive the wished fruit. This is our prayer: keep the honour of the lowly, O doer of good.',
      },
      {
        label: 'chaupai',
        hi: 'जय जय जय गनपति गोसाईं। कृपा करहु गुरुदेव की नाईं॥\nजो यह पढ़ै प्रेम उर धारी। होय सिद्ध साक्षी वृषभधारी॥',
        en: 'Victory, victory, victory to Lord Ganapati; bless as a guru does. Whoever reads this holding love in the chest attains success — the Bull-bannered Lord is witness.',
      },
      {
        label: 'doha',
        hi: 'सोरह शृंगार करै जो कोई। अष्ट सिद्धि नव निधि फल होई॥\nजय गिरिजालाल गनराया। मंगल करो अमंगल जाया॥',
        en: 'Whoever offers the sixteen adornments receives eight siddhis and nine nidhis. Victory to Girija’s son, king of ganas — make the auspicious, let the inauspicious go.',
      },
    ],
  },
  {
    id: 'gayatri-mantra',
    kind: 'path',
    group: 'mantra',
    deity: gayatriDevi,
    title: { hi: 'गायत्री मंत्र', en: 'Gayatri Mantra' },
    summary: {
      hi: 'सनातन संध्या का मूल मंत्र — अर्थ सहित। नित्य जप।',
      en: 'The root mantra of traditional sandhya — with meaning. For daily japa.',
    },
    verses: [
      {
        label: 'mantra',
        hi: 'ॐ भूर्भुवः स्वः।\nतत्सवितुर्वरेण्यं\nभर्गो देवस्य धीमहि।\nधियो यो नः प्रचोदयात्॥',
        en: 'Om. Earth, mid-space, heaven. We meditate on the excellent radiance of Savita, the solar Lord. May that light impel our intellects.',
      },
      {
        label: 'vidhi',
        hi: 'विधि: प्रातः स्नान-आचमन के बाद पूर्वाभिमुख बैठें। माला से एक सौ आठ जप आदर्श है; न्यूनतम ग्यारह या एक माला। मंत्र को मन में या मन्द स्वर में जपें। स्त्रियाँ-पुरुष दोनों घर में श्रद्धा से जप कर सकते हैं। जप के बाद हाथ जोड़कर प्रार्थना करें — “हे माता गायत्री, बुद्धि शुद्ध हो, वचन सत्य हो।”',
        en: 'Vidhi: After morning bath and achaman, sit facing east. One hundred and eight on a mala is ideal; at least eleven or one mala. Repeat inwardly or in a low voice. Women and men may both japa at home with shraddha. After japa join palms: “Mother Gayatri, may the intellect be clean and speech true.”',
      },
    ],
  },
  {
    id: 'mahamrityunjay',
    kind: 'path',
    group: 'mantra',
    deity: shiva,
    title: { hi: 'महामृत्युंजय मंत्र', en: 'Mahamrityunjay Mantra' },
    summary: {
      hi: 'रुद्र का त्र्यम्बक मंत्र — रोग, भय और अकाल मृत्यु के निवारण का जप।',
      en: 'Rudra’s Tryambaka mantra — japa for illness, fear and untimely death.',
    },
    verses: [
      {
        label: 'mantra',
        hi: 'ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्।\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय माऽमृतात्॥',
        en: 'Om. We worship the three-eyed One, fragrant, who increases nourishment. As a ripe cucumber is freed from the vine, may I be freed from death — not from immortality.',
      },
      {
        label: 'vidhi',
        hi: 'विधि: सोमवार, प्रदोष या रोगकाल में शिव के सामने दीप जलाकर जपें। एक माला, ग्यारह माला या एक सौ आठ। जल या दूध का अभिषेक साथ हो तो उत्तम। अर्थ हृदय में रखें — मृत्यु से मुक्ति माँगते हैं, अमृत से नहीं। रोगी के नाम से भी जप हो सकता है। अंत में “ॐ नमः शिवाय” तीन बार।',
        en: 'Vidhi: On Monday, Pradosh or in illness, light a lamp before Shiva and japa. One mala, eleven, or one hundred and eight. Abhishek with water or milk is excellent. Hold the meaning: we ask release from death, not from the deathless. Japa may be done in a sick person’s name. Close with “Om Namah Shivaya” three times.',
      },
    ],
  },
];
