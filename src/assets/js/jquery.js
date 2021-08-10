jQuery(function () {
    $(document).on('click', '.edit-button', function () {
        let index = $('.edit-button').index(this);

        let fullname = $('.edit-button').eq(index).data('fullname');
        let position = $('.edit-button').eq(index).data('position');
        let mobile = $('.edit-button').eq(index).data('mobile');
        let city = $('.edit-button').eq(index).data('city');
        let id = $('.edit-button').eq(index).data('id');

        $('#fullname').val(fullname);
        $('#position').val(position);
        $('#mobile').val(mobile);
        $('#city').val(city);
        $('.note-id').text(`EMPLOYEE ID: ${id}`);

        $('#edit-form').attr('action', `/edit-note/${id}`)
    });

    $(document).on('click', '.delete-button', function () {
        let index = $('.delete-button').index(this);

        let title = $('.delete-button').eq(index).data('title');
        let note = $('.delete-button').eq(index).data('note');
        let id = $('.delete-button').eq(index).data('id');

        $('.note-title').text(title);
        $('.note-id').text(`NOTE ID: ${id}`);
        $('#confirm-delete').attr('href', `delete-note/${id}`)
    });
});