/**
    * @description      : 
    * @author           : Hp
    * @group            : 
    * @created          : 20/09/2024 - 15:24:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 20/09/2024
    * - Author          : Hp
    * - Modification    : 
**/
import  { useState } from 'react';

function FriendsList() {
  // State pour stocker la liste des amis
  const [friends, setFriends] = useState([]);

  // State pour gérer la valeur de l'input
  const [friendName, setFriendName] = useState('');

  // Fonction pour ajouter un nouvel ami
  const addFriend = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    if (friendName.trim() !== '') {
      setFriends([...friends, friendName]); // Ajoute le nouvel ami à la liste
      setFriendName(''); // Réinitialise l'input
    }
  };

  return (
    <div className='flex-1 flex bg-amber-400 flex-col items-center '>
        <h1 className='text-[2rem] '>Add your friends</h1>
      <h1 className='ml-[-25rem] '>Liste des amis</h1>
      
      {/* Formulaire pour ajouter un ami */}
      <form onSubmit={addFriend}>
        <div className='flex gap-8 mt-5'>
        <input
        className='rounded-md px-4  border-solid border-[0.2rem]'
          type="text"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)} // Met à jour le state avec la valeur de l'input
          placeholder="Add your friend"
        />
        <button type="submit" className='bg-slate-50 rounded-md px-4'>Ajouter</button>
        </div>
      </form>
      
      {/* Affichage de la liste des amis */}
      <ul className='bg-white h-[30rem] w-[25rem] mt-4 rounded-md px-4'>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "10px", marginTop: "40px" } } >
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "blue" }} readOnly className="w-[5.2rem] rounded-md h-4" />
        <input style={{ backgroundColor: "gray" }} readOnly className="w-[5.2rem] rounded-md h-4"/>
      </div>
    </div>
  );
}

export default FriendsList;
