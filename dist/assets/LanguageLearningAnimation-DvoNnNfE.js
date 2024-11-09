import{j as t,m as e}from"./index-C5-ZFHZV.js";const o=()=>{const s={animate:{y:[-10,10,-10],transition:{duration:4,repeat:1/0,ease:"easeInOut"}}},r=[{text:"Hello",lang:"English",emoji:"🇬🇧"},{text:"Bonjour",lang:"French",emoji:"🇫🇷"},{text:"Hola",lang:"Spanish",emoji:"🇪🇸"},{text:"你好",lang:"Chinese",emoji:"🇨🇳"},{text:"こんにちは",lang:"Japanese",emoji:"🇯🇵"}];return t.jsx("div",{className:"w-full max-w-lg mx-auto md:max-w-xl lg:max-w-2xl flex justify-center items-center",children:t.jsxs(e.svg,{viewBox:"0 0 800 600",className:"w-full h-auto",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"bgGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",style:{stopColor:"#7e22ce",stopOpacity:.15}}),t.jsx("stop",{offset:"50%",style:{stopColor:"#9333ea",stopOpacity:.1}}),t.jsx("stop",{offset:"100%",style:{stopColor:"#7e22ce",stopOpacity:.15}})]}),t.jsxs("linearGradient",{id:"deviceGradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"0%",style:{stopColor:"#9333ea",stopOpacity:1}}),t.jsx("stop",{offset:"50%",style:{stopColor:"#7e22ce",stopOpacity:1}}),t.jsx("stop",{offset:"100%",style:{stopColor:"#6b21a8",stopOpacity:1}})]}),t.jsxs("filter",{id:"glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[t.jsx("feGaussianBlur",{stdDeviation:"4",result:"coloredBlur"}),t.jsxs("feMerge",{children:[t.jsx("feMergeNode",{in:"coloredBlur"}),t.jsx("feMergeNode",{in:"SourceGraphic"})]})]}),t.jsxs("radialGradient",{id:"particleGradient",children:[t.jsx("stop",{offset:"0%",stopColor:"#9333ea",stopOpacity:"0.9"}),t.jsx("stop",{offset:"100%",stopColor:"#7e22ce",stopOpacity:"0.4"})]})]}),t.jsx("rect",{x:"0",y:"0",width:"800",height:"600",fill:"url(#bgGradient)"}),Array.from({length:20}).map((a,i)=>t.jsx(e.circle,{r:Math.random()*5+2,fill:"url(#particleGradient)",filter:"url(#glow)",initial:{x:Math.random()*800,y:Math.random()*600,opacity:Math.random()*.6+.4},animate:{x:Math.random()*800,y:Math.random()*600,opacity:[.4,.8,.4],scale:[1,1.2,1]},transition:{duration:Math.random()*8+8,repeat:1/0,ease:"easeInOut"}},i)),t.jsx(e.g,{transform:"translate(400, 300)",children:t.jsxs(e.g,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{duration:1,type:"spring"},children:[t.jsx(e.path,{d:"M-180 90 L180 90 L150 140 L-150 140 Z",fill:"url(#deviceGradient)",filter:"url(#glow)",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.3}}),t.jsxs(e.g,{whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:[t.jsx(e.rect,{x:"-150",y:"-120",width:"300",height:"200",rx:"12",fill:"url(#deviceGradient)",filter:"url(#glow)"}),t.jsx("rect",{x:"-140",y:"-110",width:"280",height:"180",rx:"10",fill:"#ffffff",stroke:"#7e22ce",strokeWidth:"2"}),t.jsxs(e.g,{children:[t.jsx("rect",{x:"-120",y:"-90",width:"240",height:"8",rx:"4",fill:"#f3e8ff"}),t.jsx(e.rect,{x:"-120",y:"-90",height:"8",rx:"4",fill:"#7e22ce",initial:{width:0},animate:{width:240},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),r.map((a,i)=>t.jsxs(e.g,{initial:{opacity:0,y:20},animate:{opacity:[0,1,0],y:[-20,0,20]},transition:{duration:4,repeat:1/0,delay:i*.6,ease:"easeInOut"},children:[t.jsx("rect",{x:"-100",y:"-50",width:"200",height:"50",rx:"8",fill:`hsl(${280+i*10}, 75%, ${90-i*5}%)`,stroke:"#6b21a8",strokeWidth:"1.5"}),t.jsx("text",{x:"-80",y:"-25",fill:"#4a044e",fontSize:"18",fontWeight:"bold",fontFamily:"Arial",children:a.text}),t.jsxs("text",{x:"60",y:"-25",fill:"#6b21a8",fontSize:"14",fontFamily:"Arial",children:[a.lang," ",a.emoji]})]},i))]})]}),[0,120,240].map((a,i)=>t.jsxs(e.g,{transform:`rotate(${a}) translate(200, 0)`,...s,transition:{delay:i*.3},children:[t.jsx("circle",{r:"22",fill:"url(#deviceGradient)",filter:"url(#glow)",stroke:"#6b21a8",strokeWidth:"2"}),t.jsx("text",{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fontSize:"24",children:["🌟","📚","🎯"][i]})]},i)),t.jsxs(e.g,{transform:"translate(150, -100)",children:[t.jsx("circle",{r:"28",fill:"#f3e8ff",stroke:"#e9d5ff",strokeWidth:"4"}),t.jsx(e.circle,{r:"28",fill:"none",stroke:"#7e22ce",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"175.93",initial:{strokeDashoffset:175.93},animate:{strokeDashoffset:0},transition:{duration:2,repeat:1/0,ease:"easeInOut"}}),t.jsx(e.text,{x:"0",y:"0",textAnchor:"middle",dominantBaseline:"middle",fill:"#4a044e",fontSize:"14",fontWeight:"bold",initial:{scale:.8},animate:{scale:1.1},transition:{duration:1,repeat:1/0,repeatType:"reverse",ease:"easeInOut"},children:"100%"})]})]})}),Array.from({length:8}).map((a,i)=>t.jsx(e.circle,{r:"5",fill:"#7e22ce",filter:"url(#glow)",initial:{x:Math.random()*800,y:Math.random()*600},animate:{scale:[1,1.8,1],opacity:[.6,1,.6]},transition:{duration:4,delay:i*.3,repeat:1/0,ease:"easeInOut"}},i))]})})};export{o as default};
//# sourceMappingURL=LanguageLearningAnimation-DvoNnNfE.js.map
