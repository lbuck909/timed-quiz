// setup all needed elements
const begin_btn = document.querySelector(".begin_btn button");
const rules_box = document.querySelectory(".rules_box");
const quit = rules_box.querySelectory(".quit");
const continue = rules_box.querySelectory(".continue");

//When Begin Button clicked
begin_btn.oneclick = ()=>{
  rules_box.rules_list.add("activeInfo"); // display 
}
// If user clicks Quit Quiz 
quit.oneclick = ()=>{
  rules_box.rules_list.remove("activeInfo"); // hide the rules once 
}
