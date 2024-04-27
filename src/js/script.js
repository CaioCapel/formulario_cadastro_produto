document.addEventListener('DOMContentLoaded', function() {
    // Atualiza os formulários quando a quantidade é alterada
    document.getElementById('quantidade').addEventListener('change', function() {
        const quantidade = parseInt(this.value);
        const container = document.getElementById('formulariosContainer');
        container.innerHTML = ''; // Limpa os formulários existentes

        // Adiciona os novos formulários conforme a quantidade selecionada
        for (let i = 0; i < quantidade; i++) {
            const novoFormulario = `
    <div class="formulario">
        <h2>Solicitação ${i + 1}</h2>
        <!-- Campos do formulário -->
        <label for="empresa${i + 1}">Empresa:</label>
        <select id="empresa${i + 1}" name="empresa${i + 1}">
        <option value="" disabled selected>--selecione--</option>
            <option value="MANGUEIRA">MANGUEIRA</option>
            <option value="TAPETE">TAPETE</option>
        </select>

        <label for="sav${i + 1}">Projeto SAV:</label>
        <select id="sav${i + 1}" name="sav${i + 1}" onchange="toggleCampoSav(${i + 1})">
            <option value="" disabled selected>--selecione--</option>
            <option value="nao">Não</option>
            <option value="sim">Sim</option>
        </select>
        <input type="text" id="input-sav${i + 1}" name="input-sav${i + 1}" style="display: none;" placeholder="Digite o projeto SAV">

        <label for="centroCusto${i + 1}">Centro de Custo:</label>
        <input type="text" id="centroCusto${i + 1}" name="centroCusto${i + 1}" oninput="validarCentroCusto(${i + 1})">

        <label for="detalhamento${i + 1}">Detalhamento/Finalidade:</label>
        <textarea id="detalhamento${i + 1}" name="detalhamento${i + 1}" rows="4" cols="50"></textarea>
      
        <label for="descritivo${i + 1}">Descritivo do Material:</label>
        <input type="text" id="descritivo${i + 1}" name="descritivo${i + 1}">

        <label for="ncm${i + 1}">NCM:</label>
        <input type="text" id="ncm${i + 1}" name="ncm${i + 1}">

        <label for="importado${i + 1}">Material Importado?</label>
        <select id="importado${i + 1}" name="importado${i + 1}" onchange="toggleValor(${i + 1})">
            <option value="" disabled selected>--selecione--</option>
            <option value="NÃO">Não</option>
            <option value="SIM">Sim</option>
        </select>

        <label for="valorEstimado${i + 1}" id="labelValorEstimado${i + 1}" style="display: none;">Digite o valor estimado:</label>
        <input type="number" id="valorEstimado${i + 1}" name="valorEstimado${i + 1}" class="input-estimado" style="display: none;" onchange="calcularValor(${i + 1})" placeholder="Digite o valor estimado">


        <div id="valorConvertido${i + 1}" style="display: none;"></div>

        <label for="tipoMaterial${i + 1}">Tipo do Material:</label>
        <select id="tipoMaterial${i + 1}" name="tipoMaterial${i + 1}" onchange="toggleCampoAdicional(${i + 1})">
            <option value="" disabled selected>--selecione--</option>
            <option value="MF">MATERIAL DE FERRAMENTARIA</option>
            <option value="MP">MATERIA PRIMA</option>
            <option value="MC">MATERIAL DE CONSUMO</option>
            <option value="MN">MATERIAL DE MANUTENÇÃO</option>
            <option value="GG">EPI'S</option>
            <option value="AI">ATIVO IMOBILIZADO</option>
            <option value="EM">EMBALAGEM</option>
            <option value="SV">SERVIÇO</option>
            <option value="FM">FERRAMENTAL</option>
            <option value="MT">MATERIAL DE TERCEIROS</option>
            <option value="DW">DATAWAKE</option>
            <!-- Outras opções aqui -->
        </select>

        <!-- Campo adicional -->
        <div id="campoAdicional${i + 1}" style="display: none;">
                <label for="campoExtra${i + 1}">Escolha:</label>
                <select id="campoExtra${i + 1}" name="campoExtra${i + 1}">
                    <option value="">-- Selecione --</option>
                    <option value="ALIMENTAÇÕES">ALIMENTAÇÕES</option>
                    <option value="BRINDES">BRINDES</option>
                    <option value="CESTA BÁSICA">CESTA BÁSICA</option>
                    <option value="DIVERSOS">DIVERSOS</option>
                    <option value="INFORMÁTICA">INFORMÁTICA</option>
                    <option value="LIMPEZA">LIMPEZA</option>
                    <option value="MATERIAL DE ESCRITORIO">MATERIAL DE ESCRITORIO</option>
                    <option value="MATERIAL DE CONSTRUÇÃO">MATERIAL DE CONSTRUÇÃO</option>
                    <option value="MATERIAL DE VEICULOS">MATERIAL DE VEICULOS</option>
                    <option value="MOVEIS">MOVEIS</option>
                    <option value="PRODUÇÃO">PRODUÇÃO</option>
                    <option value="SEGURANÇA">SEGURANÇA</option>
                </select>
            </div>

            <!-- Campo adicional -->
        <div id="campoCodigoRef${i + 1}" style="display: none;">
                <label for="campoCodRef${i + 1}"></label>
                <select id="campoCodRef${i + 1}" name="campoCodRef${i + 1}">
                    <option value="">-- Selecione --</option>
                    <option value="ALIMENTAÇÕES">ALIMENTAÇÕES</option>
                    <option value="BRINDES">BRINDES</option>
                    <option value="CESTA BÁSICA">CESTA BÁSICA</option>
                    <option value="DIVERSOS">DIVERSOS</option>
                    <option value="INFORMÁTICA">INFORMÁTICA</option>
                    <option value="LIMPEZA">LIMPEZA</option>
                    <option value="MATERIAL DE ESCRITORIO">MATERIAL DE ESCRITORIO</option>
                    <option value="MATERIAL DE CONSTRUÇÃO">MATERIAL DE CONSTRUÇÃO</option>
                    <option value="MATERIAL DE VEICULOS">MATERIAL DE VEICULOS</option>
                    <option value="MOVEIS">MOVEIS</option>
                    <option value="PRODUÇÃO">PRODUÇÃO</option>
                    <option value="SEGURANÇA">SEGURANÇA</option>
                </select>
            </div>

            <!-- Campo adicional -->
        <div id="campoAdicional1${i + 1}" style="display: none;">
                <label for="campoExtra1${i + 1}">Escolha:</label>
                <select id="campoExtra1${i + 1}" name="campoExtra1${i + 1}">
                    <option value="">-- Selecione --</option>
                    <option value="MANUTENÇÃO ELÉTRICA">MANUTENÇÃO ELÉTRICA</option>
                    <option value="MANUTENÇÃO MECÂNICA">MANUTENÇÃO MECÂNICA</option>
                    <option value="MANUTENÇÃO PREDIAL">MANUTENÇÃO PREDIAL</option>
                </select>
            </div>

            <!-- Campo adicional -->
            <div id="campoAdicional2${i + 1}" style="display: none;">
                    <label for="campoExtra2${i + 1}">Escolha:</label>
                    <select id="campoExtra2${i + 1}" name="campoExtra2${i + 1}">
                        <option value="">-- Selecione --</option>
                        <option value="PROTHEUS DATAWAKE">PROTHEUS DATAWAKE</option>
                        <option value="PROTHEUS PARANOA">PROTHEUS PARANOA</option>
                    </select>
                </div>

                <!-- Campo adicional -->
                <div id="campoAdicional3${i + 1}" style="display: none;">
                        <label for="campoExtra3${i + 1}">Escolha:</label>
                        <select id="campoExtra3${i + 1}" name="campoExtra3${i + 1}">
                            <option value="">-- Selecione --</option>
                            <option value="UNIFORMES">UNIFORMES</option>
                            <option value="EQUIPAMENTOS DE SEGURANÇA">EQUIPAMENTOS DE SEGURANÇA</option>
                        </select>
                    </div>

                    <!-- Campo adicional -->
                <div id="campoAdicional4${i + 1}" style="display: none;">
                        <label for="campoExtra4${i + 1}">Escolha:</label>
                        <select id="campoExtra4${i + 1}" name="campoExtra4${i + 1}">
                            <option value="">-- Selecione --</option>
                            <option value="MAQUINAS E EQUIPAMENTOS">MAQUINAS E EQUIPAMENTOS</option>
                            <option value="MOVEIS E UTENSILIOS">MOVEIS E UTENSILIOS</option>
                            <option value="VEICULOS">VEICULOS</option>
                            <option value="BENFEITORIAS">BENFEITORIAS</option>
                            <option value="PROCESSAMENTO DE DADOS">PROCESSAMENTO DE DADOS</option>
                        </select>
                        <!-- Novos campos para Ativo Imobilizado -->
                        <div id="campoUtilizacao${i + 1}" style="display: none;">
                            <label for="utilizacao${i + 1}">Utilização:</label>
                            <select id="utilizacao${i + 1}" name="utilizacao${i + 1}">
                                <option value="">-- Selecione --</option>
                                <option value="FABRICA">FABRICA</option>
                                <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
                                <option value="LABORATORIO">LABORATORIO</option>
                            </select>
                        </div>
                        
                        <div id="campoCondicao${i + 1}" style="display: none;">
                            <label for="condicao${i + 1}">Condição:</label>
                            <select id="condicao${i + 1}" name="condicao${i + 1}">
                                <option value="">-- Selecione --</option>
                                <option value="NOVO">NOVO</option>
                                <option value="USADO">USADO</option>
                            </select>
                            </div>
                    </div>



            <div id="codigoReferencia${i + 1}" style="display: none;" >
            <label for="codigoReferencia${i + 1}">Código de Referência:</label>
            <input type="text" id="codigoReferencia${i + 1}" name="codigoReferencia${i + 1}">
        </div>
        

        <label for="unidadeMedida${i + 1}">Unidade de Medida:</label> 
        <select id="unidadeMedida${i + 1}" name="unidadeMedida${i + 1}">
            <option value="" disabled selected>--selecione--</option>
            <option value="BR- BARRA">BARRA</option>
            <option value="BD- BALDE">BALDE</option>
            <option value="CX- CAIXA">CAIXA</option>
            <option value="CJ- CONJUNTO">CONJUNTO</option>
            <option value="GL- GALAO">GALAO</option>
            <option value="JG- JOGO">JOGO</option>
            <option value="KIT- KIT">KIT</option>
            <option value="LT- LATA">LATA</option>
            <option value="L- LITRO">LITRO</option>
            <option value="M- METRO">METRO</option>
            <option value="M3- METRO CUBICO">METRO CUBICO</option>
            <option value="M2- METRO QUADRADO">METRO QUADRADO</option>
            <option value="MM- MILIMETRO">MILIMETRO</option>
            <option value="PC- PEÇA">PEÇA</option>
            <option value="PT- PACOTE">PACOTE</option>
            <option value="P- PAR">PAR</option>
            <option value="KG- QUILOGRAMA">QUILOGRAMA</option>
            <option value="RL- ROLO">ROLO</option>
            <option value="SC- SACO">SACO</option>
            <!-- Outras opções aqui -->
        </select>
    </div>
`;

            container.insertAdjacentHTML('beforeend', novoFormulario);
        }
    });

    // Dispara o evento 'change' ao carregar a página para exibir o formulário inicial
    document.getElementById('quantidade').dispatchEvent(new Event('change'));
});


