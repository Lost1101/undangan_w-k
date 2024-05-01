// Set the date we're counting down to
var countDownDate = new Date("June 23, 2024 08:00:00").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = "<div class='flex justify-center'> <div class='flex justify-evenly w-full phone:w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2'> <div>" + "<p class='text-3xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-5xl'>" + days + "</p>" + "<p class='block text-sm text-center'>Hari</p></div>" + "<div>" + "<p class='text-3xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-5xl'>" + hours + "</p>" + "<p class='text-sm text-center block'>Jam</p></div>" + "<div>"
  + "<p class='text-3xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-5xl'>" + minutes + "</p>" + "<p class='text-sm text-center block'>Menit</p></div>" + "<div>" + "<p class='text-3xl phone:text-3xl tablet:text-5xl laptop:text-5xl desktop:text-5xl'>" + seconds +  "</p>" +"<p class='text-sm text-center block'>Detik</p></div>" + "</div> </div>";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Function to get parameter value from URL
function getParamValue(param) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        return urlParams.get(param);
    }

    // Get the value of 'name' parameter from URL
    const nameValue = getParamValue('name');

    // Display the value in the paragraph element
    const nameParagraph = document.getElementById('name');
    nameParagraph.textContent = nameValue;

    function initializeCarousel(carouselId) {
        const carousel = document.getElementById(carouselId);
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
    }

    // Inisialisasi setiap carousel
    initializeCarousel('carousel1');
    initializeCarousel('carousel2');

    document.addEventListener("DOMContentLoaded", function() {
        window.addEventListener("scroll", fadeInOnScroll);
      });
      
      function fadeInOnScroll() {
        var contents = document.querySelectorAll(".content");
      
        contents.forEach(function(content) {
          var contentTopPosition = content.getBoundingClientRect().top;
          var screenHeight = window.innerHeight;
      
          if (contentTopPosition < screenHeight) {
            content.style.opacity = "1";
          }
        });
      }

      function copyToClipboard(inputId) {
        const inputElement = document.getElementById(inputId);
        const textToCopy = inputElement.value;
      
        if (navigator.clipboard) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            console.log(`Text "${textToCopy}" copied to clipboard.`);
          });
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = textToCopy;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          console.log(`Text "${textToCopy}" copied to clipboard.`);
        }
      }

      var audio = new Audio('./audio/musik.mp3');
      function openButton(id){
        var button = document.getElementById(id);
        audio.play();
        // Hapus class 'hidden' dari tombol musik
        button.classList.remove('hidden');
      }

      var isPlaying = true; // Keadaan awal, musik berjalan

      // Fungsi untuk mengatur pemutaran musik
      function toggleAudio() {
        var button = document.getElementById('toggleButton');
        if (isPlaying) {
          audio.pause(); // Jika sedang berjalan, hentikan
          button.innerHTML = '<i class="fa-solid fa-compact-disc"></i>'; // Ubah teks tombol menjadi ikon play
        } else {
          audio.play(); // Jika sedang dijeda, putar kembali
          button.innerHTML = '<i class="fa-solid fa-compact-disc"></i>'; // Ubah teks tombol menjadi ikon stop
        }
        isPlaying = !isPlaying; // Ubah keadaan pemutaran

      }

      // Tambahkan event listener untuk tombol
      document.getElementById('toggleButton').addEventListener('click', toggleAudio);

