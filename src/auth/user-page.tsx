import { createSignal, type Component, JSXElement, For } from 'solid-js'; 
export interface UserPageProps { children?: JSXElement }
import './user-page.css' 


const UserPage: Component<UserPageProps> = (props: any) => { 



    return (
        <>  
    {/* <span class="main_bg"></span> */}

 
    <div class="containers">
 
        {/* <header>
            <div class="brandLogo">
                <figure><img src="../../public/ip.png" alt="logo" width="40px" height="40px" /></figure>
                <span>MarqueTech</span>
            </div>
        </header> */}

 
        <section class="userProfile card">
            <div class="profile">
                <figure><img src="../../public/ip.png" alt="profile" width="250px" height="250px" /></figure>
            </div>
        </section>

 
        <section class="work_skills card">
 
            <div class="work">
                <h1 class="heading">Education</h1>
                <div class="primary">
                    <h1>SMK N 2 CILACAP</h1>
                    <span>STUDY</span>
                    <p>Budi Oetomo Street<br></br> Cilacap, Kab 54321-212-315-51</p>
                </div>

                <div class="secondary">
                    <h1>UMHT</h1>
                    <span>University</span>
                    <p>Kramat Jati Street <br></br> Jakarta Barat, 10651-78 156-187-60</p>
                </div>
            </div>
 
            <div class="skills">
                <h1 class="heading">Skills</h1>
                <ul> 
                   <li style="--i:0">Android</li>
                    <li style="--i:1">Web-Design</li>
                    <li style="--i:2">Backend</li> 
                    <li style="--i:3">Database</li> 
                </ul>
            </div>
        </section>

 
        <section class="userDetails card">
            <div class="userName">
                <h1 class="name">Alvin Masykur</h1>
                <div class="map">
                    <i class="ri-map-pin-fill ri"></i>
                    <span>Cilacap, Kab</span>
                </div>
                <p>Programmer</p>
            </div>

            <div class="rank">
                <h1 class="heading">Developer</h1>
                <span>Front End</span>
                <div class="rating">
                    <i class="ri-star-fill rate"></i>
                    <i class="ri-star-fill rate"></i>
                    <i class="ri-star-fill rate"></i>
                    <i class="ri-star-fill rate"></i>
                    <i class="ri-star-fill rate underrate"></i>
                </div>
            </div>

            <div class="btns">
                <ul>
                    {/* <li class="sendMsg">
                        <i class="ri-chat-4-fill ri"></i>
                        <a href="#">Send Message</a>
                    </li> */}

                    <li class="sendMsg active">
                        <i class="ri-check-fill ri"></i>
                        <a >Contacts</a>
                    </li>

                    <li class="sendMsg">
                        <a >Edit User</a>
                    </li>
                </ul>
            </div>
        </section>

 
        <section class="timeline_about card">
            <div class="tabs">
                <ul>
                      <li class="about active">
                        <i class="ri-user-3-fill ri"></i>
                        <span>About</span>
                    </li>
                    <li class="timeline">
                        <i class="ri-eye-fill ri"></i>
                        <span>Info</span>
                    </li>
                </ul>
            </div>

            <div class="contact_Info">
                <h1 class="heading">Contact Information</h1>
                <ul>
                    <li class="phones">
                        <h1 class="label">Phone:</h1>
                        <span class="info" style="    font-weight: 400;">+62 891 567 890</span>
                    </li>

                    <li class="address">
                        <h1 class="label">Address:</h1>
                        <span class="info" style="    font-weight: 400;">Urip Sumoharjo Street <br></br>  Cilacap, Kab 54321-78 156-187-60 </span>
                    </li>

                    <li class="email">
                        <h1 class="label">E-mail:</h1>
                        <span class="info" style="    font-weight: 400;">alvin@gmail.com</span>
                    </li>

                    <li class="site">
                        <h1 class="label">Site:</h1>
                        <span class="info" style="    font-weight: 400;">https://www.braincodesolution.com</span>
                    </li>
                </ul>
            </div>

            <div class="basic_info" style="margin-top: 15px;">
                <h1 class="heading">Basic Information</h1>
                <ul>
                    <li class="birthday">
                        <h1 class="label">Birthday:</h1>
                        <span class="info">Dec 25, 2000</span>
                    </li>

                    <li class="sex">
                        <h1 class="label">Gender:</h1>
                        <span class="info">Male</span>
                    </li>
                </ul>
            </div>
        </section>
    </div>
        </>
    );
};

export default UserPage;