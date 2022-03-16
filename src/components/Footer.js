import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer__col1">
                    <h1 className="footer__col1__title">Mesyachik Lena</h1>
                    <PText>
                        some text
                    </PText>
                </div>
                <div className="footer__col2">
                    <FooterCol
                        heading="Important Links"
                        links={[
                            {
                                title: 'Home',
                                path: '/',
                                type: 'Link',
                            },
                            {
                                type: 'Link',
                                title: 'About',
                                path: '/about',
                            },
                            {
                                type: 'Link',
                                title: 'Projects',
                                path: '/projects',
                            },
                            {
                                type: 'Link',
                                title: 'Contact',
                                path: '/contact',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: '+375(25)5208964',
                                path: 'tel:++375(25)5208964',
                            },
                            {
                                title: 'mesyachik96@inbox.ru',
                                path: 'mailto:mesyachik96@inbox.ru',
                            },
                            {
                                title: 'Belarus, Minsk',
                                path: 'http://google.com/maps',
                            },
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol
                        heading="social Links"
                        links={[
                            {
                                title: 'Codewars',
                                path: 'https://www.codewars.com/users/LenaMesyachik',
                            },
                            {
                                title: 'GitHub',
                                path: 'https://github.com/LenaMesyachik',
                            },
                            {
                                title: 'Freecodecamp',
                                path: 'https://www.freecodecamp.org/mesyachik',
                            },
                        ]}
                    />
                </div>
            </div>

        </FooterStyle>
    );
}
