const pickupLines = [
  "Are you a campfire? Because you're hot and I want s'more.",
  "Do you have a name, or can I call you mine?",
  "Are you a Wi-Fi signal? Because I'm feeling a connection.",
  "Do you have a map? I keep getting lost in your eyes.",
  "Is your name Google? Because you have everything I've been searching for.",
  "Do you believe in love at first sight, or should I walk by again?",
  "Are you a magician? Whenever I look at you, everyone else disappears.",
  "Are you Asian? cause I'm China get into your Japanties",
  "If I was a vampire, and you were the sun, I would never look for shade, I would rather burn at the sight of your shining beauty",
  "They ask me why I’m always looking at her I just say “ if I was a sunflower I’d face her instead of the sun because her radiant beauty overpowers the rays of the sun” 🙂",
  "if you had the curse of Medusa,I would admire your eyes just the same,for at least I would have died doing what I love",
  "Can I hold you? I'm trying to get the hot stuff achivement.",
  "Hey there! I think you look lovely. Would you like to go and grab a coffee? I'll pay",
  "Hey girl are u from Tennessee, cuz ur the only ten i see",
  "Hey there, gorgeous! Are you a search engine? Because I know you've got everything that I'm looking for.",
  "Are you a computer? Because I hear it's really easy to turn you on.",
  "Excuse me, miss! Did it hurt when you fell from the vending machine? Because you are a snack!",
  "Are you a campfire? Because you're hot enough to ignite my desires and keep me warm all night.",

  
  
];

const pickupLineElement = document.getElementById("pickupLine");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", generatePickupLine);

function generatePickupLine() {
  const randomIndex = Math.floor(Math.random() * pickupLines.length);
  pickupLineElement.textContent = pickupLines[randomIndex];
}


const footer = document.createElement("footer");
footer.textContent = "@ Made by Prime, hello everyone, if you have any rizz make sure to share it on #rizz-suggestion channel so that I can add your rizz to the generator :)";
document.body.appendChild(footer);