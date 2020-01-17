/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: */
// const friends = {
//   'abqkatrina',
//   'tetondan',
//   'dustinmyes',
//   'justsml',
//   'luishrd',
//   'bigknell',
// };


function CreateCard(response){
  const card = document.createElement('div');

  const pic = document.createElement('img');
  const info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const locus = document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

   card.classList.add('card');
  info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username'); 
  pic.src = (response.avatar_url);

  name.textContent = ('Name: ' + response.name);
  username.textContent = ('username: ' + response.login);
  locus.textContent = ('location: ' + response.location);
  profile.textContent = ('profile: ' + response.html_url);
  followers.textContent = ('followers: ' + response.followers);
  following.textContent = ('following: ' + response.following);
  bio.textContent = ('bio: ' + response.bio);

  card.appendChild(pic);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(locus);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  return card;
}

const wall = document.querySelector('.cards');


const peeps = {
  abqkatrina: 'https://api.github.com/users/abqkatrina',
  tetondan:'https://api.github.com/users/tetondan',
  justsml:'https://api.github.com/users/justsml',
  luishrd:'https://api.github.com/users/luishrd',
  bigknell:'https://api.github.com/users/bigknell',
  keyeric: 'https://api.github.com/users/Keyeric',
  mileywright: 'https://api.github.com/users/MileyWright',
  steven_matos: 'https://api.github.com/users/steven-matos',
  alecdye: 'https://api.github.com/users/alecdye'
}

const x = Object.values(peeps);
console.log(x);

x.forEach((i) =>{

axios.get(i)

  .then(response =>{
    console.log(response.data);
    wall.append(CreateCard(response.data));
  })
  .catch(error => {
    console.log("error, yo", error);
});
});