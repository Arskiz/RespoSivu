// Määritä muuttujat
    // Dokumentin artikkeli
        // Titlet
        let TitlePage1 = "Iloinen Kissa :)";
        let TitlePage2 = "Vihainen Kissa >:(";
        let TitlePage3 = "Musta Kissa ⬛";
        let TitlePage4 = "Pieni Kissanpentu";

        // Leipätekstit
        let TextPage1 = "Tässä on kissa, jolla on hymyilevä suu, ja jonka korvat näyttää hävinneen kokonaan."
        let TextPage2 = "Tässä taas on kissa, jolla on vihaisen näköinen suu ja kasvot :D"
        let TextPage3 = "Tässä on musta kissa joka on hassun näköinen :)))))";
        let TextPage4 = "Tässä on pieni kissanpentu joka istuu lattialla kameraa katsoen ja miukuu.";

    // Aside-homma
        // Mitä?
        let WhatPage1 = "Iloinen Kissa :)";
        let WhatPage2 = "Vihainen Kissa >:(";
        let WhatPage3 = "Musta Kissa ⬛";
        let WhatPage4 = "Pieni Kissanpentu";

        // Missä?
        let WherePage1 = "Kissa on kotonaan iloisena."
        let WherePage2 = "Kissa on jossain, jossa on valkoinen tausta."
        let WherePage3 = "Musta kissa on mahdollisesti kotonaan ja tuijottaa kameraan :DDDD";
        let WherePage4 = "Pieni Kissanpentu miukuu kameralle päin istuen lattialla";

        // Miksi?
        let WhyPage1 = "Koska häntä hymyilytti :D"
        let WhyPage2 = "Koska hän on vihainen >:( :D"
        let WhyPage3 = "Koska hän oli hassu kissa :)";
        let WhyPage4 = "Koska hän mahdollisesti oli nälkäinen ja kysyi omistajaltaan ruokaa :/";


function Cat1Page() {
    // Kuva:
    document.querySelector("#KissaKuva").src = "Chania/Kuva.jpg";
    // Title:
    document.querySelector("#KissaTitle").textContent = TitlePage1;

    // Teksti Title:
    document.querySelector("#TextTitle").textContent = TitlePage1;
    // Teksti Leipäteksti:
    document.querySelector("#TextAlt").textContent = TextPage1;

    // Mitä?
    document.querySelector("#WhatText").textContent = WhatPage1;
    // Missä?
    document.querySelector("#WhereText").textContent = WherePage1;
    // Miksi?
    document.querySelector("#WhyText").textContent = WhyPage1;
}

function Cat2Page() {
    // Kuva:
    document.querySelector("#KissaKuva").src = "Chania/Kuva2.webp"
    // Title:
    document.querySelector("#KissaTitle").textContent = TitlePage2;
    
    // Teksti Title:
    document.querySelector("#TextTitle").textContent = TitlePage2;
    // Teksti Leipäteksti:
    document.querySelector("#TextAlt").textContent = TextPage2;

    // Mitä?
    document.querySelector("#WhatText").textContent = WhatPage2;
    // Missä?
    document.querySelector("#WhereText").textContent = WherePage2;
    // Miksi?
    document.querySelector("#WhyText").textContent = WhyPage2;
}

function Cat3Page() {
    // Kuva:
    document.querySelector("#KissaKuva").src = "Chania/Kuva3.jpg"
    // Title:
    document.querySelector("#KissaTitle").textContent = TitlePage3;
    
    // Teksti Title:
    document.querySelector("#TextTitle").textContent = TitlePage3;
    // Teksti Leipäteksti:
    document.querySelector("#TextAlt").textContent = TextPage3;

    // Mitä?
    document.querySelector("#WhatText").textContent = WhatPage3;
    // Missä?
    document.querySelector("#WhereText").textContent = WherePage3;
    // Miksi?
    document.querySelector("#WhyText").textContent = WhyPage3;
}

function Cat4Page() {
    // Kuva:
    document.querySelector("#KissaKuva").src = "Chania/Kuva4.jfif"
    // Title:
    document.querySelector("#KissaTitle").textContent = TitlePage4;
    
    // Teksti Title:
    document.querySelector("#TextTitle").textContent = TitlePage4;
    // Teksti Leipäteksti:
    document.querySelector("#TextAlt").textContent = TextPage4;

    // Mitä?
    document.querySelector("#WhatText").textContent = WhatPage4;
    // Missä?
    document.querySelector("#WhereText").textContent = WherePage4;
    // Miksi?
    document.querySelector("#WhyText").textContent = WhyPage4;
}
