const shlokas = {
    Happy: [
        {
            ref: "18.54",
            sanskrit: `ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति।
समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम्।।`,
            hi: "जो व्यक्ति ब्रह्मभाव में स्थित होकर भीतर से प्रसन्न रहता है, न शोक करता है और न अनावश्यक इच्छाओं में बंधता है, तथा सभी प्राणियों को समान दृष्टि से देखता है, वह परम भक्ति को प्राप्त करता है।",
            en: "One who is established in the Divine becomes serene, free from grief and needless craving, and sees all beings with equality; such a person attains deep devotion to the Divine."
        },

        {
            ref: "9.22",
            sanskrit: `अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।
तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।`,
            hi: "जो लोग एकाग्र भाव से मेरा स्मरण और उपासना करते हैं और सदा मुझसे जुड़े रहते हैं, उनके आवश्यक साधनों की पूर्ति और उनकी रक्षा का भार मैं स्वयं संभालता हूँ।",
            en: "Those who remember and worship Me with wholehearted devotion and remain constantly connected with Me are cared for by Me; I sustain what they need and protect what they have."
        },

        {
            ref: "2.47",
            sanskrit: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।`,
            hi: "तुम्हारा अधिकार अपने कर्म करने में है, उसके परिणाम पर नहीं। इसलिए फल की चिंता को अपने कर्म का आधार मत बनाओ और कर्म से दूर भी मत भागो।",
            en: "Your responsibility is to act sincerely, not to control the outcome. Do your duty without making the result the source of your peace or motivation."
        },

        {
            ref: "6.28",
            sanskrit: `युञ्जन्नेवं सदाऽऽत्मानं योगी विगतकल्मषः।
सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते।।`,
            hi: "जो योगी निरंतर अपने मन को साधता है और भीतर की अशुद्धियों से मुक्त होता जाता है, वह परम सत्य के स्पर्श से अत्यंत गहरा और स्थायी सुख अनुभव करता है।",
            en: "A disciplined yogi who continually turns inward and becomes free from inner impurities experiences a deep and lasting happiness through connection with the Divine."
        },

        {
            ref: "5.21",
            sanskrit: `बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्।
स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते।।`,
            hi: "जो व्यक्ति बाहरी इंद्रिय-सुखों में आसक्त नहीं रहता, वह अपने भीतर ही वास्तविक सुख पाता है और परमात्मा से जुड़कर अक्षय आनंद का अनुभव करता है।",
            en: "One who is not dependent on external pleasures discovers happiness within and, through union with the Divine, experiences enduring joy."
        },

        {
            ref: "10.9",
            sanskrit: `मच्चित्ता मद्गतप्राणा बोधयन्तः परस्परम्।
कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च।।`,
            hi: "जिन भक्तों का मन और जीवन मुझमें लगा रहता है, वे आपस में मेरे ज्ञान और गुणों की चर्चा करते हुए संतोष और आनंद अनुभव करते हैं।",
            en: "Those whose minds and lives are devoted to Me share the wisdom of the Divine with one another and find deep satisfaction and joy in that remembrance."
        },

        {
            ref: "18.37",
            sanskrit: `यत्तदग्रे विषमिव परिणामेऽमृतोपमम्।
तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम्।।`,
            hi: "जो सुख आरंभ में कठिन या विष के समान लगे, लेकिन अंत में अमृत जैसा परिणाम दे और जिससे बुद्धि तथा आत्मबोध निर्मल हों, वही सात्त्विक सुख है।",
            en: "True, sattvic happiness may feel difficult at first, yet it becomes like nectar in the end and arises from a clear, peaceful understanding of the self."
        },

        {
            ref: "2.15",
            sanskrit: `यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ।
समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते।।`,
            hi: "जो व्यक्ति सुख और दुःख दोनों में समान रहता है और इन बदलती परिस्थितियों से विचलित नहीं होता, वह धीर और स्थिर बनता है तथा अमर सत्य को समझने योग्य होता है।",
            en: "One who remains steady through pleasure and pain and is not shaken by changing circumstances develops the inner steadiness needed to realize the eternal."
        }
    ],

    Sad: [
        {
            ref: "6.5",
            sanskrit: `उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्।
आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।`,
            hi: "मनुष्य को अपने ही प्रयास से स्वयं को ऊपर उठाना चाहिए, स्वयं को गिराना नहीं चाहिए; मन ही हमारा मित्र बन सकता है और मन ही हमारा शत्रु।",
            en: "Lift yourself through your own inner strength rather than pulling yourself down; your mind can become your greatest friend or your greatest enemy."
        },

        {
            ref: "2.47",
            sanskrit: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।`,
            hi: "तुम्हारा अधिकार अपने कर्म करने में है, उसके परिणाम पर नहीं। इसलिए परिणाम की चिंता छोड़कर अपने कर्तव्य पर ध्यान दो।",
            en: "Your role is to perform your duty with sincerity, not to control its outcome. Let your effort remain steady without being consumed by results."
        },

        {
            ref: "4.22",
            sanskrit: `यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः।
समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते।।`,
            hi: "जो व्यक्ति सहज रूप से प्राप्त होने वाली परिस्थितियों में संतुष्ट रहता है, ईर्ष्या और द्वंद्वों से ऊपर रहता है तथा सफलता-असफलता में समान रहता है, वह कर्म करते हुए भी बंधता नहीं।",
            en: "One who remains content with what comes, rises above envy and opposites, and stays balanced in success and failure is not bound by action."
        },

        {
            ref: "2.14",
            sanskrit: `मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।
आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।`,
            hi: "सुख और दुःख देने वाले अनुभव आते-जाते रहते हैं और स्थायी नहीं होते। इसलिए उन्हें धैर्य से सहन करना सीखो।",
            en: "Experiences of pleasure and pain come and go; they are temporary. Meet them with patience and remember that they will pass."
        },

        {
            ref: "6.6",
            sanskrit: `बन्धुरात्माऽऽत्मनस्तस्य येनात्मैवात्मना जितः।
अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्।।`,
            hi: "जिसने अपने मन को जीत लिया है, उसका मन ही उसका मित्र बन जाता है; लेकिन जिसने मन पर नियंत्रण नहीं पाया, उसके लिए वही मन शत्रु जैसा व्यवहार करता है।",
            en: "For one who has mastered the mind, the mind becomes a friend. For one who has not, the same mind behaves like an enemy."
        },

        {
            ref: "18.66",
            sanskrit: `सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।`,
            hi: "सब प्रकार की चिंताओं और अपने बोझ को छोड़कर मेरी शरण में आओ; मैं तुम्हें मुक्त करूँगा, इसलिए शोक मत करो।",
            en: "Let go of the burden that weighs on you and take refuge in the Divine. I will help free you from what binds you; therefore, do not grieve."
        },

        {
            ref: "3.30",
            sanskrit: `मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।
निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः।।`,
            hi: "अपने सभी कर्म मुझे समर्पित करके, आशा और ममता के बोझ से मुक्त होकर तथा मन के संताप को छोड़कर अपना कर्तव्य निभाओ।",
            en: "Offer your actions to the Divine, release possessiveness and anxious expectation, and perform your duty with a mind free from inner turmoil."
        },

        {
            ref: "2.13",
            sanskrit: `देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।
तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।`,
            hi: "जैसे एक ही शरीर में बाल्यावस्था, युवावस्था और वृद्धावस्था आती हैं, वैसे ही आत्मा दूसरे शरीर को प्राप्त होती है। धीर व्यक्ति इस परिवर्तन से मोहित नहीं होता।",
            en: "Just as the body passes through childhood, youth and old age, the embodied self continues beyond these changes. The wise are not overwhelmed by this transition."
        }
    ],

    Protection: [
        {
            ref: "6.22",
            sanskrit: `यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः।
यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते।।`,
            hi: "जिस अवस्था को प्राप्त कर लेने पर उससे बड़ा कोई लाभ नहीं लगता और जिसमें स्थित व्यक्ति बड़े से बड़े दुःख से भी विचलित नहीं होता, वही सच्ची आंतरिक सुरक्षा है।",
            en: "When one reaches the state in which no greater gain is desired and even great sorrow cannot shake them, one has found deep inner security."
        },

        {
            ref: "9.29",
            sanskrit: `समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।
ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्।।`,
            hi: "मैं सभी प्राणियों में समान हूँ; मेरे लिए कोई शत्रु या विशेष प्रिय नहीं। जो प्रेम और भक्ति से मुझे स्मरण करते हैं, वे मुझमें रहते हैं और मैं उनमें।",
            en: "The Divine is equally present in all beings. Those who turn to the Divine with devotion experience that presence within themselves."
        },

        {
            ref: "9.31",
            sanskrit: `क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति।
कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति।।`,
            hi: "भक्ति और सही संकल्प से व्यक्ति शीघ्र ही धर्ममय और शांत बन सकता है। हे अर्जुन, मेरा भक्त कभी नष्ट नहीं होता।",
            en: "With sincere devotion, a person can quickly move toward righteousness and lasting peace. The devoted one is never abandoned by the Divine."
        },

        {
            ref: "6.40",
            sanskrit: `श्रीभगवानुवाच
पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते।
न हि कल्याणकृत्कश्चिद् दुर्गतिं तात गच्छति।।`,
            hi: "जो कल्याणकारी मार्ग पर चलता है उसका प्रयास व्यर्थ नहीं जाता; न इस लोक में और न आगे उसका सच्चा कल्याण नष्ट होता है।",
            en: "The sincere effort of one who strives for spiritual good is never lost. A person walking a wholesome path does not come to ruin."
        },

        {
            ref: "12.7",
            sanskrit: `तेषामहं समुद्धर्ता मृत्युसंसारसागरात्।
भवामि नचिरात्पार्थ मय्यावेशितचेतसाम्।।`,
            hi: "जिनका चित्त मुझमें स्थिर है और जो मेरे प्रति समर्पित हैं, मैं उन्हें जन्म-मृत्यु के कठिन सागर से शीघ्र ही पार कराने वाला बनता हूँ।",
            en: "For those whose hearts are deeply devoted to the Divine, the Divine becomes their support and guide across the difficult ocean of worldly struggle."
        },

        {
            ref: "7.14",
            sanskrit: `दैवी ह्येषा गुणमयी मम माया दुरत्यया।
मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते।।`,
            hi: "प्रकृति के गुणों से बनी मेरी माया को पार करना कठिन है; जो मेरी शरण में आते हैं, वे इस बंधन से ऊपर उठ जाते हैं।",
            en: "The forces of nature can be difficult to overcome, but those who sincerely surrender to the Divine can rise beyond their binding influence."
        },

        {
            ref: "4.8",
            sanskrit: `परित्राणाय साधूनां विनाशाय च दुष्कृताम्।
धर्मसंस्थापनार्थाय संभवामि युगे युगे।।`,
            hi: "सज्जनों की रक्षा, अधर्म का अंत और धर्म की पुनर्स्थापना के लिए मैं युग-युग में प्रकट होता हूँ।",
            en: "The Divine manifests again and again to protect the righteous, overcome destructive forces and restore the balance of Dharma."
        },

        {
            ref: "18.62",
            sanskrit: `तमेव शरणं गच्छ सर्वभावेन भारत।
तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम्।।`,
            hi: "पूरे मन से परमात्मा की शरण ग्रहण करो; उनकी कृपा से परम शांति और शाश्वत आश्रय की प्राप्ति होती है।",
            en: "Take wholehearted refuge in the Divine. Through that grace, one finds supreme peace and an enduring inner home."
        }
    ],

    Peace: [
        {
            ref: "4.39",
            sanskrit: `श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।
ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति।।`,
            hi: "श्रद्धावान और संयमी व्यक्ति ज्ञान प्राप्त करता है, और ज्ञान के द्वारा वह शीघ्र ही परम शांति तक पहुँचता है।",
            en: "A person with faith and disciplined senses gains wisdom, and through that wisdom reaches deep and lasting peace."
        },

        {
            ref: "2.71",
            sanskrit: `विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।
निर्ममो निरहंकारः स शांतिमधिगच्छति।।`,
            hi: "जो सभी स्वार्थपूर्ण इच्छाओं से ऊपर उठकर, ममता और अहंकार से मुक्त होकर जीवन जीता है, वही वास्तविक शांति प्राप्त करता है।",
            en: "True peace comes to one who lets go of excessive desire and lives without possessiveness or ego."
        },

        {
            ref: "2.70",
            sanskrit: `आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।
तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी।।`,
            hi: "जैसे अनगिनत नदियाँ समुद्र में मिलती हैं फिर भी समुद्र विचलित नहीं होता, वैसे ही जिसकी शांति इच्छाओं से नहीं डगमगाती वही शांत रहता है।",
            en: "Just as rivers enter the ocean without disturbing its depth, a person who remains steady despite the flow of desires attains peace."
        },

        {
            ref: "5.29",
            sanskrit: `भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्।
सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति।।`,
            hi: "मुझे सभी यज्ञों और तपों का परम भोक्ता, समस्त लोकों का स्वामी और सभी प्राणियों का निष्काम मित्र जानकर मनुष्य शांति प्राप्त करता है।",
            en: "Recognizing the Divine as the source and Lord of all, and as the selfless friend of every being, one finds true peace."
        },

        {
            ref: "6.27",
            sanskrit: `प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम्।
उपैति शान्तरजसं ब्रह्मभूतमकल्मषम्।।`,
            hi: "जिस योगी का मन शांत हो गया है और जिसकी अशांत प्रवृत्तियाँ शांत हो गई हैं, उसे परम सुख प्राप्त होता है।",
            en: "Supreme happiness comes to the yogi whose mind has become peaceful and whose restless impulses have settled into clarity."
        },

        {
            ref: "6.15",
            sanskrit: `युञ्जन्नेवं सदाऽऽत्मानं योगी नियतमानसः।
शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।।`,
            hi: "जो योगी अपने मन को अनुशासित करके निरंतर आत्मचिंतन में स्थित रहता है, वह परम शांति को प्राप्त करता है।",
            en: "A disciplined yogi who continually steadies the mind in spiritual awareness attains supreme peace."
        },

        {
            ref: "5.12",
            sanskrit: `युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्।
अयुक्तः कामकारेण फले सक्तो निबध्यते।।`,
            hi: "जो व्यक्ति कर्म के फल की आसक्ति छोड़ देता है, वह स्थायी शांति प्राप्त करता है; लेकिन जो फल से चिपका रहता है, वह बंधन में पड़ता है।",
            en: "One who lets go of attachment to the fruits of action attains enduring peace; attachment to results creates bondage."
        },

        {
            ref: "6.7",
            sanskrit: `जितात्मनः प्रशान्तस्य परमात्मा समाहितः।
शीतोष्णसुखदुःखेषु तथा मानापमानयोः।।`,
            hi: "जिसने मन को साध लिया और जो भीतर से शांत है, वह सुख-दुःख, गर्मी-सर्दी और मान-अपमान में संतुलित रहता है।",
            en: "One who has mastered the mind and become peaceful remains steady through pleasure and pain, honor and dishonor, and changing circumstances."
        }
    ],

    Loneliness: [
        {
            ref: "18.61",
            sanskrit: `ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।
भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया।।`,
            hi: "परमात्मा प्रत्येक प्राणी के हृदय में स्थित है और सबके भीतर से जीवन का संचालन करता है। इसलिए भीतर की यात्रा कभी सचमुच अकेली नहीं होती।",
            en: "The Divine dwells in the heart of every being and guides life from within; the inner journey is therefore never truly without the presence of the Divine."
        },

        {
            ref: "15.15",
            sanskrit: `सर्वस्य चाहं हृदि सन्निविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च।
वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्।।`,
            hi: "मैं सभी के हृदय में स्थित हूँ; स्मृति, ज्ञान और विस्मरण भी मुझसे ही हैं। ज्ञान का अंतिम उद्देश्य भी उसी परम सत्य को जानना है।",
            en: "The Divine dwells in the heart of all beings and is the source of memory and knowledge. The deepest purpose of wisdom is to recognize that inner Divine presence."
        },

        {
            ref: "6.31",
            sanskrit: `सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः।
सर्वथा वर्तमानोऽपि स योगी मयि वर्तते।।`,
            hi: "जो व्यक्ति सभी प्राणियों में मुझे देखता है और एकत्व की भावना से मेरी उपासना करता है, वह हर परिस्थिति में मुझसे जुड़ा रहता है।",
            en: "One who sees the Divine present in all beings and rests in that sense of unity remains connected with the Divine wherever life takes them."
        },

        {
            ref: "18.66",
            sanskrit: `सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।`,
            hi: "अपना बोझ और भय छोड़कर मेरी शरण में आओ; मैं तुम्हें मुक्त करने का आश्वासन देता हूँ, इसलिए शोक मत करो।",
            en: "Release the burdens and fears you carry and take refuge in the Divine. You are not asked to carry everything alone; do not grieve."
        },

        {
            ref: "9.22",
            sanskrit: `अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।
तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्।।`,
            hi: "जो लोग प्रेमपूर्वक निरंतर मेरा स्मरण करते हैं, उनके योगक्षेम का भार मैं स्वयं उठाता हूँ।",
            en: "Those who remain wholeheartedly devoted to the Divine can trust that their true welfare is cared for."
        },

        {
            ref: "6.30",
            sanskrit: `यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।
तस्याहं न प्रणश्यामि स च मे न प्रणश्यति।।`,
            hi: "जो मुझे हर जगह देखता है और हर वस्तु को मुझमें देखता है, उसके लिए मैं कभी दूर नहीं होता और वह भी मुझसे दूर नहीं होता।",
            en: "One who sees the Divine everywhere and everything within the Divine is never truly separated from that presence."
        },

        {
            ref: "13.23",
            sanskrit: `उपद्रष्टाऽनुमन्ता च भर्ता भोक्ता महेश्वरः।
परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः।।`,
            hi: "इस शरीर में स्थित परमात्मा साक्षी, अनुमोदक, आधार और परम नियन्ता के रूप में विद्यमान है।",
            en: "Within the body, the Supreme Self is present as witness, supporter, guide and the deeper presence beyond the individual personality."
        },

        {
            ref: "10.20",
            sanskrit: `अहमात्मा गुडाकेश सर्वभूताशयस्थितः।
अहमादिश्च मध्यं च भूतानामन्त एव च।।`,
            hi: "हे अर्जुन, मैं सभी प्राणियों के हृदय में स्थित आत्मा हूँ; मैं ही उनके अस्तित्व का आदि, मध्य और अंत हूँ।",
            en: "The Divine is the inner Self present in the hearts of all beings—their beginning, their continuity and their end."
        }
    ],

    Anger: [
        {
            ref: "5.23",
            sanskrit: `शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्।
कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः।।`,
            hi: "जो व्यक्ति शरीर रहते ही कामना और क्रोध से उठने वाली तीव्र प्रतिक्रियाओं को सहना और संभालना सीख लेता है, वही वास्तव में संतुलित और सुखी है।",
            en: "One who learns to withstand the force of desire and anger before reacting becomes truly disciplined and capable of lasting happiness."
        },

        {
            ref: "2.62",
            sanskrit: `ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।
सङ्गात् संजायते कामः कामात्क्रोधोऽभिजायते।।`,
            hi: "विषयों पर बार-बार ध्यान करने से आसक्ति पैदा होती है, आसक्ति से इच्छा और इच्छा पूरी न होने पर क्रोध उत्पन्न होता है।",
            en: "Repeatedly dwelling on desired things creates attachment; attachment grows into craving, and frustrated craving gives rise to anger."
        },

        {
            ref: "16.21",
            sanskrit: `त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।
कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्।।`,
            hi: "काम, क्रोध और लोभ आत्म-विनाश की ओर ले जाने वाले तीन द्वार हैं; इसलिए उनसे दूर रहने का प्रयास करना चाहिए।",
            en: "Desire, anger and greed are described as three doors leading toward self-destruction; therefore they should be consciously abandoned."
        },

        {
            ref: "2.63",
            sanskrit: `क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।
स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति।।`,
            hi: "क्रोध से विवेक धुंधला हो जाता है, स्मृति भ्रमित होती है, बुद्धि का नाश होता है और अंततः व्यक्ति अपने ही संतुलन को खो देता है।",
            en: "Anger clouds judgment, disturbs memory, weakens discernment and can finally lead a person toward self-destruction."
        },

        {
            ref: "3.37",
            sanskrit: `श्री भगवानुवाच
काम एष क्रोध एष रजोगुणसमुद्भवः।
महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्।।`,
            hi: "श्रीकृष्ण कहते हैं कि कामना से उत्पन्न क्रोध रजोगुण से पैदा होता है; यह अतृप्त और भस्म कर देने वाली शक्ति की तरह मनुष्य का शत्रु बन जाता है।",
            en: "Krishna explains that anger arises from desire under the pull of passion; when unchecked, it becomes a consuming inner enemy."
        },

        {
            ref: "16.4",
            sanskrit: `दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च।
अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम्।।`,
            hi: "दंभ, घमंड, अहंकार, क्रोध, कठोरता और अज्ञान ऐसे गुण हैं जो मनुष्य को आसुरी प्रवृत्तियों की ओर ले जाते हैं।",
            en: "Hypocrisy, arrogance, ego, anger, harshness and ignorance are traits that pull the mind toward destructive tendencies."
        },

        {
            ref: "2.56",
            sanskrit: `दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।
वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते।।`,
            hi: "जो व्यक्ति दुःख में विचलित नहीं होता, सुख में आसक्त नहीं होता और राग, भय तथा क्रोध से ऊपर उठ जाता है, वही स्थिर बुद्धि वाला कहलाता है।",
            en: "One whose mind is not shaken by sorrow, who does not cling to pleasure, and who rises beyond attachment, fear and anger is steady in wisdom."
        },

        {
            ref: "5.27-5.28",
            sanskrit: `स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः।
प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ।।5.27।।
यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः।
विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः।।5.28।।`,
            hi: "इंद्रियों, मन और बुद्धि को संयमित करके, श्वास को संतुलित रखते हुए और इच्छा, भय तथा क्रोध से मुक्त होकर साधक भीतर की स्वतंत्रता की ओर बढ़ता है।",
            en: "By regulating the senses, mind, breath and intellect, and by becoming free from excessive desire, fear and anger, a seeker moves toward inner freedom."
        }
    ],

    Laziness: [
        {
            ref: "3.16",
            sanskrit: `एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।
अघायुरिन्द्रियारामो मोघं पार्थ स जीवति।।`,
            hi: "जो व्यक्ति जीवन और कर्तव्य के इस चक्र में अपना योगदान नहीं देता और केवल इंद्रिय-सुख में लगा रहता है, उसका जीवन व्यर्थ चला जाता है।",
            en: "One who refuses to participate responsibly in the cycle of duty and lives only for sense pleasure wastes the opportunity of life."
        },

        {
            ref: "3.8",
            sanskrit: `नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।
शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।`,
            hi: "अपना कर्तव्य करो, क्योंकि कर्म न करने से कर्म करना श्रेष्ठ है; निष्क्रियता से जीवन की आवश्यक यात्रा भी नहीं चल सकती।",
            en: "Perform your rightful duties; action is better than avoiding action, because life itself cannot be sustained through complete inaction."
        },

        {
            ref: "2.47",
            sanskrit: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।`,
            hi: "परिणाम की चिंता में अटकने के बजाय अपने कर्म पर ध्यान दो और कर्महीनता से आसक्त मत हो।",
            en: "Focus on doing the work before you instead of becoming trapped by results, and do not let fear of outcomes become an excuse for inaction."
        },

        {
            ref: "14.8",
            sanskrit: `तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम्।
प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत।।`,
            hi: "तमोगुण अज्ञान से उत्पन्न होता है और प्रमाद, आलस्य तथा अत्यधिक निद्रा के माध्यम से व्यक्ति को बांधता है।",
            en: "The quality of inertia and ignorance binds a person through negligence, laziness and excessive sleep."
        },

        {
            ref: "6.5",
            sanskrit: `उद्धरेदात्मनाऽऽत्मानं नात्मानमवसादयेत्।
आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।`,
            hi: "अपने प्रयास से स्वयं को ऊपर उठाओ; स्वयं को कमजोर मत बनाओ। मन को अपना मित्र बनाना ही उत्थान का मार्ग है।",
            en: "Raise yourself through your own effort and do not pull yourself down; making the mind your ally is a path of growth."
        },

        {
            ref: "3.35",
            sanskrit: `श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।
स्वधर्मे निधनं श्रेयः परधर्मो भयावहः।।`,
            hi: "दूसरों के काम को अच्छी तरह करने से अपना कर्तव्य, भले उसमें कमियाँ हों, अधिक श्रेष्ठ है। इसलिए अपने स्वभावानुकूल कर्म से भागो मत।",
            en: "It is better to live your own duty imperfectly than to imitate another's path perfectly. Do not abandon the work that is truly yours."
        },

        {
            ref: "18.45",
            sanskrit: `स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।
स्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु।।`,
            hi: "हर व्यक्ति अपने स्वभाव के अनुरूप कर्म में लगकर पूर्णता की ओर बढ़ सकता है। अपने काम में ईमानदारी से लगे रहना ही सिद्धि का मार्ग बनता है।",
            en: "A person can move toward fulfillment by engaging sincerely in work suited to their nature; dedication to one's own path can lead to perfection."
        },

        {
            ref: "6.16-6.17",
            sanskrit: `नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।
न चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन।।6.16।।
युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।
युक्तस्वप्नावबोधस्य योगो भवति दुःखहा।।6.17।।`,
            hi: "योग न तो अत्यधिक खाने-सोने से सिद्ध होता है और न अत्यधिक उपवास या जागरण से। भोजन, विश्राम, काम और नींद में संतुलन साधना ही मन और जीवन को स्वस्थ बनाता है।",
            en: "Balance is essential: neither excess eating and sleeping nor extreme deprivation leads to steadiness. A balanced rhythm of food, rest, work and sleep supports inner discipline."
        }
    ],

    Anxious: [
        {
            ref: "4.10",
            sanskrit: `वीतरागभयक्रोधा मन्मया मामुपाश्रिताः।
बहवो ज्ञानतपसा पूता मद्भावमागताः।।`,
            hi: "जो लोग आसक्ति, भय और क्रोध से ऊपर उठकर परमात्मा की शरण लेते हैं और ज्ञान के द्वारा स्वयं को शुद्ध करते हैं, वे दिव्य भाव को प्राप्त होते हैं।",
            en: "Those who rise beyond attachment, fear and anger, take refuge in the Divine and purify themselves through wisdom can settle into a higher state of inner clarity."
        },

        {
            ref: "12.15",
            sanskrit: `यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।
हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः।।`,
            hi: "जो किसी को अनावश्यक रूप से विचलित नहीं करता और स्वयं भी लोगों से विचलित नहीं होता, तथा हर्ष, रोष, भय और चिंता से मुक्त रहता है, वह मुझे प्रिय है।",
            en: "The person who does not disturb others and is not easily disturbed by others, and who becomes free from agitation, fear and anxiety, is dear to the Divine."
        },

        {
            ref: "6.35",
            sanskrit: `श्री भगवानुवाच
असंशयं महाबाहो मनो दुर्निग्रहं चलम्।
अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।।`,
            hi: "मन चंचल और कठिनता से नियंत्रित होने वाला है, लेकिन निरंतर अभ्यास और वैराग्य से उसे धीरे-धीरे साधा जा सकता है।",
            en: "The mind is naturally restless and difficult to restrain, but steady practice and non-attachment can gradually bring it under control."
        },

        {
            ref: "2.70",
            sanskrit: `आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।
तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी।।`,
            hi: "जिस तरह नदियाँ समुद्र में मिलती रहती हैं फिर भी समुद्र अपनी मर्यादा नहीं खोता, वैसे ही इच्छाओं के बीच जो मन स्थिर रहता है वही शांति पाता है।",
            en: "Just as rivers enter the ocean without disturbing its vastness, a steady mind can remain peaceful even while many thoughts and desires arise."
        },

        {
            ref: "18.66",
            sanskrit: `सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।`,
            hi: "सब चिंताओं और मानसिक बोझ को छोड़कर परमात्मा की शरण में आओ; मैं तुम्हें मुक्त करूँगा, इसलिए भय और शोक मत करो।",
            en: "Release the burdens that overwhelm you and place your trust in the Divine; you are not required to carry every fear alone."
        },

        {
            ref: "5.20",
            sanskrit: `न प्रहृष्येत्प्रियम् प्राप्य नोद्विजेत्प्राप्य चाप्रियम्।
स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः।।`,
            hi: "जो प्रिय वस्तु मिलने पर अत्यधिक उछलता नहीं और अप्रिय मिलने पर टूटता नहीं, जिसकी बुद्धि स्थिर है, वह गहरी आंतरिक समझ में स्थित रहता है।",
            en: "One with steady understanding does not become excessively excited by pleasant things or disturbed by unpleasant ones; steadiness brings clarity."
        },

        {
            ref: "5.12",
            sanskrit: `युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्।
अयुक्तः कामकारेण फले सक्तो निबध्यते।।`,
            hi: "जब व्यक्ति कर्म के परिणाम की आसक्ति छोड़ देता है तो मन में स्थायी शांति आती है; फल की पकड़ चिंता और बंधन बढ़ाती है।",
            en: "Letting go of attachment to results brings lasting peace, while clinging to outcomes creates inner tension and bondage."
        },

        {
            ref: "2.47",
            sanskrit: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।`,
            hi: "अपने वर्तमान कर्म पर ध्यान दो, भविष्य के परिणामों को पकड़कर मत बैठो। कर्म करो और फल को लेकर मन को अनावश्यक बोझ मत दो।",
            en: "Focus on the action in front of you instead of carrying the future result in your mind. Act sincerely and release the burden of outcome."
        }
    ]
};


const moodMessages = {
    Happy: "Carry your joy with gratitude, and let Madhav's wisdom deepen it.",
    Sad: "When the heart feels heavy, let Madhav's words offer a little light.",
    Peace: "Rest in this moment. Let your inner stillness meet Madhav's wisdom.",
    Protection: "When you seek strength, remember that Dharma is never without guidance.",
    Anxious: "Take a breath. Let the restless mind become still, one thought at a time.",
    Laziness: "Rise gently. Sometimes the first step is simply choosing to begin.",
    Anger: "Pause before the fire within you becomes a fire around you.",
    Loneliness: "You are never truly alone. Let these words remind your heart of that."
};