

function ToDoInput(form)
{
    let dataForm = ($(form).serializeArray());
    const userInput = dataForm[0].value;
    document.getElementById("toDoList").innerHTML += userInput+"<br>";
    $("form").submit(function(e) {
        e.preventDefault();
    });
    $("form")[0].reset();
}