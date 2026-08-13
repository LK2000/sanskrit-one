const quizData = [
    /* 1.1 */
    {
        sans: "_ बालकः दण्डेन ताडयति",
        en: "That boy beats with a stick",
        opts: ["सः", "तम्", "तैः", "तेषु", "ताभ्याम्"]
    },
        {
        sans: "_ भक्तः रामाय नमति",
        en: "That devotee bows to Rama.",
        opts: ["सः", "तस्माद्", "तेन", "तान्", "तस्मिन्"]
    },
    /* 1.2 */
    {
        sans: "_ सेवकौ आपणं गच्छतः",
        en: "Those two servants go to the market",
        opts: ["तौ", "सः", "तम्", "तस्माद्", "तेभ्यः"]
    },
        {
        sans: "_ चोरौ धावतः",
        en: "Those two thieves run",
        opts: ["तौ", "ते", "तम्", "तेषाम्", "तस्य"]
    },
    /* 1.3 */
    {
        sans: "_ गायकाः श्लोकं गायन्ति",
        en: "Those singers sing a verse",
        opts: ["ते", "तयोः", "सः", "तस्मै", "तैः"]
    },
    {
        sans: "_ नायकाः असत्यं वदन्ति",
        en: "Those leaders tell lies.",
        opts: ["ते", "तौ", "तम्", "तेभ्यः", "तस्मिन्"]
    },
    /* 2.1 */
    {
        sans: "कृषकः _ युवकं पश्यति",
        en: "The farmer sees that young man",
        opts: ["तम्", "तेन", "तस्मै", "तस्य", "तस्मात्"]
    },
        {
        sans: "पुरुषः _ वृद्धम् उपकरोति",
        en: "The man helps that old man",
        opts: ["तम्", "तस्मिन्", "ताभ्याम्", "तेषाम्", "तयोः"]
    },
    /* 2.2 */
    {
        sans: "जनकः _ पुत्रौ आह्वयति",
        en: "The father calls those two sons",
        opts: ["तौ", "तस्य", "तेन", "तस्मिन्", "तेषाम्"]
    },
        {
        sans: "कृषकः _ वृक्षौ क्रीणाति",
        en: "The farmer buys those two trees",
        opts: ["तौ", "ताभ्याम्", "तयोः", "तस्मात्", "तेषु"]
    },
    /* 2.3 */
    {
        sans: "अध्यापिका _ छात्रान् प्रशंसति",
        en: "The female teacher praises those students",
        opts: ["तान्", "ताभ्याम्", "तस्मै", "तस्य", "तेषु"]
    },
    {
        sans: "भिक्षुकः _ कुकुरान् पश्यति",
        en: "The beggar sees those dogs",
        opts: ["तान्", "तेन", "तयोः", "तस्मिन्", "तासाम्"]
    },
    /* 3.1 */
    {
        sans: "_ सह कः क्रीडति?",
        en: "Who plays with him?",
        opts: ["तेन", "तस्मात्", "तस्य", "तेषु", "ताभ्याम्"]
    },
    {
        sans: "श्वः _ सह वद",
        en: "Speak with him tomorrow.",
        opts: ["तेन", "तस्मै", "तयोः", "तेषाम्", "तस्मिन्"]
    },
    /* 3.2 */
    {
        sans: "ह्यः अहं _ चलचित्रं दृष्टवान्।",
        en: "Yesterday, I watched a movie with those two",
        opts: ["ताभ्याम्", "तस्मै", "तस्य", "तस्मिन्", "तेषाम्"]
    },
    {
        sans: "_ सह का युवती?",
        en: "Which young woman is with those two?",
        opts: ["ताभ्याम्", "तयोः", "तस्मात्", "तेषु", "तस्य"]
    },
    /* 3.3 */
    {
        sans: "सङ्गीता _ सह कुत्र गच्छति?",
        en: "Where does Sangeeta go with them?",
        opts: ["तैः", "तस्मै", "तस्य", "तस्मिन्", "तयोः"]
    },
    {
        sans: "_ सह का गायति?",
        en: "Who sings with them?",
        opts: ["तैः", "तस्मात्", "तस्य", "ताभ्याम्", "तेषु"]
    },
    /* 4.1 */
    {
        sans: "अम्बा _ भोजनम् आनीतवती",
        en: "Mother brought food for him.",
        opts: ["तस्मै", "तस्मिन्", "तेषाम्", "ताभ्याम्", "तयोः"]
    },
    {
        sans: "_ गीतं गातुं सुलभम् अस्ति",
        en: "It is easy for him to sing a song.",
        opts: ["तस्मै", "तस्मात्", "तस्य", "तेषु", "तैः"]
    },
    /* 4.2 */
    {
        sans: "_ पत्रं प्रेषय",
        en: "Send a letter to those two",
        opts: ["ताभ्याम्", "तेषाम्", "तम्", "तेन", "तस्मै"]
    },
    {
        sans: "_ ग्रन्थालयात् पुस्तकं आनय",
        en: "Bring a book to those two from the library.",
        opts: ["ताभ्याम्", "तयोः", "तान्", "तेभ्यः", "तस्मिन्"]
    },
    /* 4.3 */
    {
        sans: "_ शीतलं जलं देहि",
        en: "Give cold water to them",
        opts: ["तेभ्यः", "तम्", "तेषाम्", "तस्मिन्", "तेन"]
    },
    {
        sans: "_ विवाहनिमन्त्रणम् आगतम्।",
        en: "A wedding invitation came for them",
        opts: ["तेभ्यः", "तौ", "तस्य", "तस्मात्", "तेषु"]
    },
    /* 5.1 */
    {
        sans: "_ धनं मा स्वीकुरु",
        en: "Do not take money from him.",
        opts: ["तस्मात्", "तेषाम्", "तौ", "तेन", "तस्मिन्"]
    },
    {
        sans: "_ दूरवाणीं नय",
        en: "Take the cell phone from him.",
        opts: ["तस्माद्", "तेषु", "तस्य", "तेभ्यः", "तम्"]
    },
    /* 5.2 */
    {
        sans: "_ वार्तां श्रुतवान्।",
        en: "I heard the news from those two",
        opts: ["ताभ्याम्", "तस्य", "ते", "तेषु", "तस्मात्"]
    },
    {
        sans: "_ सन्देशः आगतः",
        en: "A message has come from those two",
        opts: ["ताभ्याम्", "तेभिः", "तौ", "तस्मै", "तयोः"]
    },
     /* 5.3 */
    {
        sans: "उत्पेटिकां _ क्रीणीहि",
        en: "Buy the table from them",
        opts: ["तेभ्यः", "तयोः", "तम्", "तेन", "तस्य"]
    },
    {
        sans: "_ धनं मा गृहाण",
        en: "Don’t borrow money from them",
        opts: ["तेभ्यः", "तस्मिन्", "तौ", "तेषाम्", "तस्मात्"]
    },
    /* 6.1 */
    {
        sans: "_ गृहे के के वसन्ति?",
        en: "Who all live in his house?",
        opts: ["तस्य", "तेभ्यः", "तम्", "तेषु", "तस्मै"]
    },
    {
        sans: "_ पुस्तकं तया सह अस्ति किम्?",
        en: "Is his book with her?",
        opts: ["तस्य", "तेन", "तौ", "तस्मात्", "तेषाम्"]
    },
    /* 6.2 */
    {
        sans: "_ पितुः नाम किम्?",
        en: "What is the father’s name of those two?",
        opts: ["तयोः", "तेभ्यः", "तम्", "तस्मिन्", "तेन"]
    },
    {
        sans: "_ पत्न्यौ कुत्र स्तः?",
        en: "Where are the two wives of those two men?",
        opts: ["तयोः", "तस्य", "तौ", "तेषाम्", "तस्मात्"]
    },
     /* 6.3 */
    {
        sans: "_ बालाः कुत्र वसन्ति?",
        en: "Where do their children live?",
        opts: ["तेषाम्", "तस्मै", "तम्", "तेन", "तस्मिन्"]
    },
    {
        sans: "_ पुत्राणां नामानि कानि?",
        en: "What are their sons’ names?",
        opts: ["तेषाम्", "तयोः", "तौ", "तेभ्यः", "तस्य"]
    },
    /* 7.1 */
    {
        sans: "_ विषये अहं किमपि न जानामि",
        en: "I don't know anything about that matter",
        opts: ["तस्मिन्", "तेषाम्", "तम्", "तेन", "तस्मै"]
    },
    {
        sans: "सः _ काले न आगतवान्",
        en: "He did not come at that time",
        opts: ["तस्मिन्", "तेभ्यः", "तौ", "तस्य", "तेषु"]
    },
    /* 7.2 */
    {
        sans: "भोः, _ बालकयोः बहुः क्रोधः अस्ति",
        en: "Oh! Those two boys have a lot of anger",
        opts: ["तयोः", "तस्मै", "तेन", "तम्", "तेषाम्"]
    },
    {
        sans: "_ सेवकयोः बह्व् आलस्यम् अस्ति",
        en: "There is a lot of laziness in those two servants",
        opts: ["तयोः", "तेभ्यः", "तौ", "तस्मिन्", "तस्य"]
    },
    /* 7.3 */
    {
        sans: "_ बालकेषु बहु उत्साहः अस्ति",
        en: "There is a lot of enthusiasm in those boys",
        opts: ["तेषु", "तस्य", "तेन", "तस्मै", "तम्"]
    },
    {
        sans: "_ वृक्षेषु बहूनि फलानि सन्ति।",
        en: "There are many fruits on those trees",
        opts: ["तेषु", "तयोः", "तेभ्यः", "तौ", "तस्मात्"]
    },
];
