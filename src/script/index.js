const onClickAdd = () => {
    const inputText = $('#add-text').val();
    $('#add-text').val("");
    const div = $('<div>', {class: 'list-row'});
        // createElement(jQuery版) = 
        // $('new HTML', {jQo, jQo, ...});
    const li = $('<li>').html(inputText);
    const btnComplete = $('<button>', {class: 'complete-button'}).html('完了');
    const btnDelete = $('<button>', {class: 'delete-button'}).html('削除');

    const incompleteList = div.append(li, btnComplete, btnDelete);
    incompleteList.appendTo('#incomplete-list');    

    // console.log(imcompleteList);
}

const onClickComplete = e => {
    const moveTarget = $(e.target).parent('.list-row');
    moveTarget.remove();
    const text = moveTarget.children('li');
    const btnBack = $('<button>', {class: 'toIncomplete-button'}).html('未完了に戻す');
    const parent = moveTarget.empty();
    const completeList = parent.append(text, btnBack);
    console.log(text);
    completeList.appendTo('#complete-list');
}
const onClickDelete = e => {
    const deleteTarget = $(e.target).parent('.list-row');
    deleteTarget.remove();
}


$('.add-button').click(onClickAdd);
$('#incomplete-list').on('click', '.complete-button', onClickComplete);
$('#incomplete-list').on('click', '.delete-button', onClickDelete);