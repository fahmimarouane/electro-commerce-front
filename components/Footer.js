// components/Footer.js

/*
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.a`
  img {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <SocialIcons>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.svg" alt="Facebook" />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="/twitter.svg" alt="YouTube" />
          </SocialIcon>
        </SocialIcons>
        <Title>Your Website Title</Title>
      </Container>
    </StyledFooter>
  );
};

export default Footer;

*/

// components/Footer.js

// components/Footer.js
// components/Footer.js
// components/Footer.js

import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #333; /* Updated background color */
  color: #fff;
  padding: 10px 20px; /* Adjusted padding */
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: none; /* Initially hide the footer */
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center; /* Center social icons */
`;

const SocialIcon = styled.a`
  img {
    width: 30px; /* Original size */
    height: 30px;
    filter: none; /* Original colors */
  }
`;

const Title = styled.div`
  font-size: 1rem; /* Reduced title font size */
  font-weight: bold;
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  opacity: 0.8;
`;

const FooterContainer = styled.div`
  height: 40px; /* Set a fixed height for the trigger area */
  cursor: pointer;
`;

const Footer = () => {
  const handleFooterToggle = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      const isHidden = footer.style.display === 'none' || !footer.style.display;
      footer.style.display = isHidden ? 'block' : 'none';
    }
  };

  return (
    <div>
      <FooterContainer
        onMouseEnter={handleFooterToggle}
        onMouseLeave={handleFooterToggle}
      ></FooterContainer>
      <StyledFooter id="footer">
        <Container>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook" />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" alt="Twitter" />
            </SocialIcon>
          </SocialIcons>
          <Title>Your Website Title</Title>
        </Container>
        <Copyright>
          &copy; 2023 Your Company Name. All rights reserved.
        </Copyright>
      </StyledFooter>
    </div>
  );
};

export default Footer;
