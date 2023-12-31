$(document).ready(function () {
   
    $("#currentDay").text(dayjs().format ("MMMM DD YYYY, h:mm:ss"));
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val ()
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    
var currentHour = dayjs().hour();
$(".time-block").each (function() {
    var blockHour =parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
}
   else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
   }
})

    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
  });
  