var profile_name = document.querySelector("#profile_name")
function change_name(){
    profile_name.innerHTML = "Jane Doe"
}

var user_row_1 = document.querySelector(".user_row_1")
var user_row_2 = document.querySelector(".user_row_2")
var user_row_3 = document.querySelector(".user_row_3")

function remove(element){
    element.remove()
}


var request_num = document.querySelector(".request_num")
var dec_counter = 3
function request_dec(){
   dec_counter--
   request_num.innerHTML = dec_counter
}

var conn_num = document.querySelector(".conn_num")
var inc_counter = 500

function conn_inc(){
    inc_counter++
    conn_num.innerHTML = inc_counter
}