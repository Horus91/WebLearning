//object storing data
const theQuoteForYou = {
  nationality: [
    "Finnish",
    "German",
    "American",
    "British",
    "Moroccan",
    "Russian",
  ],
  sign: [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarus",
    "Capricornus",
    "Aquarius",
    "Pisces",
  ],
  quote: [
    "When you have a dream, you've got to grab it and never let go.",
    "Nothing is impossible. The word itself says I'm possible!",
    "The bad news is time flies. The good news is you're the pilot",
    "Life has got all those twists and turns. You've got to hold on tight and off you go.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
    "Be yourself; everyone else is already taken.",
    "Be the change that you wish to see in the world.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  ],
  //function generating random quote
  generateRandomQuote() {
    const quotesArray = [];
    quotesArray.push(
      this.nationality[Math.floor(Math.random() * this.nationality.length)]
    );
    quotesArray.push(this.sign[Math.floor(Math.random() * this.sign.length)]);
    quotesArray.push(this.quote[Math.floor(Math.random() * this.quote.length)]);
    return quotesArray;
  },
};

//container
console.log(theQuoteForYou.generateRandomQuote());
