const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/demo', (req, res) => {
    res.json({
        git: {
            detail: 'Git is a distributed version control system that tracks changes in any set of computer files.'
        },
        docker: {
            detail: 'ธนภัทร ตาสาย 6604101331'
        }
    });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${3000}`);
});
