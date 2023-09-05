import type { Component } from 'solid-js';

import logo from './logo.svg';
// import Map from './Containers/Map';
// import "uno.css"
import { Routes, Route, A } from '@solidjs/router';
import { lazy, onMount } from 'solid-js';
import "virtual:uno.css"
import Stepvideo from './auth/stepvideo';
import internship from './auth/internship';
import Professional from './auth/professional';
import Sertificate from './auth/sertificate';
import AuthWeb from './auth/auth-web';
import UserPage from './auth/user-page';







const App: Component = () => {

  const Register = lazy(() => import('./auth/register'))
  const Login = lazy(() => import('./auth/login'))
  const About = lazy(() => import('./auth/about'))
  const Blogs = lazy(() => import('./auth/blog'))
  const Career = lazy(() => import('./auth/career'))
  const Register2 = lazy(() => import('./auth/register2'))
  const Professional = lazy(() => import('./auth/professional'))
  const Frontend = lazy(() => import('./auth/frontend'))
  const Register3 = lazy(() => import('./auth/register3'))
  const Freelance = lazy(() => import('./auth/freelance'))
  const Teams = lazy(() => import('./auth/teams'))
  const Contact = lazy(() => import('./auth/contact'))
  const Journey = lazy(() => import('./auth/journey'))
  const internship = lazy(() => import('./auth/internship'))
  const Projectdetails = lazy(() => import('./auth/projectdetails'))
  const TabelProject = lazy(() => import('./auth/tabelproject'))
  const Project = lazy(() => import('./auth/project'))
  const Detailblogs = lazy(() => import('./auth/detailsblog'))
  const Cms = lazy(() => import('./auth/cms'))
  const Tablejobs = lazy(() => import('./auth/job-v'))
  const Tableteams = lazy(() => import('./auth/teams_table'))
  const TableClient = lazy(() => import('./auth/tabelclient'))
  const TabelBlog = lazy(() => import('./auth/tabelblog'))
  const Explore = lazy(() => import('./auth/explore'))
  const Stepvideo = lazy(() => import('./auth/stepvideo'))
  const Training = lazy(() => import('./auth/training'))
  const Navbar = lazy(() => import('./auth/navbar'))
  const Footer = lazy(() => import('./auth/footer'))
  const Sertificate = lazy(() => import('./auth/sertificate'))
  const AuthWeb = lazy(() => import('./auth/auth-web'))
  const UserPage = lazy(() => import('./auth/user-page'))

  
  return (
    <div>
      <div>
      <div><Navbar/></div>
        <Routes>

        <Route path='/stepvideo' component={Stepvideo} />
          <Route path="/" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/blog" component={Blogs} />
          <Route path="/register2" component={Register2} />
          <Route path="/career" component={Career} />
          <Route path="/professional" component={Professional} />
          <Route path="/frontend" component={Frontend} />
          <Route path="/register3" component={Register3} />
          <Route path="/teams" component={Teams} />
          <Route path="/internship" component={internship} />
          <Route path="/freelance" component={Freelance} />
          <Route path="/projectdetails" component={Projectdetails} />
          <Route path="/contact" component={Contact} />
          <Route path="/journey" component={Journey} />
          <Route path="/cms" component={Cms} />
          <Route path="/tabelproject" component={TabelProject} />
          <Route path="/project" component={Project} />
          <Route path="/detailsblog" component={Detailblogs} />
          <Route path='/tableteams' component={Tableteams} />
          <Route path='/tablejobs' component={Tablejobs} />
          <Route path='/tabelclient' component={TableClient} />
          <Route path='/tabelblog' component={TabelBlog} />
          <Route path='/navbar' component={Navbar} />
          <Route path='/training' component={Training} />
          <Route path='/sertificate' component={Sertificate} />
            <Route path='/auth' component={AuthWeb} />
            <Route path='/user-page' component={UserPage} />
          <Route path='/footer' component={Footer} />
        </Routes>

      </div>
      <div>
        <Footer />
      </div>
    </div>

  );
};

export default App;
