const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerHTML = 'Deletar';

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta;
}

const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    
    const tarefaApagada = botaoDeleta.parentElement;

    tarefaApagada.remove();

    return botaoDeleta;
}

export default BotaoDeleta;