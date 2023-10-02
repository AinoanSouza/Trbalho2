class FormSubtmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButtom = document.querySelector(settings.butttom) 
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
    }
    displaySucess(){
        this.form.innerHTML = this.settings.sucess;
    }
    displaySucess(){
        this.form.innerHTML = this.settings.error;
    }
    onSubmission(event){
        event.target.disabled = true;

    }
    async sendForm(){
     await  fetch(this.url,{
            method: "POST",
            herders: {
                "Content-Type": "aplication/json",
                Accept: "aplication/json",
            },
             body: "",
            });
    }
    init() {
        if (this.form) this.formButttom.addEventListener("click", () => this.displaySucess());
        return this;
    }
    } 
     const formSubtmit = new FormSubmit({
        form: [data-form],
        buttom: [data-buttom],
        sucess: <h1>Mensagem enviada</h1>,
        error: <h1>Erro. Não foi possível enviar a mensagem</h1>
     });

