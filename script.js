let phrases = [
  { text: 'Первая версия Minecraft была создана всего за шесть дней', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2lVlbPBzZLkTROkD-YZ8z4DfF6oJVzEbPYMBemmb3X71VdWbKHjnmKtmLefPEswkd84&usqp=CAU' },
  { text: 'Первое название игрушки было не Minecraft', image: 'https://avatars.mds.yandex.net/get-zen_doc/3950646/pub_60b6e014cee36237b84cf696_60b6e92386027a3623da361b/scale_1200' },
  { text: 'Язык Эндермена – английский в обратном порядке', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCviJmjSbNMBj3FpGrh2EqKEGLF9_FLrkQ3g&usqp=CAU' },
  { text: 'Гасты озвучены дремлющим котом', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtPwB3orw6EvQv5_7TNFijhSIvt8wp47vKrDzMh5wetePwturkohVOW1mm2c5_Nk0TS4&usqp=CAU' },
  { text: 'Изначально Крипер не был мобом - он появился в результате ошибки при создании свиньи', image: 'https://www.minezone.pro/uploads/posts/2013-03/1363696054_ly1av.png' },
  { text: 'У снежного голема есть лицо за маской из тыквы', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMdPGLazYmEppIVmP908OTziyYIMMi3z8Kl_7vXkGUSUWd0KLy2t9pHc_ED9QRBrFopE&usqp=CAU' },
  { text: ' Самое интересное про бирки: если переименуете овцу в "jeb_", то она станет переливаться радужным цветом. Jeb_ - ник одного из разработчиков игры.', image: 'https://static.wikia.nocookie.net/minecraft_ru_gamepedia/images/a/ab/%D0%A0%D0%B0%D0%B4%D1%83%D0%B6%D0%BD%D0%B0%D1%8F_%D0%BE%D0%B2%D1%86%D0%B0_%28Minecraft_Earth%29.png' },
  { text: 'В Странника Края невозможно попасть стрелой из лука, снежком или яйцом. На него также нельзя уронить наковальню.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9fnJCWNMXw_cgd6CJX5TXItLxYxCeTkzuJs9ZjuquQ7eAgGFaSLj7OmYKhlxHxRkjQe4&usqp=CAU' },
  { text: 'Железный голем может подарить жителям или детям цветок. Это отслыка к аниме "Небесный Замок Лапута"', image: 'https://fb.ru/misc/i/thumb/a/1/3/3/9/5/2/8/1339528.jpg' },
  { text: 'Скелет-наездник заспавнится на пауке с шансом 1%.', image: 'https://st.renderu.com/art/118233' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let button1 = document.querySelector('.button1');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)
  console.log("HELLO")

button1.addEventListener('click', function() {
  window.location.href="jeb.html"
})
  
   

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i <= 2; i = i + 1) {
  // выводите элементы массива в консоль, используя i
 // console.log(phrases[i]);
  smoothly(phrase, 'textContent', phrases[i].text); 
  smoothly(image, 'src', phrases[i].image); 
} 