const fields = document.querySelectorAll("[required]")
console.log(fields)

function customValidation(event) {
    const field = event.target

    function verifyErrors() {
        let foundError = false;

        for (let error in field.validity) {
            if (error != "customError" && field.validity[error]) {
                foundError = error
            }
        }

        return foundError;
    }

    const error = verifyErrors()
    console.log("Error Exists: ", error)

    if (error) {
        // changes required message 
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }


}

for (field of fields) {
    field.addEventListener("invalid", customValidation)
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulário")

    // doesn't send the form
    event.preventDefault()
})
