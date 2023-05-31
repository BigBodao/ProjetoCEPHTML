function buscarCEP() {
    var cep = document.getElementById('cepInput').value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.erro) {
                document.getElementById('resultContainer').style.display = 'none';
                alert('CEP não encontrado. Por favor, verifique o CEP digitado.');
            } else {
                document.getElementById('resultContainer').style.display = 'block';
                document.getElementById('logradouro').textContent = data.logradouro;
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}
