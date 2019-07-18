const characterTable = (function($){
    let character_TABLE_BODY = $("#characterTable tbody");
   

    function characterTableBuilder(id) {
        const character = {id: id, ...characterForm.getData()};
        const characterTpl = _.template($("#characterTemplate").html());

        return characterTpl(character);
    }

    function addToTable() {
        //checando se existe um elemento com a classe 'selected'
        if ($(".selected")[0]){
            character_TABLE_BODY.children(".selected").after(characterTableBuilder(_nextId));
        } else {
            character_TABLE_BODY.append(characterTableBuilder(_nextId));
            sortTable();
        }
        
    }

    function _findcharacterRowById(id) {
        return $("#characterTableBody tr[data-id="+"" + id  +""+ "]");
      
    }

    function updateInTable(id){
        const row = _findcharacterRowById(id);
        character_TABLE_BODY = $("#characterTable tbody");
        const $row = $(row);

        // Adiciona a linha modificada na tabela
        $row.after(characterTableBuilder());
        // Remover a linha antiga
        $row.remove();
    }

    return {
        addToTable: addToTable,
        updateInTable: updateInTable
    }
})(jQuery);


// table sort

//TODO: refazer com jquery
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("characterTable");
    switching = true;
    // o loop continua enquanto houverem mudanças sendo realizadas na tabela
    while (switching) {
      switching = false;
      rows = table.rows;
      /* Loop que percorre todos os <tr>, exceto os primeiros*/
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        /* comparando elementos das duas próximas linhas*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        /* comparando as iniciais dos campos */
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
        }
      }

      if (shouldSwitch) {
        /* se shouldSwitch for verdadeiro, faz a troca da ordem dos campos */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
     } 
    }
  }