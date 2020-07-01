/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {
    quote: 'Indeed',
    source: `Teal'c`,
    citation: 'Stargate SG-1'
  },
  {
    quote: `That can't be good.`,
    source: 'Sheriff Jack Carter',
    citation: 'Eureka'
  },
  { /*Special thanks to my wife as the inspiration for this next quote saying "Isn't it 'WELL, that can't be good' after reading my previous quote"*/
    quote: `Eh, I've heard it both ways.`,
    source: 'Shawn Spencer',
    citation: 'Psych'
  },
  {
    quote: 'If we were to select the most intelligent, imaginative, energetic, and emotionally stable third of mankind, all races would be present',
    source: 'Franz Boas',
    year: `1858–1942`/*I know it's not the year of the quote but I couldn't find that, so I settled for birth-death*/
  },
  {
    quote: 'There is only one who is all powerful, and his greatest weapon is love.',
    source: 'Stan Lee'
  },
  {
    quote: `I don't care that they stole my idea; I care that they don't have any of their own`,
    source: 'Nikola Tesla'
  },
  {
    quote: `...Then there's no reason that a man and another man can't elope`,
    source: 'Eminem',
    citation: 'The Marshall Mathers LP',
    track: 'The Real Slim Shady',
    year: 2000
  },
  {
    quote: 'Life becomes easier when you learn to accept the apology you never got.',
    source: 'R. Brault'
  },
  {
    quote: 'You fake something until your good at it.',
    source: `"Wierd" Al Yankovich`
  },
  {
    quote: 'Love is unadulterated acceptance',
    source: 'C.J. Norman',
    year: 2020
  },
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  return getRandomQuote(Math.floor(Math.random * quotes.length))
}


/***
 * `printQuote` function
***/
function printQuote(arr) {
  let rndQuote = getRandomQuote(quotes);
      if (rndQuote.track) {
         let quoteString = document.getElementById('quote-box').innerHTML =
             `<p class="quote"> ${rndQuote.quote} </p>
              <p class="source"> ${rndQuote.source}<span class="citation"> ${rndQuote.citation},</span><span class="track"> ${rndQuote.track}</span><span class="year"> ${rndQuote.year}</span></p>`
       } else if (rndQuote.citation === undefined && rndQuote.year === undefined) {
         let quoteString = document.getElementById('quote-box').innerHTML =
             `<p class="quote"> ${rndQuote.quote} </p>
              <p class="source"> ${rndQuote.source}</p>`
       } else if (rndQuote.citation === undefined) {
         let quoteString = document.getElementById('quote-box').innerHTML =
             `<p class="quote"> ${rndQuote.quote} </p>
              <p class="source"> ${rndQuote.source}<span class="year"> ${rndQuote.year}</span></p>`
       } else {
         let quoteString = document.getElementById('quote-box').innerHTML =
             `<p class="quote"> ${rndQuote.quote} </p>
              <p class="source"> ${rndQuote.source}<span class="citation"> ${rndQuote.citation}</span></p>`
       }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
