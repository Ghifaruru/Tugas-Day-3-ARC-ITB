import axios from 'axios'

//CONTOH PROGRAM YANG MENAFAATKAN FITUR GET DARI AXIOS UNTUK MEMBUAT ANGKA RANDOM DARI 1 SAMPAI 1000000
const Url = 'https://www.random.org/integers/?num=1&min=1&max=1000000&col=1&base=10&format=plain&rnd=new';

//MENGAMBIL API UNTUK RANDOM NUMBER GENARATOR
axios.get(Url)
  .then(response => {
      const randomNum = parseInt(response.data);
      console.log('Nomor undir anda :', randomNum); //OUTPUT
    }
  )
  .catch(error => {
    console.error('Kesalahan:', error.message) //JIKA ADA SEBUAH KESALAHAN
  })