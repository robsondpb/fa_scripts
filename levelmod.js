$(function(){
    (function(){
        if ( _userdata["user_level"] === 1 || _userdata["user_level"] === 2 ){
            var from = $('.topic-actions .pathname-box p a:first').text(),
                visible = window.localStorage.getItem('moderator'),
                oForm = '<section style="display:none" id="moderator-tools"><div class="tools-group tools-header"><h2>Ferramentas de moderação</h2></div><div class="tools-group"><label>De:</label><input disabled="true" type="text" class="from" value="'+from+'"></div><div class="tools-group"><label>Para:</label><select class="to"><option selected="true" disabled="true">Selecione uma opção</option><option value="Questões sobre JavaScript &amp;jQuery">Questões sobre JavaScript &amp;jQuery</option><option value="Questões sobre HTML &amp; BBCode">Questões sobre HTML &amp; BBCode</option><option value="Questões sobre a aparência do fórum">Questões sobre a aparência do fórum</option><option value="Questões sobre funções do fórum, créditos e domínios">Questões sobre funções do fórum, créditos e domínios</option><option value="Problemas de conexão, Hitskin e diversos">Problemas de conexão, Hitskin e diversos</option></select><button id="mod-move" class="generate">Gerar</button></div><div class="tools-group"><label>Mensagens pré-definidas:</label><select class="predefined"><option selected="true" disabled="true">Selecione uma opção</option><option value="[size=14][color=red][b][i]Tópico movido para a Lixeira[/i][/b][/color][/size]">Tópico movido para a lixeira</option><option value="[size=14][color=red][b][i]Tópico excluído em breve[/i][/b][/color][/size]">Tópico excluído em breve</option><option value="[size=14][color=orange][b][i]Tópico bloqueado[/i][/b][/color][/size]">Tópico bloqueado</option><option value="[size=14][color=orange][b][i]Tópico desbloqueado[/i][/b][/color][/size]">Tópico desbloqueado</option><option value="[b][i][color=green][size=14] Tópico movido para Arquivo: Pedidos Finalizados [/size][/color][/i][/b]">Tópico movido para "Arquivo: Pedidos Finalizados"</option></select><button id="mod-predefined" class="generate">Gerar</button></div></section>';
            
            $('#quick_reply').after(oForm);
            $('input[type="submit"][value="Enviar"]').after('<input style="margin-left: -90px;margin-right:10px;float:right" class="button2" type="button" id="moderator-toggle" class="button2" value="Ferramentas de moderação">');
            
            if( visible === '1' ) $('#moderator-tools').show();
            
            $('#moderator-toggle').click(function(){
                $('#moderator-tools').fadeToggle();
                ( visible === '1' ) ? window.localStorage.setItem('moderator', '0') : window.localStorage.setItem('moderator', '1');
            });
            
            $('#mod-move').click(function(){
                var to = $('.to').val();
                $('#text_editor_textarea').sceditor('instance').insertText('\n\n[b][i][color=green][size=14]Tópico movido de' + from + ' para ' + to,'[/size][/color][/i][/b]'); 
            });
            
            $('#mod-predefined').click(function(){
                var predefined = $('.predefined').val();
                $('#text_editor_textarea').sceditor('instance').insertText(predefined); 
            });
        }
    }());
});
