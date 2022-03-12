"use strict";

var db = require("./koneksi");
var response = require("./res");

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan", res);
};

// menampilkan semua data mahasiswa
exports.tampilsemuamahasiswa = function (req, res) {
    db.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};

// menampilkan semua data mahasiswa berdasarkan id
exports.tampilmahasiswaid = function (req, res) {
    let id = req.params.id;
    db.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res);
        }
    });
};
