let btn = document.querySelector("#btn_menu");
let sidebar = document.querySelector(".sidebar");
let search_btn = document.querySelector(".bx-search");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

search_btn.onclick = function(){
    sidebar.classList.toggle("active");
}

const userlist = document.querySelector('.user-list');
var position = ['Manager','Senior','Junior'];
var count = 3;
var n = 1;
// single person
// const avatar = document.querySelector('.avatar');
// const fullname = document.querySelector('.name');
// const email = document.querySelector('.email');

fetch('https://www.mecallapi.com/api/users')
.then((response)=>{
    return response.json();
})
.then((json)=>{
    const users = json;
    
    //single person
    // avatar.src = user.avatar;
    // fullname.innerHTML = user.fname + ' ' + user.lname;
    // email.innerHTML = user.email;
    
    users.forEach((person) => {

        const useritem = document.createElement('div');
        useritem.classList.add('user-item');

        if (count%n == 0){
            console.log(count)
            var staff = document.createElement('p');
            staff.classList.add('staff');
            var get_position = position.shift();
            if (get_position != null){
                console.log(get_position);
                staff.innerHTML = get_position;
                count = 0;
                n++;
            }
        }
        
        const avatar = document.createElement('img');
        avatar.classList.add('avatar');
        avatar.src = person.avatar;
        
        const fullname = document.createElement('label');
        fullname.classList.add('name')
        fullname.innerHTML = person.fname + ' ' + person.lname;
        
        const email = document.createElement('label')
        email.classList.add('email');
        email.innerHTML = person.username;

        if (count == 0){
            useritem.append(staff, avatar, fullname, email);
            userlist.append(useritem);
        }
        else{
            useritem.append(avatar, fullname, email);
            userlist.append(useritem);
        }
        count++;
    })
})
.catch((err)=>{
    console.log(err.message);
});