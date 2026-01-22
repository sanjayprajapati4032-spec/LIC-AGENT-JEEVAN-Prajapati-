// --- 1. DATA OBJECT (Images + Text) ---
const planData = {
    'life': {
        img: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&w=800&q=80", 
        title_en: "Jeevan Umang (Whole Life Assurance)",
        desc_en: "This plan offers a combination of income and protection to your family. It provides annual survival benefits from the end of the premium paying term till maturity.",
        features_en: ["Lifetime Coverage (100 Years)", "Guaranteed 8% Return per year", "Lump sum amount at maturity", "Loan facility available"],
        
        title_hi: "जीवन उमंग (संपूर्ण जीवन बीमा)",
        desc_hi: "यह योजना आपके परिवार को आय और सुरक्षा का संयोजन प्रदान करती है। यह प्रीमियम भुगतान अवधि के अंत से परिपक्वता तक वार्षिक लाभ प्रदान करता है।",
        features_hi: ["आजीवन कवरेज (100 वर्ष)", "हर साल 8% गारंटीड रिटर्न", "परिपक्वता पर एकमुश्त राशि", "ऋण सुविधा उपलब्ध"]
    },
    'health': {
        img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        title_en: "LIC Cancer Cover & Health Plus",
        desc_en: "A comprehensive health insurance plan that covers major surgeries, hospitalization costs, and fixed benefits for critical illnesses.",
        features_en: ["Fixed benefit health plan", "Covers 50 types of surgeries", "Hospital Cash Benefit", "Premium waiver benefit"],

        title_hi: "LIC कैंसर कवर और हेल्थ प्लस",
        desc_hi: "एक व्यापक स्वास्थ्य बीमा योजना जो बड़ी सर्जरी, अस्पताल के खर्च और गंभीर बीमारियों के लिए निश्चित लाभ कवर करती है।",
        features_hi: ["निश्चित लाभ स्वास्थ्य योजना", "50 प्रकार की सर्जरी कवर", "अस्पताल नकद लाभ", "प्रीमियम माफी लाभ"]
    },
    'pension': {
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80",
        title_en: "Jeevan Shanti (Pension Plan)",
        desc_en: "A single premium plan wherein the policyholder has an option to choose an Immediate or Deferred annuity.",
        features_en: ["One-time Investment", "Guaranteed Income for Life", "Option for Joint Life Annuity", "Tax Benefits"],

        title_hi: "जीवन शांति (पेंशन योजना)",
        desc_hi: "एक सिंगल प्रीमियम योजना जिसमें पॉलिसीधारक के पास तत्काल या स्थगित वार्षिकी चुनने का विकल्प होता है।",
        features_hi: ["एक बार निवेश", "जीवन भर गारंटीड आय", "संयुक्त जीवन वार्षिकी का विकल्प", "कर लाभ"]
    },
    'child': {
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
        title_en: "Children's Money Back Plan",
        desc_en: "Ideally designed to meet the educational, marriage, and other needs of growing children through survival benefits.",
        features_en: ["Survival Benefits at 18, 20, 22 years", "Maturity benefit at 25 years", "Premium Waiver Rider available"],

        title_hi: "बच्चों का मनी बैक प्लान",
        desc_hi: "बढ़ते बच्चों की शिक्षा, विवाह और अन्य जरूरतों को पूरा करने के लिए आदर्श रूप से डिज़ाइन किया गया।",
        features_hi: ["18, 20, 22 साल पर सर्वाइवल बेनिफिट", "25 साल पर परिपक्वता लाभ", "प्रीमियम माफी राइडर उपलब्ध"]
    },
    'term': {
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
        title_en: "Jeevan Amar (Term Assurance)",
        desc_en: "A pure protection plan that provides a high sum assured at very affordable premiums. It secures your family financially in your absence.",
        features_en: ["High Life Cover at Low Cost", "Flexibility to choose Policy Term", "Death Benefit Only", "Special rates for women"],

        title_hi: "जीवन अमर (टर्म इंश्योरेंस)",
        desc_hi: "एक शुद्ध सुरक्षा योजना जो बहुत ही किफायती प्रीमियम पर उच्च बीमित राशि प्रदान करती है।",
        features_hi: ["कम लागत पर उच्च जीवन कवर", "पॉलिसी अवधि चुनने की लचीलापन", "केवल मृत्यु लाभ", "महिलाओं के लिए विशेष दरें"]
    }
};

let currentLang = 'en'; // Default language

// --- 2. LANGUAGE SWITCHER LOGIC ---
function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang').forEach(el => {
        if (el.getAttribute('data-' + lang)) {
            el.textContent = el.getAttribute('data-' + lang);
        }
    });
    document.getElementById('lang-toggle').textContent = lang === 'en' ? 'English / हिंदी' : 'हिंदी / English';
}

document.getElementById('lang-toggle').addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'hi' : 'en';
    updateLanguage(newLang);
});

// Initialize default language
updateLanguage('en');

// --- 3. MODAL (POPUP) LOGIC ---
const modal = document.getElementById('fullScreenModal');
const mImg = document.getElementById('modalImg');
const mTitle = document.getElementById('modalTitle');
const mDesc = document.getElementById('modalDesc');
const mList = document.getElementById('modalFeatures');

// Open Modal
function openModal(planKey) {
    const data = planData[planKey];
    mImg.src = data.img;

    if (currentLang === 'en') {
        mTitle.textContent = data.title_en;
        mDesc.textContent = data.desc_en;
        updateList(data.features_en);
    } else {
        mTitle.textContent = data.title_hi;
        mDesc.textContent = data.desc_hi;
        updateList(data.features_hi);
    }
    modal.style.display = 'block';
    modal.style.animation = "slideInRight 0.4s ease-in-out"; // Reset animation
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

// Update Features List
function updateList(features) {
    mList.innerHTML = "";
    features.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        mList.appendChild(li);
    });
}

// Close Modal with Animation
function closeModal() {
    modal.style.animation = "slideOutRight 0.4s ease-in-out forwards";
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }, 400);
}
