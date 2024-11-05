<template>

	<div id="page">
		<div id="music-player" class="music-player">
    <button @click="toggleMusic" :class="{ 'playing': isPlaying }">
      <svg class="music-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="5.5" cy="17.5" r="2.5"/>
        <circle cx="17.5" cy="15.5" r="2.5"/>
        <path d="M8 17V5l12-2v12"/>
      </svg>
    </button>
    <audio ref="audioPlayer" loop>
      <source src="/weddingsong.mp3" type="audio/mpeg">
    </audio>
  </div>
		
	<nav class="fh5co-nav" role="navigation">
		<div class="container">
			<div class="row">
				<div class="col-xs-2">
					<div id="fh5co-logo"><a href="#">digitals  Wedding<strong>.</strong></a></div>
				</div>
				
			</div>
			
		</div>
	</nav>
	<header id="fh5co-header" class="fh5co-cover" role="banner" style="background-image:url(images/imgbgtest.jpg);" data-stellar-background-ratio="0.5">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2 text-center">
        <div class="display-t">
          <div class="display-tc animate-box" data-animate-effect="fadeIn">
            <h1>Joefrey &amp; Sheila</h1>
			<!-- <h2 id="guest-name">Kepada Yth: </h2>  -->
			<div class="simply-countdown simply-countdown-one"></div>
			<br>
            <p><a href="#" id="unlock-button" class="btn btn-default btn-sm">Buka Undangan</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<div id="fh5co-couple">
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
        <h2>Hello!</h2>
        <h3>November 28th, 2024 New York, USA</h3>
        <p>Kami mengundang Anda untuk merayakan hari bahagia pernikahan kami.</p>
      </div>
    </div>
    <div class="couple-wrap animate-box">
      <div class="couple-half">
        <div class="groom">
          <img src="\images\4.jpg" class="img-responsive">
        </div>
        <div class="desc-groom">
          <h3>Joefrey Mahusay</h3>
          <p>Joefrey adalah sosok yang penuh semangat dan cinta. Dia telah menjadi bagian penting dalam hidupku dan sekarang kita siap untuk memulai perjalanan baru bersama.</p>
        </div>
      </div>
      
      <div class="heart-wrapper text-center">
  <div class="heart">
    <i class="icon-heart"></i> <!-- Pastikan ini menggunakan kelas yang sesuai -->
  </div>
</div>

      <div class="couple-half">
        <div class="bride">
          <img src="\images\4.jpg" class="img-responsive">
        </div>
        <div class="desc-bride">
          <h3>Sheila Mahusay</h3>
          <p>Sheila adalah wanita yang luar biasa dan penuh cinta. Bersama, kita akan mengukir kisah cinta yang tak terlupakan di hari pernikahan kita.</p>
        </div>
      </div>
    </div>
  </div>
</div>


