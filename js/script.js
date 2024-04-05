document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("backgroundSound");
  const toggleMuteButton = document.getElementById("toggleMuteButton");

  function toggleMute() {
    audio.muted = !audio.muted;
    toggleMuteButton.innerHTML = audio.muted ? '<i class="fas fa-volume-off"></i>' : '<i class="fas fa-volume-up"></i>'; 
  }

  audio.volume = 0.1;

  toggleMuteButton.addEventListener("click", toggleMute);

  audio.play().catch(error => {
    document.addEventListener("click", function() {
      audio.play();
    });
  });
});


document.getElementById('copyButton').addEventListener('click', function() {
    var textToCopy = '';

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            document.getElementById('copyButton').classList.add('clicked');
            setTimeout(function() {
                document.getElementById('copyButton').classList.remove('clicked');
            }, 2000); 
        })
        .catch(err => {
            console.error('Impossible de copier le texte : ', err);
            alert('Impossible de copier le texte. Veuillez le sélectionner et utiliser la fonction de copie de votre navigateur.');
        });
});
