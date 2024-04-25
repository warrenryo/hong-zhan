import { HeroSection, Navbar, About, Services, Footer } from "./../components/component";

const Homepage = () => {
  return (
    <>
    
      <main>
        <article>
            <div >
             
            <HeroSection/>
            <About />
            <Services />
            <Footer/>
            </div>
       
        </article>
      </main>
    </>
  );
};
export default Homepage;
