const quotes = [
  {
    quote:
      "Any day spent with you is my favorite day. So, today is my new favorite day.",
    author: "Pooh, Winnie the Pooh",
  },
  {
    quote:
      "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "Christopher Robin, Winnie the Pooh",
  },
  {
    quote: "Life is a journey to be experienced, not a problem to be solved.",
    author: "Pooh, Winnie the Pooh",
  },
  {
    quote:
      "The past can hurt. But the way I see it, you can either run from it, or learn from it.",
    author: "Rafiki, The Lion King",
  },
  {
    quote: "Remember you're the one who can fill the world with sunshine.",
    author: "Snow White, Snow White and the Seven Dwarfs",
  },
  {
    quote: "Even miracles take a little time.",
    author: "Fairy Godmother, Cinderella",
  },
  {
    quote:
      "No matter how your heart is grieving, if you keep on believing, the dream that you wish will come true.",
    author: "Cinderella, Cinderella",
  },
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quote:
      "When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
    author: "Walt Disney",
  },
  {
    quote: "First, think. Second, dream. Third, believe. And finally, dare.",
    author: "Walt Disney",
  },
  {
    quote: "First, think. Second, dream. Third, believe. And finally, dare.",
    author: "Walt Disney",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

if (isMobile()) {
  const quote = document.querySelector("#quote");
  quote.style.display = "none";
}

// PC, MOBILE 구별
function isMobile() {
  if (
    ["Win16", "Win32", "Win64", "Mac", "MacIntel"].find(
      (element) => element == navigator.platform,
    )
  ) {
    return false;
  } else {
    return true;
  }
}
