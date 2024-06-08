import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-4'>About Selam Bus S.C.</h1>
      <p className='mb-4'>
        Selam Bus S.C. is a leading transportation company in Ethiopia, providing reliable and comfortable travel services across the country. Established in 1996, the company has grown to become one of the most trusted names in the Ethiopian transport sector.
      </p>
      <h2 className='text-2xl font-semibold mb-2'>Our Mission</h2>
      <p className='mb-4'>
        Our mission is to offer safe, efficient, and affordable transportation services to our passengers, ensuring their comfort and satisfaction at all times. We are committed to connecting people and places with the highest standards of service.
      </p>
      <h2 className='text-2xl font-semibold mb-2'>Our Services</h2>
      <p className='mb-4'>
        Selam Bus S.C. operates a fleet of modern buses equipped with the latest amenities to ensure a pleasant travel experience. Our services include:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Inter-city bus services connecting major cities and towns in Ethiopia</li>
        <li>Comfortable seating with ample legroom</li>
        <li>On-board entertainment and refreshments</li>
        <li>Experienced and professional drivers</li>
        <li>Online booking and customer support</li>
      </ul>
      <h2 className='text-2xl font-semibold mb-2'>Our Fleet</h2>
      <p className='mb-4'>
        Our fleet comprises state-of-the-art buses designed for long-distance travel, featuring:
      </p>
      <ul className='list-disc list-inside mb-4'>
        <li>Air conditioning</li>
        <li>Reclining seats</li>
        <li>In-bus entertainment systems</li>
        <li>Clean and hygienic restrooms</li>
        <li>GPS tracking for safety and security</li>
      </ul>
      <h2 className='text-2xl font-semibold mb-2'>Customer Commitment</h2>
      <p className='mb-4'>
        At Selam Bus S.C., we prioritize the safety and comfort of our passengers. Our commitment to customer satisfaction is reflected in our continuous efforts to improve our services and provide a seamless travel experience.
      </p>
      <h2 className='text-2xl font-semibold mb-2'>Contact Us</h2>
      <p>
        For more information or to book your next journey with us, please visit our website or contact our customer service team:
      </p>
      <p className='mt-2'>
        <strong>Website:</strong> <a href="https://www.selambus.com" className='text-blue-500 hover:underline'>www.selambus.com</a><br />
        <strong>Email:</strong> info@selambus.com<br />
        <strong>Phone:</strong> +251-11-123-4567
      </p>
    </div>
  );
}

export default About;
