// Select Elements

// input group
const divMain = document.querySelector('div.main');
const inputGroup = document.querySelector('div.input-group')
const cepInput = document.querySelector('#cepInput');
const consultBtn = document.querySelector('#consult');

// result group
const resultGroup = document.querySelector('div.result');

const cepResult = document.querySelector('#cep');
const cidade = document.querySelector('#cidade');
const estado = document.querySelector('#estado');
const bairro = document.querySelector('#bairro');
const logradouro = document.querySelector('#logradouro');
const ddd = document.querySelector('#ddd');

const divResult = document.querySelector('div.result');
const backBtn = document.querySelector('#back');

// Functions
const toggleDivs = () => {
    divMain.classList.toggle('hide');
    divResult.classList.toggle('hide');
}

const validField = (field) => {
    if (field === '') {
        return 'NÃO ENCONTRADO!';
    } else {
        return field;
    }
}


// Events
consultBtn.addEventListener('click', () => {
    let cep = cepInput.value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    if (cep.length !== 8) {
        alert('CEP Inválido!');
        return;
    }


    fetch(url).then((response) => {
       response.json().then((data) => {
        
        if (data.erro) {
            alert('CEP Inválido!');
            return;
        }

        cepResult.innerHTML = validField(cep);
        cidade.innerHTML = validField(data.localidade);
        estado.innerHTML = validField(data.uf);
        bairro.innerHTML = validField(data.bairro);
        logradouro.innerHTML = validField(data.logradouro);
        ddd.innerHTML = validField(data.ddd);

        toggleDivs();
       });
    });
})

backBtn.addEventListener('click', () => {
    toggleDivs();
})