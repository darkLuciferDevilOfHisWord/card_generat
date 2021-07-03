class Box{
    constructor(name,course,author){
        this.name = name;
        this.course = course;
        this.author = author;
    }

    validate(){
        if(this.name.length > 0 && this.course.length > 0 && this.author.length > 0){
            return true;
        }
        else{
            false;
        }
    }

    blank(){
        let form =document.getElementById('form');
        form.reset();
    }

    display(){
        let boxContainer = document.getElementById('boxContainer');
        let randomImageNum = Math.floor(Math.random()*5);
        let randomImage;
        switch(randomImageNum){
            case 0: randomImage = 'https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_silver.png'; break;
            case 1: randomImage = 'https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg'; break;
            case 2: randomImage = 'https://i.pinimg.com/originals/ce/3e/15/ce3e1572ddbbcf815acfea1876c86f27.jpg'; break;
            case 3: randomImage = 'https://img.freepik.com/free-vector/dark-paper-layers-wallpaper-with-golden-details_23-2148403401.jpg?size=626&ext=jpg'; break;
            case 4: randomImage = 'https://wallpapercave.com/wp/wp2646303.jpg'; break;
            default: randomImage = 'https://thumbs.dreamstime.com/b/d-wallpaper-background-decoration-design-wall-high-n-floral-photo-mural-163063382.jpg'; break;
        }
        console.log(randomImage);
        let html = `
        <div class="card my-4" style="width: 18rem;">
            <img src="${randomImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="my-3 mt-0">
                    <span class="bg-warning px-1 fs-6 rounded fw-bold">Name : </span>
                    <span class="fw-bold ps-3">${this.name}</span>
                </div>
                <div class="my-3">
                    <span class="bg-success px-1 fs-6 text-light rounded fw-bold">Course : </span>
                    <span class="fw-bold ps-3">${this.course}</span>
                </div>
                <div class="my-3 mb-0">
                    <span class="bg-danger px-1 fs-6 text-light rounded fw-bold">Author : </span>
                    <span class="fw-bold ps-3">${this.author}</span>
                </div>
            </div>
        </div>`;

        setTimeout(function(){
            boxContainer.innerHTML += html;
        },2500);
    }

    alert(type,text){
        let msg = document.getElementById('msg');
        let msgAlert = `<div class="alert alert-${type}" role="alert">
        ${text}
      </div>`;
      msg.innerHTML = msgAlert;
      setTimeout(function(){
          msg.innerHTML = '';
      },2500);
    }

    loading(){
        let arroeLoading = document.getElementById('arrowLoading');
        arroeLoading.innerHTML = `
        <div class="d-flex justify-content-center">
            <img class="w-25 h-25 rotate" id='loading' src="https://image.flaticon.com/icons/png/512/74/74818.png" alt="">
        </div>`;
    

        setTimeout(function(){
            arroeLoading.innerHTML = '';
        },2500);
    }
}

let form =document.getElementById('form');
form.addEventListener('submit',Submit);

function Submit(x){
    let name = document.getElementById('name').value;
    let course = document.getElementById('course').value;
    let author = document.getElementById('author').value;

    let box = new Box(name,course,author);
    if(box.validate()){
        box.blank();
        box.display();
        box.alert('success','calculating....')
        box.loading();
    }
    else{
        box.alert('danger','First fill the complete form')
    }
    x.preventDefault();
}