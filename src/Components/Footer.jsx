
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <footer className="my-8  py-4 px-4 md:px-6 lg:px-8">
            <div className="container mx-auhref">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <a href="/" className="flex items-center gap-2">
                      
                            <span className="text-xl font-bold text-green-700">Suborna Yasmin</span>
                        </a>
                        <p className=" text-xs">
                             Passionate about crafting beautiful and user-friendly web applications with React , Express.js, Mongodb, firebase & Tailwind.
                        </p>  
                    </div>

                    <div>
                        <h3 className="font-medium text-lg mb-4 text-green-700">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href='#about' className="text-muted-foreground hover:text-green-700 text-sm">
                                   About Me
                                </a>
                            </li>
                            <li>
                                <a href='#Skills' className="text-muted-foreground hover:text-green-700 text-sm">
                            Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-muted-foreground hover:text-green-700 text-sm">
                                Projects
                                </a>
                            </li>
                            <li>
                                < a href="#education" className="text-muted-foreground hover:text-green-700 text-sm">
                                  Education
                                </a>
                            </li>
                            <li>
                                < a href="#contact" className="text-muted-foreground hover:text-green-700 text-sm">
                              Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                  

               <div>
                  <h3 className="font-medium text-lg mb-4 text-green-700">Connect With Me</h3>

              <div className='flex gap-4'>
                      <a href="https://github.com/yasmin595" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-700 hover:text-green-700 transition" />
              </a>
              <a href="https://x.com/AmatullahY52946" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="text-2xl text-gray-700 hover:text-green-700 transition" />
              </a>
              <a href="https://www.linkedin.com/in/subornayasmin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin  className="text-2xl text-gray-700 hover:text-green-700 transition" />
              </a>
            
              </div>
               </div>
                </div>

             
            </div>
        </footer>
    );
};

export default Footer;