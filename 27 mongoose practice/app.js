/*
 NOTE：
- Schema: Schema 對應到 mongoDB 裡面的 collection，並且定義document架構 (SQL中 create table 步驟)，可以設定 data type
- Model: 包裝 Schema 的容器，用 Model 操作 collection 的新增、查詢、更新...(SQL中 table)
- Schema語法：
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
    const studentSchema = new Schema({
        name: String,
        age: Number,
        majar: String,
        scholarship: {
            merit: Number,
            other: Number,
        },
    });
    - 注意：data type 第一個字要大寫`,或是改用大括弧方式 name: {type: String}
    - studentSchema: collection 名稱用字首小寫單數
- Model 語法：
    const Student = mongoose.model('Student', studentSchema);
    - 第一個參數為大寫字首 collection 名稱、單數 String
 */
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { Schema } = mongoose;

//html可以引入JS
app.set('view engine', 'ejs');
//連接到資料庫
mongoose
    .connect('mongodb://127.0.0.1:27017/exampleDB')
    .then(() => {
        console.log('successful to mongoDB');
    })
    .catch((e) => {
        console.log(e);
    });

const studentSchema = new Schema({
    name: String,
    age: Number,
    majar: String,
    scholarship: {
        merit: Number,
        other: Number,
    },
});
// //model('collection', collectionSchema);
// //注意`: collection 要大寫，單數
// // 會自動轉換為 Student => students
// //注意： collectionSchema 的 collection 是小寫單數
const Student = mongoose.model('Student', studentSchema);
// const newObject = new Student({
//     name: 'Tank Lee',
//     age: 28,
//     majar: 'English',
//     scholarship: {
//         merit: 0,
//         other: 1000,
//     },
// });
// //存資料
// //注意使用mongoose.save()時要先把伺服器停掉
// //newObject.save()是一個promise object，所以可以直接用then查看是否儲存成功
// newObject
//     .save()
//     .then((saveObject) => {
//         console.log('資料儲存完畢，內容：');
//         console.log(saveObject);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// // asyncz方式直接建立 web sever
// app.get('/', async (req, res) => {
//     try {
//         let data = await Student.findOne({ name: 'Tank Lee' }).exec();
//         res.send(data);
//         // console.log(data);
//     } catch (res) {
//         console.log(e);
//     }
// });

// Student.updateOne({ age: 28 }, { age: 26 })
//     .exec()
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// 查詢資料庫所有內容
Student.find({})
    .exec() //mongoose query用的function
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });

app.listen(3000, () => {
    console.log('server is working');
});
