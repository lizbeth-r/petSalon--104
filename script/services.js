//constructor 
    function Service(title,price){
        this.title=title;
        this.price=price;
    }
    function isValidService(service){
        let validTitle=true;
        let validPrice=true;
    
        if(service.title==""){
            validTitle=false;
            $(".titleValidationMsg").css("color","red").show();
        }else{
            $(".titleValidationMsg").hide();
        }
        if(service.price==""){
            validPrice=false;
            $(".priceValidationMsg").css("color","red").show();
        }else{
            $(".priceValidationMsg").hide();
        }
    
        return validTitle && validPrice;
    }
    //use jquery
    function register() {
        console.log("Register");
    
        let inputTitle = $("#txtTitle").val();
        let inputPrice = $("#txtPrice").val();
    
        let service = new Service(inputTitle, inputPrice);
    
        if (isValidService(service)) {
            save(service);
            $("input").val("");
        }
    }
    
    function init(){
        //hook events
        $("#btnRegister").on('click',register);
    
        $(".titleValidationMsg").hide();
        $(".priceValidationMsg").hide();
    }
    
    window.onload=init;