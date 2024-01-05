import React from 'react'
import Layout from '../layout'
import main from '../images/main.png'
import delivery from '../images/delivery.jpeg'
import cooking from '../images/cooking.webp'
import healthy from '../images/healthy food.jpeg'
import menu1 from '../images/menu_1.png'
import menu2 from '../images/menu_2.webp'
import menu3 from '../images/menu_3.webp'

const Home = () => {
  return (
    <Layout>
      <section id="hero" className="mt-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1>Best Food For You</h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
                Repellat eius assumenda eum iure dignissimos aperiam facilis eveniet, praesentium ducimus consequuntur.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </p>
              <div className="mt-3">
                <button className="btn btn-success rounded-4">Order Now</button>
                {' '}
                <button className="btn btn-secondary rounded-4">Contact Us</button> 
              </div>
            </div>

            <div className="col-sm-6 d-none d-sm-flex">
              <img src={main} alt="Menu" className="w-100" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 w-auto">
              <h2 className="pb-2 border-bottom border-2 border-success">Extraordinary Taste and Experience</h2>
            </div>
          </div>

          <div className="row mt-5 flex-column-reverse flex-sm-row align-items-sm-center">
            <div className="col-sm-6 mt-4 mt-sm-0">
              <h3>We Make Sure Your Food Arrive on Time</h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus provident repellendus itaque, aut esse rem tenetur sequi possimus consequatur.
              </p>
              <button className="btn btn-success rounded-4 mt-2">Read More</button>
            </div>
            <div className="col-sm-6 ps-sm-5">
              <img src={delivery} alt="Delivery" className="w-100 rounded-4" />
            </div>
          </div>

          <div className="row mt-5 flex-column-reverse flex-sm-row-reverse align-items-sm-center">
            <div className="col-sm-6 mt-4 mt-sm-0">
              <h3>High Quality Food Material</h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus provident repellendus itaque, aut esse rem tenetur sequi possimus consequatur.
              </p>
              <button className="btn btn-success rounded-4 mt-2">Read More</button>
            </div>
            <div className="col-sm-6 pe-sm-5">
              <img src={cooking} alt="Cooking" className="w-100 rounded-4" />
            </div>
          </div>

          <div className="row mt-5 flex-column-reverse flex-sm-row align-items-sm-center">
            <div className="col-sm-6 mt-4 mt-sm-0">
              <h3>Customize Your Own Bowl</h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusamus provident repellendus itaque, aut esse rem tenetur sequi possimus consequatur.
              </p>
              <button className="btn btn-success rounded-4 mt-2">Read More</button>
            </div>
            <div className="col-sm-6 ps-sm-5">
              <img src={healthy} alt="Healthy" className="w-100 rounded-4" />
            </div>
          </div>
        </div>
      </section>

      <section id="signature-menu" className="mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 w-auto">
              <h2 className="pb-2 border-bottom border-2 border-success">Our Signature Menu</h2>
            </div>
          </div>

          <div className="row justify-content-center mt-5">
            <div className="col-sm-3">
              <figure className="bg-success d-flex justify-content-center align-items-center rounded-4 py-5">
                <img src={menu1} alt="Menu" className="w-75" />
              </figure>
              <h6 className="mt-3 text-center">Salmon Salad with Mix Veggies</h6>
              <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, sed?</p>
            </div>
            
            <div className="col-sm-3">
              <figure className="bg-success d-flex justify-content-center align-items-center rounded-4 py-5">
                <img src={menu2} alt="Menu" className="w-75" />
              </figure>
              <h6 className="mt-3 text-center">Fried Salmon with Brocolli</h6>
              <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, sed?</p>
            </div>
            
            <div className="col-sm-3">
              <figure className="bg-success d-flex justify-content-center align-items-center rounded-4 py-5">
                <img src={menu3} alt="Menu" className="w-75" />
              </figure>
              <h6 className="mt-3 text-center">Salmon with BBQ Sauce</h6>
              <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, sed?</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-5">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <div className="row susbcribe flex-column flex-md-row rounded-4 py-3 px-sm-5 align-items-center">
            <div className="col-md-6 text-white">
              <h5>Susbcribe to our promo</h5>
              <p className="mb-0">Lorem ipsum, dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Input your email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-secondary" type="button" id="button-addon2">Discover Here</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home