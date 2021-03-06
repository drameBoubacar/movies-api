import express from 'express';
import Film from '../model/film';
import multer from 'multer';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../front/cine/public')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })
// var upload = multer({ storage: storage })

const api = express.Router();

api.post('/add', upload.single('pictures'), (request, response) => {
    console.log(request.body);
    const newFilm = new Film(request.body);
    newFilm.img = request.file.filename;
    newFilm.save((err, film) => {
      if(err) return console.log(err);
      response.redirect("http://localhost:3000/");
    });
});

api.get('/', (req, res) => {
    Film.find({}, (err, film) => {
        if(err){
             return res.send(err);
        }
        res.json(film);
    });
});

api.get('/:id', (req, res) => {
    Film.find({_id : req.params.id}, (err, film) => {
      if (err) {
        return res.send(err);
      }
      res.json(film);
    });
  });

  // update
  api.post('edit/:id', (req, res) => {
    Film.findOneAndUpdate({_id : req.params.id}, req.body, (err, film) => {
      if (err) {
        return res.send(err);
      }
      res.redirect('http://localhost:3000')
    })
  });

  // Delete
  api.get('/delete/:id', (req, res) => {
    Film.findByIdAndRemove({_id : req.params.id}, (err, film) => {
      if (err) {
        res.send(err);
      }
      res.redirect('http://localhost:3000');
    });
  });

export default api;