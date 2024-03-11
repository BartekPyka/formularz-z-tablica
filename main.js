let userArr = [
    {
    userID: 'asdfas',
    userName: 'Ola',
    userCity: 'Gliwice',
    userAge: '17'
    }  , 


    {
    userID: 'rmdbki',
    userName: 'Tomek',
    userCity: 'Zabrze',
    userAge: '34'
    }  , 


    {
    userID: 'vcbns',
    userName: 'Karol',
    userCity: 'Warszawa',
    userAge: '52'
    }  , 


    {
    userID: 'wertrw',
    userName: 'Zosia',
    userCity: 'Pyskowice',
    userAge: '23'
    } ,  



    {
    userID: 'dfhfgh',
    userName: 'Ola',
    usercity: 'Gliwice',
    userAge: '17'
    },   
]

const userName = document.querySelector('#name')
const userCity = document.querySelector('#city')
const userAge = document.querySelector('#age')
const bnt = document.querySelector('#btn')
const form = document.querySelector('#form')
const list = document.querySelector('#list')


bnt.addEventListener('click', evt =>{
    

        let user = 
            {
                userName: userName.value,
                userCity: userCity.value,
                userAge: userAge.value,
            };
        
            userArr.unshift(user)
            list.innerHTML="";


            userArr.forEach(element =>{
                const li = document.createElement('li')
                const btn = document.createElement('button')
                li.innerHTML = `<span><strong>${element.userName}</strong> W wieku ${element.userAge} z <strong>${element.userCity}</strong></span>`;
                li.classList.add('list-group-item')
                btn.classList.add('btn', 'btn-outline-danger')
                btn.innerHTML = 'X';
                li.append(btn)
                list.append(li)
            
            });
});








