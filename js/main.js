//incrementando ID para próximo insert
let _nextId = 4;
// ID do personagem sendo editado
let _activeId = 0;

const character_FORM = $("#character-form");
const character_TABLE = $("#characterTable");
const cancel_create = $("#cancelButton");
const updateFormBtn = $("#characterAddBtn");

function characterEditHandler() {
    const row = $(this).parents("tr");
    const cols = row.children("td");
    // TODO: atualizar para pegar o id da <tr>
    _activeId = $($(cols[3]).children("button")[0]).data("id");

    characterForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());

    characterForm.setSubmitButtonText("Atualizar");
}

function characterDeleteHandler() {
    $(this).parents("tr").remove();
}



function characterSubmitHandler(e) {
    e.preventDefault();

        if(characterForm.hasErrors() === true){
            alert("Nomes de personagem precisam ser únicos");
            return;   
        };
 
        if (characterForm.getSubmitButtonText() === "Atualizar") {
            characterTable.updateInTable(_activeId);
            characterForm.setSubmitButtonText("Adicionar Personagem");
        } else {
            characterTable.addToTable(_activeId);
            _nextId += 1;
        }
        characterForm.clear(); 
    };


function updateFormController(){
    $( ".overlay" ).removeClass( "hidden" );
    $( ".overlay" ).fadeIn( "slow");
}


function cancelCreation(){
    $( ".overlay" ).fadeOut( "slow");

}


updateFormBtn.on('click', updateFormController)
cancel_create.on('click',cancelCreation);
character_TABLE.on('click', '.character-edit', characterEditHandler);
character_TABLE.on('click', '.character-delete', characterDeleteHandler);
character_FORM.on('submit', characterSubmitHandler);