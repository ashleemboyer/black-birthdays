var body = document.body;

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
happy_birthday.style = `
  color: #000000;
  font-size: 3rem;
`;
happy_birthday.innerHTML = 'Happy Birthday'
body.appendChild(happy_birthday);

var person_name = document.createElement('div');
person_name.style = `
  color: #000000;
  font-size: 5rem;
`;
person_name.innerHTML = 'Langston Hughes'
body.appendChild(person_name);

var dates = document.createElement('div');
dates.innerHTML = '2.1.1902 &mdash; 5.22.1967';
dates.style = `
  color: #000000;
  font-size: 1.5rem;
`;
body.appendChild(dates);

var bio = document.createElement('div');
bio.innerHTML = 'Attended Columbia University, but left after one year to travel. His poetry was later promoted by Vachel Lindsay, and Hughes published his first book in 1926. He went on to write countless works of poetry, prose and plays, as well as a popular column for the Chicago Defender.';
bio.style = `
  width: 50%;
  color: #000000;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 32px 0;
`;
body.appendChild(bio);

var read_more = document.createElement('a');
read_more.innerHTML = 'read more';
read_more.href = 'https://www.biography.com/people/langston-hughes-9346313';
read_more.style = `
  text-decoration: none;
  color: #000000;
  font-weight: 400;
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
