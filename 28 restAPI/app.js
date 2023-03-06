const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Student = require('./model/student');

mongoose
    .connect('mongodb://127.0.0.1:27017/exampleDB')
    .then(() => {
        console.log('link mongoDB');
    })
    .catch((e) => {
        console.log(e);
    });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/student', async (req, res) => {
    try {
        let studentData = await Student.find({}).exec();
        return res.send(studentData);
    } catch (e) {
        //500伺服器端內部錯誤
        return res.status(500).send('尋找資料發生錯誤');
    }
});
//進入個人頁面
app.get('/student/:_id', async (req, res) => {
    let { _id } = req.params;
    try {
        let findStudent = await Student.findOne({ _id }).exec();
        return res.send(findStudent);
    } catch (e) {
        //500伺服器端內部錯誤
        return res.status(500).send('尋找資料發生錯誤');
    }
});

app.post('/student', async (req, res) => {
    try {
        let { name, age, major, merit, other } = req.body;
        // console.log(name, age, major, merit, other);
        let newStudent = new Student({
            name,
            age,
            major,
            scholarship: { merit, other },
        });
        //save() return promise object
        let saveStudent = await newStudent.save();
        return res.send({
            msg: '資料儲存成功',
            savedObject: saveStudent,
        });
    } catch (e) {
        return res.status(400).send(e.message);
    }
});
//把資料直接換成使用者提供的(若有少也會被提交成功)
app.put('/student/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        let { name, age, major, merit, other } = req.body;
        let newData = await Student.findOneAndUpdate(
            { _id },
            { name, age, major, scholarship: { merit, other } },
            {
                new: true, //返回更新後結果
                runValidators: true, //過濾器
                overwrite: true,
                // http put request要求客戶端給全部數據，會整個覆蓋掉原本的
            },
        );
        res.send({ msg: '成功更新資料', updatedData: newData });
    } catch (e) {
        return res.status(400).send(e.message);
    }
});

//如果是 merit 或 other 會轉化格式
class NewData {
    constructor() {}
    setProperty(key, value) {
        if (key !== 'merit' && key !== 'other') {
            this[key] = value;
        } else {
            this['scholarship.${key}'] = value;
        }
    }
}
//只提供部分資料，依據key找到後更新
app.patch('/student/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        let newObject = new NewData();
        // 將 HTTP POST 請求的 body 中的資料，以 key-value 的形式，設定到一個新的物件 newObject 上。
        //setProperty 用於設置對象的屬性。它可以修改或創建一個對象的屬性，並可以指定屬性的值、屬性的特性
        for (let property in req.body) {
            newObject.setProperty(property, req.body[property]);
        }
        let newData = await Student.findOneAndUpdate({ _id }, newObject, {
            new: true,
            runValidators: true,
        });
        res.send({ msg: '成功更新資料', updatedData: newData });
    } catch (e) {
        return res.status(400).send(e.message);
    }
});

//刪除資料
app.delete('/student/:_id', async (req, res) => {
    try {
        let { _id } = req.params;
        let deleteResult = await Student.deleteOne({ _id });
        console.log(deleteResult);
        res.send({ msg: '成功刪除資料' });
    } catch (e) {
        console.log(e);
        return res.status(400).send('無法刪除資料');
    }
});

app.listen(3000, () => {
    console.log('server is working');
});
