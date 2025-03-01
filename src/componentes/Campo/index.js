import './campo.css'

const Campo = ({ type = "text", id, labelFor, label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
    <div className={`campo campo-${type}`}>
        <label htmlFor={labelFor}>{label}</label>
        <input 
            type={type} 
            id={id} 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}
        /> 
    </div>)
}

export default Campo