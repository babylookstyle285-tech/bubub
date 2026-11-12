function halaman3(){
box.innerHTML = `
<h2>Betul Sekali 😆</h2>
<p>Sekarang klik tombol di bawah ya</p>

<div style="height:100px;position:relative;">
    <button id="kabur">Aku Sayang Kamu ❤️</button>
</div>
`;

let tombol = document.getElementById("kabur");
let count = 0;

tombol.addEventListener("click", () => {

    if(count < 2){

        count++;

        tombol.style.position = "absolute";
        tombol.style.left = Math.random() * 200 + "px";
        tombol.style.top = Math.random() * 50 + "px";

        if(count === 2){
            tombol.innerHTML = "Yaudah Klik Lagi 🥺";
        }

    }else{
        halaman4();
    }
});
}