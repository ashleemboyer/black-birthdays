(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{150:function(e,t,a){"use strict";a.d(t,"b",function(){return o});var i=a(0),c=a.n(i),s=a(4),d=a.n(s),r=a(33),n=a.n(r);a.d(t,"a",function(){return n.a});a(151);var f=c.a.createContext({}),o=function(e){return c.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):c.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func}},151:function(e,t,a){var i;e.exports=(i=a(155))&&i.default||i},152:function(e,t,a){"use strict";var i=a(156),c=a(0),s=a.n(c),d=a(4),r=a.n(d),n=a(159),f=a.n(n);function o(e){var t=e.description,a=e.lang,c=e.meta,d=e.keywords,r=e.title,n=i.data.site,o=t||n.siteMetadata.description;return s.a.createElement(f.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+n.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:o}].concat(d.length>0?{name:"keywords",content:d.join(", ")}:[]).concat(c)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},t.a=o},153:function(e,t,a){"use strict";var i=a(154),c=a(0),s=a.n(c),d=a(4),r=a.n(d),n=a(150),f=function(e){var t=e.siteTitle,a=e.siteDescription,i=!1;return"undefined"!=typeof window&&(i=window.innerWidth<=700),s.a.createElement("header",{style:{textAlign:"center",margin:i?"48px 16px":"48px 16px 72px 16px"}},s.a.createElement("h1",{style:{marginBottom:"8px",fontSize:"3rem"}},s.a.createElement(n.a,{to:"/"},t)),s.a.createElement("p",{style:{fontSize:"1.3rem",color:"#eeeeee"}},a))};f.propTypes={siteTitle:r.a.string},f.defaultProps={siteTitle:""};var o=f,l=function(e){var t=e.children;return s.a.createElement(n.b,{query:"2328579951",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o,{siteTitle:e.site.siteMetadata.title,siteDescription:e.site.siteMetadata.description}),s.a.createElement("div",{style:{maxWidth:1300,margin:"0 auto"}},s.a.createElement("main",null,t),s.a.createElement("footer",{style:{marginTop:"100px",marginBottom:"32px",color:"white",fontSize:".8rem",textAlign:"center"}},"© ",(new Date).getFullYear(),", Built by"," ",s.a.createElement("a",{style:{borderBottom:"1px dotted #616161"},href:"https://twitter.com/ashleemboyer"},"Ashlee")," with"," ",s.a.createElement("a",{style:{borderBottom:"1px dotted #616161"},href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})};l.propTypes={children:r.a.node.isRequired};t.a=l},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Black Birthdays",description:"February is Black History Month."}}}}},155:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),c=a.n(i),s=a(4),d=a.n(s),r=a(56),n=a(2),f=function(e){var t=e.location,a=n.default.getResourcesForPathnameSync(t.pathname);return a?c.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null};f.propTypes={location:d.a.shape({pathname:d.a.string.isRequired}).isRequired},t.default=f},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Black Birthdays",description:"February is Black History Month.",author:"@ashleemboyer"}}}}},157:function(e,t,a){var i=a(25).f,c=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in c||a(18)&&i(c,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},158:function(e,t,a){"use strict";a(34),a(75);var i=a(74),c=a.n(i),s=a(163),d=a(0),r=a.n(d),n=a(164),f=a.n(n);t.a=function(e){var t=e.src,a=c()(e,["src"]),i=s.data,n=Object(d.useMemo)(function(){return i.allFile.nodes.find(function(e){var a=e.relativePath;return t===a})},[i,t]).childImageSharp.fluid;return n?r.a.createElement(f.a,Object.assign({fluid:n,Tag:"div"},a)):null}},163:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"AntoineDomino.jpg",childImageSharp:{fluid:{aspectRatio:1.7825311942959001,src:"/static/22a5a4de8199e9e82e71d328202570cd/13e10/AntoineDomino.jpg",srcSet:"/static/22a5a4de8199e9e82e71d328202570cd/87c5e/AntoineDomino.jpg 175w,\n/static/22a5a4de8199e9e82e71d328202570cd/dec55/AntoineDomino.jpg 350w,\n/static/22a5a4de8199e9e82e71d328202570cd/13e10/AntoineDomino.jpg 700w,\n/static/22a5a4de8199e9e82e71d328202570cd/2f7e7/AntoineDomino.jpg 1000w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"CharlesSmith.jpg",childImageSharp:{fluid:{aspectRatio:1.3744075829383886,src:"/static/ab80d43ce9b86afb44df6d03b81d4b02/75196/CharlesSmith.jpg",srcSet:"/static/ab80d43ce9b86afb44df6d03b81d4b02/87c5e/CharlesSmith.jpg 175w,\n/static/ab80d43ce9b86afb44df6d03b81d4b02/75196/CharlesSmith.jpg 290w",sizes:"(max-width: 290px) 100vw, 290px"}}},{relativePath:"DennisEdwards.jpg",childImageSharp:{fluid:{aspectRatio:1.510688836104513,src:"/static/62bef75d16e7b31b221762533c9a6162/37d73/DennisEdwards.jpg",srcSet:"/static/62bef75d16e7b31b221762533c9a6162/87c5e/DennisEdwards.jpg 175w,\n/static/62bef75d16e7b31b221762533c9a6162/dec55/DennisEdwards.jpg 350w,\n/static/62bef75d16e7b31b221762533c9a6162/37d73/DennisEdwards.jpg 636w",sizes:"(max-width: 636px) 100vw, 636px"}}},{relativePath:"DonaldQuarrie.jpg",childImageSharp:{fluid:{aspectRatio:1.622478386167147,src:"/static/b9b2ac3b3fa0631d9164826c5cf7cd91/6a421/DonaldQuarrie.jpg",srcSet:"/static/b9b2ac3b3fa0631d9164826c5cf7cd91/87c5e/DonaldQuarrie.jpg 175w,\n/static/b9b2ac3b3fa0631d9164826c5cf7cd91/dec55/DonaldQuarrie.jpg 350w,\n/static/b9b2ac3b3fa0631d9164826c5cf7cd91/6a421/DonaldQuarrie.jpg 563w",sizes:"(max-width: 563px) 100vw, 563px"}}},{relativePath:"FrederickDouglass.jpg",childImageSharp:{fluid:{aspectRatio:1.779935275080906,src:"/static/c13ff293139e1856b6f948cf18c487d9/13e10/FrederickDouglass.jpg",srcSet:"/static/c13ff293139e1856b6f948cf18c487d9/87c5e/FrederickDouglass.jpg 175w,\n/static/c13ff293139e1856b6f948cf18c487d9/dec55/FrederickDouglass.jpg 350w,\n/static/c13ff293139e1856b6f948cf18c487d9/13e10/FrederickDouglass.jpg 700w,\n/static/c13ff293139e1856b6f948cf18c487d9/1e2f4/FrederickDouglass.jpg 1050w,\n/static/c13ff293139e1856b6f948cf18c487d9/fbffe/FrederickDouglass.jpg 1100w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"GaryColeman.jpg",childImageSharp:{fluid:{aspectRatio:2,src:"/static/a7500e66bd65b6c616858b446f248793/13e10/GaryColeman.jpg",srcSet:"/static/a7500e66bd65b6c616858b446f248793/87c5e/GaryColeman.jpg 175w,\n/static/a7500e66bd65b6c616858b446f248793/dec55/GaryColeman.jpg 350w,\n/static/a7500e66bd65b6c616858b446f248793/13e10/GaryColeman.jpg 700w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"MarianAnderson.jpg",childImageSharp:{fluid:{aspectRatio:1.781925343811395,src:"/static/1d0dd9d0b6a0fdf31432298c759e0935/13e10/MarianAnderson.jpg",srcSet:"/static/1d0dd9d0b6a0fdf31432298c759e0935/87c5e/MarianAnderson.jpg 175w,\n/static/1d0dd9d0b6a0fdf31432298c759e0935/dec55/MarianAnderson.jpg 350w,\n/static/1d0dd9d0b6a0fdf31432298c759e0935/13e10/MarianAnderson.jpg 700w,\n/static/1d0dd9d0b6a0fdf31432298c759e0935/079a6/MarianAnderson.jpg 907w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"ToniMorrison.jpg",childImageSharp:{fluid:{aspectRatio:1.3702928870292888,src:"/static/c660ff5badb8b1364d2638884e336bb4/d3160/ToniMorrison.jpg",srcSet:"/static/c660ff5badb8b1364d2638884e336bb4/87c5e/ToniMorrison.jpg 175w,\n/static/c660ff5badb8b1364d2638884e336bb4/dec55/ToniMorrison.jpg 350w,\n/static/c660ff5badb8b1364d2638884e336bb4/d3160/ToniMorrison.jpg 655w",sizes:"(max-width: 655px) 100vw, 655px"}}},{relativePath:"WEBDuBois.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/c9cd623b3e45ce54531f444606d20647/13e10/WEBDuBois.jpg",srcSet:"/static/c9cd623b3e45ce54531f444606d20647/87c5e/WEBDuBois.jpg 175w,\n/static/c9cd623b3e45ce54531f444606d20647/dec55/WEBDuBois.jpg 350w,\n/static/c9cd623b3e45ce54531f444606d20647/13e10/WEBDuBois.jpg 700w,\n/static/c9cd623b3e45ce54531f444606d20647/1e2f4/WEBDuBois.jpg 1050w,\n/static/c9cd623b3e45ce54531f444606d20647/81ef8/WEBDuBois.jpg 1200w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"BrianHolland.jpg",childImageSharp:{fluid:{aspectRatio:1.492537313432836,src:"/static/8bdd0062c5116e6e272dce5de7c10738/775d9/BrianHolland.jpg",srcSet:"/static/8bdd0062c5116e6e272dce5de7c10738/87c5e/BrianHolland.jpg 175w,\n/static/8bdd0062c5116e6e272dce5de7c10738/dec55/BrianHolland.jpg 350w,\n/static/8bdd0062c5116e6e272dce5de7c10738/775d9/BrianHolland.jpg 600w",sizes:"(max-width: 600px) 100vw, 600px"}}},{relativePath:"DanielJames.jpg",childImageSharp:{fluid:{aspectRatio:2.1870967741935483,src:"/static/48da60b86ac1d34c294ba7be4816dfdf/13e10/DanielJames.jpg",srcSet:"/static/48da60b86ac1d34c294ba7be4816dfdf/87c5e/DanielJames.jpg 175w,\n/static/48da60b86ac1d34c294ba7be4816dfdf/dec55/DanielJames.jpg 350w,\n/static/48da60b86ac1d34c294ba7be4816dfdf/13e10/DanielJames.jpg 700w,\n/static/48da60b86ac1d34c294ba7be4816dfdf/b225e/DanielJames.jpg 1017w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"EmmettJScott.jpg",childImageSharp:{fluid:{aspectRatio:2.0083333333333333,src:"/static/4515acb460fb1f8887b195bc0dcbc3b4/13e10/EmmettJScott.jpg",srcSet:"/static/4515acb460fb1f8887b195bc0dcbc3b4/87c5e/EmmettJScott.jpg 175w,\n/static/4515acb460fb1f8887b195bc0dcbc3b4/dec55/EmmettJScott.jpg 350w,\n/static/4515acb460fb1f8887b195bc0dcbc3b4/13e10/EmmettJScott.jpg 700w,\n/static/4515acb460fb1f8887b195bc0dcbc3b4/27e6e/EmmettJScott.jpg 964w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"FloydMayweatherJr.jpg",childImageSharp:{fluid:{aspectRatio:1.5,src:"/static/022f1b15cdc274dbf1183011b9980255/13e10/FloydMayweatherJr.jpg",srcSet:"/static/022f1b15cdc274dbf1183011b9980255/87c5e/FloydMayweatherJr.jpg 175w,\n/static/022f1b15cdc274dbf1183011b9980255/dec55/FloydMayweatherJr.jpg 350w,\n/static/022f1b15cdc274dbf1183011b9980255/13e10/FloydMayweatherJr.jpg 700w,\n/static/022f1b15cdc274dbf1183011b9980255/1e2f4/FloydMayweatherJr.jpg 1050w,\n/static/022f1b15cdc274dbf1183011b9980255/81ef8/FloydMayweatherJr.jpg 1200w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"JuliusErving.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/de8563825c88a43bf1ebe7671b0f36ba/13e10/JuliusErving.jpg",srcSet:"/static/de8563825c88a43bf1ebe7671b0f36ba/87c5e/JuliusErving.jpg 175w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/dec55/JuliusErving.jpg 350w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/13e10/JuliusErving.jpg 700w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/1e2f4/JuliusErving.jpg 1050w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/c108b/JuliusErving.jpg 1280w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"NinaSimone.jpg",childImageSharp:{fluid:{aspectRatio:1.1263345195729537,src:"/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/91275/NinaSimone.jpg",srcSet:"/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/87c5e/NinaSimone.jpg 175w,\n/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/dec55/NinaSimone.jpg 350w,\n/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/91275/NinaSimone.jpg 633w",sizes:"(max-width: 633px) 100vw, 633px"}}},{relativePath:"SmokeyRobinson.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/08dea12ffb0eef2ee224e240bfb304db/13e10/SmokeyRobinson.jpg",srcSet:"/static/08dea12ffb0eef2ee224e240bfb304db/87c5e/SmokeyRobinson.jpg 175w,\n/static/08dea12ffb0eef2ee224e240bfb304db/dec55/SmokeyRobinson.jpg 350w,\n/static/08dea12ffb0eef2ee224e240bfb304db/13e10/SmokeyRobinson.jpg 700w,\n/static/08dea12ffb0eef2ee224e240bfb304db/0a89a/SmokeyRobinson.jpg 960w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"LevarBurton.jpg",childImageSharp:{fluid:{aspectRatio:1.3333333333333333,src:"/static/18df9c9032f9a108954779460b936395/13e10/LevarBurton.jpg",srcSet:"/static/18df9c9032f9a108954779460b936395/87c5e/LevarBurton.jpg 175w,\n/static/18df9c9032f9a108954779460b936395/dec55/LevarBurton.jpg 350w,\n/static/18df9c9032f9a108954779460b936395/13e10/LevarBurton.jpg 700w,\n/static/18df9c9032f9a108954779460b936395/abd5f/LevarBurton.jpg 880w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"RosaParks.jpg",childImageSharp:{fluid:{aspectRatio:1.9057071960297767,src:"/static/dafa58163888c90c8c2c2622bffaaac5/13e10/RosaParks.jpg",srcSet:"/static/dafa58163888c90c8c2c2622bffaaac5/87c5e/RosaParks.jpg 175w,\n/static/dafa58163888c90c8c2c2622bffaaac5/dec55/RosaParks.jpg 350w,\n/static/dafa58163888c90c8c2c2622bffaaac5/13e10/RosaParks.jpg 700w,\n/static/dafa58163888c90c8c2c2622bffaaac5/9a42c/RosaParks.jpg 768w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"MelvinTolson.jpg",childImageSharp:{fluid:{aspectRatio:1.5112219451371571,src:"/static/e674955e9bc8cf93057eba584a5e55fe/b88f4/MelvinTolson.jpg",srcSet:"/static/e674955e9bc8cf93057eba584a5e55fe/87c5e/MelvinTolson.jpg 175w,\n/static/e674955e9bc8cf93057eba584a5e55fe/dec55/MelvinTolson.jpg 350w,\n/static/e674955e9bc8cf93057eba584a5e55fe/b88f4/MelvinTolson.jpg 606w",sizes:"(max-width: 606px) 100vw, 606px"}}},{relativePath:"ChrisRock.jpg",childImageSharp:{fluid:{aspectRatio:1.3333333333333333,src:"/static/58d9ec61564666e4466bb062bb7e92b7/13e10/ChrisRock.jpg",srcSet:"/static/58d9ec61564666e4466bb062bb7e92b7/87c5e/ChrisRock.jpg 175w,\n/static/58d9ec61564666e4466bb062bb7e92b7/dec55/ChrisRock.jpg 350w,\n/static/58d9ec61564666e4466bb062bb7e92b7/13e10/ChrisRock.jpg 700w,\n/static/58d9ec61564666e4466bb062bb7e92b7/1e2f4/ChrisRock.jpg 1050w,\n/static/58d9ec61564666e4466bb062bb7e92b7/3dc2b/ChrisRock.jpg 1400w,\n/static/58d9ec61564666e4466bb062bb7e92b7/0e68c/ChrisRock.jpg 2100w,\n/static/58d9ec61564666e4466bb062bb7e92b7/c82f6/ChrisRock.jpg 2400w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"MichaelJordan.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/aaeecd69b98a46d50c8aa5054d0c2895/13e10/MichaelJordan.jpg",srcSet:"/static/aaeecd69b98a46d50c8aa5054d0c2895/87c5e/MichaelJordan.jpg 175w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/dec55/MichaelJordan.jpg 350w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/13e10/MichaelJordan.jpg 700w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/1e2f4/MichaelJordan.jpg 1050w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/c108b/MichaelJordan.jpg 1280w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"HankAaron.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/a1fef9492dfcf05af548ff66b03f3710/13e10/HankAaron.jpg",srcSet:"/static/a1fef9492dfcf05af548ff66b03f3710/87c5e/HankAaron.jpg 175w,\n/static/a1fef9492dfcf05af548ff66b03f3710/dec55/HankAaron.jpg 350w,\n/static/a1fef9492dfcf05af548ff66b03f3710/13e10/HankAaron.jpg 700w,\n/static/a1fef9492dfcf05af548ff66b03f3710/1e2f4/HankAaron.jpg 1050w,\n/static/a1fef9492dfcf05af548ff66b03f3710/3dc2b/HankAaron.jpg 1400w,\n/static/a1fef9492dfcf05af548ff66b03f3710/14dee/HankAaron.jpg 1920w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"AliceWalker.jpg",childImageSharp:{fluid:{aspectRatio:1.490104772991851,src:"/static/10093272b96a5b4031aad0dde016998f/13e10/AliceWalker.jpg",srcSet:"/static/10093272b96a5b4031aad0dde016998f/87c5e/AliceWalker.jpg 175w,\n/static/10093272b96a5b4031aad0dde016998f/dec55/AliceWalker.jpg 350w,\n/static/10093272b96a5b4031aad0dde016998f/13e10/AliceWalker.jpg 700w,\n/static/10093272b96a5b4031aad0dde016998f/1e2f4/AliceWalker.jpg 1050w,\n/static/10093272b96a5b4031aad0dde016998f/c108b/AliceWalker.jpg 1280w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"LeontynePrice.jpg",childImageSharp:{fluid:{aspectRatio:1.5,src:"/static/6a99c35d1a3102f84ab8fb06aa6ef25f/13e10/LeontynePrice.jpg",srcSet:"/static/6a99c35d1a3102f84ab8fb06aa6ef25f/87c5e/LeontynePrice.jpg 175w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/dec55/LeontynePrice.jpg 350w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/13e10/LeontynePrice.jpg 700w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/1e2f4/LeontynePrice.jpg 1050w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/3dc2b/LeontynePrice.jpg 1400w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/2a5e2/LeontynePrice.jpg 1500w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"SidneyPoitier.jpg",childImageSharp:{fluid:{aspectRatio:1.9047619047619047,src:"/static/2cf290dc9efa76ea8ff345c80b97c922/13e10/SidneyPoitier.jpg",srcSet:"/static/2cf290dc9efa76ea8ff345c80b97c922/87c5e/SidneyPoitier.jpg 175w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/dec55/SidneyPoitier.jpg 350w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/13e10/SidneyPoitier.jpg 700w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/1e2f4/SidneyPoitier.jpg 1050w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/3dc2b/SidneyPoitier.jpg 1400w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/0e68c/SidneyPoitier.jpg 2100w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/9421f/SidneyPoitier.jpg 3200w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"LangstonHughes.jpg",childImageSharp:{fluid:{aspectRatio:1.266046511627907,src:"/static/f781a3f333b4d088a4b405b90b33e700/13e10/LangstonHughes.jpg",srcSet:"/static/f781a3f333b4d088a4b405b90b33e700/87c5e/LangstonHughes.jpg 175w,\n/static/f781a3f333b4d088a4b405b90b33e700/dec55/LangstonHughes.jpg 350w,\n/static/f781a3f333b4d088a4b405b90b33e700/13e10/LangstonHughes.jpg 700w,\n/static/f781a3f333b4d088a4b405b90b33e700/1e2f4/LangstonHughes.jpg 1050w,\n/static/f781a3f333b4d088a4b405b90b33e700/3dc2b/LangstonHughes.jpg 1400w,\n/static/f781a3f333b4d088a4b405b90b33e700/0e68c/LangstonHughes.jpg 2100w,\n/static/f781a3f333b4d088a4b405b90b33e700/a5ed5/LangstonHughes.jpg 2722w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"ArsenioHall.jpg",childImageSharp:{fluid:{aspectRatio:1.6,src:"/static/f2c05b9d323238b794be5b8bc4180288/13e10/ArsenioHall.jpg",srcSet:"/static/f2c05b9d323238b794be5b8bc4180288/87c5e/ArsenioHall.jpg 175w,\n/static/f2c05b9d323238b794be5b8bc4180288/dec55/ArsenioHall.jpg 350w,\n/static/f2c05b9d323238b794be5b8bc4180288/13e10/ArsenioHall.jpg 700w,\n/static/f2c05b9d323238b794be5b8bc4180288/1e2f4/ArsenioHall.jpg 1050w,\n/static/f2c05b9d323238b794be5b8bc4180288/8a760/ArsenioHall.jpg 1240w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"WilliamArtis.jpg",childImageSharp:{fluid:{aspectRatio:.815,src:"/static/9f147b40deb45fd4e1c8bcdc2f953a42/13e10/WilliamArtis.jpg",srcSet:"/static/9f147b40deb45fd4e1c8bcdc2f953a42/87c5e/WilliamArtis.jpg 175w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/dec55/WilliamArtis.jpg 350w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/13e10/WilliamArtis.jpg 700w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/1e2f4/WilliamArtis.jpg 1050w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/3dc2b/WilliamArtis.jpg 1400w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/0e68c/WilliamArtis.jpg 2100w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/8f00a/WilliamArtis.jpg 2445w",sizes:"(max-width: 700px) 100vw, 700px"}}}]}}}},164:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var c,s=i(a(7)),d=i(a(36)),r=i(a(74)),n=i(a(77)),f=i(a(0)),o=i(a(4)),l=function(e){var t=(0,n.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},b=Object.create({}),p=function(e){var t=l(e),a=t.fluid?t.fluid.src:t.fixed.src;return b[a]||!1},g=new WeakMap;var u=function(e,t){var a=(void 0===c&&"undefined"!=typeof window&&window.IntersectionObserver&&(c=new window.IntersectionObserver(function(e){e.forEach(function(e){if(g.has(e.target)){var t=g.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),g.delete(e.target),t())}})},{rootMargin:"200px"})),c);return a&&(a.observe(e),g.set(e,t)),function(){a.unobserve(e),g.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",c=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",d=e.alt?'alt="'+e.alt+'" ':'alt="" ';return"<picture>"+i+"<img "+(e.width?'width="'+e.width+'" ':"")+(e.height?'height="'+e.height+'" ':"")+a+c+t+d+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},w=f.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,c=e.src,s=e.style,d=e.onLoad,o=e.onError,l=(0,r.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return f.default.createElement("img",(0,n.default)({sizes:a,srcSet:i,src:c},l,{onLoad:d,onError:o,ref:t,style:(0,n.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});w.propTypes={style:o.default.object,onError:o.default.func,onLoad:o.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,c=!1,s=t.fadeIn,r=p(t);!r&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,c=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,c=!1);var n=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,IOSupported:c,fadeIn:s,hasNoScript:n,seenBefore:r},a.imageRef=f.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,d.default)((0,d.default)(a))),a.handleRef=a.handleRef.bind((0,d.default)((0,d.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=u(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=l(e),a=t.fluid?t.fluid.src:t.fixed.src,b[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=l(this.props),t=e.title,a=e.alt,i=e.className,c=e.style,s=void 0===c?{}:c,d=e.imgStyle,r=void 0===d?{}:d,o=e.placeholderStyle,b=void 0===o?{}:o,p=e.placeholderClassName,g=e.fluid,u=e.fixed,m=e.backgroundColor,j=e.durationFadeIn,S=e.Tag,y=e.itemProp,v=this.state.imgLoaded||!1===this.state.fadeIn,x=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,n.default)({opacity:v?1:0,transition:x?"opacity "+j+"ms":"none"},r),E="boolean"==typeof m?"lightgray":m,k={transitionDelay:j+"ms"},P=(0,n.default)({opacity:this.state.imgLoaded?0:1},x&&k,r,b),L={title:t,alt:this.state.isVisible?"":a,style:P,className:p};if(g){var I=g;return f.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,n.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},f.default.createElement(S,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),E&&f.default.createElement(S,{title:t,style:(0,n.default)({backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&k)}),I.base64&&f.default.createElement(w,(0,n.default)({src:I.base64},L)),I.tracedSVG&&f.default.createElement(w,(0,n.default)({src:I.tracedSVG},L)),this.state.isVisible&&f.default.createElement("picture",null,I.srcSetWebp&&f.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),f.default.createElement(w,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&f.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,n.default)({alt:a,title:t},I))}}))}if(u){var z=u,A=(0,n.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete A.display,f.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},E&&f.default.createElement(S,{title:t,style:(0,n.default)({backgroundColor:E,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},x&&k)}),z.base64&&f.default.createElement(w,(0,n.default)({src:z.base64},L)),z.tracedSVG&&f.default.createElement(w,(0,n.default)({src:z.tracedSVG},L)),this.state.isVisible&&f.default.createElement("picture",null,z.srcSetWebp&&f.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),f.default.createElement(w,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y})),this.state.hasNoScript&&f.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,n.default)({alt:a,title:t},z))}}))}return null},t}(f.default.Component);m.defaultProps={critical:!1,fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div"};var j=o.default.shape({width:o.default.number.isRequired,height:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string}),S=o.default.shape({aspectRatio:o.default.number.isRequired,src:o.default.string.isRequired,srcSet:o.default.string.isRequired,sizes:o.default.string.isRequired,base64:o.default.string,tracedSVG:o.default.string,srcWebp:o.default.string,srcSetWebp:o.default.string});m.propTypes={resolutions:j,sizes:S,fixed:j,fluid:S,fadeIn:o.default.bool,durationFadeIn:o.default.number,title:o.default.string,alt:o.default.string,className:o.default.oneOfType([o.default.string,o.default.object]),critical:o.default.bool,crossOrigin:o.default.oneOfType([o.default.string,o.default.bool]),style:o.default.object,imgStyle:o.default.object,placeholderStyle:o.default.object,placeholderClassName:o.default.string,backgroundColor:o.default.oneOfType([o.default.string,o.default.bool]),onLoad:o.default.func,onError:o.default.func,onStartLoad:o.default.func,Tag:o.default.string,itemProp:o.default.string};var y=m;t.default=y}}]);
//# sourceMappingURL=1-deda2650a1bea6547e69.js.map