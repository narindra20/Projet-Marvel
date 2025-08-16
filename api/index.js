const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); 

app.use(cors());       
app.use(bodyParser.json());
app.use(express.static('../public'));



let characters = [
    {
      id: 1,
      name: "Spider-Man",
      realName: "Peter Parker",
      universe: "Earth-616",
      image: "/Images/Spiderman.jpg"
    },
    {
      id: 2,
      name: "Iron Man",
      realName: "Tony Stark",
      universe: "Earth-616",
      image: "/Images/Iron-Man.png"
    },
    {
      id: 3,
      name: "Captain America",
      realName: "Steve Rogers",
      universe: "Earth-616",
      image: "/Images/CaptainAmerica.png"
    },
    {
      id: 4,
      name: "Black Widow",
      realName: "Natasha Romanoff",
      universe: "Earth-616",
      image: "/Images/BlackWidow.jpg"
    },
    {
      id: 5,
      name: "Black Panther",
      realName: "T'Challa",
      universe: "Earth-616",
      image: "/Images/BlackPanther.png"
    },
    {
      id: 6,
      name: "Doctor Strange",
      realName: "Stephen Strange",
      universe: "Earth-616",
      image: "/Images/DoctorStrange.png"
    },
    {
      id: 7,
      name: "Scarlet Witch",
      realName: "Wanda Maximoff",
      universe: "Earth-616",
      image: "/Images/ScarletWitch.png"
    },
    {
      id: 8,
      name: "Hulk",
      realName: "Bruce Banner",
      universe: "Earth-616",
      image: "/Images/Hulk.png"
    }
  ];
  

// GET /characters ==> Get all characters
app.get('/characters', (req, res) => {
    res.json(characters);
});

// POST 
app.post('/characters', (req, res) => {
    const newCharacter = req.body;
    
    
    if (!newCharacter.name || !newCharacter.realName || !newCharacter.universe) {
        return res.status(400).json({ error: 'Name, realName and universe are required' });
    }
    
    // Générer une nouvelle ID
    const newId = characters.length > 0 ? Math.max(...characters.map(c => c.id)) + 1 : 1;
    newCharacter.id = newId;
    
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});

// GET 
app.get('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const character = characters.find(c => c.id === id);
    
    if (character) {
        res.json(character);
    } else {
        res.status(404).json({ error: 'Character not found' });
    }
});

// PUT 
app.put('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCharacter = req.body;
    const index = characters.findIndex(c => c.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Character not found' });
    }
    
    // Garder le même ID
    updatedCharacter.id = id;
    characters[index] = updatedCharacter;
    
    res.json(updatedCharacter);
});

// DELETE 
app.delete('/characters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = characters.findIndex(c => c.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Character not found' });
    }
    
    characters.splice(index, 1);
    res.status(204).end();
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});