//musica

window.onload = function () {
    const musicas = [
        "p5Song.mp3",
        "hkSong.mp3",
        "zeldaSong.mp3",
        "pokeSong.mp3",
        "liyueSong.mp3",
        "stardewSong.mp3"
    ];

    const audio = document.getElementById("som");
    const bolinha = document.getElementById("playerBolinha");
    const playPause = document.getElementById("playPause");
    const tempo = document.getElementById("tempo");
    const volume = document.getElementById("volume");

    const querMusica = confirm("Quer ouvir música de fundo enquanto navega pelo site? 🎵");

    if (querMusica) {
        const musicaAleatoria = musicas[Math.floor(Math.random() * musicas.length)];
        audio.src = musicaAleatoria;
        audio.volume = 0.2;

        audio.play().catch(() => {
            const mAudio = confirm('Não foi possível reproduzir o áudio automaticamente. Deseja ativar o player no canto direito inferior da página para tocar manualmente?');
            if (mAudio) {
                bolinha.style.display = 'flex';
            }
        });
    }

    bolinha.addEventListener("click", () => {
        bolinha.classList.toggle("expandido");
    });

    playPause.addEventListener("click", (e) => {
        e.stopPropagation();
        if (audio.paused) {
            audio.play();
            playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>';
        } else {
            audio.pause();
            playPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>';
        }
    });

    audio.addEventListener("timeupdate", () => {
        const min = Math.floor(audio.currentTime / 60).toString().padStart(2, "0");
        const sec = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
        tempo.textContent = `${min}:${sec}`;
    });

    volume.addEventListener("input", () => {
        audio.volume = volume.value;
    });
};

//abrir menu de acessibilidade

const btnAce = document.getElementById("btnAce");
const opAce = document.getElementById("opAce");

btnAce.addEventListener("click", function () {
    const aberto = btnAce.getAttribute("aria-expanded") === "true";

    // Alterna o aria-expanded
    btnAce.setAttribute("aria-expanded", String(!aberto));

    // Alterna classes
    btnAce.classList.toggle("active", !aberto);
    btnAce.classList.toggle("open");
    opAce.classList.toggle("open");
});

//alterar fonte
const maFont = document.getElementById("maFont");
const meFont = document.getElementById("meFont");

const btns = document.querySelectorAll(".btn")
const tPrin = document.querySelector("h1")
const conBtn = document.getElementById("conferir");
const fonte = document.getElementById("fonte");
const sobreT = document.querySelector("#descText h2")
const sobreP = document.querySelectorAll("#descText p")
const reco = document.querySelector("#gale h2")
const game = document.querySelectorAll("h3")
const gene = document.querySelectorAll(".gen")
const desc = document.querySelectorAll(".gameDesc");
const cadas = document.querySelector("#form h2")
const label = document.querySelectorAll("label")
const input = document.querySelectorAll("input")
const formTA = document.getElementById("mensagem")
const envia = document.querySelector("form button")
const redes = document.querySelector("h4");
const copy = document.querySelector("footer p");

maFont.addEventListener("click", function () {
    const fsBtn = parseFloat(window.getComputedStyle(btns[0]).fontSize);
    const fsTPrin = parseFloat(window.getComputedStyle(tPrin).fontSize);
    const fsConBtn = parseFloat(window.getComputedStyle(conBtn).fontSize);
    const fsFonte = parseFloat(window.getComputedStyle(fonte).fontSize);
    const fsSobreT = parseFloat(window.getComputedStyle(sobreT).fontSize);
    const fsSobreP = parseFloat(window.getComputedStyle(sobreP[0]).fontSize);
    const fsReco = parseFloat(window.getComputedStyle(reco).fontSize);
    const fsGame = parseFloat(window.getComputedStyle(game[0]).fontSize);
    const fsGene = parseFloat(window.getComputedStyle(gene[0]).fontSize);
    const fsDesc = parseFloat(window.getComputedStyle(desc[0]).fontSize);
    const fsCadas = parseFloat(window.getComputedStyle(cadas).fontSize);
    const fsLabel = parseFloat(window.getComputedStyle(label[0]).fontSize);
    const fsInput = parseFloat(window.getComputedStyle(input[0]).fontSize);
    const fsEnvia = parseFloat(window.getComputedStyle(envia).fontSize);
    const fsRedes = parseFloat(window.getComputedStyle(redes).fontSize);
    const fsCopy = parseFloat(window.getComputedStyle(copy).fontSize);
    btns.forEach(btn => {
        btn.style.fontSize = (fsBtn + 1) + "px";
    })
    tPrin.style.fontSize = (fsTPrin + 1) + "px";
    conBtn.style.fontSize = (fsConBtn + 1) + "px";
    fonte.style.fontSize = (fsFonte + 1) + "px";
    sobreT.style.fontSize = (fsSobreT + 1) + "px";
    sobreP.forEach(p => {
        p.style.fontSize = (fsSobreP + 1) + "px";
    })
    reco.style.fontSize = (fsReco + 1) + "px";
    game.forEach(game => {
        game.style.fontSize = (fsGame + 1) + "px";
    })
    gene.forEach(gen => {
        gen.style.fontSize = (fsGene + 1) + "px";
    })
    desc.forEach(desc => {
        desc.style.fontSize = (fsDesc + 1) + "px";
    })
    cadas.style.fontSize = (fsCadas + 1) + "px";
    label.forEach(label => {
        label.style.fontSize = (fsLabel + 1) + "px";
    })
    input.forEach(input => {
        input.style.fontSize = (fsInput + 1) + "px";
    })
    formTA.style.fontSize = (fsInput + 1) + "px";
    envia.style.fontSize = (fsEnvia + 1) + "px";
    redes.style.fontSize = (fsRedes + 1) + "px";
    copy.style.fontSize = (fsCopy + 1) + "px";
})

