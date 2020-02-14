import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';



const TextContainer = ({ users }) => (

  <div className="textContainer">

    <div>

      <h1>Chat Application</h1>

      <h2>Created by Himanshu<span role="img" aria-label="emoji">❤️</span></h2>

      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>

      <p>Instruction: </p>
      <ol>
        <li>
          Assign Your name, whatever you want. It will display on chatting window.
        </li>
        <li>
          Make sure write the correct Room name which will take you to Chatting window in which your friend is signed in with the same name.
        </li>
      </ol>

    </div>

    {

      users

        ? (

          <div>

            <h1>People currently chatting:</h1>

            <div className="activeContainer">

              <h2>

                {users.map(({name}) => (

                  <div key={name} className="activeItem">

                    {name}

                    <img alt="Online Icon" src={onlineIcon}/>

                  </div>

                ))}

              </h2>

            </div>

          </div>

        )

        : null

    }

  </div>

);



export default TextContainer;