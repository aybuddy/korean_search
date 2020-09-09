const input = document.querySelector('#textBox')
const englishInput = document.querySelector('#englishWord')

englishInput.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        const searchedWord = this.value
        window.open("https://translate.google.com/?hl=en&tab=TT&authuser=0#view=home&op=translate&sl=en&tl=ko&text=" + searchedWord)
        window.open("https://papago.naver.com/?sk=en&tk=ko&hn=0&st=" + searchedWord)
        this.value = ''
    }
})
input.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        const searchedWord = this.value
        window.open("https://www.google.com/search?safe=active&hl=en&authuser=0&tbm=isch&sxsrf=ALeKk00bO0IQfqdPyIhtratFREz9M-2NjQ%3A1599597405578&source=hp&biw=1920&bih=938&ei=XetXX9D1IJjr-gTRu7KoDw&q=" + searchedWord + "&oq=" + searchedWord + "&gs_lcp=CgNpbWcQAzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgIIADIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQM6BwgjEOoCECc6BAgjECdQ8CxYljFgkDNoAXAAeACAAZQBiAGgBJIBAzAuNJgBAKABAaoBC2d3cy13aXotaW1nsAEK&sclient=img&ved=0ahUKEwiQmJDZtNrrAhWYtZ4KHdGdDPUQ4dUDCAY&uact=5")
        window.open("https://en.wiktionary.org/wiki/" + searchedWord)
        window.open("https://forvo.com/word/" + searchedWord + "/#ko")
        this.value = ''
    }
})
