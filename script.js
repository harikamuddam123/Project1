const btn=document.getElementById("btn")

const loancheck=()=>{
    //collecting data from inputs
    const username=document.getElementById("username").value
    const cibil=document.getElementById("cibil").value
    const salary=document.getElementById("salary").value
    const status=document.getElementById("status")
    let loanstatus=true;
    const statusImg=document.getElementById("statusImg")
    let msg="";
    //condition to check the eligibility
    if (cibil >= 800 && salary>=60000){
        msg="you are eligible for 20 lakhs loan"
    }
    else if(cibil>=780&&salary>=50000){
        msg="you are eligible for 15 lakhs loan"

    }
    else if(cibil>=750&&salary>=40000){
        msg="you are eligible for 10 lakhs loan"

    }
    else if(cibil>=720&&salary>=30000){
        msg="you are eligible for 5 lakhs loan"

    }else{
        msg="you are not eligible for loan"
        loanstatus=false
    }
    status.textContent=(msg)

    if(loanstatus){
       // status.style.color="green"
       status.classList="text-bg-success p-2 my-2"
       statusImg.src="assets/success2.jpg"
    }else{
        //status.style.color="red"
      status.classList="text-bg-danger p-2 my-2"
      statusImg.src="assets/success.png"
    }

}

btn.addEventListener("click",loancheck)