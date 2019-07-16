const characterForm = (function($){
    const characterName = $("#character_name");
    const characterLevel = $("#character_level");
    const characterHealth = $("#character_health");
    const character_UPDATE_BUTTON = $("#updateButton");

    function clear() {
        setData();
        characterName.focus();
    }

    function hasErrors() {

        var textbox = $("#character_name");
        var duplicate = false; 
        $("#characterTableBody").find("td").each(function(){
            if($(this).html()==textbox.val()){
                duplicate = true
            };
        });
        return(duplicate);
    }
    
    function getData() {
        return {
            name: characterName.val(),
            level: characterLevel.val(),
            health: characterHealth.val(),
        };
    };

    function setData(name='', level='', health='') {
        characterName.val(name);
        characterLevel.val(level);
        characterHealth.val(health);
    }

    function setSubmitButtonText(str) {
        character_UPDATE_BUTTON.text(str);
    }

    function getSubmitButtonText() {
        return character_UPDATE_BUTTON.text();
    }
    
    return {
        clear: clear,
        hasErrors: hasErrors,
        getData: getData,
        setData: setData,
        setSubmitButtonText: setSubmitButtonText,
        getSubmitButtonText: getSubmitButtonText
    };
})(jQuery);