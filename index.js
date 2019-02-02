var people = [
  {
    'name': 'Langston Hughes',
    'birth': '2.1.1902',
    'death': '5.22.1967',
    'about': 'Attended Columbia University, but left after one year to travel. His poetry was later promoted by Vachel Lindsay, and Hughes published his first book in 1926. He went on to write countless works of poetry, prose and plays, as well as a popular column for the Chicago Defender.',
    'link': 'https://www.biography.com/people/langston-hughes-9346313'
  },
  {
    'name': 'William Artis',
    'birth': '2.2.1914',
    'death': '4.3.1977',
    'about': 'Artis’ work, along with many other African American artists, helped create an artistic revival in the Black community at this time known as the Harlem Renaissance. Artis is known widely for his sculptures and busts. He studied sculpture and pottery under master sculptor Augusta Savage at the Augusta Savage Studios in the early 1930s.',
    'link': 'http://thesource.com/2016/02/02/today-in-black-history-celebrating-sculptor-william-artis/'
  },
  {
    'name': 'Dennis Edwards',
    'birth': '2.3.1943',
    'death': '2.1.2018',
    'about': 'Became a lead singer of the Motown hitmakers the Temptations in 1968 as they embraced psychedelic funk and won Grammy Awards for the songs \'Papa Was a Rollin’ Stone\' and \'Cloud Nine,\'',
    'link': 'https://www.nytimes.com/2018/02/02/obituaries/dennis-edwards-former-temptations-lead-singer-dies-at-74.html'
  },
  {
    'name': 'Rosa Parks',
    'birth': '2.4.1913',
    'death': '10.24.2005',
    'about': 'Was nationally recognized as the \'mother of the modern day civil rights movement\' in America. Her refusal to surrender her seat to a white male passenger on a Montgomery, Alabama bus, December 1, 1955, triggered a wave of protest December 5, 1955 that reverberated throughout the United States.',
    'link': 'http://www.rosaparks.org/biography/'
  },
  {
    'name': 'Hank Aaron',
    'birth': '2.5.1934',
    'about': 'Major league baseball\'s leading home run hitter, with a career total of 755 home runs from 1954 to 1976. He also broke ground for the participation of African Americans in professional sports.',
    'link': 'https://www.notablebiographies.com/A-An/Aaron-Hank.html'
  },
];
// var now = new Date();
var person = people[1];
var is_mobile = (window.innerWidth || body.innerWidth) < 700;

// set up for link preview
var og_title = document.createElement('meta');
og_title.setAttribute('property', 'og:title');
og_title.setAttribute('content', 'Happy Birthday, ' + person.name + '!');
document.head.appendChild(og_title);

var og_image = document.createElement('meta');
og_image.setAttribute('property', 'og:image');
og_image.setAttribute('content', '/img/' + person.name.split(' ').join('') + '.jpg');
document.head.appendChild(og_image);

// set the background
var body = document.body;
body.style.backgroundImage = 'url(\'/img/' + person.name.split(' ').join('') + '.jpg\')';

// draw the other things
var opaque = document.createElement('div');
opaque.style = `
  width: 100%;
  height: 100%;
  background-color: grey;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
`;
body.appendChild(opaque)

var happy_birthday = document.createElement('div');
happy_birthday.style.color = '#000000';
happy_birthday.style.fontSize = is_mobile ? '2.5rem' : '3rem';
happy_birthday.innerHTML = 'Happy Birthday'
body.appendChild(happy_birthday);

var person_name = document.createElement('div');
person_name.style.color = '#000000';
person_name.style.fontSize = is_mobile ? '4.5rem' : '5rem';
person_name.innerHTML = person.name;
body.appendChild(person_name);

var dates = document.createElement('div');
dates.innerHTML = person.birth + (person.death ? ' &mdash; ' + person.death : '');
dates.style.color = '#000000';
dates.style.fontSize = '1.5rem';
body.appendChild(dates);

var bio = document.createElement('div');
bio.innerHTML = person.about;
bio.style.width = is_mobile ? '100%' : '50%';
bio.style.fontSize = is_mobile ? '1.2rem' : '1.5rem';
bio.style.fontWeight = '400';
bio.style.lineHeight = '1.5';
bio.style.margin = is_mobile ? '16px 0' : '32px 0';
body.appendChild(bio);

var read_more = document.createElement('a');
read_more.innerHTML = 'read more';
read_more.href = person.link;
read_more.style = `
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 1rem;
`;
body.appendChild(read_more);

var bottom_right = document.createElement('div');
bottom_right.innerHTML = 'February is<br>Black History Month.';
bottom_right.style = `
  color: #000000;
  font-size: 2rem;
  position: absolute;
  right: 24px;
  bottom: 20;
  text-align: right;
`;
body.appendChild(bottom_right);

var bottom_left = document.createElement('a');
bottom_left.innerHTML = 'feedback';
bottom_left.href = 'mailto:blackbirthdays@gmail.com';
bottom_left.style.textDecoration = 'none';
bottom_left.style.color = '#000000';
bottom_left.style.position = 'absolute';
bottom_left.style.left = 24;
bottom_left.style.bottom = 24;
bottom_left.style.fontWeight = '400';
body.appendChild(bottom_left);