<div id="fh5co-event" class="fh5co-bg" style="background-image:url(images/img_bg_3.jpg);">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <span>Our Special Events</span>
                <h2>Wedding Events</h2>
            </div>
        </div>
        
        <div class="row">
            <div class="display-t">
                <div class="display-tc">
                    <div class="col-md-10 col-md-offset-1">
                        <div class="col-md-6 col-sm-6 text-center">
                            <div class="event-wrap animate-box">
                                <h3>Main Ceremony</h3>
                                <div class="event-col">
                                    <i class="icon-clock"></i>
                                    <span>4:00 PM</span>
                                    <span>6:00 PM</span>
                                </div>
                                <div class="event-col">
                                    <i class="icon-calendar"></i>
                                    <span>Monday 28</span>
                                    <span>November, 2024</span>
                                </div>
                                <p>Acara ini akan menjadi momen yang tidak terlupakan, di mana kita akan bersatu dalam cinta dan kebahagiaan. Mari rayakan cinta kita di tengah keindahan suasana yang penuh harapan.</p>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 text-center">
                            <div class="event-wrap animate-box">
                                <h3>Wedding Party</h3>
                                <div class="event-col">
                                    <i class="icon-clock"></i>
                                    <span>7:00 PM</span>
                                    <span>12:00 AM</span>
                                </div>
                                <div class="event-col">
                                    <i class="icon-calendar"></i>
                                    <span>Monday 28</span>
                                    <span>November, 2024</span>
                                </div>
                                <p>Rangkaian pesta ini adalah perayaan cinta yang akan kita bagi bersama keluarga dan sahabat. Bergembiralah dan nikmati setiap momen yang penuh keceriaan dan kebahagiaan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  <div id="fh5co-couple-story">
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                <span>We Love Each Other</span>
                <h2>Our Story</h2>
                <p>Di balik samudera kata, tersembunyi kisah-kisah yang indah dan penuh arti, menjauh dari hiruk pikuk dunia.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-md-offset-0">
                <ul class="timeline animate-box">
                    <li class="animate-box">
                        <div class="timeline-badge" style="background-image:url(./images/fm.jpg);"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h3 class="timeline-title">First We Meet</h3>
                                <span class="date">December 25, 2015</span>
                            </div>
                            <div class="timeline-body">
                                <p>Di suatu tempat yang jauh, di balik pegunungan kata-kata, terjalin pertemuan yang tak terlupakan. Seolah dunia hanya milik kita berdua.</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted animate-box">
                        <div class="timeline-badge" style="background-image:url(images/fd.jpg);"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h3 class="timeline-title">First Date</h3>
                                <span class="date">December 28, 2015</span>
                            </div>
                            <div class="timeline-body">
                                <p>Pertemuan pertama itu membawa kita ke cerita yang penuh kebahagiaan, seperti dua jiwa yang akhirnya menemukan tempatnya.</p>
                            </div>
                        </div>
                    </li>
                    <li class="animate-box">
                        <div class="timeline-badge" style="background-image:url(./images/rl.jpg);"></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h3 class="timeline-title">In A Relationship</h3>
                                <span class="date">January 1, 2016</span>
                            </div>
                            <div class="timeline-body">
                                <p>Seiring waktu berlalu, kami menyadari bahwa hati ini saling terikat, membangun mimpi dan harapan bersama dalam kebersamaan yang indah.</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>


	<div id="fh5co-gallery" class="fh5co-section-gray">
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
					<span>Our Memories</span>
					<h2>Wedding Gallery</h2>
					<p>Jauh di balik pegunungan kata-kata, tersembunyi cerita cinta yang indah, penuh makna, dan abadi selamanya.</p>
				</div>
			</div>
			<div class="row row-bottom-padded-md">
				<div class="col-md-12">
					<ul id="fh5co-gallery-list">
						
						<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/1.jpg); "> 
						<a href="images/1.jpg">
							<div class="case-studies-summary">
								
							</div>
						</a>
					</li>
					<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/2.jpg); ">
						<a href="#" class="color-2">
							<div class="case-studies-summary">
								
							</div>
						</a>
					</li>


					<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/3.jpg); ">
						<a href="#" class="color-3">
							<div class="case-studies-summary">
								
							</div>
						</a>
					</li>
					<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/4.jpg); ">
						<a href="#" class="color-4">
							<div class="case-studies-summary">
								
							</div>
						</a>
					</li>

						<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/5.jpg); ">
							<a href="#" class="color-3">
								<div class="case-studies-summary">
									
								</div>
							</a>
						</li>
						<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/6.jpg); ">
							<a href="#" class="color-4">
								<div class="case-studies-summary">
									
								</div>
							</a>
						</li>

						<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/7.jpg); ">
							<a href="#" class="color-4">
								<div class="case-studies-summary">
									
								</div>
							</a>
						</li>

						<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/3.jpg); "> 
							<a href="#" class="color-5">
								<div class="case-studies-summary">
									
								</div>
							</a>
						</li>
						<li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/1.jpg); ">
							<a href="#" class="color-6">
								<div class="case-studies-summary">
									
								</div>
							</a>
						</li>
					</ul>		
				</div>
			</div>
		</div>
	</div>

	

	<div id="fh5co-testimonial">
  <div class="container">
    <div class="row">
      <div class="row animate-box">
        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
          <span>Best Wishes</span>
          <h2>Friends Wishes</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 animate-box">
          <div class="wrap-testimony">
            <!-- Display the first testimonial outside the carousel -->
            <div class="owl-carousel-fullwidth">
              <div v-for="(ucapan, index) in ucapans.slice(1)" :key="ucapan.id" class="item">
                <div class="testimony-slide text-center">
                  <!-- <figure>
                    <img :src="ucapan.image" alt="user">
                  </figure> -->	
                  <span>{{ ucapan.name }}, via <a href="#" class="twitter">Website</a></span>
                  <blockquote>
                    <p>"{{ ucapan.message }}"</p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div id="fh5co-started" class="fh5co-bg" style="background-image:url(images/img_bg_4.jpg);">
    <div class="overlay"></div>
    <div class="container">
        <div class="row animate-box">
            <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2>Are You Attending?</h2>
                <p>Fill out the form to let us know you're coming!</p>
            </div>
        </div>
        <div class="row animate-box">
            <div class="col-md-10 col-md-offset-1">
                <form @submit.prevent="submitForm" class="form-inline">
                    <div class="form-group col-md-4 col-sm-4">
                        <label for="name" class="sr-only">Name</label>
                        <input type="text" v-model="name" class="form-control" id="name" placeholder="Name" required>
                    </div>
                    <div class="form-group col-md-4 col-sm-4">
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Email" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="wish" class="sr-only">Your Wish</label>
                        <textarea v-model="wish" class="form-control" id="wish" placeholder="Your wish..." rows="2" required></textarea>
                    </div>
                    <div class="form-group col-md-4 col-sm-4">
    <label>Apakah Anda Berkenan Hadir</label><br>
    <input type="radio" id="hadir" value="Hadir" v-model="kehadiran">
    <label for="hadir">Hadir</label>
    <input type="radio" id="tidakHadir" value="Tidak Hadir" v-model="kehadiran">
    <label for="tidakHadir">Tidak Hadir</label>
