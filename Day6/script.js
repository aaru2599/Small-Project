
        function amountChange(){
            document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
        }
        function yearChange(){  
            document.getElementById("txtYears").value=document.getElementById("rangeYear").value;
        }
        function interestChange(){
            document.getElementById("txtRate").value=document.getElementById("rangeInterest").value;
        }
        function btnClick(){
    var p=parseInt(document.getElementById("txtAmount").value);            
    var n=parseInt(document.getElementById("txtYears").value)*12;
    var r=parseFloat(document.getElementById("txtRate").value)/12/100
    var emi=p*r*((1+r)**n)/((1+r)**n-1);
    document.getElementById("result").innerHTML="Your monthly installment amount is &#8377;"+Math.round(emi)+" For"+n/12+"years with "+ document.getElementById("txtRate").value +"interest Rate"

        }
    