document.addEventListener("DOMContentLoaded", function () {
  login.event.init();
});

var login = {};

login.event = {
  init: () => {
    document.querySelector("#btnLogin").onclick = () => {
      login.method.validarLogin();
    };
  },
};

// Valida os campos
login.method = {
  validarLogin: () => {
    let email = document.querySelector("#txtEmailLogin").value.trim();
    let senha = document.querySelector("#txtSenhaLogin").value.trim();

    if (email.length == 0) {
      alert("Informe o E-mail, por favor.");
      document.querySelector("#txtEmailLogin").focus();
      return;
    }

    if (senha.length == 0) {
      alert("Informe a senha, por favor.");
      document.querySelector("#txtSenhaLogin").focus();
      return;
    }

    login.method.login(email, senha);
  },

  // método que faz o login (via API)
  login: (email, senha) => {
    var dados = {
      email: email,
      senha: senha,
    };

    app.method.post(
      "/login",
      JSON.stringify(dados),
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      },
      true
    );
  },
};
