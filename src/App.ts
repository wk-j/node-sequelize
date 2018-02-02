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
    FileName: Sequelize.TEXT,
    Path: Sequelize.TEXT,
    User: Sequelize.TEXT,
    Uploaddate: Sequelize.DATE,
    Uuid: Sequelize.TEXT,
    UploadStatus: Sequelize.INTEGER,
    CDocumentType: Sequelize.TEXT,
    CExportEntryNo: Sequelize.TEXT,
    CInvoiceNo: Sequelize.TEXT,
    CPiDate: Sequelize.DATE,
    CPiNo: Sequelize.TEXT,
    CEtdDate: Sequelize.DATE,
    CPoNo: Sequelize.TEXT,
    CSystemDate: Sequelize.DATE
}, { timestamps: false });

(async () => {
    var rs = await seq.sync()
})();
