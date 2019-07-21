function calculate(form){
        var female=["Kwasi", "Kwadwo", "Kwabena", "Kwaku","Yaw",  "Kofi ","Kwame"];
        var male =["Akosua","Adwoa", "Abenaa", "Akua", "Yaa","Afua" ,"Ama"]
        
        var year = document.forms["form"]["year"].value;
       
        var gender = document.forms["form"]["gender"].value;
        var month= document.forms["form"]["month"].value;
        var day= document.forms["form"]["day"].value;
        var yy=parseInt(year);
        var dd=parseInt(day);
        var mm=parseInt(month);
        var CC=(year-1)/100+1;
        var d=( ( (CC/4)-2*CC-1)+((5*yy/4) )+((26*(mm+1)/10)) +dd )%7;
       
        if (year == ""|| gender=="")
        
        {
        alert("Please fill all ");
        
        }
        else if (month == ""|| day=="")
        {
        alert("Please fill all ");
        
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
            //  alert(Math.round(d));
            //  document.write(Math.round(d));
            if (gender =="male"){
              document.getElementById("me")=male[Math.round(d)];
            }
            else{
              alert(female[Math.round(d)]);
            }
          }
        }