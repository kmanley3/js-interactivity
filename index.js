const message = document.querySelector('#message')
const inputField = document.querySelector('input')
const addMovie = (event) =>{
    event.preventDefault();
    let movie = document.createElement('li')
    const movieTitle = document.createElement('span')

    movieTitle.addEventListener('click', crossOffMovie)

    movieTitle.textContent = inputField.value
    movie.appendChild(movieTitle)
    
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = '';
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = "Movie watched!"
    }else{
        message.textContent = "Movie added back to the list"
    }
}

document.querySelector('form').addEventListener('submit', addMovie);
