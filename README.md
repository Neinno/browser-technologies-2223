# Browser Technologies @cmda-minor-web 2022 - 2023

## Introductie
Browser Technologies is een vak die ik had tijdens de Minor Web Design & Development. Hier heb ik een website gebouwd en verbeterd met progressive enhancements. 

### Demo:
https://neinno.github.io/browser-technologies-2223/#cssttr

### User Story:
> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

## Features
Wat ik gemaakt heb is een form over de minor Web Development. Hier ben ik begonnen met een HTML opzet maken van het form. Als dit helemaal werkend is zou het in principe ook zonder CSS en JS moeten werken.

### HTML 
<img src="/readmeimgs/html.png" width=500px>

Ten eerste heb ik het form gemaakt, en gekeken naar de requirements. Ik heb een input type text gebruikt voor de student gegevens, en heb een pattern gezet op studenten nummer en email.

```html
<label for="Studentnummer">Student nummer*
    <input type="text" id="Studentnummer" inputmode="numeric" placeholder="Studenten nummer" pattern="[5-6][0-9]{8}" required>
</label>

<label for="email">Email*
    <input type="text" id="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>  
</label>
```

Vervolgens heb ik radio buttons gebruikt voor het aangeven de schaal van 1 tot 10. 

### CSS
Daarna ben ik gaan kijken wat ik kan verbeteren met CSS. Ik heb de radio buttons op opacity 0 gezet als :has niet supported word.

```css
@supports selector(:has(*)) {
    input[type="radio"] {
        opacity: 0;  
    }
}
```

Daarna heb ik de label kunnen stylen, en het form er wat mooier uit kunnen laten zien. Ook heb ik validatie toegevoegd met CSS.

```css
#studentinfo input[type="text"]:not(:focus):not(:placeholder-shown):invalid {
    border-bottom: 2px solid var(--invalid-color);
}

#studentinfo input[type="text"]:not(:focus):not(:placeholder-shown):valid {
    border-bottom: 2px solid var(--valid-color);
}
```

Ook heb ik hover en focus states toegevoegd die helpen om te laten zien waar je op dit moment bent.

<img src="/readmeimgs/css.png" width=500px>

### Javascript
Met Javascript heb ik nog meer progressive enhancements toegevoegd. Ik ben fieldsets gaan verbergen. Op die manier kan je in stappen werken, en niet het hele form in een keer invullen. 

<img src="/readmeimgs/javascript.png" width=500px>

#### Local Storage
Door gebruik te maken van local storage kan je nu het form afsluiten, en dan onthoud hij nog steeds je gegevens die je hebt ingevuld.

## Tests
Ik heb op de volgende browsers getest:
- Android: Samsung Internet
- IOS: Safari
- Mac: Chrome, Firefox, Safari
- Windows: Chrome
- Obscure browser: Flow


Op samsung internet lijken de kleuren wel erg anders te zijn dan op andere browsers. Ook ben ik er achter gekomen dan je telefoon automatisch een hoofdletter maakt van je eerste letter. Dit zorgt ervoor dat email invalid word. Dit kwam door een probleem met het input veld. Dit was een text en geen email. Dit heb ik aangepast, en het werkt nu.

#### Samsung internet
<img src="/readmeimgs/ssinternet.jpeg" width=200px>

Na deze aanpassingen werkt het op zowel android, als IOS. Beide supporten de :has selector, en zorgt ervoor dat mijn form werkt.

Voor zowel Mac en Windows werken chrome perfect. Voor MAC werkt safari ook prima. Het enige probleem van het gebruik van desktop browsers is firefox. Firefox support namelijk geen :has selector. Dit heb ik opgelost door de radio buttons alleen te verstoppen als de browser wel :has support. Als dit niet het geval is zijn de radio buttons wel zichtbaar. Ook deze heb ik weer een aparte styling gegeven zodat de buttons zelf niet zichtbaar zijn.

#### Firefox oplossing
<img src="/readmeimgs/firefox.png" width=300px>


#### Flow
Flow was mijn obscure browser om mee te testen. Ik wist zelf niet helemaal wat hij wel en niet deed. Ik kwam erachter dat hij mijn form validatie niet support, maar het form is nog steeds bruikbaar. Ook support hij geen light of dark mode. Dus hij pakt de styling van de light mode. 

<img src="/readmeimgs/flow.png" width=300px>

Met het gebruiken van flow heb ik ook geen controle over de styling van mijn radio buttons. Ik heb ze dus op Flow zichtbaar gelaten, maar heb er wel voor gezorgt dat je er over kan hoveren. Omdat flow geen appearance: none toe laat heb ik de volgende code toegepast speciaal voor de Flow browser.

```css
@supports not (appearance: none) {
    input[type="radio"] {
        height: 100%;
        bottom: 0;
        top: 0;
        display: block;
    }

    .radioset label { 
        height: 3em;
    }

    .radioset label span { 
        height: 1em; 
        display: block;
        margin: 0 auto;
        top:.5em;
    }

    input[type="radio"]:checked,
    input[type="radio"]:hover {
        background-color: var(--secondary-color);
    }

   .radioset label input[type="radio"]:hover  {
        background-color: var(--interaction-color);
   }
}
```

### Screen reader
Door te testen op screen reader ben ik er achter gekomen dat sommige dingen nog niet helemaal lekker werken. Hij spreekt bijvoorbeeld niet alle buttons uit. Dit zijn de verder en terug knoppen. Hier heb ik een aria-label aan toe gevoegd. Nu als de knop focus heeft spreek hij deze wel uit.

Ook heb ik Aria labels toegevoegd bij de radiobuttons, want deze werden ook niet helemaal uitgesproken. 

```html
<input type="radio" name="inzichthcd" aria-label="Inzicht" required>
```



