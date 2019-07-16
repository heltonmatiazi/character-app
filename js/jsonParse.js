$(document).ready(function(){
    $.ajax({
        url:"https://api.myjson.com/bins/qpyfd",
        dataType:"json",
        beforeSend: function(xhr){
            if (xhr.overrideMimeType)
            {
            xhr.overrideMimeType("application/json");
            }
        },
        success:function(data){
            $(data.characters).each(function(index,value){
                var record ="<tr><td>"+value.name+
                                "</td><td>"+value.level+"</td><td>"+value.health+"</td>"+
                                "<td>"+
                                        "<button type='button' class='character-edit btn btn-default' data-id=' " +value.id+ " '>"+
                                        "<span class='glyphicon glyphicon-edit'></span>"+
                                        "</button>"+
                                "</td>"+
                                    "<td>"+
                                        "<button type='button' class='character-delete btn btn-default' data-id='  " +value.id+ " '>"+
                                            "<span class='glyphicon glyphicon-remove'></span>"+
                                        "</button>"+
                                    "</td>"+
                              "<\tr>";
                $("#characterTableBody").append(record);
            });
        }
    });
});