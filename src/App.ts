import * as Sequelize from "sequelize";
var seq = new Sequelize("Hello", "root", "1234", {
    host: "127.0.0.1",
    dialect: "mysql"
})

const Record = seq.define("Records", {
    Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SourceId: Sequelize.INTEGER,
    FileName: Sequelize.STRING,
    Path: Sequelize.STRING,
    User: Sequelize.STRING,
    Uploaddate: Sequelize.DATE,
    Uuid: Sequelize.STRING,
    UploadStatus: Sequelize.INTEGER,
    CDocumentType: Sequelize.STRING,
    CExportEntryNo: Sequelize.STRING,
    CInvoiceNo: Sequelize.STRING,
    CPiDate: Sequelize.DATE,
    CPiNo: Sequelize.STRING,
    CEtdDate: Sequelize.DATE,
    CPoNo: Sequelize.STRING,
    CSystemDate: Sequelize.DATE
}, { timestamps: false });

seq.sync().then((rs => {
    console.log(rs);
})).error(err => {
    console.error(err);
})