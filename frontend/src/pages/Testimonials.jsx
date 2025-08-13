import React from "react";
import GauravJha from '../assets/componets-bg/GauravJha.png'
import Joydeep from '../assets/componets-bg/Joydeep.jpg'
import Shiraj from '../assets/componets-bg/Shiraj.jpg'

export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Montserrat:wght@300;400;600;700&display=swap');

        :root {
          --accent: #c62828;
          --star: #f4b400;
          --muted: #777;
          --card-shadow: rgba(15, 15, 15, 0.12);
          --max-width: 1400px;
        }

        /* Outer grid container */
        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          background: #fff;
          align-items: start;
          max-width: var(--max-width);
          align-items: stretch; /* important */
          margin: 0 auto;
          padding: 60px 40px;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            padding: 40px 20px;
          }
          .testimonial-header {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .testimonial-card {
            max-width: 100%;
            min-height: auto;
          }
          .testimonials-grid {
            padding: 20px 10px;
          }
          .view-all-btn {
            padding: 12px 30px;
          }
        }
        .left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* Stretch children */
  align-items: stretch;
}

        /* Heading styles */
        .testimonial-header h5 {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 6px;
          color: var(--muted);
          margin: 0 0 12px 0;
          font-weight: 700;
        }
        .testimonial-header h1 {
          font-family: 'Oswald', sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 4vw, 64px);
          line-height: 1;
          margin: 0 0 20px 0;
          text-transform: uppercase;
          color: #111;
        }
        .testimonial-header .rating {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .testimonial-header .rating .stars {
          color: var(--star);
          font-size: 20px;
        }
        .testimonial-header .rating .count {
          color: var(--accent);
          font-weight: 700;
          font-size: 15px;
        }
        .testimonial-header p {
          font-family: 'Montserrat', sans-serif;
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 0 14px 0;
        }
        .view-all-btn {
          background: red;
          color: #fff;
          border: none;
          padding: 10px 40px; /* wider */
          font-weight: 600;
          cursor: pointer;
          border-radius: 2px;
          margin-top: 14px;
          font-family: 'Montserrat', sans-serif;
        }

        /* Columns */
        .left-column,
        .right-column {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        /* Card styles */
        .testimonial-card {
          background: #fff;
          padding: 28px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45), 0 6px 15px rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          max-width: 800px; /* reduced width */
          min-height: 480px; /* increased length */
          margin: 0 auto;
          height: 100%; /* equal height across grid */
        }
        .testimonial-card h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 20px;
          margin: 0 0 12px 0;
          text-transform: uppercase;
          color: #111;
          font-weight: 700;
          line-height: 1.1;
        }
        .testimonial-card p {
          font-family: 'Montserrat', sans-serif;
          color: #555;
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 10px;
        }
        .subheading {
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }

        /* User footer */
        .testimonial-user {
          display: flex;
          gap: 12px;
          align-items: center;
          margin-top: 16px;
        }
        .testimonial-user img {
          width: 64px;
          height: 64px;
          object-fit: cover;
          border-radius: 4px;
          border: 4px solid #fff;
          box-shadow: 0 8px 18px rgba(0,0,0,0.08);
        }
        .testimonial-user strong {
          display: block;
          font-family: 'Montserrat', sans-serif;
          font-size: 16px;
          margin-bottom: 4px;
          color: #111;
        }
        .stars {
          color: var(--star);
          font-size: 14px;
          letter-spacing: 2px;
        }
      `}</style>

      <div className="testimonials-grid">
        {/* LEFT COLUMN */}
        <div className="left-column">
          {/* Card 1 */}
          <div className="testimonial-card">
           <h3
            style={{
              fontFamily: 'Bebas Neue',
              fontWeight: 400,
              fontStyle: 'normal',  // "Regular" translates to normal here
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              fontSize: '36px',  
            }}
          >
            UNMATCHED CRAFTSMANSHIP & <br />PREMIUM SERVICE!
          </h3>

            <p>
              I’ve now known OCD Detailing for a few years now. And since then I’ve not taken my vehicles anywhere else. The level of personal attention, the skill and craftsmanship in the work they deliver, and the care with which they treat every single vehicle as their own, goes well beyond customer satisfaction. It’s obsession. The whole team at OCD only has one goal, work on every vehicle as if it’s the epitome of their skill. I’m thoroughly impressed with the bespoke nature of engagement I have every single time I visit OCD. Thank you Saurabh for taking such good care of the machines that keep us moving. Adding some pictures of my bike which was recently attended to by OCD. They’ve done a fantastic job on my cars as well and I only wish I could always keep them looking as they do when they come out of OCD.
            </p>
            <div className="testimonial-user">
             <img src={GauravJha} alt="Gaurav's bike" />
              <div>
                <strong>Gaurav Jha</strong>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="testimonial-card">
            <h3
            style={{
              fontFamily: 'Bebas Neue',
              fontWeight: 400,
              fontStyle: 'normal',  // "Regular" translates to normal here
              lineHeight: '100%',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              fontSize: '36px',  
            }}
          >LIKE WATCHING ARTISTS CRAFT A <br />MASTERPIECE!</h3>
            <p className="subheading">OCD – can also be termed as Outstanding Car Detailing!</p>
            <p>
              I recently had a ceramic coating (Graphene Plus) done on my car, and I <br />couldn’t be more impressed with the results. What truly sets this experience apart is the personal involvement of Saurabh and his son Ritwik. They approach detailing like artists working on a canvas, and it absolutely shows in the final result.
            </p>
            <p>
              My car literally shone like a diamond when they were finished — every inch gleamed with a mirror-like gloss. Their attention to detail and passion for their craft are unmatched. It’s rare to find professionals who take such pride in their work. Saurabh is a pleasure to deal with. He goes that extra mile to explain the process and the technicalities involved in the detailing process. Highly recommended to anyone looking to give their car the royal treatment. <br />You won’t be disappointed.
            </p>
            <div className="testimonial-user">
              <img src={Joydeep} alt="Joydeep's car" style={{ width: '100px', height: 'auto' }} />
              <div>
                <strong>Joydeep Mohanty</strong>
                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="right-column">
          {/* Header */}
          <div className="testimonial-header">
            <h5>TESTIMONIALS</h5>
            <h1>WHAT OUR<br />CUSTOMERS SAY</h1>
            <div className="rating">
              <div className="stars">★★★★★</div>
              <div className="count">(176 Reviews)</div>
            </div>
           <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal', // Regular translates to normal
              fontSize: '16px',
              lineHeight: '23.8px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}
          >
            Our customers trust OCD Detailing for unmatched car and bike detailing, premium ceramic coatings and PPF. With years of expertise and a passion for perfection, we treat every vehicle as our own, delivering showroom-like shine and long-lasting protection.
          </p>

            <p
             style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontStyle: 'normal', // Regular translates to normal
              fontSize: '16px',
              lineHeight: '23.8px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
            }}>
              Read what our happy customers have to say about their OCD experience — from mirror-like gloss finishes to exceptional attention to detail, we’re proud to be their go-to detailing studio.
            </p>
            <button className="view-all-btn">View All </button>
          </div>

          {/* Card 3 */}
          <div className="testimonial-card">
          <div className="top-content-wrapper" style={{ paddingTop: '30px' }}>
            <h3
              style={{
                fontFamily: 'Bebas Neue',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '100%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                fontSize: '36px',
              }}
            >
              UNMATCHED DETAILING EXPERIENCE LIKE <br />MAGIC ,LIKE HOME.
            </h3>
            <p>
              I firmly believe that there is no better detailing studio in Delhi/NCR (probably India) as well. I took my Mercedes C250D to Saurabh with permanent water marks & mineral deposits on all the glass panels. Having visited almost all the big detailing studios in NCR for the problem, I had little to no hope that the issue could be rectified. But to my surprise Saurabh & his team did the MAGIC. They explain all the details, insights & process with patience and smile. Saurabh being an automobile enthusiast himself, the conversations are a delight! I make it a point to visit them whenever I’m travelling from Noida to Gurgaon, even if it is for a basic wash. The place has warmth just like HOME. Next project Kawasaki ZX10R :)
            </p>
          </div>
          <div className="testimonial-user">
            <img src={Shiraj} alt="Shiraj's vehicle" style={{ width: '100px', height: 'auto' }} />
            <div>
              <strong>Shiraj Khanna</strong>
              <div className="stars">★★★★★</div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}
