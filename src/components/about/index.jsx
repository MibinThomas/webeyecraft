import React from 'react';
import HeaderOne from '@/src/layout/headers/header';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea from './../homes/home/about-area';
import CounterArea from '../homes/home/counter-area';
import FeatureArea from '../homes/home/feature-area';
import SupportArea from './support-area';
import VideoArea from '../../common/video-area';
import TestimonialFeature from './feature-testimonial';
import TestimonialArea from '@/src/common/testimonial-area';
import BrandArea from '@/src/common/brand-area';
import TeamArea from '@/src/common/team-area';
import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import Footer from '@/src/layout/footers/footer';

const About = () => {
    return (
        <>
          <HeaderOne />  
          <main>
            <Breadcrumb top_title="About Us"  page_title="About Us" />
            <FeatureArea about={true} />
            <CounterArea about={true} />
            <AboutArea about={true} /> 
            <SupportArea />
            </main>
          <Footer/>
        </>
    );
};

export default About;