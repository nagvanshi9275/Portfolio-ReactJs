const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://aashishsingh24032005:Jinang@cluster0.keias.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

const formSchema = new mongoose.Schema({
    name: String,
    university: String,
    phone: String,
    age: Number,
    feedback: String,
    rating: Number
});

const Form = mongoose.model('Form', formSchema);

app.post('/submit', async (req, res) => {
  const { name, university, phone, age, feedback, rating } = req.body; 

  const formData = new Form({
      name,
      university,
      phone,
      age: Number(age),           
      feedback,
      rating: Number(rating),     
  });

  try {
      await formData.save();
      res.status(200).send({ message: 'Form data saved successfully!' });
  } catch (error) {
      res.status(500).send({ message: 'Error saving form data', error });
  }
});


app.listen(5001, () => {
    console.log("Listening on port 5001");
});
