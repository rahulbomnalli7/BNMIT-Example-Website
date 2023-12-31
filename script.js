  // Page content  
  const pages = {

    home: `
      <h2>Welcome to BNMIT College</h2>
      <p>BNMIT is a leading engineering and management college located in Bengaluru, Karnataka.</p>
      <p>Established in 2001, BNMIT offers world-class education to students in Karnataka and across India.</p>
    `,

    about: `
      <h2>About BNMIT</h2>
      <p>BNMIT was established in 2001 with a vision to provide quality technical education. The college is affiliated to Visvesvaraya Technological University (VTU) and approved by AICTE.</p>
      <p>The sprawling 100 acre campus houses all amenities for students including well-equipped labs, library, hostels, cafeteria and sports facilities.</p>
    `,

    admission: `
      <h2>Admission Information</h2>
      <h3>B.E. Programs</h3>
      <ul>
        <li>Computer Science and Engineering</li>
        <li>Information Science and Engineering</li>
        <li>Mechanical Engineering</li>
        <li>Electrical and Electronics Engineering</li>
        <li>Civil Engineering</li>
      </ul>

      <h3>MBA Programs</h3>
      <ul>
        <li>Finance</li>
        <li>Marketing</li>
        <li>Human Resource Management</li>
        <li>Operations Management</li> 
      </ul>
    `,

    academics: `
      <h2>Academic Programs</h2>
      <p>BNMIT offers world-class undergraduate and postgraduate programs in engineering and management.</p>

      <h3>Undergraduate Programs</h3>
      <ul>
        <li>B.E. in CSE</li>
        <li>B.E. in ISE</li>
        <li>B.E. in AiML</li>
        <li>B.E. in ECE</li>
        <li>B.E. in Mechanical</li>
        <li>B.E. in EEE</li>
        
      </ul>

      <h3>Postgraduate Programs</h3>
      <ul>
        <li>M.Tech in CSE</li>
        <li>M.Tech in Machine Design</li>
        <li>M.Tech in VLSI Design</li>
        <li>MBA</li>
      </ul>
    `,

    facilities: `
      <h2>Facilities</h2>
      <ul>
        <li>Spacious classrooms</li>
        <li>Well equipped labs</li>
        <li>Library with thousands of books</li>
        <li>Separate hostels for boys and girls</li>
        <li>Playground and gymnasium</li>
        <li>Cafeteria</li>
        <li>Bank and ATM</li>
        <li>Medical facilities</li>
        <li>Transport</li>
      </ul>
    `,

    achievements: `
      <h2>Achievements</h2>
      <ul>
        <li>Ranked among top 50 engineering colleges in India</li>
        <li>Received AAA rating from NAAC</li>
        <li>Winner of IMT Ghaziabad Annual B-School Chess Tournament</li>
        <li>Produced state rank holders in VTU every year</li>
      </ul>
    `,

    contact: `
      <h2>Contact Information</h2>
      <p>
        Email: info@bnmit.edu.in<br>
        Phone: +91 8026711781<br>
        Address: #1234, 4th Main, Bengaluru - 560078
      </p>

      <div class="contact-form">
        <form>
          <input type="text" placeholder="Your Name">
          <input type="email" placeholder="Your Email">
          <textarea placeholder="Your Message"></textarea>
          <button type="submit" class="btn">Submit</button> 
        </form>
      </div>
    </div>
  </section>  

    `

  };

  // Show page content  
  function showPage(pageId) {

    const contentDiv = document.getElementById('main-content');
    contentDiv.innerHTML = pages[pageId];

  }

  

  // Initially show home page
  showPage('home');
