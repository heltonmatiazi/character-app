//incrementando ID para próximo insert
let _nextId = 4;
// ID do personagem sendo editado
var _activeId = 0;

const character_FORM = $("#character-form");
const character_TABLE = $("#characterTable");
const cancel_create = $("#cancelButton");
const updateFormBtn = $("#characterAddBtn");

function characterEditHandler() {
    const target = $(".selected").children("td");
    const row = $(target).parents("tr");
    const cols = row.children("td");

    _activeId = $(row).data("id");
   
    characterForm.setData($(cols[0]).text(), $(cols[1]).text(), $(cols[2]).text());
    characterForm.setSubmitButtonText("Atualizar");
}



function characterSubmitHandler(e) {
    
    e.preventDefault();
    
    $("#panelTitle").text("Adicionando novo Personagem");
    
    if(characterForm.hasErrors() === true){
        $(".error-msg p").text("Nomes de personagem precisam ser únicos");
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
    $(".error-msg p").text("");
    $( ".overlay" ).fadeOut( "slow");
   
};


function updateFormController(){
    $('.conditionalBtn').fadeOut("fast");
    $( ".overlay" ).fadeIn( "slow");
}

$("#characterDeleteBtn").on('click',function(){
    const deleteTarget = $(".selected");
    deleteTarget.remove();
});
function cancelCreation(){
    $('.conditionalBtn').fadeOut("fast");
    $( ".overlay" ).fadeOut( "slow");
}


$(document).ready(function(){
    $(document.body).on('click','tr[data-id]',function(){
       
            $("#characterTableBody tr").css("background-color", "#fff");
            $(this).css("background-color", "grey");
            $('.conditionalBtn').fadeIn("fast");
            $("#characterTableBody tr").removeClass("selected");
            $(this).addClass("selected");
        
      

        $("#characterUpdateBtn").click(function(){
            $("#panelTitle").text("Editando Personagem");
            characterEditHandler();
            $( ".overlay" ).fadeIn("slow");
        });

    });
});




updateFormBtn.on('click', updateFormController)
cancel_create.on('click',cancelCreation);
character_FORM.on('submit', characterSubmitHandler);