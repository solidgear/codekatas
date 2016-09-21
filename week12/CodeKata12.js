//Function that calculates the price of a letter depending on its weigth
function obtainPrice(weigth)
{
    //Definition of the variable price
    var price = -1;
    
    //Depending on the weigth of the letter a different price is set
    if(weigth < 0)
    {
        console.log("Weigth cannot be negative");
        return(-1);
    }
    else if(weigth <= 10)
        price = 0.25;
    else if(weigth <= 50)
        price = 0.35;
    else if(weigth <= 75)
        price = 0.45;
    else if(weigth <=100)
        price = 0.55;
    
    //The price is returned
    console.log("Price = " + price);
    return(price);
}