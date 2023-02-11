import React from 'react'

import background from './images/background.jpg'
import img1 from './images/img1.jpg'
import logo from './images/sukhadlogo.png'
import img2 from './images/img2.webp'
import img4 from './images/img4.jpeg'
import img5 from './images/img5.jpeg'
import img6 from './images/img6.png'
import img7 from './images/img7.png'
import ad from './images/sukhadloanadv.gif'
import followus from './images/followus.png'


function Home() {
  return (
  
  <div className='container shadow p-3 mb-5 bg-body rounded border border-info'>
   
    <div style={{ backgroundImage:`url(${background} )`,backgroundSize: "cover",overflow: 'hidden',  }} >
       
       <center>
        <h1 className="p-3 mb-2 bg-dark text-warning">SUKHAD LOAN</h1><br></br>
        <img src={logo} alt="this is dflt image" height={"200px"} /><br></br><br></br>

        <h2 className='text-light bg-dark'><marquee>The journey to your dream business starts here...!</marquee></h2><br/>
        <br/>

            <div className="p-3 mb-2 bg-light text-dark">
                <h1 className=" text-danger"><ins>Business Loan</ins></h1>
                <img src={ad} alt="this is dflt image" height={"300px"} width={"700px"}/><br/>
               <h3>Get an unsecured business loan as high as Rs 25 lakh from Sukhad Loans. If you want to skip the long queues and heavy paperwork, apply for the loan online and get your capital faster.</h3>
               <button type="button" class="btn btn-danger" ><a href="inquiry" className='text-light'>Apply Now </a></button>
            </div><br/>
            
        <img src={img1} alt="this is dflt image" height={"500px"}/>
        <br></br><br></br>



        <div class="p-3 mb-2 bg-info text-dark">
           <h2  class="  text-danger"><ins>Why Choose Us?</ins></h2>
           <h3 className="text-white">
            1. Loans with quick approval.<br></br>
            2. Customize a loan based on the amount.<br></br>
            3. Good credit profile and you have built your loan.<br></br>
            4. We provide online instant cash loans.<br></br>
            5. Flexible tenure <br></br>
            6. Quick Disbursal<br></br>
           </h3>
           <br></br>
        </div><br></br>

           <img src={img6} alt="body img" height={"600px"} /><br/><br></br>

        <div className="p-3 mb-2 bg-secondary">
            <img src={img2} alt="body img" height={"250px"}/>..
            <img src={img4} alt="body img" height={"250px"}/>..
            <img src={img5} alt="body img" height={"250px"}/>
            
        </div>
            <img src={img7} alt="body img" height={"250px"}/><br/><br/>
          

        <div className='bg-light'>
              <br/><h2 className='text-danger'><ins>Frequently asked questions(faqs)</ins></h2><br/>
                <h4>Q1. What is the maximum amount of business loan that I can take?</h4>
                <p>If you need a business loan to expand your business, the maximum amount you can obtain will be based on your business credit history, income, annual turnover etc. At SUKHAD LOAN, you can receive business loans ranging from Rs 5 lakh to Rs 25 lakh. </p>
                <h4>Q2. Who is eligible for a business loan from a loan company in India?</h4>
                <p>If you are a self-employed professional or non-professional such as a trader, manufacturer, or service provider, you can easily obtain an online business loan in India. Apart from this, entities such as LLPs, partnership firms, and private limited companies are eligible for small business loans in India. </p>
                <h4>Q3. What is the maximum tenure of a small business loan?</h4>
                <p>Business loans have a short repayment period. At SUKHAD LOAN, we provide a flexible repayment tenure ranging from 12 months to 36 months.</p><br></br>
        </div><br></br>


        
            

        <footer className='p-3 mb-2 bg-dark text-white'>
            <p>About Us:<br/>
            <a>Under our treasury services, we help businesses generate better returns on their funds and manage financial risk. We focus on three main product areas: foreign exchange and derivatives, local currency money market and debt securities, and equities.</a></p>
            <p>Contact Us:<br/>
            <a href="sukhadloans@gmail.com">sukhadloan@gmail.com</a><br/>
            <a>9988776655</a></p><br></br>
            <a>Follow Us On:</a><br></br>
            <img src={followus} alt="body img" height={"50px"}/>
        </footer>
    

     
       </center>
      
     
         
    </div>
  </div>
  )
}

export default Home
