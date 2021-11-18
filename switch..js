function matchcase(item){
    var data={
        
        mobile:{
            name1:"apple",
            name2:"smasung",
            name3:"redmi"
        },
    
        tv:{
            name1:"dell",
            name2:"hp",
            name3:"lg"

        },
        food:{
            name1:"biriyani",
            name2:"drink",
            name3:"water"

        },
    };
    switch(item)
    {
        case data.mobile.name1:
        console.log(" mobile brand");
        break;
          

        case data.tv.name1:
            console.log("tv brand")
            break;


            case data.food.name1:
                console.log("food")
                break;

        
    }

}
matchcase("biriyani");

