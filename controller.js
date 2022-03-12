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

// menambahkan data mahasiswa
exports.tambahMahasiswa = function (req, res) {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    db.query("INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)", [nim, nama, jurusan], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Tambah data.", res);
        }
    });
};

// update data mahasiswa
exports.ubahMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    db.query("UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [nim, nama, jurusan, id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Ubah Data.", res);
        }
    });
};

// hapus data mahasiswa by id
exports.hapusMahasiswa = function (req, res) {
    var id = req.body.id_mahasiswa;

    db.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?", [id], function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok("Berhasil Hapus Data.", res);
        }
    });
};
