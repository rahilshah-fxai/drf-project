```javascript
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">f(x)=Ai <span className="flag">🇺🇸</span></div>
        <nav className="nav">
          <ul>
            <li>Experience</li>
            <li>Skills</li>
            <li>World Records</li>
            <li>Services</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
            <li className="collab-button">Let’s Collaborate</li>
          </ul>
        </nav>
      </header>
      
      <main className="main-content">
        <h1>Hire The Original Gen AI Experts</h1>
        <p>
          As 'The Original AI Company,' fxis.ai is proud to be a pioneer in the fields of artificial
          intelligence and data science. Since our inception, we have been deeply rooted in data science,
          seamlessly integrating traditional AI methodologies with cutting-edge developments in machine
          learning, generative AI, and agentic AI. Our global presence and proven track record of success 
          across industries highlight our ability to deliver transformative solutions that drive real-world results.
        </p>
        <p>
          We pride ourselves on our deep experience and commitment to excellence.
        </p>
        <button className="hire-button">Hire AI Expert</button>
        <p>
          Looking for jobs instead? <a href="/jobs">Apply for Jobs</a>
        </p>
      </main>
    </div>
  );
};

export default App;
```

```css
/* App.css */
.container {
  font-family: Arial, sans-serif;
  color: #fff;
  background: url('your-background-image.jpg') no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav ul {
  list-style: none;
  display: flex;
}

.nav li {
  margin: 0 15px;
  cursor: pointer;
}

.main-content {
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.hire-button {
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
}

.hire-button:hover {
  background-color: #5753d1;
}

.flag {
  font-size: 20px;
}

a {
  color: #6c63ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

Make sure to replace `'your-background-image.jpg'` with the path to your actual background image.