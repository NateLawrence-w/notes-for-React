import React from 'react';

function SuperheroCard({name, Secret_Identity,description, powers, quote }) {
    return(
        
        <div className="superhero-card">
            <header>
                <h2>{name}</h2>
            </header>

            <section>
                <h3>Flash</h3>
                <p>the fastest man alive but also the man who will make time in his day for you weather he knows who you are </p>
            </section>
            <h2>
                <h2>{Secret_Identity} </h2>
            </h2>
            <section>
                <h3>Barry Allen </h3>
                <p>Barry Allen is a forensic scientist along with being married to iris west. Berry allen is one of the nicest people who knows each of the civilians by name </p>
            </section>
            <section>
                <h3>About</h3>
                <p>{description}</p>
            </section>
            
            <section>
                <h3>powers</h3>
                <p>the flash powers mainly revolve around Speed these include's vibrating through solid objects 2. the ability to create after images. 3. the power to travel into the past.  </p>
                {powers.length > 0 ? (
                    <ul>
                        {powers.map((power, index) => (
                            <li key={index}>{power}</li>
                        ))}
                    </ul>
                ):(
                    <p>superspeed, vibrating molecules, time travel</p>
                )}
            </section>
             <section>
                <h3>allies</h3>
                <p>nora allen is the wife of berry allen, cisco remon is the best friend of berry allen and apart of team flash, harisson wells a brillienat scientist who accidently created the dark matter exploisio0n killing millions and creating the flash and eobard thawn</p>
            </section>
            <footer>
                <blockquote>"{quote}"</blockquote>
            </footer>
           
                
            

        </div>
    )
}
export default SuperheroCard;
