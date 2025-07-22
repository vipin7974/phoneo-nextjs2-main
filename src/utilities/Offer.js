export const originalPrice=(price)=>{
    if(price>=9000 && price<=19999){
        return price+1000
    }
    if(price>=20000 && price<=29999){
        return price+2000
    }
    if(price>=30000 && price<=39999){
        return price+3000
    }
    if(price>=40000 && price<=49999){
        return price+4000
    }
    if(price>=50000 && price<=59999){
        return price+5000
    }
    if(price>=60000 && price<=69999){
        return price+6000
    }
    if(price>=70000 && price<=79999){
        return price+7000
    }
    if(price>=80000 && price<=89999){
        return price+8000
    }
    if(price>=90000 && price<=99999){
        return price+9000
    }
    if(price>=100000 && price<=109999){
        return price+9000
    }
    if(price>=110000 && price<=119999){
        return price+8000
    }
    else{
        return price;
    }

}

export const offerPercent=(realPrice,salePrice)=>{
    if(realPrice==salePrice){
        return `0%`
    }else{
        return `${Math.round((realPrice-salePrice)*100/realPrice)}%`
    }
}