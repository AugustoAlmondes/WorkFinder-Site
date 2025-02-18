// export default 

// export default function cepMask(e) {
//     let value = e.target.value;
//     value = value.replace(/\D/g, '');
//     value = value.replace(/(\d{5})(\d)/, '$1-$2');
//     e.target.value = value;
// }

export class handleInputs {
    phoneMask(e) {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    }

    cepMask(e){
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value= value.replace(/(\d{5})(\d)/, '$1-$2');
        e.target.value = value;
    }

    cnpjMask(e)
    {
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
        e.target.value = value
    }

    salaryMask(e){
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d+)(\d{2})$/, "$1,$2");
        value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
        e.target.value = value;
    }

    stateRegistrationMask(e){
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1.$2.$3.$4');
        e.target.value = value
    }

    municipalRegistrationMask(e){
        let value = e.target.value;
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{6})(\d)/, '$1-$2');
        e.target.value = value
    }
}