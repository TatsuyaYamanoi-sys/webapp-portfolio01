const onClickAdd = () => {
    const inputText = $('#add-text').val();
    $('#add-text').val("");
    const div = $('<div>', {class: 'list-row'});
        // createElement(jQuery版) = 
        // $('new HTML', {jQo, jQo, ...});
    const li = $('<li>').html(inputText);
    const btnComplete = $('<button>', {class: 'complete-button'}).html('完了');
    const btnDelete = $('<button>', {class: 'delete-button'}).html('削除');

    const imcompleteList = div.append(li, btnComplete, btnDelete);
    imcompleteList.appendTo('#imcomplete-list')    

    // console.log(imcompleteList);
}

const onClickComplete = e => {
    const deleteTarget = $(e.target).parent('.list-row');
    deleteTarget.remove();
}
const onClickDelete = e => {
    const deleteTarget = $(e.target).parent('.list-row');
    deleteTarget.remove();
}

$('.add-button').click(onClickAdd);
$('#imcomplete-list').click('.complete-button', onClickComplete);
$('#imcomplete-list').click('.delete-button', onClickDelete);