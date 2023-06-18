import{r as o,j as e,m,p as f,h as t,i as a,c as i,F as l,k as w,n as _,t as C,A as k}from"./index-21abde5c.js";import{I as x}from"./ImgLoader-474bbac4.js";const A=""+new URL("marvin-5d07177b.jpg",import.meta.url).href,S=({onSubmitHandler:s})=>{const[r,n]=o.useState(!1),[p,j]=o.useState(""),[N,d]=o.useState(!1),g=c=>{j(c.target.value)},b=()=>{n(c=>!c)},v=c=>{if(c.preventDefault(),p!=="42")return d(!0);d(!1),s()};return e.jsxs(m.form,{variants:f,id:"contact-question",onSubmit:v,className:t.form,children:[e.jsx(x,{className:t.img,alt:"about me image",src:A}),e.jsx("label",{className:t.question,htmlFor:"answer",children:"Please confirm that you are not a robot. Enter the answer to the ultimate question of life, the universe, and everything."}),e.jsx("input",{className:t.input,id:"answer",value:p,onChange:g,type:"text"}),N&&e.jsx("p",{className:t.error,children:"Oops, wrong answer"}),e.jsx(u,{className:t.btn,type:"submit",children:"Submit"}),e.jsx(u,{onClick:b,className:t.btn,type:"button",children:"Give me a tip"}),r&&e.jsx("p",{className:t.tip,children:"Errors often help to find the correct answer."})]})};var I={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},y={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]};const E=""+new URL("cat-5cf4b353.jpg",import.meta.url).href,D=()=>e.jsxs(m.div,{id:"contact-data",variants:f,className:a.contacts_data,children:[e.jsx(x,{className:a.img,src:E,alt:"Nice cat image"}),e.jsxs("div",{className:a.contacts_url,children:[e.jsx("a",{className:a.link,href:"https://telegram.im/@mskmee",target:"_blank",rel:"noreferrer",children:e.jsxs("div",{className:i(a.telegram_wrapper,a.brand_wrapper),children:[e.jsx(l,{className:a.icon,icon:y,color:"white"}),"Telegram"]})}),e.jsx("a",{className:a.link,href:"https://discord.com/users/983464308992249866",target:"_blank",rel:"noreferrer",children:e.jsxs("div",{className:i(a.discord_wrapper,a.brand_wrapper),children:[e.jsx(l,{className:a.icon,icon:I,color:"white"}),"Discord"]})}),e.jsx("a",{className:a.link,href:"mailto: mskmee2@gmail.com",target:"_blank",rel:"noreferrer",children:e.jsxs("div",{className:i(a.email_wrapper,a.brand_wrapper),children:[e.jsx(l,{className:a.icon,icon:w,color:"white"}),"Email"]})})]})]}),u=({className:s,children:r,...n})=>e.jsx("button",{className:i(s,_.btn),...n,children:r}),q="_contact_1w1vw_1",F="_title_1w1vw_6",h={contact:q,title:F},M=()=>{const[s,r]=o.useState(!1),n=()=>{r(!0)};return e.jsxs("div",{className:h.contact,children:[e.jsx(m.h1,{variants:C,className:i(h.title,"page_title"),children:"Fill free to contact me"}),e.jsx(k,{children:s?e.jsx(D,{}):e.jsx(S,{onSubmitHandler:n})})]})};export{M as default};
