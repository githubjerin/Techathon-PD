import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../server/uploads/');
    },
    filename: function(req, file, cb) { 
        console.log(file.originalname)  
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

export const upload = multer({ storage: storage, fileFilter: fileFilter });
