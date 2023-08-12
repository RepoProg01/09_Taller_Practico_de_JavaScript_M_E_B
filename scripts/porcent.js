
const productList = document.querySelector(".productList");
const bigImgContainer = document.querySelector(".bigImgContainer-img");
const priceProduct = document.querySelector(".priceProduct");
const titleProduct = document.querySelector(".titleProduct");
const descriptionProcuct = document.querySelector(".descriptionProduct");
const totalsRowSubtotal = document.querySelector(".totalsRowSubtotal");
const totalsRowDescuento = document.querySelector(".totalsRowDescuento");
const totalsRowTotal = document.querySelector(".totalsRowTotal");
const cuponText = document.querySelector(".cupon_text");
const btnValidar = document.querySelector(".btnValidar");
const cuponContainerId = document.querySelector("#cupon_container-id");
const btnMenu = document.querySelector(".btnMenu");
const secNav = document.querySelector(".secNav");
const titleMain = document.querySelector(".titleMain");
const content = document.querySelector(".content");
const bodyV = document.querySelector(".body")
let actualPrice = 0;

btnMenu.addEventListener("click", menuFnc);

function menuFnc(){
    content.classList.add("off");
    titleMain.classList.remove("off");
    icons.classList.remove("off");

    cuponText.innerHTML = `Introduce tu cupon de descuento`;
    cuponContainerId.value = "";
    totalsRowSubtotal.innerHTML = "";
    totalsRowDescuento.innerHTML = "";
    totalsRowTotal.innerHTML = "";

    document.documentElement.scrollTop = 0;
}

const icons = document.querySelector(".icons");

products.forEach(photo => {
    const varImg = document.createElement("img");
    varImg.setAttribute("src", photo.imagen1);
    varImg.classList.add("imgT");

    const varDiv = document.createElement("div");
    varDiv.classList.add("iconImg");
    varDiv.appendChild(varImg);
    varImg.addEventListener("click", defProduct);

    icons.appendChild(varDiv);
});

function defProduct(event){
    titleMain.classList.add("off");
    icons.classList.add("off");
    content.classList.remove("off");
    const objS = products.find(objSelect => objSelect.imagen1 === event.target.currentSrc);
    load(objS);
};

const conversion = (amount) => {
    const number = amount.toFixed(2);
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return `$ ${number.toString().replace(exp,rep)}`;
}

function load(objeto){
    
    productList.innerHTML =`
        <img class="imgProduct" src = ${objeto.imagen1} alt = "Foto Producto1">
        <img class="imgProduct" src = ${objeto.imagen2} alt = "Foto Producto2">
        <img class="imgProduct" src = ${objeto.imagen3} alt = "Foto Producto3">
        <img class="imgProduct" src = ${objeto.imagen4} alt = "Foto Producto4">
        `;
    actualPrice = objeto.price;
    priceProduct.innerHTML = conversion(actualPrice);
    titleProduct.innerHTML = objeto.title;
    descriptionProcuct.innerHTML = objeto.description;
    bigImgContainer.setAttribute("src", objeto.imagen1);

    const imgProduct = document.querySelectorAll(".imgProduct");

    imgProduct.forEach(item => {
        item.addEventListener("click", () => {
            bigImgContainer.setAttribute("src", item.src);
        });
    })

    document.documentElement.scrollTop = 0;
}

btnValidar.addEventListener("click", codeDescuento);

function codeDescuento(){
    const objetoCodigo = codigos.find(objC => objC.codigo == cuponContainerId.value);
    if(objetoCodigo){
        cuponText.innerHTML = `Tienes un % ${objetoCodigo.descuento} de descuento`;
        totalsRowSubtotal.innerHTML = conversion(actualPrice);
        const desT = actualPrice * objetoCodigo.descuento / 100;
        totalsRowDescuento.innerHTML = conversion(desT);
        const totT = actualPrice - desT;
        totalsRowTotal.innerHTML = conversion(totT);
    }else{
        cuponText.innerHTML = `Codigo invalido`;
        totalsRowSubtotal.innerHTML = conversion(actualPrice);
        totalsRowDescuento.innerHTML = "Sin descuento";
        totalsRowTotal.innerHTML = conversion(actualPrice);
    }
}