meFont.addEventListener("click", function () {
    const fsBtn = parseFloat(window.getComputedStyle(btns[0]).fontSize);
    const fsTPrin = parseFloat(window.getComputedStyle(tPrin).fontSize);
    const fsConBtn = parseFloat(window.getComputedStyle(conBtn).fontSize);
    const fsFonte = parseFloat(window.getComputedStyle(fonte).fontSize);
    const fsSobreT = parseFloat(window.getComputedStyle(sobreT).fontSize);
    const fsSobreP = parseFloat(window.getComputedStyle(sobreP[0]).fontSize);
    const fsReco = parseFloat(window.getComputedStyle(reco).fontSize);
    const fsGame = parseFloat(window.getComputedStyle(game[0]).fontSize);
    const fsGene = parseFloat(window.getComputedStyle(gene[0]).fontSize);
    const fsDesc = parseFloat(window.getComputedStyle(desc[0]).fontSize);
    const fsCadas = parseFloat(window.getComputedStyle(cadas).fontSize);
    const fsLabel = parseFloat(window.getComputedStyle(label[0]).fontSize);
    const fsInput = parseFloat(window.getComputedStyle(input[0]).fontSize);
    const fsEnvia = parseFloat(window.getComputedStyle(envia).fontSize);
    const fsRedes = parseFloat(window.getComputedStyle(redes).fontSize);
    const fsCopy = parseFloat(window.getComputedStyle(copy).fontSize);
    btns.forEach(btn => {
        btn.style.fontSize = (fsBtn - 1) + "px";
    })
    tPrin.style.fontSize = (fsTPrin - 1) + "px";
    conBtn.style.fontSize = (fsConBtn - 1) + "px";
    fonte.style.fontSize = (fsFonte - 1) + "px";
    sobreT.style.fontSize = (fsSobreT - 1) + "px";
    sobreP.forEach(p => {
        p.style.fontSize = (fsSobreP - 1) + "px";
    })
    reco.style.fontSize = (fsReco - 1) + "px";
    game.forEach(game => {
        game.style.fontSize = (fsGame - 1) + "px";
    })
    gene.forEach(gen => {
        gen.style.fontSize = (fsGene - 1) + "px";
    })
    desc.forEach(desc => {
        desc.style.fontSize = (fsDesc - 1) + "px";
    })
    cadas.style.fontSize = (fsCadas - 1) + "px";
    label.forEach(label => {
        label.style.fontSize = (fsLabel - 1) + "px";
    })
    input.forEach(input => {
        input.style.fontSize = (fsInput - 1) + "px";
    })
    formTA.style.fontSize = (fsInput - 1) + "px";
    envia.style.fontSize = (fsEnvia - 1) + "px";
    redes.style.fontSize = (fsRedes - 1) + "px";
    copy.style.fontSize = (fsCopy - 1) + "px";
})

//alterar contraste

const btnCon = document.getElementById("alCon")
let contra = false

btnCon.addEventListener("click", function () {
    if (!contra) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        document.querySelectorAll(".btn").forEach(btn => {
            btn.style.backgroundColor = "#b30018"
        })
        document.querySelectorAll("#aceMenu button").forEach(btn => {
            btn.style.backgroundColor = "#b30018"
        })
        document.getElementById("conferir").style.backgroundColor = "#b30018";
        document.querySelector("#form button").style.backgroundColor = "#b30018";
        document.querySelectorAll(".card").forEach(card => {
            card.style.backgroundColor = "#000";
            card.style.border = "2px solid #C0C0C0";
        })
        document.getElementById("gale").style.backgroundColor = "#000";
        document.getElementById("inicio").style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('inicio.jpg')";
        document.getElementById("inicio").style.backgroundSize = "cover";
        document.getElementById("inicio").style.backgroundPosition = "center";
        document.getElementById("form").style.background = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('form.jpg')";
        document.getElementById("form").style.backgroundSize = "cover";
        document.getElementById("form").style.backgroundPosition = "center";
        document.getElementById("logo").src = "logo2.png"
        document.getElementById("insta").src = "insta2.png";
        document.getElementById("wats").src = "wats2.png";
        document.getElementById("twitter").src = "twitter2.png";
    } else {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";
        document.querySelectorAll(".btn").forEach(btn => {
            btn.style.backgroundColor = ""
        })
        document.querySelectorAll("#aceMenu button").forEach(btn => {
            btn.style.backgroundColor = ""
        })
        document.getElementById("conferir").style.backgroundColor = "";
        document.querySelector("#form button").style.backgroundColor = "";
        document.querySelectorAll(".card").forEach(card => {
            card.style.backgroundColor = "";
            card.style.border = "";
        })
        document.getElementById("gale").style.backgroundColor = "";
        document.getElementById("inicio").style.background = "";
        document.getElementById("inicio").style.backgroundSize = "";
        document.getElementById("inicio").style.backgroundPosition = "";
        document.getElementById("form").style.background = "";
        document.getElementById("form").style.backgroundSize = "";
        document.getElementById("form").style.backgroundPosition = "";
        document.getElementById("logo").src = "logo1.png"
        document.getElementById("insta").src = "insta.png";
        document.getElementById("wats").src = "wats.png";
        document.getElementById("twitter").src = "twitter.png";
    }

    contra = !contra;
})