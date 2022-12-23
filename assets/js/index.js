const texto = document.querySelector("#texto");
const textEncriptedP = document.querySelector("#encrypited_content");
const noContent = document.querySelector("#no_content");
const textEncriptedParagrafo = document.querySelector("#text_content")
const warning = document.querySelector("#warning");


const encript = () => {
    if(texto.value.length > 0){
        const textContent = texto.value;
        const textEncripted = textContent.replaceAll('e', "enter").replaceAll('i', "imes").replaceAll('a', "ai").replaceAll('o', "ober").replaceAll('u', "ufat");
        
        noContent.classList.add("hidden");
        textEncriptedP.classList.remove("hidden");
        textEncriptedP.classList.add("encrypited_content");
        
        textEncriptedParagrafo.textContent = textEncripted;

        if(warning.textContent.length > 1){
            warning.classList.add("hidden");
        }

    }else{
        warning.textContent = "Não deixe o campo vazio";
        warning.classList.add("warning");
        warning.classList.remove("hidden");


    }
}

const decrypt = () => {
    if(texto.value.length > 0){
        const textContent = texto.value;
        const textEncripted = textContent.replaceAll("enter", 'e').replaceAll("imes", 'i').replaceAll("ai", 'a').replaceAll("ober", 'o').replaceAll("ufat", 'u');
        
        noContent.classList.add("hidden");
        textEncriptedP.classList.remove("hidden");
        textEncriptedP.classList.add("encrypited_content");
        
        textEncriptedParagrafo.textContent = textEncripted;

        if(warning.textContent.length > 1){
            warning.classList.add("hidden");
        }

    }else{
        warning.textContent = "Não deixe o campo vazio";
        warning.classList.add("warning");
        warning.classList.remove("hidden");


    }
}

const copyText = async () => {
    try {
        await navigator.clipboard.writeText(
          textEncriptedParagrafo.textContent
        );
        console.log("Content copied to clipboard");
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
}