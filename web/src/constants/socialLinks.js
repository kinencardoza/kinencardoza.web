import React from 'react';
import {  FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';
export const socialLinks = [
  {
    name: 'linkdin',
    url: 'www.linkedin.com/in/kinencardoza',
    icon: <FaLinkedin />,
  },
  {
    name: 'github',
    url: 'https://github.com/kinencardoza',
    icon: <FaGithub />,
  },
  {
    name: 'mail',
    url: 'mailto:kinencardoza@gmail.com',
    icon: <SiGmail />,
  },/*
  {
    name: 'facebook',
    url: 'https://www.facebook.com/webcifar',
    icon: <FaFacebook />,
  },*/
  {
    name: 'twitter',
    url: 'https://twitter.com/kinencardoza',
    icon: <FaTwitter />,
  },
];
