const characterTable = (function($){
    const character_TABLE_BODY = $("#characterTable tbody");

    function characterTableBuilder(id) {
        const character = {id: id, ...characterForm.getData()};
        const characterTpl = _.template($("#characterTemplate").html());

        return characterTpl(character);
    }

    function addToTable() {
        character_TABLE_BODY.append(characterTableBuilder(_nextId));
    }

    function _findcharacterRowById(id) {
        return $("#characterTable button[data-id='" + id + "']").parents("tr")[0];
    }

    function updateInTable(id)
    {
        const row = _findcharacterRowById(id);
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