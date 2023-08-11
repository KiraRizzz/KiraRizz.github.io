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
  "Are you a campfire? Because you're hot enough to ignite my desires and keep me warm all night."
  "Life without you is like a broken pencil: pointless",
  "I’m not religious, but you’re the answer to all of my prayers.",
  "Are you a Shinigami? Because you've got killer looks that could make anyone's heart stop.",
  "Did it hurt when you fell from the sky? Because you look like a tornado survivor.",
  "Are you a mobile phone? Because I'm totally lost without you, and I could use some serious GPS guidance",
  "I love that you want to read a book about us. Let's make sure every page is filled with passion and romance.",
  "Is your name Skibidi? Because I want to doubleodoublrododoublele your pleasure.",
  "Is your name Alfredo? Because you're creamy, cheesy, and irresistible.",
  "You're a 9, and I'm cute. Together, we're like a decimal point and a whole number - a perfect 10.",
  "Hey, are you a playlist? Because you've got all the right tracks in all the right places.",
  "Hey girl, your fixed-rate mortgage may be stable, but I'll give you a variable rate of pleasure.",
  "Are you a library book? Because you've got my attention, but I have a feeling you've been checked out a few too many times.",
  "Are you a doctor? Because you just cured my loneliness, and I think I'm catching feelings!",
  "Are you a full-time couch potato or just a part-timer?",
  "Are you Naruto? 'Cause I'm Sasuke, and I've been chasing after you for seasons.",
  "I hope you're not too out of breath to keep up with me, Asthma Boy.",
  "I bet you love shopping in the kids' section. You know, because they have clothes that fit you.",
  "Are you Joe Biden? Because I want to feel your stimulus package deep inside of me.",
  "Is it your birthday? Because you look like a gift I'd love to unwrap.",
  "I may not be Kanye, but I can still make your heart race like a limited edition drop.",
  "Are you a neural network? Because I'm getting lost in your layers.",
  "If you were a housewife, I'd be your handyman. Anything you need, just give me a command.",
  "you can fall form the sky or fall from a tree but the best way to fall is in love with me",
  "it took your mom 9 months to create an angel",
  "are you sea lion? because i sea you lion on my bed",
  "Are you sugar? Because you’re sweet and I wanna spoon you.",
  "Are you north Korea? Because I can't seem to leave you",
  "Are you a pumpkin? cause i wanna rearrange those insides",
  "Are you dementia? Because you make me lose my mind",
  "Because you are a carbon based lifeform and hot, all you need is some pressure to become a diamond",
  "Are you a calculator, cuz I count on you coming tonight"
  

  
  
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
