import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaImage,
  FaMusic,
  FaPenFancy,
  FaRegKissWinkHeart,
} from "react-icons/fa";

const dreamData = [
  {
    title: "Dream Vacation 🌴",
    desc: "Maldives, Paris... you + me + sunsets + slow music.",
    img: "/1.jpg",
  },
  {
    title: "First Date 💑",
    desc: "A cozy dinner by candlelight... laughter, eye contact, no phones.",
    img: "/2.webp",
  },
  {
    title: "Wedding Vision 💍",
    desc: "You in white. Me smiling uncontrollably. A slow dance under fairy lights.",
    img: "/3.jpg",
  },
  {
    title: "Our Home 🏡",
    desc: "A place filled with laughter, love, and maybe little feet running around.",
    img: "/4.jpg",
  },
];

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <h1>
          <FaHeart /> Celebrating 2 Years of Love
        </h1>
        <p>Abefe & Ayinla Now till Forever 💖</p>
        <a href="#story">Scroll to begin ↓</a>
      </section>

      {/* Love Story Timeline */}
      {/* <section className="story" id="story">
        <h2>
          <FaCalendarAlt /> Our Love Story
        </h2>
        <ul>
          <li>
            <strong>2023:</strong> We met and everything changed. I bless the
            night you chatted and called. it's one of my favorite nights.
          </li>
          <li>
            <strong>First Date:</strong> Our laughter echoed louder than the
            music.
          </li>
          <li>
            <strong>First I Love You:</strong> Hearts synced forever.
          </li>
          <li>
            <strong>2024:</strong> Grew stronger, grew deeper.
          </li>
          <li>
            <strong>2025:</strong> Celebrating two years of pure magic.
          </li>
        </ul>
      </section> */}
      <section className="love-letter" id="story">
        <h2>
          <FaPenFancy /> A Letter to the Love of my Life
        </h2>
        <div className="letter-content">
          <p>My Eleyinjú Ẹjẹ,</p>
          <p>
            From the very first message to the endless calls that followed,
            you’ve been a light in my life I never knew I needed. Your voice has
            become my favorite song, and your laughter—my daily blessing.
          </p>
          <p>
            These past two years have taught me the meaning of peace, joy, and
            companionship. Even without physical dates, every moment we’ve
            shared has felt like a chapter in the most beautiful love story.
          </p>
          <p>
            Thank you for being my safe space, my obsession, my forever girl. I
            can’t wait for all the memories we’ll still create. You and I… we
            are magic. ✨
          </p>
          <p>
            Forever yours,
            <br />
            Ayinla... 💌
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <h2>
          <FaImage /> Moments That Matter
        </h2>
        <div className="images">
          <div className="placeholder">
            <img src="/us1.jpeg" alt="Image 1" />
          </div>
          <div className="placeholder">
            <img src="/us2.jpeg" alt="Image 1" />
          </div>
          <div className="placeholder">
            <img src="/me2.jpeg" alt="Image 1" />
          </div>
        </div>
        <div className="images">
          <div className="placeholder">
            <img src="/babe2.jpeg" alt="Image 1" />
          </div>
          <div className="placeholder">
            <img src="/babe.jpeg" alt="Image 1" />
          </div>
          <div className="placeholder">
            <img src="/me.jpeg" alt="Image 1" />
          </div>
        </div>
      </section>

      {/* Love Notes */}
      <section className="reasons">
        <h2>
          <FaHeart /> 11 Reasons "I Love You Abefemi"
        </h2>
        <div className="reason-list">
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>With you, by my side I sleep at night.</p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>
              The warmth of your breath makes me feel like I’m floating on
              water.
            </p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>
              Your unwavering encouragement lifts me higher every day—you’re the
              motivation behind all I do.
            </p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>
              You make ordinary days feel like the best chapters of my life.
            </p>
          </div>

          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>Your voice calms me like no other.</p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>
              In your eyes, I see a future I never dared to dream of before you.
            </p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>Your smile? I swear, it's better than sunlight.</p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>You understand me without needing too many words.</p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>You love me on my worst days and celebrate me on my best.</p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>With you, even the quiet moments feel like magic.</p>
          </div>
          <div className="reason-item">
            <FaRegKissWinkHeart className="icon" />
            <p>You made me believe in love again.</p>
          </div>
        </div>
      </section>

      <section className="voice-note">
        <h2>
          <FaHeart /> A Voice from My Heart
        </h2>
        <p>Click play to hear a piece of me, just for you ❤️</p>
        <audio controls>
          <source src="/love2.ogg" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>

      {/* Music Playlist */}
      <section className="playlist">
        <h2>
          <FaMusic /> Our Playlist
        </h2>
        <p>Listen to our favorite songs that tell our story 🎶</p>
        <div className="spotify-row">
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/6Qyc6fS4DsZjB2mRW9DsQs?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/6qqrTXSdwiJaq8SO0X2lSe?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/6xRWoYwfwIKnT8bQGzKbxR?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/7jmHyHMEqm9MJWiMAneF05?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/3YPtN5X0HxIzeRCHxfoXTy?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/7mdJAkMBPkKYOLxcVPDqa0?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/0iO2iCAjtX0t5duvczNQt6?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/7JKGyMt8qkTaUHXFpxgjY2?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/3fGdbjANHhuAhNo0f4POgw?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/2kJwzbxV2ppxnQoYw4GLBZ?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/6qvtoU0gbkaOcTx6mnVDgV?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/7vGuf3Y35N4wmASOKLUVVU?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/3eHYnUFpEZjnTQag1EVxHC?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/3H3r2nKWa3Yk5gt8xgmsEt?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/0VhgEqMTNZwYL1ARDLLNCX?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/1ei3hzQmrgealgRKFxIcWn?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/5uCax9HTNlzGybIStD3vDh?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/1xQQJELCro7Fys7pUnHVYv?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/7xdHQUxVj0aOAvUOGLCYj3?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/4204hwPYuToiuSunPFUoML?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/4iZ4pt7kvcaH6Yo8UoZ4s2?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="future-vision">
        <h2>💭 Our Dream Board</h2>
        <p>Here’s a glimpse into the beautiful future I imagine with you ✨</p>
        <div className="dream-grid">
          {dreamData.map((dream, index) => (
            <motion.div
              className="dream-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={dream.img} alt={dream.title} />
              <h3>{dream.title}</h3>
              <p>{dream.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="reply-section">
        <form
          action="https://formspree.io/f/xrbqygwl"
          method="POST"
          className="reply-section"
        >
          <h2>✍️ Write Back to Me</h2>
          <p>
            I’d love to hear your thoughts. Just type — it’s just between us ❤️
          </p>

          <motion.textarea
            name="message"
            placeholder="Write me a note here..."
            required
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message 💌
          </motion.button>
        </form>
      </section>

      {/* Countdown */}
      <section className="countdown">
        <h2>Happy 2 Years, My Love! 🎉</h2>
        {/* <p>[Live countdown timer can go here]</p> */}
      </section>

      {/* Footer */}
      <footer>
        <p>
          <FaHeart /> Till 90 Baby, Abefe&Ayinla 💕
        </p>
      </footer>
    </div>
  );
}

export default App;
