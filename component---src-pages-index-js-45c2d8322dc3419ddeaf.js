(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return p});a(35),a(157);var n=a(7),o=a.n(n),i=a(172),r=a(0),s=a.n(r),l=a(152),h=a(155),d=a(150),c=a(158),p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={width:t.width},a}o()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.setState({width:"undefined"!=typeof window?window.innerWidth:1e3})},a.render=function(){var e=this.state.width<700;return s.a.createElement(d.b,{query:"623392454",render:function(t){return s.a.createElement(l.a,null,s.a.createElement(h.a,{title:"Home",keywords:["gatsby","application","react","birthdays","black","history","month"]}),s.a.createElement("div",{style:{textAlign:"center"}},t.allSitePage.edges.filter(function(e){var t=e.node;return!!(t&&t.context&&t.context.name)}).map(function(t,a){var n=t.node;return s.a.createElement("div",{key:a,style:{position:"relative",width:e?"90%":"272px",height:"304px",display:"inline-block",margin:"8px"}},s.a.createElement(d.a,{to:n.path},s.a.createElement(c.a,{style:{width:"100%",height:"272px",borderRadius:"2px 2px 0 0"},src:n.context.name.replace(/ |\./g,"")+".jpg"}),s.a.createElement("p",{style:{height:"32px",lineHeight:"32px",verticalAlign:"middle",textAlign:"center",color:"white",backgroundColor:"#212121",borderRadius:"0 0 2px 2px"}},n.context.name),s.a.createElement("div",{onMouseEnter:function(e){return e.target.style.opacity="0.2"},onMouseLeave:function(e){return e.target.style.opacity="0"},style:{backgroundColor:"lavenderblush",opacity:"0",position:"absolute",top:0,right:0,bottom:0,left:0}})))})))},data:i})},t}(r.Component);p.defaultProps={width:1e3}},155:function(e,t,a){"use strict";var n=a(156),o=a(0),i=a.n(o),r=a(4),s=a.n(r),l=a(159),h=a.n(l);function d(e){var t=e.description,a=e.lang,o=e.meta,r=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(h.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(o)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Black Birthdays",description:"February is Black History Month.",author:"@ashleemboyer"}}}}},172:function(e){e.exports={data:{allSitePage:{edges:[{node:{path:"/dev-404-page/",context:null}},{node:{path:"/offline-plugin-app-shell-fallback/",context:{name:null,birth:null,death:null,about:null,link:null}}},{node:{path:"/LangstonHughes",context:{name:"Langston Hughes",birth:"2.1.1902",death:"5.22.1967",about:"Attended Columbia University, but left after one year to travel. His poetry was later promoted by Vachel Lindsay, and Hughes published his first book in 1926. He went on to write countless works of poetry, prose and plays, as well as a popular column for the Chicago Defender.",link:"https://www.biography.com/people/langston-hughes-9346313"}}},{node:{path:"/WilliamArtis",context:{name:"William Artis",birth:"2.2.1914",death:"4.3.1977",about:"Artis’ work, along with many other African American artists, helped create an artistic revival in the Black community at this time known as the Harlem Renaissance. Artis is known widely for his sculptures and busts. He studied sculpture and pottery under master sculptor Augusta Savage at the Augusta Savage Studios in the early 1930s.",link:"http://thesource.com/2016/02/02/today-in-black-history-celebrating-sculptor-william-artis/"}}},{node:{path:"/DennisEdwards",context:{name:"Dennis Edwards",birth:"2.3.1943",death:"2.1.2018",about:'Became a lead singer of the Motown hitmakers the Temptations in 1968 as they embraced psychedelic funk and won Grammy Awards for the songs "Papa Was a Rollin’ Stone" and "Cloud Nine,"',link:"https://www.nytimes.com/2018/02/02/obituaries/dennis-edwards-former-temptations-lead-singer-dies-at-74.html"}}},{node:{path:"/RosaParks",context:{name:"Rosa Parks",birth:"2.4.1913",death:"10.24.2005",about:'Was nationally recognized as the "mother of the modern day civil rights movement" in America. Her refusal to surrender her seat to a white male passenger on a Montgomery, Alabama bus, December 1, 1955, triggered a wave of protest December 5, 1955 that reverberated throughout the United States.',link:"http://www.rosaparks.org/biography/"}}},{node:{path:"/HankAaron",context:{name:"Hank Aaron",birth:"2.5.1934",death:null,about:"Major league baseball's leading home run hitter, with a career total of 755 home runs from 1954 to 1976. He also broke ground for the participation of African Americans in professional sports.",link:"https://www.notablebiographies.com/A-An/Aaron-Hank.html"}}},{node:{path:"/MelvinTolson",context:{name:"Melvin Tolson",birth:"2.6.1898",death:"8.29.1966",about:'Known as one of the most significant African American modernist poets of his time. In addition, Tolson’s work as an educator led Langston Hughes to declare him "the most famous Negro Professor in the Southwest" in the mid-twentieth century.',link:"https://blackpast.org/aaw/tolson-melvin-b-1898-1966"}}},{node:{path:"/ChrisRock",context:{name:"Chris Rock",birth:"2.7.1965",death:null,about:"Was discovered at 18 by Eddie Murphy at New York's Comedy Strip. He went on to appear in films and on Saturday Night Live, and soon released his first comedy album.",link:"https://www.biography.com/people/chris-rock-9542306"}}},{node:{path:"/GaryColeman",context:{name:"Gary Coleman",birth:"2.8.1968",death:"5.28.2010",about:"Became a star of the hit sitcom Different Strokes in 1978 at age 10 playing the character Arnold Jackson. Coleman's common exclamation on the show, \"What'choo talkin' 'bout, Willis?\", quickly became a pop culture catch-phrase.",link:"https://www.biography.com/people/gary-coleman-15720749"}}},{node:{path:"/AliceWalker",context:{name:"Alice Walker",birth:"2.9.1944",death:null,about:"The author of short stories and novels, essays and poetry and activist for racial civil rights, women’s equality and peace among other causes, Alice Walker brought black women’s lives into primary focus as a rich and important subject for US American literature.",link:"http://www.fembio.org/english/biography.php/woman/biography/alice-walker/"}}},{node:{path:"/LeontynePrice",context:{name:"Leontyne Price",birth:"2.10.1927",death:null,about:"Was the first African American singer to gain international stardom in opera, an art form previously reserved for the upper-class white society.",link:"https://www.notablebiographies.com/Pe-Pu/Price-Leontyne.html"}}},{node:{path:"/DanielJames",context:{name:"Daniel James",birth:"2.11.1920",death:"2.25.1978",about:"Was the first African American to become a four-star general in the U.S. Air Force and instructed African American pilots during WWII.",link:"https://www.biography.com/people/daniel-james-jr-9352497"}}},{node:{path:"/ArsenioHall",context:{name:"Arsenio Hall",birth:"2.12.1956",death:null,about:"Best known as the first black late-night talk show host. His groundbreaking talk show The Arsenio Hall Show ran from 1989-1994.",link:"https://www.biography.com/people/arsenio-hall-9542195"}}},{node:{path:"/EmmettJScott",context:{name:"Emmett J Scott",birth:"2.13.1873",death:"12.12.1957",about:"Garnered a reputation as Booker T. Washington’s chief aide.  He was also the highest ranking African American in the Woodrow Wilson’s Administration.",link:"https://blackpast.org/aah/scott-emmett-j-1873-1957"}}},{node:{path:"/FrederickDouglass",context:{name:"Frederick Douglass",birth:"c. 2.14.1818",death:"2.20.1895",about:"Became one of the most famous intellectuals of his time, advising presidents and lecturing to thousands on a range of causes, including women’s rights and Irish home rule.",link:"https://www.biography.com/people/frederick-douglass-9278324"}}},{node:{path:"/BrianHolland",context:{name:"Brian Holland",birth:"2.15.1941",death:null,about:"Helped pioneer the classic Motown sound of the 1960s. His songs, including “Stop! In the Name of Love,” “Baby I Need Your Loving’ and “Come See About Me” became hit recordings for the Supremes, the Four Tops and Martha & the Vandellas.",link:"https://www.songhall.org/profile/Brian_Holland"}}},{node:{path:"/LevarBurton",context:{name:"Levar Burton",birth:"2.16.1957",death:null,about:"Two years into college, Burton was chosen for the lead role in the television miniseries Roots, which launched his career. In 1983, he became the host of PBS's Reading Rainbow, a show aimed at teaching young children to read that won five Emmy Awards over its more than 20-year run (1983-2009).",link:"https://www.biography.com/people/levar-burton-538182"}}},{node:{path:"/MichaelJordan",context:{name:"Michael Jordan",birth:"2.17.1963",death:null,about:"Although, a summary of his basketball career and influence on the game inevitably fails to do it justice, as a phenomenal athlete with a unique combination of fundamental soundness, grace, speed, power, artistry, improvisational ability and an unquenchable competitive desire, Jordan single-handedly redefined the NBA superstar.",link:"http://www.nba.com/history/players/jordan_bio.html"}}},{node:{path:"/ToniMorrison",context:{name:"Toni Morrison",birth:"2.18.1931",death:null,about:"American writer noted for her examination of black experience (particularly black female experience) within the black community. She received the Nobel Prize for Literature in 1993.",link:"https://www.britannica.com/biography/Toni-Morrison"}}},{node:{path:"/SmokeyRobinson",context:{name:"Smokey Robinson",birth:"2.19.1940",death:null,about:'A prolific songwriter, he is credited with 4,000 songs and 37 Top 40 hits, including "Tears of a Clown," "Tracks of My Tears," and "Love Machine." Robinson also served as vice president of Motown records, writing and producing hits for groups such as The Temptations ("My Girl") and Mary Wells ("My Guy").',link:"https://www.biography.com/people/smokey-robinson-9460972"}}},{node:{path:"/SidneyPoitier",context:{name:"Sidney Poitier",birth:"2.20.1927",death:null,about:"Bahamian American actor, director, and producer who broke the colour barrier in the U.S. motion-picture industry by becoming the first African American actor to win an Academy Award for best actor (for Lilies of the Field [1963]) and the first black movie star. He also redefined roles for African Americans by rejecting parts that were based on racial stereotypes.",link:"https://www.britannica.com/biography/Sidney-Poitier"}}},{node:{path:"/NinaSimone",context:{name:"Nina Simone",birth:"2.21.1933",death:"4.21.2003",about:"One of the most gifted vocalists of her generation, and also one of the most eclectic. Simone was a singer, pianist, and songwriter who bent genres to her will rather than allowing herself to be confined by their boundaries; her work swung back and forth between jazz, blues, soul, classical, R&B, pop, gospel, and world music, with passion, emotional honesty, and a strong grasp of technique as the constants of her musical career.",link:"https://www.allmusic.com/artist/nina-simone-mn0000411761/biography"}}},{node:{path:"/JuliusErving",context:{name:"Julius Erving",birth:"2.22.1950",death:null,about:"Was the dominant player of his era and an innovator who changed the way the game was played. He was a wizard with the ball, performing feats never before seen: midair spins and whirls punctuated by powerful slam dunks.",link:"http://www.nba.com/history/legends/profiles/julius-erving"}}},{node:{path:"/WEBDuBois",context:{name:"W.E.B. Du Bois",birth:"2.23.1868",death:"8.27.1963",about:"Wrote extensively and was the best known spokesperson for African-American rights during the first half of the 20th century. He co-founded the National Association for the Advancement of Colored People (NAACP) in 1909.",link:"https://www.biography.com/people/web-du-bois-9279924"}}},{node:{path:"/FloydMayweatherJr",context:{name:"Floyd Mayweather Jr.",birth:"2.24.1977",death:null,about:"American boxer whose combination of speed, power, and technical prowess made him one of the best pound-for-pound fighters of all time.",link:"https://www.britannica.com/biography/Floyd-Mayweather-Jr"}}},{node:{path:"/DonaldQuarrie",context:{name:"Donald Quarrie",birth:"2.25.1951",death:null,about:"Regarded as one of the finest sprinters in the history of track and field. He is also considered the greatest runner around the bend.",link:"https://jamaicans.com/jasports_donquarrie/"}}},{node:{path:"/AntoineDomino",context:{name:"Antoine Domino",birth:"2.26.1928",death:"10.24.2017",about:'Counted among rock "n" roll’s pioneers, and in his heyday during the 1950s he racked up more than 100 combined Billboard pop and rhythm and blues hits.',link:"https://www.biography.com/news/fats-domino-obituary"}}},{node:{path:"/MarianAnderson",context:{name:"Marian Anderson",birth:"2.27.1897",death:"4.8.1993",about:"Deemed one of the finest contraltos of her time, Marian Anderson became the first African American to perform with the New York Metropolitan Opera in 1955.",link:"https://www.biography.com/people/marian-anderson-9184422"}}},{node:{path:"/CharlesSmith",context:{name:"Charles Smith",birth:"2.28.1945",death:"8.3.2011",about:"Impressed many fans as much for his role as the soft-spoken Moses Hightower in six Police Academy films (1984–89) as he did during his nine seasons (1967–76) as an NFL defensive lineman.",link:"https://www.britannica.com/biography/Bubba-Smith"}}},{node:{path:"/404/",context:{name:null,birth:null,death:null,about:null,link:null}}},{node:{path:"/",context:{name:null,birth:null,death:null,about:null,link:null}}},{node:{path:"/404.html",context:{name:null,birth:null,death:null,about:null,link:null}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-45c2d8322dc3419ddeaf.js.map