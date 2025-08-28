// TO DO LIST 
/**Bring_Something_New_To_The_Table.push(...) → naya task add karna.

document.getElementById(...) → HTML element ko access karna.

innerHTML = "" → purani list clear karna taaki fresh list render ho. */
//let tasks=[]; **********************************


let Bring_Something_New_To_The_Table=[];    // array jo ki mere to-do-list ke task ko store karega  


// task add
function addNewTask(newTask){
if(newTask.trim()!==""){   // empty hai ki niii wo check hora hai 
Bring_Something_New_To_The_Table.push({
    text:newTask,
    completed:false});  // text - mtlb jo bhi user task dalega wo , push se - naya elemnt array ke end mei add krrta h,aur default mei jo task haiii wo completed nahi hai 
displayNewTask();
}
}                                        


// yahan se display start krrte hai task ka 
function displayNewTask(){
    const list =document.getElementById("NewtaskList");//*********** */
    list.innerHTML="";r̥r̥

/**document.getElementById("taskList")

Purpose: HTML me jo element id = "taskList" hai, usko access karta hai.
EXAMPLE:    <ul id="taskList"></ul>
Ab list variable ke andar ye <ul> element aa gaya hai. 

list.innerHTML = ""

-> Purpose: Ye element ke andar sab content ko remove kar deta hai.
-> Matlab pehle jo bhi <li> items <ul> ke andar dikh rahe the, wo sab delete ho jaate hain.
-> Iska reason: jab hum naye tasks add ya update karte hain, hum purani list ko clear karke fresh list render karte hain.

*/


Bring_Something_New_To_The_Table.forEach((item,index) => {
 const li = document.createElement("li");    //************** */
    li.textContent = item.text;   // li - html ka tag hai

if(item.completed){               // condition check hori yahan pe ,,Matlab: agar task complete hai, to jo code curly braces { ... } me hai wo execute hoga.
    li.classList.add("completed");
}
//i.classList → <li> element ke CSS classes ka list.
// .add("completed") → <li> me "completed" naam ki class add kar deta hai.
// Iska purpose: CSS ke through strike-through ya alag color dikhana.


// toggle button 
const togglebutton = document.createElement("button");// toggle button create kia ************* */
togglebutton.textContent =item.completed ? "Undo" : "Done"; //text dlaa button pe - complete hua to undo / warna done 
togglebutton.style.marginLeft = "10px";   // spacing ke liye ( baad ki baat hai )
togglebutton.onclick =() => {  // click krrne ke baad kya hoga yeh dikhayega 
 Bring_Something_New_To_The_Table[index].completed 
 = 
 !Bring_Something_New_To_The_Table[index].completed;
      displayNewTask();
    };
    /**This is the main logic of toggling.

bringSomethingNew[index] = gets the task at position index.

.completed = accesses its completed property (true or false).

!bringSomethingNew[index].completed = flips the value (if true → false, if false → true).

So if task was marked completed, it becomes not completed, and vice versa. */
   


// DELETE Button 
const deletebutton =document.createElement("button");
deletebutton.textContent="\u274C";    //  "❌"
 deletebutton.style.marginLeft = "10px";
    deletebutton.onclick = () => {
      Bring_Something_New_To_The_Table.splice(index,1);/**splice(index, 1) → splice ek method hai jo array me se element nikalne (ya add karne) ke kaam aata hai. */
      displayNewTask();
    };

li.appendChild(togglebutton);
li.appendChild(deletebutton);

list.appendChild(li); // append li into ul

});
}


// event listener 
document.getElementById("addbutton").addEventListener("click",() => {

const input =document.getElementById("taskinput");
addNewTask(input.value);
input.value="";
});



