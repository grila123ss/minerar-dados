const url1 = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"

async function redessociais(){
    
    const res1 = await fetch(url1)
    const dados1 = await res1.json()
    console.log(dados1);

    const Facebook = (dados1.Facebook)
    const Youtube = (dados1.Youtube)
    const WhatsApp = (dados1.WhatsApp)
    const Instagram = (dados1.Instagram)
    const Tiktok = (dados1.Tiktok)
    const WeChat = (dados1.WeChat)

    

 const paragrafo1= document.createElement('p')   
 paragrafo1.classList.add('graficos-container__texto')   
 
 paragrafo1.innerHTML = 
 `
 Quantidade de pessoas que utilizam o Face 
 <span>${Facebook} </span> 

 Quantidade de pessoas que utilizam o youtube 
 <span>${Youtube} </span> 

 Quantidade de pessoas que utilizam o whats 
 <span>${WhatsApp} </span> 

 Quantidade de pessoas que utilizam o insta 
 <span>${Instagram} </span> 

 Quantidade de pessoas que utilizam o tiktok
 <span>${Tiktok} </span>
 
 Quantidade de pessoas que utilizam o wechat 
 <span>${WeChat} </span> 
`

const container1 = document.getElementById("graficos-container")
container1.appendChild(paragrafo1)

}

redessociais();