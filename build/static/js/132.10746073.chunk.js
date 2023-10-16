"use strict";(self.webpackChunkmedia_frontend=self.webpackChunkmedia_frontend||[]).push([[132],{7132:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var o=n(9439),i=n(2791),a=n(7689),r=n(9993),c=n(184),l=function(e){var t=e.handleClick,n=e.youtubeID,o=e.length,i=e.descr,a=e.author,r=e.title,l="https://i.ytimg.com/vi/".concat(n,"/maxresdefault.jpg");return(0,c.jsx)("div",{onClick:function(){return t(n)},className:"bg-gray-800 hover:scale-110 duration-200 ease-in shadow-xl group cursor-pointer rounded-md",children:(0,c.jsx)("div",{className:"overflow-auto bg-scroll bg-contain bg-center bg-no-repeat w-full aspect-video\r scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-zinc-800 rounded-md",style:{backgroundImage:"url(".concat(l,")")},children:(0,c.jsx)("div",{className:"w-full min-h-full max-h-max group-hover:backdrop-blur-sm group-hover:backdrop-brightness-50\r duration-300 ease-in flex flex-col justify-center",children:(0,c.jsxs)("div",{className:"mx-2 opacity-0 group-hover:opacity-100 duration-300 ease-in\r text-white",children:[(0,c.jsx)("p",{className:"text-2xl font-bold",children:r}),(0,c.jsxs)("p",{className:"text-md",children:["Author(s): ",a,(0,c.jsx)("br",{}),"Length: ",o,(0,c.jsx)("br",{}),"Description: ",i]})]})})})})},s=function(e){var t=e.videoId;return(0,c.jsx)("div",{className:"relative rounded-md overflow-hidden shadow-md w-full h-full",children:(0,c.jsx)("iframe",{className:"absolute aspect-video w-full h-full",src:"https://www.youtube.com/embed/".concat(t),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"},t)})},d=n(8617);function u(e){var t=e.player,n=e.setPlayer,u=(0,i.useState)([]),h=(0,o.Z)(u,2),x=h[0],m=h[1],f=(0,i.useState)(""),v=(0,o.Z)(f,2),p=v[0],b=v[1],g=(0,i.useState)(""),w=(0,o.Z)(g,2),j=w[0],y=w[1],k=(0,i.useState)("all"),N=(0,o.Z)(k,2),z=N[0],C=N[1],Z=(0,a.TH)();(0,i.useEffect)((function(){n(!1)}),[Z,n]),(0,i.useEffect)((function(){r.Z.getVideos().then((function(e){m(e.data)}))}),[]);var A=function(e){n(!t),b(e)};(0,i.useEffect)((function(){var e=function(e){"Escape"===e.key&&n(!1)};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]);var I=x.filter((function(e){return!!("all"===z||e.category&&e.category===z)&&e.title.toLowerCase().includes(j.toLowerCase())})).map((function(e){return(0,c.jsx)(l,{handleClick:A,youtubeID:e.youtubeID,length:e.length,descr:e.description,author:e.author,title:e.title},e.id)})),D=x.find((function(e){return e.youtubeID===p}));return(0,c.jsxs)("div",{className:"w-auto min-h-[calc(100vh-43px)] max-h-fit bg-zinc-900 text-white flex items-center overflow-hidden",children:[(0,c.jsxs)("div",{className:t?"hidden":"w-full max-w-6xl px-6 mx-auto flex flex-col pb-8 pt-[97px]",children:[(0,c.jsx)("div",{className:"mb-8",children:(0,c.jsx)("h1",{className:"text-4xl font-bold border-b-4 border-red-500 tracking-wider inline",children:"Videos"})}),(0,c.jsxs)("div",{className:"w-full flex flex-col items-start mb-2",children:[(0,c.jsx)("input",{type:"text",placeholder:"Search videos...",value:j,onChange:function(e){return y(e.target.value)},className:"bg-zinc-800 text-white w-full px-4 py-2 rounded-md shadow-md"}),(0,c.jsxs)("div",{className:"my-4 flex gap-6",children:[(0,c.jsx)("button",{onClick:function(){return C("all")},className:"".concat("all"===z?"bg-white text-black":"bg-zinc-700 text-white hover:bg-zinc-600"," px-4 py-2 rounded-xl duration-200 ease-linear shadow-md"),children:"All"}),(0,c.jsx)("button",{onClick:function(){return C("interviews")},className:"".concat("interviews"===z?"bg-white text-black":"bg-zinc-700 text-white hover:bg-zinc-600"," px-4 py-2 rounded-xl duration-200 ease-linear shadow-md"),children:"Interviews"}),(0,c.jsx)("button",{onClick:function(){return C("shorts")},className:"".concat("shorts"===z?"bg-white text-black":"bg-zinc-700 text-white hover:bg-zinc-600"," px-4 py-2 rounded-xl duration-200 ease-linear shadow-md"),children:"Shorts"})]})]}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10",children:I})]}),(0,c.jsxs)("div",{className:t?"relative w-full min-h-screen max-h-fit bg-zinc-900 flex flex-col justify-center items-center":"hidden",children:[(0,c.jsx)("div",{onClick:function(){return n(!1)},className:"fixed top-0 right-0 mr-1 z-10 mt-1",children:(0,c.jsx)(d.apv,{size:30,className:" rounded-2xl bg-zinc-800 text-red-600 hover:rounded-none hover:text-zinc-800 hover:bg-red-600 duration-300 ease-linear cursor-pointer"})}),(0,c.jsx)("div",{className:"flex-none h-9"}),(0,c.jsx)("div",{className:"w-full max-w-5xl mx-auto aspect-video z-0 ",children:(0,c.jsx)(s,{videoId:p})}),(0,c.jsxs)("div",{className:"text-lg w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5",children:[(0,c.jsxs)("p",{className:"text-left",children:["Author: ",null===D||void 0===D?void 0:D.author,(0,c.jsx)("br",{}),"Upload Date: ",null===D||void 0===D?void 0:D.creationDate,(0,c.jsx)("br",{}),"Description: ",null===D||void 0===D?void 0:D.description]}),(0,c.jsxs)("p",{className:"text-left sm:text-right",children:["Views: ",null===D||void 0===D?void 0:D.viewCount,(0,c.jsx)("br",{}),"Likes: ",null===D||void 0===D?void 0:D.likeCount,(0,c.jsx)("br",{}),"Comments: ",null===D||void 0===D?void 0:D.commentCount]})]}),(0,c.jsx)("div",{className:"flex-none h-9"})]})]})}},9993:function(e,t,n){var o=n(5671),i=n(3144),a=n(3263),r="http://localhost",c=function(){function e(){(0,o.Z)(this,e)}return(0,i.Z)(e,[{key:"getVideos",value:function(){return a.Z.get("".concat(r,"/videos"))}},{key:"getVideo",value:function(e){return a.Z.get(e)}},{key:"postVideo",value:function(e,t,n){return a.Z.post("".concat(r,"/videos"),n,{params:{videoId:t},headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}})}},{key:"updateVideo",value:function(e,t,n,o){return a.Z.put("".concat(r,"/videos/").concat(t),n,{params:{videoId:o},headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}})}},{key:"deleteVideo",value:function(e,t){return a.Z.delete("".concat(r,"/videos/").concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}},{key:"getAudios",value:function(){return a.Z.get("".concat(r,"/audios"))}},{key:"getAudio",value:function(e){return a.Z.get(e)}},{key:"postAudio",value:function(e,t){return a.Z.post("".concat(r,"/audios"),t,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}})}},{key:"updateAudio",value:function(e,t,n){return a.Z.put("".concat(r,"/audios/").concat(t),n,{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json"}})}},{key:"deleteAudio",value:function(e,t){return a.Z.delete("".concat(r,"/audios/").concat(t),{headers:{Authorization:"Bearer ".concat(e)}})}}]),e}();t.Z=new c}}]);
//# sourceMappingURL=132.10746073.chunk.js.map