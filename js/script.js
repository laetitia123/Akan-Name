function calculate(){
        var male=["Kwasi", "wadwo", "Kwabena", "Kwaku","Yaw",  "Kofi ","Kwame"];
        var female =["Akosua","Adwoa", "Abenaa", "Akua", "Yaa","Afua" ,"Ama"]
        var Days=["Sunday",",Monday", "Tuesday", "Wednesday", "Thursday","Friday" ,"Saturday"]
        
        var year = document.getElementById("year").value;
      
        var gender=document.querySelector("input[name='gender']:checked").value;
        console.log(gender);
        var month= document.getElementById("month").value;
        var day= document.getElementById("day").value;
       document.getElementById("get").innerHTML= "your date is "+ day +"/" +month +"/" +year;
        var yy=parseInt(year);
        var dd=parseInt(day);
        var mm=parseInt(month);
        var CC=(year-1)/100+1;
        var d=( ( (CC/4)-2*CC-1)+((5*yy/4) )+((26*(mm+1)/10)) +dd )%7;
       
        if (year== ""|| gender=="" )
        
        {
        alert("Please fill all ");
        
        }
        else if (month == ""|| day=="")
        {
        alert("Please fill all ");
        }
        else if(gender==""){
          alert("pease fill the gender")
        
       
        }
        else if(month<=0||month >12){
        alert("please fill the correct month input");
        }
        else if(day <=0|| day>31){
          alert("please fill the correct day input");
        }
        else if (year <=0){
          alert("please fill the correct year");
        }
       
      
           else{
             
            if (gender =="male"){
              document.getElementById("d").innerHTML=("you are born on " + Days[Math.round(d)]);
              document.getElementById("me").textContent=("your akan name is" +  male[Math.round(d)]);

            }
            else{
              document.getElementById("d").innerHTML=("you are born on " + Days[Math.round(d)]);
              document.getElementById("me").textContent=("your  Akan name is " +  female[Math.round(d)]);
            }
          }
        }
        