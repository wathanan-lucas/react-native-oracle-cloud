import axios from 'axios'
//https://g7b6e620787d151-s2204lud7dpmx4b7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/tb_pessoa/

const endpointPessoa = "/tb_pessoa/"
const base = axios.create({
    baseURL: 'https://g7b6e620787d151-s2204lud7dpmx4b7.adb.us-ashburn-1.oraclecloudapps.com/ords/admin'
})

const obterLista = () => {
    return base.get(endpointPessoa)
}

const cadastrarPessoa = (pessoa) => {
    return base.post(
        endpointPessoa,
        pessoa,
        {headers: {'Content-Type': 'application/json'}}
    )
}

export {obterLista, cadastrarPessoa}