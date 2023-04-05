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


### Android: Samsung Internet
Op Samsung internet lijkt alles te werken zoals het hoort. Wat ik getest heb is:
- Has selector
- Het toetsenbord voor de nummers
- Javascript
- CSS

Voor deze test heb ik niks veranderd.

<img src="/readmeimgs/ssinternet.jpeg" width=500px>