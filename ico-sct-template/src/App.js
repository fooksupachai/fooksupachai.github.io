import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png';
import logoDark from './img/logo-dark.png';
import gallery1 from './img/gallery-1.jpg';
import gallery2 from './img/gallery-2.jpg';
import gallery3 from './img/gallery-3.jpg';
import gallery4 from './img/gallery-4.jpg';
import Countdown from './countdown.js';
// import {C} from './gimmic.js';

class App extends Component {
  constructor(){

    super();
    // C();
  }
   
  
  render() { 
    return (

      <div>

        {/* <!-- LOADING --> */}
		<div id="loading">

			<div className="loading"></div>

			{/* <!-- Words can be added in the main.js file --> */}
			<span id="loading-text"></span>
		</div>

    {/* <!-- POLYGON EFFECT --> */}
				<div id="bg"></div>

				{/* <!-- SLIDESHOW --> */}
				<div id="slideshow"></div>
    
        {/* <!-- NAVIGATION --> */}
        <div className="top-nav sr-top target-click" id="main-nav">

<div className="inner-nav">

  <div className="logo no-transition">
    <div className="logo-inner">
      <a href="#home" className="white-logo"><img src={logo} alt="Img description for SEO" /></a>
      <a href="#home" className="black-logo"><img src={logoDark} alt="Img description for SEO" /></a>
    </div>
  </div>
  
  <nav className="navigation navbar navbar-toggleable-lg">

    <button className="navbar-toggler navbar-toggler-right open-close-menu" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <i className="icon ion-navicon-round animated-quick"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">

      <ul id="nav-list" class="navbar-nav">
        <li className="nav-item active">
          <a href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a href="#main-content" data-offset="0" data-offset-small-screen="120">About</a>
        </li>
        <li className="nav-item">
          <a href="#main-team" data-offset="80" data-offset-small-screen="120">Team</a>
        </li>
        <li className="nav-item">
          <a href="#main-contact" data-offset="80" data-offset-small-screen="120">Contact</a>
        </li>
        <li className="nav-item">
          <a id="newsletter-button" href="#" class="open-newsletter">Newsletter</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</div>

{/* <!-- WRAPPER --> */}
		<div id="wrapper">

			{/* <!-- HOME PART --> */}
			<section id="home">

				{/* <!-- POLYGON EFFECT --> */}
				<div id="bg"></div>

				{/* <!-- SLIDESHOW --> */}
				<div id="slideshow"></div>

				{/* <!-- <img src="img/logo.png" className="logo" alt="My logo" /> --> */}

			
      	<div className="home-content sr-bottom-sequenced-home"  >

					<div id="home-content-for-fade">

          <h1>

					

						<h1 className="sr-bottom-sequenced-home special-text">ICO Countdown</h1>

           {/* <Countdown /> */}
            <button type="button" className="btn btn-primary btn-lg gradient">BUY WEIS TOKENS</button>
						

						
            </h1>
					</div>

				</div>
			</section>

			{/* <!-- MAIN CONTENT --> */}
			<section id="main-content">

				<div className="row">
					<div className="col-xs-12 col-lg-6 left-side">

						<div className="span">
							<h2 className="sr-left-sequenced">About our project.</h2>

							<p className="sr-left-sequenced">Lorem ipsum Aliquip dolore dolor sint ut nostrud in adipisicing dolore veniam reprehenderit aliquip enim eu in commodo dolor pariatur consequat dolor cillum reprehenderit dolore Duis cillum enim in dolor sint consectetur incididunt labore adipisicing qui esse Duis Duis officia in eiusmod voluptate Duis Excepteur id aute dolor quis ex culpa nostrud in dolore in fugiat elit Ut dolore proident.</p>

							<a className="inline-button open-newsletter sr-left-sequenced" href="#">Get notified!</a>

						</div>
					</div>

					<div className="col-xs-12 col-lg-6 right-side">

						<div className="photo-line">
						
							<div className="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

								{/* <!-- Item --> */}
								<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-xs-12 sr-bottom">
									
									{/* <!-- Link to the picture and to open the gallery / Fill up well the data-size property --> */}
									<a className="box-picture" href={gallery1} itemprop="contentUrl" data-size="1920x1280">
										
										{/* <!-- Your picture --> */}
										<img src={gallery1} itemprop="thumbnail" alt="This is my work" className="img-responsive" />
										<p>Open</p>
										
									</a>
										
									{/* <!-- Picture's description below this one --> */}
									<figcaption itemprop="caption description">

										<div className="photo-details">
										
											<h4>The place to be</h4>

											<span className="border"></span>

											<p>Perfect and awesome template to present your future product or service.
											<a href="http://themehelite.com">Hooking audience</a> attention is all in the opener.</p>

										</div>

									</figcaption>

								</figure>

								{/* <!-- Item --> */}
								<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-xs-12 sr-bottom">
									
									{/* <!-- Link to the picture and to open the gallery / Fill up well the data-size property --> */}
									<a className="box-picture" href={gallery2} itemprop="contentUrl" data-size="1920x1280">
										
										{/* <!-- Your picture --> */}
										<img src={gallery2} itemprop="thumbnail" alt="This is my work" className="img-responsive" />
										<p>打开</p>
										
									</a>
										
									{/* <!-- Picture's description below this one --> */}
									<figcaption itemprop="caption description">

										<div className="photo-details">
										
											<h4>アメージング風景</h4>

											<span className="border"></span>

											<p>完璧と素晴らしいテンプレートは、あなたの将来の製品やサービスを提示します<br />
												フック聴衆の関心はすぐに行われます。</p>

										</div>

									</figcaption>

								</figure>

								{/* <!-- Item --> */}
								<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-xs-12 sr-bottom">
									
									{/* <!-- Link to the picture and to open the gallery / Fill up well the data-size property --> */}
									<a className="box-picture" href={gallery3} itemprop="contentUrl" data-size="1920x1280">
										
										{/* <!-- Your picture --> */}
										<img src={gallery3} itemprop="thumbnail" alt="This is my work" className="img-responsive" />

										<span className="widget-angle angle-bottom-left">
											<span className="icon-text">
												<i className="icon ion-ios-star"></i>
											</span>
										</span>

										<p>Ouvrir</p>
										
									</a>
{/* 										
									<!-- Picture's description below this one --> */}
									<figcaption itemprop="caption description">

										<div className="photo-details">
										
											<h4>Atteindre le sommet</h4>

											<span className="border"></span>

											<p>Le template parfait et génial pour présenter votre futur produit ou service.<br />
												<a href="http://themehelite.com">Captiver l'attention</a> de votre audience se fait dans les premières secondes.</p>

										</div>

									</figcaption>

								</figure>

								{/* <!-- Item --> */}
								<figure itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject" className="col-xs-12 sr-bottom">
									
									{/* <!-- Link to the picture and to open the gallery / Fill up well the data-size property --> */}
									<a className="box-picture" href={gallery4} itemprop="contentUrl" data-size="1920x1280">
										
										{/* <!-- Your picture --> */}
										<img src={gallery4} itemprop="thumbnail" alt="This is my work" className="img-responsive" />

										<span className="widget-angle angle-top-right">
											<span className="icon-text">
												<i className="icon ion-ios-star"></i>
											</span>
										</span>

										<p>öffnen</p>
										
									</a>
										
									{/* <!-- Picture's description below this one --> */}
									<figcaption itemprop="caption description">

										<div className="photo-details">
										
											<h4>spezielle Kerze</h4>

											<span className="border"></span>

											<p>Perfekt und fantastisch Vorlage Ihrer zukünftigen Produkt oder eine Dienstleistung zu präsentieren.
												die Aufmerksamkeit des Publikums Einhaken ist alles in der Opener.</p>

										</div>

									</figcaption>

								</figure>
									
							</div>

						</div>

					</div>
				</div>

				{/* <!-- DO NOT REMOVE THE FOLLOWING DIV, IT'S USED TO DETECT WHEN USER REACHES THE BOTTOM OF MAIN CONTENT TO FIX LEFT TEXT --> */}
				<span className="bottom-of-div"></span>

			</section>

			{/* <!-- BANNER --> */}
			<section id="main-banner">

				<div className="inner col-xs-12 col-lg-6">

					<h2 className="sr-left-sequenced-2">Our br /and,<br /> Your Destiny...</h2>

					<p className="sr-left-sequenced-2">Lorem ipsum Voluptate nulla dolore laborum ullamco anim dolor dolor sunt qui qui occaecat laborum pariatur sed nostrud deserunt. Lorem ipsum Ex eu est commodo Ut in laborum Ut officia aliquip est dolor Ut in in commodo dolor esse minim fugiat sunt Ut esse magna cillum anim enim reprehenderit ad amet eiusmod non in in aliqua voluptate adipisicing in.</p>

				</div>

				<div className="clear"></div>

			</section>

			{/* <!-- TEAM --> */}
			<section id="main-team">

				<div className="col-xs-12 col-lg-6 left-side">

					<div className="team-member sr-bottom-sequenced">

						<div className="team-description">
							
							<h4>Julian WHITE<br /><small>CEO & Founder</small></h4>

						</div>

                    	<p>
                    		<span className="border"></span>
							<strong>Julian is an American entrepreneur</strong>, <i>businessman, inventor, and industrial designer. He is the founder, chairman, and chief executive officer (CEO) of AQUA Inc.</i>
						</p>

					</div>

					<div className="team-member sr-bottom-sequenced">

						<div className="team-description">
							
							<h4>Claire STARK<br /><small>UI Engineer</small></h4>

						</div>

						<p>
							<span className="border"></span>
							<strong>Claire is a French businesswoman</strong>, <i>sparkling, inventor, and industrial designer. She is the UI Engineer at AQUA Inc.</i>
						</p>

					</div>

					<div className="team-member sr-bottom-sequenced">

						<div className="team-description">
							
							<h4>Emma SMITH<br /><small>Head of Sales</small></h4>

						</div>

						<p>
							<span className="border"></span>
							<strong>Emma is a Dutch marketer</strong>, <i>leader, inventor, and industrial designer. She is the Head of Sales at AQUA Inc.</i>
						</p>

					</div>

					<div className="team-member sr-bottom-sequenced">

						<div className="team-description">
							
							<h4>Michael JONES<br /><small>Product Designer</small></h4>

						</div>

						<p>
							<span className="border"></span>
							<strong>Michael is an English designer</strong>, <i>leader, inventor, and product designer. He is the Product Designer at AQUA Inc.</i>
						</p>

					</div>
					
				</div>

				<div className="col-xs-12 col-lg-6 right-side">

					<div className="span">

						<h2 className="sr-right-sequenced">Who's working on?</h2>

						<p className="sr-right-sequenced">Lorem ipsum Aliquip dolore dolor sint ut nostrud in adipisicing dolore veniam reprehenderit aliquip enim eu in commodo dolor pariatur consequat dolor cillum reprehenderit dolore Duis cillum enim in dolor sint consectetur incididunt labore adipisicing qui esse Duis Duis officia in eiusmod voluptate Duis Excepteur id aute dolor quis ex culpa nostrud in dolore in fugiat elit Ut dolore proident.</p>

						<a className="inline-button sr-right-sequenced" href="#main-contact" data-offset="80" data-offset-small-screen="120">Join our Team</a>
					</div>

				</div>

			</section>

			{/* <!-- CONTACT --> */}
			<section id="main-contact">

				<div id="inner-contact" className="container">

					<h2 className="sr-bottom">Contact our Team<small><br />Our Help Center is here for you, 24/7 from Seattle.<br /> Ask us <b>everything you want!</b></small></h2>

					<div className="row">

						<div className="col-xs-12 col-md-12 col-lg-9 contact-block sr-left">

							{/* <!-- START - Contact Form --> */}
				        	<form id="contact-form" name="contact-form" method="POST" data-name="Contact Form">

				        		<h3>Say Hello...</h3>

				                <div className="row">

				                	{/* <!-- ! Anti-spam field ! Invisible for users, the major part of bots will write something in this field, then, they will be blocked and no spam in your inbox will come.  --> */}
				                    <div className="col-xs-12 col-sm-12 col-lg-12 display-none">
				                        <div className="form-group">
				                            <input type="text" id="checking" className="form form-control" placeholder="Leave this field empty" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Leave this field empty'" name="checking" data-name="Checking" />
				                        </div>
				                    </div>

				                    {/* <!-- Full name --> */}
				                    <div className="col-xs-12 col-sm-6 col-lg-6">
				                        <div className="form-group">
				                            <input type="text" id="name" className="form form-control" placeholder="Name*" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Name*'" name="name" data-name="Name" required />
				                        </div>
				                    </div>

				                    {/* <!-- E-mail --> */}
				                    <div className="col-xs-12 col-sm-6 col-lg-6">
				                        <div className="form-group">
				                            <input type="email" id="email" className="form form-control" placeholder="Email Address*" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address*'" name="email-address" data-name="Email Address" required />
				                        </div>
				                    </div>

				                    {/* <!-- Message --> */}
				                    <div className="col-xs-12 col-sm-12 col-lg-12">
				                        <div className="form-group">
				                            <textarea id="text-area" className="form textarea form-control" placeholder="Your message here*... 20 characters Min." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your message here*... 20 characters Min.'" name="message" data-name="Text Area" required></textarea>
				                        </div>
				                        <span className="sub-text">* Required fields</span>
				                    </div>
				                </div>

				                {/* <!-- Form submission --> */}
				                <button type="submit" id="valid-form" className="btn btn-color">Send my Message</button>

				            </form>
				            {/* <!-- END - Contact Form -->
				            
				            <!-- START - Answer for the contact form is displayed in the next div, do not remove it. -->        */}
				            <div id="block-answer">

				                <div id="answer"></div>

				            </div>
				            {/* <!-- END - Answer... --> */}
				        </div>

				        <div className="col-xs-12 col-md-12 col-lg-3 contact-block sr-right">

				        	<h3>Get in touch...</h3>

				        	<h4><i className="fa fa-phone"></i> Phone</h4>

	                        <p>Guest: <a href="tel:(888)837-23X421">(888) 837-23X421</a><br />
	                        	Pro: <a href="tel:(808)847-746X35">(808) 847-746X35</a>
	                        </p>

	                        <h4><i className="fa fa-keyboard-o"></i> Email</h4>

	                        <p><a href="mailto:your-email@good.com">howdy@example.com</a><br />
	                            	<a href="mailto:your-email-pro@good.com">h.pro@example.com</a>
	                            </p>

	                        <h4><i className="fa fa-location-arrow"></i> Address</h4>

	                        <p>1020 Santa Monica Blvd,<br />
	                        		Santa Monica, CA</p>

				        </div>

		        	</div>

		        </div>

		        {/* <!-- MAP IN THE BACKGROUND --> */}
		        <div id="map"></div>

		        <ul>
					<li>
						<a id="link-to-contact" className="active"><i className="fa fa-pencil"></i> Contact</a>
					</li>

					<li>
						<a id="link-to-map"><i className="fa fa-globe"></i> Map</a>
					</li>
				</ul>

			</section>

		</div>
    
    {/* <!-- FOOTER --> */}
		<footer>

			<ul className="sr-bottom">
				<li>
					<a href="https://www.facebook.com/themehelite" target="_blank"><i className="fa fa-facebook"></i></a>
				</li>

				<li>
					<a href="https://twitter.com/themehelite" target="_blank"><i className="fa fa-twitter"></i></a>
				</li>

				<li>
					<a href="#" target="_blank"><i className="fa fa-google-plus"></i></a>
				</li>

				<li>
					<a href="#" target="_blank"><i className="fa fa-instagram"></i></a>
				</li>

				<li>
					<a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
				</li>

				<li>
					<a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
				</li>
			</ul>
			
			<p className="copyright sr-bottom"><a href="http://themehelite.com" target="_blank">AQUA</a> © 2017-2020 Madeon08<br />Made for you</p>

		</footer>

    <div id="photoswipe"></div>
      </div>
      
    );
  }
}


export default App;
