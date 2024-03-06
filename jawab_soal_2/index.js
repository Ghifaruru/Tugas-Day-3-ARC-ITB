import inquirer  from 'inquirer' //LIBRARY UNTUK MENERIMA INPUT DARI USER
import chalk from 'chalk' //LIBRARY UNTUK MENAMBAHKAN WARNA
import chalkAnimation from 'chalk-animation' //LIBRARY UNTUK MENAMBAHKAN ANIMASI

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

//beberapa variabel yang dibutuhkan
var jumlah_matkul
var data_sks
var data_indeks
var listsks =[] //list kosong untuk kumpulan sks
var listindeks = [] //list kosong untuk kumpulan bobot indeks
var jumlahsks=0
var deltasksbobot =0

//FUNGSI UNTUK OPENING 
async function opening() {
    const title = chalkAnimation.rainbow('=======IP CALCULATOR=======')
    await delay (2000)
    title.stop()
    console.log (`
    ${chalk.bgYellow('CARA PEMAKAIAN')} 
    (1)ISI JUMLAH MATKUL YANG INGIN DIMASUKKAN
    (2)ISI JUMLAH SKS SUATU MATKUL
    (3)ISI BOBOT INDEKS MATKUL TERSEBUT BERDASARKAN :
       (A=4,AB=3.5,B=3,BC=2.5,C=2,D=1,E=0)
    (4)ULANGI LANGKAH 2 DAN 3 SEBANYAK JUMLAH MATKUL YG DI INPUT PADA LANGKAH 1
    (5)PASTIKAN INPUT BERUPA ANGKA ATAU PROGRAM TIDAK AKAN LANJUT.
    `) 
}

//FUNGSI UNTUK MENERIMA INPUT JUMLAH MATKUL DARI USER
async function jumlahmatkul() {
    const jumlah = await inquirer.prompt(
        {
        type : 'input',
        name : 'jumlah',
        message : 'Masukkan jumlah matkul :',
        validate : (answer)=>{
            if (isNaN(answer)) {
                return 'Masukkan angka yang benar!'
            }
            return true
        }
    });
    jumlah_matkul= jumlah.jumlah;
}

//FUNGSI UNTUK MENERIMA JUMLAH SKS DARI USER
async function inputsks(a) {
    const sks = await inquirer.prompt(
        {
        type : 'input',
        name : 'sks',
        message : `Masukkan jumlah SKS matkul ke-${a} :`,
        validate : (answer)=>{
            if (isNaN(answer)) {
                return 'Masukkan angka yang benar!'
            }
            return true
            }
    });
    data_sks= sks.sks
}

//FUNGSI UNTUK MENERIMA BOBOT INDEKS SUATU MATKUL DARI USER
async function inputindeks(){
    const indeks = await inquirer.prompt(
        {
        type : 'input',
        name : 'indeks',
        message : 'Masukkan bobot indeks matkul tersebut :',
        validate : (answer)=>{
            if (isNaN(answer)) {
                return 'Masukkan angka yang benar!'
            }
            return true
            }
    });
    data_indeks=indeks.indeks
}

//PROGRAM DIJALANKAN
await opening()

await jumlahmatkul()
var i =0
while (i<jumlah_matkul) {
    //MEMASUKKAN DATA DARI INPUT KE LIST KOSONG YG SUDAH DIBUAT
    await inputsks(i+1)
    listsks.push(data_sks)
    await inputindeks()
    listindeks.push(data_indeks)
    i = i+1
}

//MENGHITUNG IP BERDASARKAN HASIL INPUT DARI USER
for (let i = 0; i < listsks.length; i++ ) {
    jumlahsks += Number(listsks[i]);
}
for (let i = 0; i < listsks.length; i++ ) {
    deltasksbobot += (Number(listsks[i])*(Number(listindeks[i])));
}
var ip = (deltasksbobot)/(jumlahsks)

//OUTPUT
console.log('IP ANDA ===== ' + ip)