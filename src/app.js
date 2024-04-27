const nodemailer = require("nodemailer")

const express = require("express"),
path = require("path")

let transporter = nodemailer.createTransport({
host: "smtp-mail.outlook.com",
port: 587,
secure: false, // Use `true` for port 465, `false` for all other ports
auth: {
    user: "kayque.a.s@hotmail.com",
    pass: "",
},
service: "outlook"
})

const app = express()

app.use(express.static(path.join(__dirname)))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "html", "form.html"))
})

app.post("/", (req, res) => {
    
    const { empresa, centroCusto, detalhamento, descritivo, NCM, importado, valorReais, valorDolar, Tipo_Material, Tipo_MC, Tipo_MN, 
        Tipo_AI, condicao, utilizacao, Tipo_DW, Tipo_GG, Tipo_FM, sav, unidadeMedida, EMAIL, RAMAL, DEPTO } = req.body;
        
    let emailBody = `<h1>Seguem os dados da solicitação de cadastro</h1>`;
    // Adiciona os campos preenchidos ao corpo do e-mail
    if (empresa) emailBody += `<p><b>Empresa: </b>${empresa}</p>`;
    if (centroCusto) emailBody += `<p><b>Centro de Custo: </b>${centroCusto}</p>`;
    if (detalhamento) emailBody += `<p><b>Detalhamento: </b>$(detalhamento)</p>`;
    if (descritivo) emailBody += `<p><b>Descritivo do Material: </b>${descritivo}</p>`;
    if (NCM) emailBody += `<p><b>NCM: </b>${NCM}</p>`;
    if (importado) emailBody += `<p><b>Importado? </b>${importado}</p>`;
    if (valorReais) emailBody += `<p><b>Valor em Reais: </b>${valorReais}</p>`;
    if (valorDolar) emailBody += `<p><b>Valor em Dolar Convertido: </b>${valorDolar}</p>`;
    if (Tipo_Material) emailBody += `<p><b>Tipo do Material: </b>${Tipo_Material}</p>`;
    if (Tipo_MC) emailBody += `<p><b>Tipo MC: </b>${Tipo_MC}</p>`;
    if (Tipo_MN) emailBody += `<p><b>Tipo MN: </b>${Tipo_MN}</p>`;
    if (Tipo_AI) emailBody += `<p><b>Tipo AI: </b>${Tipo_AI}</p>`;
    if (condicao) emailBody += `<p><b>Condicao: </b>${condicao}</p>`;
    if (utilizacao) emailBody += `<p><b>Utilizacao: </b>${utilizacao}</p>`;
    if (Tipo_DW) emailBody += `<p><b>Tipo DW: </b>${Tipo_DW}</p>`;
    if (Tipo_GG) emailBody += `<p><b>Tipo GG: </b>${Tipo_GG}</p>`;
    if (Tipo_FM) emailBody += `<p><b>Código Referencia: </b>${Tipo_FM}</p>`;
    if (unidadeMedida) emailBody += `<p><b>Unidade de Medida: </b>${unidadeMedida}</p>`;
    if (sav) emailBody += `<p><b>Projeto SAV: </b>${sav}</p>`;
    if (EMAIL) emailBody += `<p><b>Email: </b>${EMAIL}</p>`;
    if (RAMAL) emailBody += `<p><b>Ramal: </b>${RAMAL}</p>`;
    if (DEPTO) emailBody += `<p><b>Depto: </b>${DEPTO}</p>`;

    // Envia o e-mail apenas com os campos preenchidos
    transporter.sendMail({
        from: '"Kayque👻" <kayque.a.s@hotmail.com>', // endereço do remetente
        to: "kayque.a.s@hotmail.com", // lista de destinatários
        subject: "Solicitação de Cadastro", // assunto do e-mail
        html: emailBody // corpo do e-mail
    }).then(() => {
        console.log("E-mail enviado com sucesso");

    }).catch((err) => {
        console.log("Erro ao enviar o e-mail:", err);
    });
    
    res.redirect("/");
});

const port = 5000, 
      host = "localhost"

app.listen(port, host, () =>{
    console.log("localhost:5000/")
}) 