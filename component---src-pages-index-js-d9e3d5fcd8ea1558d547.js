(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return h});t(35),t(158);var i=t(7),n=t.n(i),c=t(173),r=t(0),o=t.n(r),s=t(157),d=t(155),l=t(151),b=t(159),p=t(174),h=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={width:a.width},t}n()(a,e);var t=a.prototype;return t.componentWillMount=function(){this.setState({width:"undefined"!=typeof window?window.innerWidth:1e3})},t.render=function(){var e=this.state.width<700;return o.a.createElement(l.b,{query:"623392454",render:function(a){return o.a.createElement(s.a,null,o.a.createElement(d.a,{image:"header.png",title:"Home",keywords:["gatsby","application","react","birthdays","black","history","month"]}),o.a.createElement("div",{style:{textAlign:"center"}},a.allSitePage.edges.filter(function(e){var a=e.node;return!!(a&&a.context&&a.context.name)}).map(function(a,t){var i=a.node;return o.a.createElement("div",{key:t,style:{position:"relative",width:e?"90%":"272px",height:"304px",display:"inline-block",margin:"8px"}},o.a.createElement(l.a,{to:i.path},o.a.createElement(b.a,{style:{width:"100%",height:"272px",borderRadius:"2px 2px 0 0"},src:i.context.name.replace(/ |\./g,"")+".jpg"}),o.a.createElement("div",{style:{height:"32px",lineHeight:"32px",verticalAlign:"middle",textAlign:"center",color:"white",backgroundColor:"#212121",borderRadius:"0 0 2px 2px",paddingRight:"12px"}},o.a.createElement(p.a,{size:"24px",style:{height:"32px",lineHeight:"32px",verticalAlign:"middle",float:"right",marginLeft:"8px"}}),o.a.createElement("p",{style:{height:"32px",lineHeight:"32px",verticalAlign:"middle",float:"right"}},i.context.name)),o.a.createElement("div",{onMouseEnter:function(e){return e.target.style.opacity="0.2"},onMouseLeave:function(e){return e.target.style.opacity="0"},style:{backgroundColor:"lavenderblush",opacity:"0",position:"absolute",top:0,right:0,bottom:0,left:0}})))})))},data:c})},a}(r.Component);h.defaultProps={width:1e3}},151:function(e,a,t){"use strict";t.d(a,"b",function(){return l});var i=t(0),n=t.n(i),c=t(4),r=t.n(c),o=t(33),s=t.n(o);t.d(a,"a",function(){return s.a});t(152);var d=n.a.createContext({}),l=function(e){return n.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},152:function(e,a,t){var i;e.exports=(i=t(154))&&i.default||i},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Black Birthdays",description:"February is Black History Month."}}}}},154:function(e,a,t){"use strict";t.r(a);t(34);var i=t(0),n=t.n(i),c=t(4),r=t.n(c),o=t(55),s=t(2),d=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return t?n.a.createElement(o.a,Object.assign({location:a,pageResources:t},t.json)):null};d.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=d},155:function(e,a,t){"use strict";var i=t(156),n=t(0),c=t.n(n),r=t(4),o=t.n(r),s=t(162),d=t.n(s);function l(e){var a=e.description,t=e.lang,n=e.meta,r=e.keywords,o=e.title,s=e.image,l=i.data.site,b=a||l.siteMetadata.description;return c.a.createElement(d.a,{htmlAttributes:{lang:t},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:b},{property:"og:title",content:o},{property:"og:description",content:b},{property:"og:image",content:"src/images/"+s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:b}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})}l.defaultProps={lang:"en",meta:[],keywords:[],description:""},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired,image:o.a.string},a.a=l},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Black Birthdays",description:"February is Black History Month.",author:"@ashleemboyer"}}}}},157:function(e,a,t){"use strict";var i=t(153),n=t(0),c=t.n(n),r=t(4),o=t.n(r),s=t(151),d=function(e){var a=e.siteTitle,t=e.siteDescription,i=!1;return"undefined"!=typeof window&&(i=window.innerWidth<=700),c.a.createElement("header",{style:{textAlign:"center",margin:i?"48px 16px":"48px 16px 72px 16px"}},c.a.createElement("h1",{style:{marginBottom:"8px",fontSize:"3rem"}},c.a.createElement(s.a,{to:"/"},a)),c.a.createElement("p",{style:{fontSize:"1.3rem",color:"#eeeeee"}},t))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var l=d,b=function(e){var a=e.children;return c.a.createElement(s.b,{query:"2328579951",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l,{siteTitle:e.site.siteMetadata.title,siteDescription:e.site.siteMetadata.description}),c.a.createElement("div",{style:{maxWidth:1300,margin:"0 auto"}},c.a.createElement("main",null,a),c.a.createElement("footer",{style:{marginTop:"100px",marginBottom:"32px",color:"white",fontSize:".8rem",textAlign:"center"}},"© ",(new Date).getFullYear(),", Built by"," ",c.a.createElement("a",{style:{borderBottom:"1px dotted #616161"},href:"https://twitter.com/ashleemboyer"},"Ashlee")," with"," ",c.a.createElement("a",{style:{borderBottom:"1px dotted #616161"},href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:i})};b.propTypes={children:o.a.node.isRequired};a.a=b},159:function(e,a,t){"use strict";t(34),t(75);var i=t(74),n=t.n(i),c=t(160),r=t(0),o=t.n(r),s=t(161),d=t.n(s);a.a=function(e){var a=e.src,t=n()(e,["src"]),i=c.data,s=Object(r.useMemo)(function(){return i.allFile.nodes.find(function(e){var t=e.relativePath;return a===t})},[i,a]).childImageSharp.fluid;return s?o.a.createElement(d.a,Object.assign({fluid:s,Tag:"div"},t)):null}},160:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"AntoineDomino.jpg",childImageSharp:{fluid:{aspectRatio:1.7825311942959001,src:"/static/22a5a4de8199e9e82e71d328202570cd/13e10/AntoineDomino.jpg",srcSet:"/static/22a5a4de8199e9e82e71d328202570cd/87c5e/AntoineDomino.jpg 175w,\n/static/22a5a4de8199e9e82e71d328202570cd/dec55/AntoineDomino.jpg 350w,\n/static/22a5a4de8199e9e82e71d328202570cd/13e10/AntoineDomino.jpg 700w,\n/static/22a5a4de8199e9e82e71d328202570cd/2f7e7/AntoineDomino.jpg 1000w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"CharlesSmith.jpg",childImageSharp:{fluid:{aspectRatio:1.3744075829383886,src:"/static/ab80d43ce9b86afb44df6d03b81d4b02/75196/CharlesSmith.jpg",srcSet:"/static/ab80d43ce9b86afb44df6d03b81d4b02/87c5e/CharlesSmith.jpg 175w,\n/static/ab80d43ce9b86afb44df6d03b81d4b02/75196/CharlesSmith.jpg 290w",sizes:"(max-width: 290px) 100vw, 290px"}}},{relativePath:"DennisEdwards.jpg",childImageSharp:{fluid:{aspectRatio:1.510688836104513,src:"/static/62bef75d16e7b31b221762533c9a6162/37d73/DennisEdwards.jpg",srcSet:"/static/62bef75d16e7b31b221762533c9a6162/87c5e/DennisEdwards.jpg 175w,\n/static/62bef75d16e7b31b221762533c9a6162/dec55/DennisEdwards.jpg 350w,\n/static/62bef75d16e7b31b221762533c9a6162/37d73/DennisEdwards.jpg 636w",sizes:"(max-width: 636px) 100vw, 636px"}}},{relativePath:"DonaldQuarrie.jpg",childImageSharp:{fluid:{aspectRatio:1.622478386167147,src:"/static/b9b2ac3b3fa0631d9164826c5cf7cd91/6a421/DonaldQuarrie.jpg",srcSet:"/static/b9b2ac3b3fa0631d9164826c5cf7cd91/87c5e/DonaldQuarrie.jpg 175w,\n/static/b9b2ac3b3fa0631d9164826c5cf7cd91/dec55/DonaldQuarrie.jpg 350w,\n/static/b9b2ac3b3fa0631d9164826c5cf7cd91/6a421/DonaldQuarrie.jpg 563w",sizes:"(max-width: 563px) 100vw, 563px"}}},{relativePath:"FrederickDouglass.jpg",childImageSharp:{fluid:{aspectRatio:1.779935275080906,src:"/static/c13ff293139e1856b6f948cf18c487d9/13e10/FrederickDouglass.jpg",srcSet:"/static/c13ff293139e1856b6f948cf18c487d9/87c5e/FrederickDouglass.jpg 175w,\n/static/c13ff293139e1856b6f948cf18c487d9/dec55/FrederickDouglass.jpg 350w,\n/static/c13ff293139e1856b6f948cf18c487d9/13e10/FrederickDouglass.jpg 700w,\n/static/c13ff293139e1856b6f948cf18c487d9/1e2f4/FrederickDouglass.jpg 1050w,\n/static/c13ff293139e1856b6f948cf18c487d9/fbffe/FrederickDouglass.jpg 1100w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"GaryColeman.jpg",childImageSharp:{fluid:{aspectRatio:2,src:"/static/a7500e66bd65b6c616858b446f248793/13e10/GaryColeman.jpg",srcSet:"/static/a7500e66bd65b6c616858b446f248793/87c5e/GaryColeman.jpg 175w,\n/static/a7500e66bd65b6c616858b446f248793/dec55/GaryColeman.jpg 350w,\n/static/a7500e66bd65b6c616858b446f248793/13e10/GaryColeman.jpg 700w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"MarianAnderson.jpg",childImageSharp:{fluid:{aspectRatio:1.781925343811395,src:"/static/1d0dd9d0b6a0fdf31432298c759e0935/13e10/MarianAnderson.jpg",srcSet:"/static/1d0dd9d0b6a0fdf31432298c759e0935/87c5e/MarianAnderson.jpg 175w,\n/static/1d0dd9d0b6a0fdf31432298c759e0935/dec55/MarianAnderson.jpg 350w,\n/static/1d0dd9d0b6a0fdf31432298c759e0935/13e10/MarianAnderson.jpg 700w,\n/static/1d0dd9d0b6a0fdf31432298c759e0935/079a6/MarianAnderson.jpg 907w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"ToniMorrison.jpg",childImageSharp:{fluid:{aspectRatio:1.3702928870292888,src:"/static/c660ff5badb8b1364d2638884e336bb4/d3160/ToniMorrison.jpg",srcSet:"/static/c660ff5badb8b1364d2638884e336bb4/87c5e/ToniMorrison.jpg 175w,\n/static/c660ff5badb8b1364d2638884e336bb4/dec55/ToniMorrison.jpg 350w,\n/static/c660ff5badb8b1364d2638884e336bb4/d3160/ToniMorrison.jpg 655w",sizes:"(max-width: 655px) 100vw, 655px"}}},{relativePath:"WEBDuBois.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/c9cd623b3e45ce54531f444606d20647/13e10/WEBDuBois.jpg",srcSet:"/static/c9cd623b3e45ce54531f444606d20647/87c5e/WEBDuBois.jpg 175w,\n/static/c9cd623b3e45ce54531f444606d20647/dec55/WEBDuBois.jpg 350w,\n/static/c9cd623b3e45ce54531f444606d20647/13e10/WEBDuBois.jpg 700w,\n/static/c9cd623b3e45ce54531f444606d20647/1e2f4/WEBDuBois.jpg 1050w,\n/static/c9cd623b3e45ce54531f444606d20647/81ef8/WEBDuBois.jpg 1200w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"BrianHolland.jpg",childImageSharp:{fluid:{aspectRatio:1.492537313432836,src:"/static/8bdd0062c5116e6e272dce5de7c10738/775d9/BrianHolland.jpg",srcSet:"/static/8bdd0062c5116e6e272dce5de7c10738/87c5e/BrianHolland.jpg 175w,\n/static/8bdd0062c5116e6e272dce5de7c10738/dec55/BrianHolland.jpg 350w,\n/static/8bdd0062c5116e6e272dce5de7c10738/775d9/BrianHolland.jpg 600w",sizes:"(max-width: 600px) 100vw, 600px"}}},{relativePath:"DanielJames.jpg",childImageSharp:{fluid:{aspectRatio:2.1870967741935483,src:"/static/48da60b86ac1d34c294ba7be4816dfdf/13e10/DanielJames.jpg",srcSet:"/static/48da60b86ac1d34c294ba7be4816dfdf/87c5e/DanielJames.jpg 175w,\n/static/48da60b86ac1d34c294ba7be4816dfdf/dec55/DanielJames.jpg 350w,\n/static/48da60b86ac1d34c294ba7be4816dfdf/13e10/DanielJames.jpg 700w,\n/static/48da60b86ac1d34c294ba7be4816dfdf/b225e/DanielJames.jpg 1017w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"EmmettJScott.jpg",childImageSharp:{fluid:{aspectRatio:2.0083333333333333,src:"/static/4515acb460fb1f8887b195bc0dcbc3b4/13e10/EmmettJScott.jpg",srcSet:"/static/4515acb460fb1f8887b195bc0dcbc3b4/87c5e/EmmettJScott.jpg 175w,\n/static/4515acb460fb1f8887b195bc0dcbc3b4/dec55/EmmettJScott.jpg 350w,\n/static/4515acb460fb1f8887b195bc0dcbc3b4/13e10/EmmettJScott.jpg 700w,\n/static/4515acb460fb1f8887b195bc0dcbc3b4/27e6e/EmmettJScott.jpg 964w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"FloydMayweatherJr.jpg",childImageSharp:{fluid:{aspectRatio:1.5,src:"/static/022f1b15cdc274dbf1183011b9980255/13e10/FloydMayweatherJr.jpg",srcSet:"/static/022f1b15cdc274dbf1183011b9980255/87c5e/FloydMayweatherJr.jpg 175w,\n/static/022f1b15cdc274dbf1183011b9980255/dec55/FloydMayweatherJr.jpg 350w,\n/static/022f1b15cdc274dbf1183011b9980255/13e10/FloydMayweatherJr.jpg 700w,\n/static/022f1b15cdc274dbf1183011b9980255/1e2f4/FloydMayweatherJr.jpg 1050w,\n/static/022f1b15cdc274dbf1183011b9980255/81ef8/FloydMayweatherJr.jpg 1200w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"JuliusErving.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/de8563825c88a43bf1ebe7671b0f36ba/13e10/JuliusErving.jpg",srcSet:"/static/de8563825c88a43bf1ebe7671b0f36ba/87c5e/JuliusErving.jpg 175w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/dec55/JuliusErving.jpg 350w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/13e10/JuliusErving.jpg 700w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/1e2f4/JuliusErving.jpg 1050w,\n/static/de8563825c88a43bf1ebe7671b0f36ba/c108b/JuliusErving.jpg 1280w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"NinaSimone.jpg",childImageSharp:{fluid:{aspectRatio:1.1263345195729537,src:"/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/91275/NinaSimone.jpg",srcSet:"/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/87c5e/NinaSimone.jpg 175w,\n/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/dec55/NinaSimone.jpg 350w,\n/static/d41b0dc7f934a1a9bf6ab34c9fcc4f1f/91275/NinaSimone.jpg 633w",sizes:"(max-width: 633px) 100vw, 633px"}}},{relativePath:"SmokeyRobinson.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/08dea12ffb0eef2ee224e240bfb304db/13e10/SmokeyRobinson.jpg",srcSet:"/static/08dea12ffb0eef2ee224e240bfb304db/87c5e/SmokeyRobinson.jpg 175w,\n/static/08dea12ffb0eef2ee224e240bfb304db/dec55/SmokeyRobinson.jpg 350w,\n/static/08dea12ffb0eef2ee224e240bfb304db/13e10/SmokeyRobinson.jpg 700w,\n/static/08dea12ffb0eef2ee224e240bfb304db/0a89a/SmokeyRobinson.jpg 960w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"RosaParks.jpg",childImageSharp:{fluid:{aspectRatio:1.9057071960297767,src:"/static/dafa58163888c90c8c2c2622bffaaac5/13e10/RosaParks.jpg",srcSet:"/static/dafa58163888c90c8c2c2622bffaaac5/87c5e/RosaParks.jpg 175w,\n/static/dafa58163888c90c8c2c2622bffaaac5/dec55/RosaParks.jpg 350w,\n/static/dafa58163888c90c8c2c2622bffaaac5/13e10/RosaParks.jpg 700w,\n/static/dafa58163888c90c8c2c2622bffaaac5/9a42c/RosaParks.jpg 768w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"MelvinTolson.jpg",childImageSharp:{fluid:{aspectRatio:1.5112219451371571,src:"/static/e674955e9bc8cf93057eba584a5e55fe/b88f4/MelvinTolson.jpg",srcSet:"/static/e674955e9bc8cf93057eba584a5e55fe/87c5e/MelvinTolson.jpg 175w,\n/static/e674955e9bc8cf93057eba584a5e55fe/dec55/MelvinTolson.jpg 350w,\n/static/e674955e9bc8cf93057eba584a5e55fe/b88f4/MelvinTolson.jpg 606w",sizes:"(max-width: 606px) 100vw, 606px"}}},{relativePath:"LevarBurton.jpg",childImageSharp:{fluid:{aspectRatio:1.3333333333333333,src:"/static/18df9c9032f9a108954779460b936395/13e10/LevarBurton.jpg",srcSet:"/static/18df9c9032f9a108954779460b936395/87c5e/LevarBurton.jpg 175w,\n/static/18df9c9032f9a108954779460b936395/dec55/LevarBurton.jpg 350w,\n/static/18df9c9032f9a108954779460b936395/13e10/LevarBurton.jpg 700w,\n/static/18df9c9032f9a108954779460b936395/abd5f/LevarBurton.jpg 880w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"MichaelJordan.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/aaeecd69b98a46d50c8aa5054d0c2895/13e10/MichaelJordan.jpg",srcSet:"/static/aaeecd69b98a46d50c8aa5054d0c2895/87c5e/MichaelJordan.jpg 175w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/dec55/MichaelJordan.jpg 350w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/13e10/MichaelJordan.jpg 700w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/1e2f4/MichaelJordan.jpg 1050w,\n/static/aaeecd69b98a46d50c8aa5054d0c2895/c108b/MichaelJordan.jpg 1280w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"ChrisRock.jpg",childImageSharp:{fluid:{aspectRatio:1.3333333333333333,src:"/static/58d9ec61564666e4466bb062bb7e92b7/13e10/ChrisRock.jpg",srcSet:"/static/58d9ec61564666e4466bb062bb7e92b7/87c5e/ChrisRock.jpg 175w,\n/static/58d9ec61564666e4466bb062bb7e92b7/dec55/ChrisRock.jpg 350w,\n/static/58d9ec61564666e4466bb062bb7e92b7/13e10/ChrisRock.jpg 700w,\n/static/58d9ec61564666e4466bb062bb7e92b7/1e2f4/ChrisRock.jpg 1050w,\n/static/58d9ec61564666e4466bb062bb7e92b7/3dc2b/ChrisRock.jpg 1400w,\n/static/58d9ec61564666e4466bb062bb7e92b7/0e68c/ChrisRock.jpg 2100w,\n/static/58d9ec61564666e4466bb062bb7e92b7/c82f6/ChrisRock.jpg 2400w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"HankAaron.jpg",childImageSharp:{fluid:{aspectRatio:1.7777777777777777,src:"/static/a1fef9492dfcf05af548ff66b03f3710/13e10/HankAaron.jpg",srcSet:"/static/a1fef9492dfcf05af548ff66b03f3710/87c5e/HankAaron.jpg 175w,\n/static/a1fef9492dfcf05af548ff66b03f3710/dec55/HankAaron.jpg 350w,\n/static/a1fef9492dfcf05af548ff66b03f3710/13e10/HankAaron.jpg 700w,\n/static/a1fef9492dfcf05af548ff66b03f3710/1e2f4/HankAaron.jpg 1050w,\n/static/a1fef9492dfcf05af548ff66b03f3710/3dc2b/HankAaron.jpg 1400w,\n/static/a1fef9492dfcf05af548ff66b03f3710/14dee/HankAaron.jpg 1920w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"LeontynePrice.jpg",childImageSharp:{fluid:{aspectRatio:1.5,src:"/static/6a99c35d1a3102f84ab8fb06aa6ef25f/13e10/LeontynePrice.jpg",srcSet:"/static/6a99c35d1a3102f84ab8fb06aa6ef25f/87c5e/LeontynePrice.jpg 175w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/dec55/LeontynePrice.jpg 350w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/13e10/LeontynePrice.jpg 700w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/1e2f4/LeontynePrice.jpg 1050w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/3dc2b/LeontynePrice.jpg 1400w,\n/static/6a99c35d1a3102f84ab8fb06aa6ef25f/2a5e2/LeontynePrice.jpg 1500w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"AliceWalker.jpg",childImageSharp:{fluid:{aspectRatio:1.490104772991851,src:"/static/10093272b96a5b4031aad0dde016998f/13e10/AliceWalker.jpg",srcSet:"/static/10093272b96a5b4031aad0dde016998f/87c5e/AliceWalker.jpg 175w,\n/static/10093272b96a5b4031aad0dde016998f/dec55/AliceWalker.jpg 350w,\n/static/10093272b96a5b4031aad0dde016998f/13e10/AliceWalker.jpg 700w,\n/static/10093272b96a5b4031aad0dde016998f/1e2f4/AliceWalker.jpg 1050w,\n/static/10093272b96a5b4031aad0dde016998f/c108b/AliceWalker.jpg 1280w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"SidneyPoitier.jpg",childImageSharp:{fluid:{aspectRatio:1.9047619047619047,src:"/static/2cf290dc9efa76ea8ff345c80b97c922/13e10/SidneyPoitier.jpg",srcSet:"/static/2cf290dc9efa76ea8ff345c80b97c922/87c5e/SidneyPoitier.jpg 175w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/dec55/SidneyPoitier.jpg 350w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/13e10/SidneyPoitier.jpg 700w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/1e2f4/SidneyPoitier.jpg 1050w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/3dc2b/SidneyPoitier.jpg 1400w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/0e68c/SidneyPoitier.jpg 2100w,\n/static/2cf290dc9efa76ea8ff345c80b97c922/9421f/SidneyPoitier.jpg 3200w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"LangstonHughes.jpg",childImageSharp:{fluid:{aspectRatio:1.266046511627907,src:"/static/f781a3f333b4d088a4b405b90b33e700/13e10/LangstonHughes.jpg",srcSet:"/static/f781a3f333b4d088a4b405b90b33e700/87c5e/LangstonHughes.jpg 175w,\n/static/f781a3f333b4d088a4b405b90b33e700/dec55/LangstonHughes.jpg 350w,\n/static/f781a3f333b4d088a4b405b90b33e700/13e10/LangstonHughes.jpg 700w,\n/static/f781a3f333b4d088a4b405b90b33e700/1e2f4/LangstonHughes.jpg 1050w,\n/static/f781a3f333b4d088a4b405b90b33e700/3dc2b/LangstonHughes.jpg 1400w,\n/static/f781a3f333b4d088a4b405b90b33e700/0e68c/LangstonHughes.jpg 2100w,\n/static/f781a3f333b4d088a4b405b90b33e700/a5ed5/LangstonHughes.jpg 2722w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"ArsenioHall.jpg",childImageSharp:{fluid:{aspectRatio:1.6,src:"/static/f2c05b9d323238b794be5b8bc4180288/13e10/ArsenioHall.jpg",srcSet:"/static/f2c05b9d323238b794be5b8bc4180288/87c5e/ArsenioHall.jpg 175w,\n/static/f2c05b9d323238b794be5b8bc4180288/dec55/ArsenioHall.jpg 350w,\n/static/f2c05b9d323238b794be5b8bc4180288/13e10/ArsenioHall.jpg 700w,\n/static/f2c05b9d323238b794be5b8bc4180288/1e2f4/ArsenioHall.jpg 1050w,\n/static/f2c05b9d323238b794be5b8bc4180288/8a760/ArsenioHall.jpg 1240w",sizes:"(max-width: 700px) 100vw, 700px"}}},{relativePath:"WilliamArtis.jpg",childImageSharp:{fluid:{aspectRatio:.815,src:"/static/9f147b40deb45fd4e1c8bcdc2f953a42/13e10/WilliamArtis.jpg",srcSet:"/static/9f147b40deb45fd4e1c8bcdc2f953a42/87c5e/WilliamArtis.jpg 175w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/dec55/WilliamArtis.jpg 350w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/13e10/WilliamArtis.jpg 700w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/1e2f4/WilliamArtis.jpg 1050w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/3dc2b/WilliamArtis.jpg 1400w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/0e68c/WilliamArtis.jpg 2100w,\n/static/9f147b40deb45fd4e1c8bcdc2f953a42/8f00a/WilliamArtis.jpg 2445w",sizes:"(max-width: 700px) 100vw, 700px"}}}]}}}},173:function(e){e.exports={data:{allSitePage:{edges:[{node:{path:"/dev-404-page/",context:null}},{node:{path:"/offline-plugin-app-shell-fallback/",context:{name:null,birth:null,death:null,about:null,link:null}}},{node:{path:"/LangstonHughes",context:{name:"Langston Hughes",birth:"2.1.1902",death:"5.22.1967",about:"Attended Columbia University, but left after one year to travel. His poetry was later promoted by Vachel Lindsay, and Hughes published his first book in 1926. He went on to write countless works of poetry, prose and plays, as well as a popular column for the Chicago Defender.",link:"https://www.biography.com/people/langston-hughes-9346313"}}},{node:{path:"/WilliamArtis",context:{name:"William Artis",birth:"2.2.1914",death:"4.3.1977",about:"Artis’ work, along with many other African American artists, helped create an artistic revival in the Black community at this time known as the Harlem Renaissance. Artis is known widely for his sculptures and busts. He studied sculpture and pottery under master sculptor Augusta Savage at the Augusta Savage Studios in the early 1930s.",link:"http://thesource.com/2016/02/02/today-in-black-history-celebrating-sculptor-william-artis/"}}},{node:{path:"/DennisEdwards",context:{name:"Dennis Edwards",birth:"2.3.1943",death:"2.1.2018",about:'Became a lead singer of the Motown hitmakers the Temptations in 1968 as they embraced psychedelic funk and won Grammy Awards for the songs "Papa Was a Rollin’ Stone" and "Cloud Nine,"',link:"https://www.nytimes.com/2018/02/02/obituaries/dennis-edwards-former-temptations-lead-singer-dies-at-74.html"}}},{node:{path:"/RosaParks",context:{name:"Rosa Parks",birth:"2.4.1913",death:"10.24.2005",about:'Was nationally recognized as the "mother of the modern day civil rights movement" in America. Her refusal to surrender her seat to a white male passenger on a Montgomery, Alabama bus, December 1, 1955, triggered a wave of protest December 5, 1955 that reverberated throughout the United States.',link:"http://www.rosaparks.org/biography/"}}},{node:{path:"/HankAaron",context:{name:"Hank Aaron",birth:"2.5.1934",death:null,about:"Major league baseball's leading home run hitter, with a career total of 755 home runs from 1954 to 1976. He also broke ground for the participation of African Americans in professional sports.",link:"https://www.notablebiographies.com/A-An/Aaron-Hank.html"}}},{node:{path:"/MelvinTolson",context:{name:"Melvin Tolson",birth:"2.6.1898",death:"8.29.1966",about:'Known as one of the most significant African American modernist poets of his time. In addition, Tolson’s work as an educator led Langston Hughes to declare him "the most famous Negro Professor in the Southwest" in the mid-twentieth century.',link:"https://blackpast.org/aaw/tolson-melvin-b-1898-1966"}}},{node:{path:"/ChrisRock",context:{name:"Chris Rock",birth:"2.7.1965",death:null,about:"Was discovered at 18 by Eddie Murphy at New York's Comedy Strip. He went on to appear in films and on Saturday Night Live, and soon released his first comedy album.",link:"https://www.biography.com/people/chris-rock-9542306"}}},{node:{path:"/GaryColeman",context:{name:"Gary Coleman",birth:"2.8.1968",death:"5.28.2010",about:"Became a star of the hit sitcom Different Strokes in 1978 at age 10 playing the character Arnold Jackson. Coleman's common exclamation on the show, \"What'choo talkin' 'bout, Willis?\", quickly became a pop culture catch-phrase.",link:"https://www.biography.com/people/gary-coleman-15720749"}}},{node:{path:"/AliceWalker",context:{name:"Alice Walker",birth:"2.9.1944",death:null,about:"The author of short stories and novels, essays and poetry and activist for racial civil rights, women’s equality and peace among other causes, Alice Walker brought black women’s lives into primary focus as a rich and important subject for US American literature.",link:"http://www.fembio.org/english/biography.php/woman/biography/alice-walker/"}}},{node:{path:"/LeontynePrice",context:{name:"Leontyne Price",birth:"2.10.1927",death:null,about:"Was the first African American singer to gain international stardom in opera, an art form previously reserved for the upper-class white society.",link:"https://www.notablebiographies.com/Pe-Pu/Price-Leontyne.html"}}},{node:{path:"/DanielJames",context:{name:"Daniel James",birth:"2.11.1920",death:"2.25.1978",about:"Was the first African American to become a four-star general in the U.S. Air Force and instructed African American pilots during WWII.",link:"https://www.biography.com/people/daniel-james-jr-9352497"}}},{node:{path:"/ArsenioHall",context:{name:"Arsenio Hall",birth:"2.12.1956",death:null,about:"Best known as the first black late-night talk show host. His groundbreaking talk show The Arsenio Hall Show ran from 1989-1994.",link:"https://www.biography.com/people/arsenio-hall-9542195"}}},{node:{path:"/EmmettJScott",context:{name:"Emmett J Scott",birth:"2.13.1873",death:"12.12.1957",about:"Garnered a reputation as Booker T. Washington’s chief aide.  He was also the highest ranking African American in the Woodrow Wilson’s Administration.",link:"https://blackpast.org/aah/scott-emmett-j-1873-1957"}}},{node:{path:"/FrederickDouglass",context:{name:"Frederick Douglass",birth:"c. 2.14.1818",death:"2.20.1895",about:"Became one of the most famous intellectuals of his time, advising presidents and lecturing to thousands on a range of causes, including women’s rights and Irish home rule.",link:"https://www.biography.com/people/frederick-douglass-9278324"}}},{node:{path:"/BrianHolland",context:{name:"Brian Holland",birth:"2.15.1941",death:null,about:"Helped pioneer the classic Motown sound of the 1960s. His songs, including “Stop! In the Name of Love,” “Baby I Need Your Loving’ and “Come See About Me” became hit recordings for the Supremes, the Four Tops and Martha & the Vandellas.",link:"https://www.songhall.org/profile/Brian_Holland"}}},{node:{path:"/LevarBurton",context:{name:"Levar Burton",birth:"2.16.1957",death:null,about:"Two years into college, Burton was chosen for the lead role in the television miniseries Roots, which launched his career. In 1983, he became the host of PBS's Reading Rainbow, a show aimed at teaching young children to read that won five Emmy Awards over its more than 20-year run (1983-2009).",link:"https://www.biography.com/people/levar-burton-538182"}}},{node:{path:"/MichaelJordan",context:{name:"Michael Jordan",birth:"2.17.1963",death:null,about:"Although, a summary of his basketball career and influence on the game inevitably fails to do it justice, as a phenomenal athlete with a unique combination of fundamental soundness, grace, speed, power, artistry, improvisational ability and an unquenchable competitive desire, Jordan single-handedly redefined the NBA superstar.",link:"http://www.nba.com/history/players/jordan_bio.html"}}},{node:{path:"/ToniMorrison",context:{name:"Toni Morrison",birth:"2.18.1931",death:null,about:"American writer noted for her examination of black experience (particularly black female experience) within the black community. She received the Nobel Prize for Literature in 1993.",link:"https://www.britannica.com/biography/Toni-Morrison"}}},{node:{path:"/SmokeyRobinson",context:{name:"Smokey Robinson",birth:"2.19.1940",death:null,about:'A prolific songwriter, he is credited with 4,000 songs and 37 Top 40 hits, including "Tears of a Clown," "Tracks of My Tears," and "Love Machine." Robinson also served as vice president of Motown records, writing and producing hits for groups such as The Temptations ("My Girl") and Mary Wells ("My Guy").',link:"https://www.biography.com/people/smokey-robinson-9460972"}}},{node:{path:"/SidneyPoitier",context:{name:"Sidney Poitier",birth:"2.20.1927",death:null,about:"Bahamian American actor, director, and producer who broke the colour barrier in the U.S. motion-picture industry by becoming the first African American actor to win an Academy Award for best actor (for Lilies of the Field [1963]) and the first black movie star. He also redefined roles for African Americans by rejecting parts that were based on racial stereotypes.",link:"https://www.britannica.com/biography/Sidney-Poitier"}}},{node:{path:"/NinaSimone",context:{name:"Nina Simone",birth:"2.21.1933",death:"4.21.2003",about:"One of the most gifted vocalists of her generation, and also one of the most eclectic. Simone was a singer, pianist, and songwriter who bent genres to her will rather than allowing herself to be confined by their boundaries; her work swung back and forth between jazz, blues, soul, classical, R&B, pop, gospel, and world music, with passion, emotional honesty, and a strong grasp of technique as the constants of her musical career.",link:"https://www.allmusic.com/artist/nina-simone-mn0000411761/biography"}}},{node:{path:"/JuliusErving",context:{name:"Julius Erving",birth:"2.22.1950",death:null,about:"Was the dominant player of his era and an innovator who changed the way the game was played. He was a wizard with the ball, performing feats never before seen: midair spins and whirls punctuated by powerful slam dunks.",link:"http://www.nba.com/history/legends/profiles/julius-erving"}}},{node:{path:"/WEBDuBois",context:{name:"W.E.B. Du Bois",birth:"2.23.1868",death:"8.27.1963",about:"Wrote extensively and was the best known spokesperson for African-American rights during the first half of the 20th century. He co-founded the National Association for the Advancement of Colored People (NAACP) in 1909.",link:"https://www.biography.com/people/web-du-bois-9279924"}}},{node:{path:"/FloydMayweatherJr",context:{name:"Floyd Mayweather Jr.",birth:"2.24.1977",death:null,about:"American boxer whose combination of speed, power, and technical prowess made him one of the best pound-for-pound fighters of all time.",link:"https://www.britannica.com/biography/Floyd-Mayweather-Jr"}}},{node:{path:"/DonaldQuarrie",context:{name:"Donald Quarrie",birth:"2.25.1951",death:null,about:"Regarded as one of the finest sprinters in the history of track and field. He is also considered the greatest runner around the bend.",link:"https://jamaicans.com/jasports_donquarrie/"}}},{node:{path:"/AntoineDomino",context:{name:"Antoine Domino",birth:"2.26.1928",death:"10.24.2017",about:'Counted among rock "n" roll’s pioneers, and in his heyday during the 1950s he racked up more than 100 combined Billboard pop and rhythm and blues hits.',link:"https://www.biography.com/news/fats-domino-obituary"}}},{node:{path:"/MarianAnderson",context:{name:"Marian Anderson",birth:"2.27.1897",death:"4.8.1993",about:"Deemed one of the finest contraltos of her time, Marian Anderson became the first African American to perform with the New York Metropolitan Opera in 1955.",link:"https://www.biography.com/people/marian-anderson-9184422"}}},{node:{path:"/CharlesSmith",context:{name:"Charles Smith",birth:"2.28.1945",death:"8.3.2011",about:"Impressed many fans as much for his role as the soft-spoken Moses Hightower in six Police Academy films (1984–89) as he did during his nine seasons (1967–76) as an NFL defensive lineman.",link:"https://www.britannica.com/biography/Bubba-Smith"}}},{node:{path:"/404/",context:{name:null,birth:null,death:null,about:null,link:null}}},{node:{path:"/",context:{name:null,birth:null,death:null,about:null,link:null}}},{node:{path:"/404.html",context:{name:null,birth:null,death:null,about:null,link:null}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d9e3d5fcd8ea1558d547.js.map