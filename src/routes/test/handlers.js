'use strict';

var internals = {};
var Notes = require('../../database/models/Notes');

internals.home = (req, reply) => {
    return Notes.find({ userID: req.auth.credentials._id })
        .then(res => {
            return reply.view('home/home.html', {
                notesList: res.map(data => {
                    return {
                        _id: data._id,
                        fullname: data.fullname,
                        position: data.position,
                        mobile: data.mobile,
                        city: data.city,
                    }
                }),
                messageTitle: req.query.messageTitle,
                message: req.query.message,
                alertType: req.query.alertType
            });
        });

}

internals.add_note = (req, reply) => {
    const newNote = Notes({
        userID: req.auth.credentials._id,
        fullname: req.payload.fullname,
        position: req.payload.position,
        mobile: req.payload.mobile,
        city: req.payload.city
    });

    return newNote.save()
        .then(() => {
            return reply.redirect('/home?message=Employee successfully added. &messageTitle=Success &alertType=success');
        })
        .catch(err => {
            console.log(err);
            return reply.redirect('/home?message=Please fill all fields. &messageTitle=Failed &alertType=danger');
        });
}

internals.edit_note = (req, reply) => {
    return Notes.findByIdAndUpdate({ _id: req.params.id }, req.payload)
        .then(() => {
            return reply.redirect('/home?message=Employee successfully edited. &messageTitle=Success &alertType=success');
        })
        .catch(err => {
            console.log(err);
            return reply.redirect('/home?message=Please fill all fields. &messageTitle=Failed &alertType=danger');
        });

}

internals.delete_note = (req, reply) => {
    return Notes.findByIdAndDelete({ _id: req.params.id })
        .then(() => {
            return reply.redirect('/home?message=Employee successfully deleted. &messageTitle=Success &alertType=success');
        });

}

module.exports = internals;