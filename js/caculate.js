document.getElementById("per-player-button").addEventListener('click',function(){

   const playerFiled=document.getElementById('per-player') ;
  const playerString=playerFiled.value;
  const playerAmount=parseFloat(playerString);
  //console.log(playerAmount);

  const playerExpense=document.getElementById("player-expense");

  playerExpense.innerText= playerAmount*5;



});
document.getElementById("calculate-total-button").addEventListener('click',function(){

    const managerFiled=document.getElementById("manager");
    const managerString= managerFiled.value;
    const managerAmount=parseFloat( managerString);
    console.log(managerAmount)
     
    const coachFiled=document.getElementById("coach");
    const coachString= coachFiled.value;
    const coachAmount=parseFloat(coachString);
    console.log(coachAmount)

    const playerExpense=document.getElementById("player-expense").innerText;
    const playerExpenseNumber=parseFloat(playerExpense);
    console.log(playerExpense);

     const total=coachAmount+managerAmount+playerExpenseNumber;
     const totalClculate=document.getElementById("total");
     

     totalClculate.innerText=total;

    






})