</div>

<div class="form-group col-md-4 col-sm-4">
    <label>Jumlah Tamu</label><br>
    <div class="radio-option">
        <input type="radio" id="tamu1" value="1" v-model="jumlahTamu">
        <label for="tamu1">1</label>
    </div>
    <div class="radio-option">
        <input type="radio" id="tamu2" value="2" v-model="jumlahTamu">
        <label for="tamu2">2</label>
    </div>
</div>


                    <div class="col-md-12 text-center">
                        <button type="submit" class="btn btn-default" disabled>I am Attending</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>



	<footer id="fh5co-footer" role="contentinfo">
		<div class="container">

			<div class="row copyright">
				<div class="col-md-12 text-center">
					<p>
						<small class="block">&copy; Digitals Wedding</small> 
						<small class="block">Designed by <a href="https://wa.me/6281230147253?text=Kak%20saya%20mau%20buat%20undangan%20digital3" target="_blank">Digitals Wedding </a> <br>Ayo Beralih Ke Undangan Digital.</small>
					</p>
					
				</div>
			</div>

		</div>
	</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
	</div>


</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import axios from 'axios';

const ucapans = ref([]);
const name = ref('');
const email = ref('');
const wish = ref('');

// Function to fetch ucapans
const fetchUcapans = async () => {
  try {
    const response = await axios.get('https://apiinvit.vercel.app/api/ucapan');
    ucapans.value = response.data; // Assign fetched data to ucapans
  } catch (error) {
    console.error('Error fetching ucapans:', error);
  }
};

// Function to submit attendance form
const submitForm = async () => {
  try {
    const response = await axios.post('https://apiinvit.vercel.app/api/undangan', {
      name: name.value,
      email: email.value,
      ucapan: wish.value
    });
    console.log('Form submitted successfully:', response.data);
    alert('Your response has been submitted successfully!');
    // Reset form fields
    name.value = '';
    email.value = '';
    wish.value = '';
  } catch (error) {
    console.error('Error submitting the form:', error);
    alert('There was an error submitting your response. Please try again.');
  }
};

