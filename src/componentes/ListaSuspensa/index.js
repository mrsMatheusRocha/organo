import './lista-suspensa.css'

const ListaSuspensa = ({ id, labelFor, label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (<div className="lista-suspensa">
        <label htmlFor={labelFor}>{label}</label>
        <select id={id} required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa