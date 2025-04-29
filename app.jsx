// src/App.jsx
import React from 'react';
import SuperheroCard from '../src/SuperheroCard';
import './App.css';

function App() {
    // Define superhero information here  including details 
    const superhero = {
        name: 'the flash',
        description: 'the flash is the frendly speaster who can always make time to help someone out in case they needed help from painting fences to saving kittenst to even getting presents for orphanages. ',
        powers: ['Wall-running', 'superspeed', 'hyper thinking', 'time remnents', 'speed force'],
        quote: 'feel the air, every molecule . you are no longer you now. You are part of something greater a force a speed force, its yours now use it Barry run '
    };

    return (
        <div className="App">
            <h1>Favorite Superhero</h1>
            <SuperheroCard
            name={superhero.name}
            description={superhero.description}
            powers={superhero.description}
            quote={superhero.quote}
            />

        </div>
    );
}
export default App;
import SuperheroCard from '../src/SuperheroCard';
Root.render(SuperheroCard)
