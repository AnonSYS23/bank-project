import axios from "axios"
import "./App.css"

const App = () =>{
 return(
   <section>
    <header class="barra">
        <nav>
          <ul>
              <li>
                  <a href="./index.html">Home</a>
              </li>
              <li>
                  <a href="./page/order.html">Menu</a>
              </li>
              <li>
                  <a href="./page/book.html">Contact Us</a>
              </li>
          </ul>
        </nav>
    </header>
   <div className='Formulario'>
      <h2>Log In</h2>
      <form action="">
          <input type="text" placeholder="Account"/>
          <input type="text" placeholder="Password"/>
          <button className='btn-lgn' type="submmit">Log In</button>
      </form>
   </div>
   </section>
 )
}

export default App