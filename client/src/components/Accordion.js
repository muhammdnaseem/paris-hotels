import Accordion from 'react-bootstrap/Accordion';

function BasicExample(props) {
  const accordionItems = [
    {
      title: 'General Enquiries',
      index: 0,
      content: (
        <ul>
          <li>Address: 251 rue Saint-Honoré, 75001 Paris, France</li>
          <li>Phone: +33 (0)1 70 98 78 88</li>
          <li>Email: mopar-info@mohg.com</li>
        </ul>
      ),
    },
    {
      title: 'Reservation',
      index: 1,
      content: (
        <ul>
          <li>Phone: +33 (0)1 70 98 73 33</li>
          <li>Email: mopar-reservations@mohg.com</li>
        </ul>
      ),
    },

     {
      title: 'Sales',
      index: 2,
      content: (
        <ul>
    

          <li>    Phone: +33 (0)1 70 98 70 21</li>
          <li>Email: mopar-sales@mohg.com</li>
        </ul>
      ),
    },

     {
      title: 'Spa & Wellness',
      index: 3,
      content: (
        <ul>
      
          <li>  Phone: +33 (0)1 70 98 73 35</li>
          <li>Email: mopar-spa@mohg.com</li>
        </ul>
      ),
    },

     {
      title: 'Events & Catering',
      index: 4,
      content: (
        <ul>
     
          <li>   Phone: +33 (0)1 70 98 70 28</li>
          <li>Email: mopar-events@mohg.com</li>
        </ul>
      ),
    },

     {
      title: 'Restaurant',
      index: 5,
      content: (
        
        <ul>

          <li>  Sur Mesure par Thierry Marx : +33 (0) 1 70 98 73 00</li>
          <li>Camélia: +33 (0) 1 70 98 74 00</li>
          <li>Bar 8: +33 (0)1 70 98 78 88</li>
          <li>Cake Shop: +33 (0) 1 70 98 74 00</li>
        </ul>
      ),
    },

    
    
  ];

  return (
    <Accordion defaultActiveKey="0">
      {accordionItems.map((item, index) => (
        <Accordion.Item key={item.index} eventKey={item.index.toString()}>
          <Accordion.Header>
          
           {item.title} </Accordion.Header>
           
          <Accordion.Body>{item.content}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default BasicExample;
