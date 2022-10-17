var btn = $('header button');

$(document).ready(function(){

    btn.click(function(){
        $('form').slideDown();
    })
    
    $('#botaocancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit', function(event){
        event.preventDefault();
        const imgAdress = $('#enderecoimgnova').val();    
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${imgAdress}" />`).appendTo(novoItem);
        $(`<div class="overlay-img-link">
        <a href="${imgAdress}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
    </div>`).appendTo(novoItem);
    
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);

        $('#enderecoimgnova').val('')
    })
})




