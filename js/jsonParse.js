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
                var record ="<tr id="+value.id+" class="+"tableindex"+"  data-id="+value.id+"><td>"+value.name+
                                "</td><td>"+value.level+"</td><td>"+value.health+"</td>"+
                              "<\tr>";
                $("#characterTableBody").append(record);
            });
        }
    });
});