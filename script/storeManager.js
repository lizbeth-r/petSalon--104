function save(item){
    let list = read();// getting [] or LS info
    list.push(item); //push the new item
    console.log(list);

    let val=JSON.stringify(list); //parse obj into string
    console.log(val);//string
    localStorage.setItem("services",val);
}

function read(){
    let data=localStorage.getItem("services"); //read the LS (string)
    if(!data){//not data
        //the LS is empty
        return []; //empty array
    }else{
        //we have info on the LS
        let list = JSON.parse(data); //convert the string into an array/obj
        //return the obj/array
        return list;//the array
    }
    
}