const characters = document.querySelectorAll('.character-item')

characters.forEach((character) => {
    const idSelected = character.attributes.id.value 

    if(idSelected === 'ultron') return;

    character.addEventListener('mouseenter', () => {
        const characterSelected = document.querySelector('.selected')
        characterSelected.classList.remove('selected')

        character.classList.add('selected')




        const imgCharacterOne = document.getElementById('character-player-one')
        imgCharacterOne.src = `assets/img/${idSelected}.png`


        const nameCharacterOne = document.getElementById('chacacter-name-one')
        const nameSelected = character.getAttribute('data-name')
        nameCharacterOne.innerHTML = `${nameSelected}`
    })
})