// Dentro da função toggleValor(index)
function toggleValor(index) {
    const select = document.getElementById(`importado${index}`);
    const valorEstimado = document.getElementById(`valorEstimado${index}`);

    // Exibe ou oculta o campo de valor estimado com base na seleção do usuário
    if (select.value === "SIM" || select.value === "NÃO") {
        valorEstimado.style.display = 'block';
    } else {
        valorEstimado.style.display = 'none';
        valorEstimado.value = "";
    }

    // Adiciona ou remove o placeholder conforme a seleção do usuário
    if (select.value === "SIM" || select.value === "NÃO") {
        valorEstimado.placeholder = "Digite o valor estimado";
    } else {
        valorEstimado.placeholder = "";
    }
}


function calcularValor(index) {
    const select = document.getElementById(`importado${index}`);
    const valorEstimado = parseFloat(document.getElementById(`valorEstimado${index}`).value);
    const valorConvertido = document.getElementById(`valorConvertido${index}`);

    if (select.value === "SIM" && !isNaN(valorEstimado)) {
        const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
        const valorConvertidoBRL = valorEstimado * 5.5; // Considerando 1 USD = 5.5 BRL (apenas para exemplo)
        valorConvertido.textContent = `Valor Estimado: ${formatter.format(valorConvertidoBRL)}`;
        valorConvertido.style.display = 'block';
    } else {
        valorConvertido.textContent = "";
        valorConvertido.style.display = 'none';
    }
}


