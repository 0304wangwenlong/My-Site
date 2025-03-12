const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// 中间件
app.use(cors());
app.use(bodyParser.json());

// 数据库连接配置
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'personal_website'
});

// 连接数据库
db.connect((err) => {
    if (err) {
        console.error('数据库连接失败:', err);
        return;
    }
    console.log('成功连接到MySQL数据库');
});

// 处理联系表单提交
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    const sql = 'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const values = [name, email, subject, message];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('保存消息失败:', err);
            res.status(500).json({ error: '保存消息失败' });
            return;
        }
        res.json({ message: '消息已成功保存' });
    });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在端口 ${PORT}`);
}); 