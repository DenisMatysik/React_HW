import React from 'react';
import Accordion from './hw_lesson4/Accordion';
import FindItem from './hw_lesson4/FindItem';
 

function App4(){
    const accordionData = [
        {
        id:1,
        title: 'Секция 1',
        content: `Какой-то текст 1`
        },
        {
        id:2,
        title: 'Секция 2',
        content: `Какой-то текст 2`
        },
        {
        id:3,
        title: 'Секция 3',
        content: `Какой-то текст 3`
        }
      ];
     
      return (
        <div>
        <FindItem/>
        {/* <div className="accordion">
            {accordionData.map(({id, title, content }) => (
              <Accordion key={id} title={title} content={content} />
            ))}
        </div> */}
        </div>
      );
    };
 
export default App4;