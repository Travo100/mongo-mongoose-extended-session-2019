$(document).ready(function () {
    function getAllData() {
        $.getJSON("/all", function (data) {
            console.log(data);
            $(".table tbody").empty();
            for(var i = 0; i < data.length; i++) {
                $(".table tbody").append(`<tr><td>${data[i].title}</td><td class="link-text"><a href="${data[i].link}">Link to article</a></td><td>${data[i].favorite}</td></tr>`);
            }
        });
    }

    $("#scrape-data").on("click", function(e){
        e.preventDefault();
        $.getJSON("/scrape", function(data){
            if(data) {
                getAllData();
            }
        })
    });
});