import axios from 'axios'
//PROGRAM UNTUK MEMBUAT SEBUAH DAD JOKE

axios.get('https://icanhazdadjoke.com/', {
  headers: {
    //MENETAPKAN HEADER UNTUK MENERIMA DALAM FORMAT JSON
    Accept: 'application/json',
  },
})
  .then(response => {
    const dadjoke = response.data.joke;
    console.log(`
    ===============================================================================
    ${dadjoke}
    ===============================================================================`)
  })//OUTPUT
  //JIKA ADA SEBUAH EROR
  .catch(error => console.error('Error fetching dad joke:', error.message))