function toggleCampoSav(index) {
    const select = document.getElementById(`sav${index}`);
    const inputSav = document.getElementById(`input-sav${index}`);

    // Exibe ou oculta o campo de entrada do SAV com base na seleção do usuário
    if (select.value === "sim") {
        inputSav.style.display = 'block'; // Exibe o input do SAV
        inputSav.placeholder = "Digite a SAV"; // Adiciona um placeholder ao input
    } else {
        inputSav.style.display = 'none'; // Oculta o input do SAV
    }
}

function toggleCampoCodigoReferencia(index) {
    const tipoMaterial = document.getElementById(`tipoMaterial${index}`);
    const codigoReferencia = document.getElementById(`codigoReferencia${index}`);

    // Verifica se o tipo de material é FERRAMENTAL (FM) e mostra o campo de referência se for
    if (tipoMaterial.value === "FM") {
        codigoReferencia.style.display = 'block'; // Exibe o campo de referência
    } else {
        codigoReferencia.style.display = 'none'; // Oculta o campo de referência
    }
}

// Função para alternar o campo adicional com base no tipo de material selecionado
function toggleCampoAdicional(index) {
    const tipoMaterial = document.getElementById(`tipoMaterial${index}`);
    const campoAdicional = document.getElementById(`campoAdicional${index}`);
    const campoExtra = document.getElementById(`campoExtra${index}`);
    const campoAdicional1 = document.getElementById(`campoAdicional1${index}`); 
    const campoExtra1 = document.getElementById(`campoExtra1${index}`); 
    const campoAdicional2 = document.getElementById(`campoAdicional2${index}`); 
    const campoExtra2 = document.getElementById(`campoExtra2${index}`); 
    const campoAdicional3 = document.getElementById(`campoAdicional3${index}`); 
    const campoExtra3 = document.getElementById(`campoExtra3${index}`); 
    const campoAdicional4 = document.getElementById(`campoAdicional4${index}`); 
    const campoExtra4 = document.getElementById(`campoExtra4${index}`);
    const campoUtilizacao = document.getElementById(`campoUtilizacao${index}`);
    const campoCondicao = document.getElementById(`campoCondicao${index}`);
    const campoCodigoRef = document.getElementById(`campoCodigoRef${index}`);
    const campoCodRef = document.getElementById(`campoCodRef${index}`);
    const codigoReferencia = document.getElementById(`codigoReferencia${index}`);

    // Verifica o tipo de material selecionado e exibe os campos adicionais correspondentes
    switch (tipoMaterial.value) {
        case "MC": // MATERIAL DE CONSUMO
            campoAdicional.style.display = 'block'; 
            campoExtra.style.display = 'block';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional2.style.display = 'none'; 
            campoExtra2.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
        case "MN": // MATERIAL DE MANUTENÇÃO
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'block'; 
            campoExtra1.style.display = 'block'; 
            campoAdicional2.style.display = 'none'; 
            campoExtra2.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
        case "DW": // DATAWAKE
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional2.style.display = 'block'; 
            campoExtra2.style.display = 'block'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
        case "GG": // EPI'S
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional2.style.display = 'none'; 
            campoExtra2.style.display = 'none'; 
            campoAdicional3.style.display = 'block'; 
            campoExtra3.style.display = 'block'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            codigoReferencia.style.display = 'none';
            break;
            case "AI": // MATERIAL DE CONSUMO
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional2.style.display = 'none'; 
            campoExtra2.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'block'; 
            campoExtra4.style.display = 'block';
            campoUtilizacao.style.display = 'block'; // Exibe o campo de Utilização
            campoCondicao.style.display = 'block'; // Exibe o campo de Condição
            codigoReferencia.style.display = 'none';
            break;
        case "FM": // FERRAMENTAL
            campoCodigoRef.style.display = 'block'; 
            campoCodRef.style.display = 'none';
            campoAdicional1.style.display = 'none'; // Oculta o campo adicional para MN
            campoExtra1.style.display = 'none'; // Oculta o campo extra para MN
            toggleCampoCodigoReferencia(index); // Chama a função para o tipo FM
            break;
        default:
            campoAdicional.style.display = 'none'; 
            campoExtra.style.display = 'none';
            campoAdicional1.style.display = 'none'; 
            campoExtra1.style.display = 'none'; 
            campoAdicional2.style.display = 'none'; 
            campoExtra2.style.display = 'none'; 
            campoAdicional3.style.display = 'none'; 
            campoExtra3.style.display = 'none'; 
            campoAdicional4.style.display = 'none'; 
            campoExtra4.style.display = 'none';
            campoUtilizacao.style.display = 'none'; // Exibe o campo de Utilização
            campoCondicao.style.display = 'none'; // Exibe o campo de Condição
            codigoReferencia.style.display = 'none';
            break;
    }
}




