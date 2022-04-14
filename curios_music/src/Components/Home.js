import './Home.css'
import React from 'react'
import img from './Image/Cardimage/img.jpg'
import img1 from './Image/Cardimage/Rectangle 8.jpg'
import img2 from './Image/Cardimage/Rectangle 8 (3).jpg'
import img3 from './Image/Cardimage/Rectangle 8 (4).jpg'



export default function Home() {
  return (
    <div>
      <header className='top_head'>
        <h1 className='title_top'>NFTs by Curios Music</h1>
        <p className='prgf'>Own a one-of-a-kind and limited digital collectible</p>
        <button className='btn_header'>Latest NFT drops</button>
      </header>
      <section className='big_sec'>
        <div className='section_top'>
          <h1 className='title'>Featured NFTs</h1>
          <div className='top_pics'>
            <div className='card'>
              <img src={img} alt='jpg' />
              <h1>Run the Jewels</h1>
              <p>buy now $9.00</p>
              <button>View details</button>
            </div>
            <div className='card'>
              <img src={img1} alt='jpg' />
              <h1 className='single'>Come Down Official Music Video</h1>
              <p>min bid $1,000.00</p>
              <p>buy now $9.00</p>
              <button>View details</button>
            </div>
            <div className='card'>
              <img src={img2} alt='jpg' />
              <h1>Smiley</h1>
              <p>buy now $5.00</p>
              <button>View details</button>
            </div>
            <div className='card'>
              <img src={img3} alt='jpg' />
              <h1>Pressa</h1>
              <p>buy now $2.00</p>
              <button>View details</button>
            </div>
          </div>
          <div className='middle'>
            <h1>Latest NFTs</h1>
            <div className='list_after'>
              <ul>
                <li><a href='#!'>All</a></li>
                <li><a href='#!'>Audio</a></li>
                <li><a href='#!'>Artwork</a></li>
                <li><a href='#!'>Video</a></li>
              </ul>
            </div>
            <div className='middle_pics'>
              <div className='card'>
                <img src={img} alt='jpg' />
                <h1>Run the Jewels</h1>
                <p>buy now $9.00</p>
                <button>View details</button>
              </div>
              <div className='card'>
                <img src={img1} alt='jpg' />
                <h1 className='single'>Come Down Official Music Video</h1>
                <p>min bid $1,000.00</p>
                <p>buy now $9.00</p>
                <button>View details</button>
              </div>
              <div className='card'>
                <img src={img2} alt='jpg' />
                <h1>Smiley</h1>
                <p>buy now $5.00</p>
                <button>View details</button>
              </div>
              <div className='card'>
                <img src={img3} alt='jpg' />
                <h1>Pressa</h1>
                <p>buy now $2.00</p>
                <button>View details</button>
              </div>
            </div>
            <div className='middle_pics'>
              <div className='card'>
                <img src={img2} alt='jpg' />
                <h1>Run the Jewels</h1>
                <p>buy now $9.00</p>
                <button>View details</button>
              </div>
              <div className='card'>
                <img src={img3} alt='jpg' />
                <h1 className='single'>Come Down Official Music Video</h1>
                <p>min bid $1,000.00</p>
                <p>buy now $9.00</p>
                <button>View details</button>
              </div>
              <div className='card'>
                <img src={img} alt='jpg' />
                <h1>Smiley</h1>
                <p>buy now $5.00</p>
                <button>View details</button>
              </div>
              <div className='card'>
                <img src={img1} alt='jpg' />
                <h1>Pressa</h1>
                <p>buy now $2.00</p>
                <button>View details</button>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
  )
}
