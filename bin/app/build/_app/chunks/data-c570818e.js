async function r(r,t,o){try{const e=await r(`api/${o}`,{method:"POST",body:t,headers:{"Content-Type":"text/plain"}});if(e.ok){return await e.json()}return{status:e.status,error:new Error(`API error: ${e.json()}`)}}catch(e){console.error(`API error: ${e}`)}}export{r as g};
