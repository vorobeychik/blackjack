
export function getRandomNumber(num:number):number{
    return Math.floor(Math.random() * num)
}

export function getWeightOfCard(cardValue:string):number{
    let weight = 0;

    if(['K','Q','J'].includes(cardValue)){
        weight = 10;
    }else if(cardValue === 'A'){
        weight = 11;
    }else {
        weight = Number(cardValue)
    }

    return weight;
}

