// START
const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const ulEl = document.querySelector('ul');
const buttonEl = document.querySelector('button');

formEl.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = inputEl.value.trim();
    if(text){
        inputEl.value = '';

        const liEl = document.createElement('li');

        const checkBoxEl = document.createElement('input');
        checkBoxEl.setAttribute('type','checkbox');
        liEl.prepend(checkBoxEl);
        
        const spanEl = document.createElement('span');
        spanEl.textContent = text;
        liEl.appendChild(spanEl);
        
        const iconEl = document.createElement('i');
        iconEl.innerHTML = '&times;'
        iconEl.classList.add('delete');
        liEl.appendChild(iconEl);

        ulEl.prepend(liEl);
    };
});

ulEl.addEventListener('click',(e)=>{
    // delete by 1
    if(e.target.classList.contains('delete')){
        confirm('Delete') ? e.target.parentElement.remove() : false;
    };
    
    // delete all
    if(e.target.classList.contains('delete-all')){
        confirm('Delete All') ? ulEl.innerHTML = '' : false;
        ulEl.appendChild(buttonEl);
    };
});

ulEl.addEventListener('dblclick',(e)=>{
    // target li:after
    e.target.tagName === 'LI' ? e.target.classList.toggle("bg-green") : false;
});

ulEl.addEventListener('click',(e)=>{
    // target li:after
    e.target.checked ? e.target.parentElement.classList.add("bg-green") : e.target.parentElement.classList.remove("bg-green");
});
// THE END