onMounted(async () => {
  await fetchUcapans();
  nextTick(() => {
    // Initialize the Owl Carousel after the DOM is updated
    $(".owl-carousel-fullwidth").owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
    });
  });

  // Additional functionality
  const header = document.getElementById('fh5co-header');
  const unlockButton = document.getElementById('unlock-button');
  const coupleSection = document.getElementById('fh5co-couple');
  const guestNameElement = document.getElementById('guest-name');
  let isUnlocked = false;

  // Disable scroll initially
  document.body.classList.add('lock-scroll');

  // Unlock scroll on button click
  unlockButton.addEventListener('click', (e) => {
    e.preventDefault();
    smoothScroll(coupleSection.offsetTop, 800);
    isUnlocked = true;
    document.body.classList.remove('lock-scroll');
  });

  // Event to detect scroll
  window.addEventListener('scroll', () => {
    const headerHeight = header.offsetHeight;
    const scrollPosition = window.scrollY;

    // Enable or disable scroll based on position
    if (scrollPosition >= headerHeight && !isUnlocked) {
      document.body.classList.remove('lock-scroll');
    } else if (scrollPosition < headerHeight && !isUnlocked) {
      document.body.classList.add('lock-scroll');
    }
  });

  // Smooth scroll function
  const smoothScroll = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animationScroll = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animationScroll);
  };

  // Countdown setup
  const d = new Date(Date.now() + 200 * 120 * 120 * 2000);
  simplyCountdown('.simply-countdown-one', {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate()
  });

  // Get URL parameter
  const getParameterByName = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  };

  // Update guest name element
  const guestName = getParameterByName('u');
  guestNameElement.textContent += guestName ? ` ${guestName}` : ' Tamu Terhormat';
});


const audioPlayer = ref(null);
const isPlaying = ref(false);

const toggleMusic = () => {
  if (audioPlayer.value) {
    if (isPlaying.value) {
      audioPlayer.value.pause();
    } else {
      audioPlayer.value.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};

const playAudio = () => {
  if (audioPlayer.value && !isPlaying.value) {
    audioPlayer.value.play()
      .then(() => {
        isPlaying.value = true;
      })
      .catch(error => {
        console.log("Audio playback failed:", error);
      });
  }
};

onMounted(() => {
  // Initialize audio player
  audioPlayer.value = document.querySelector('#music-player audio');

  // Add click event listener to the document
  document.addEventListener('click', playAudio, { once: true });
});

</script>

<style>
body.lock-scroll {
  overflow: hidden;
}
.simply-countdown {
    font-size: 5px; 
    line-height: 1;   
    padding: 5px;     
}
/* Music Player CSS */
.music-player {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
}

.music-player button {
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Hanya transisi background */
  display: flex;
  justify-content: center;
  align-items: center;
}

.music-player button:hover {
  background-color: rgba(255, 255, 255, 0.9); /* Efek hover */
}

.music-icon {
  width: 24px;
  height: 24px;
  color: #F14E95; /* Warna pink untuk ikon musik */
  transition: transform 0.3s ease; /* Hanya transformasi */
}

.music-player button.playing .music-icon {
  animation: rotate 5s linear infinite; /* Hanya animasi rotasi */
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Menghapus efek pulse dan bayangan */
.music-player button.playing {
  /* Tidak ada animasi tambahan */
}



#fh5co-started .form-control::placeholder {
    color: #555;
}

#fh5co-started label {
    font-size: 16px;
    color: white;
}

#fh5co-started input[type="radio"] {
    margin: 0 5px 0 0;
}

#fh5co-started label[for="hadir"],
#fh5co-started label[for="tidakHadir"] {
    margin-right: 15px;
    font-size: 16px;
    color: white;
}

#fh5co-started textarea.form-control {
    resize: none;
}
.radio-option {
    display: inline-block; /* Membuat elemen ditampilkan secara inline */
    margin-right: 20px; /* Jarak kanan antar radio option */
}

.radio-option input {
    margin-right: 5px; /* Jarak antara input dan label */
}

</style>