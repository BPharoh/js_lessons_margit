const form1 = document.querySelector("form-search")
const form2 = document.querySelector("form-upload")

const getDetails = (event) => {
    preventdefault(event);

}

const uploadDetails = (event) => {
    preventdefault(event);


}



form1.addEventListener("submit", uploadDetails);
form2.addEventListener("submit", uploadDetails);