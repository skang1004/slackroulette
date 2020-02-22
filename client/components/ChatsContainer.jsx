import React, {useState, useEffect} from 'react';
import ChatBoxMini from './ChatBoxMini.jsx'


const ChatsContainer = () => {
    const [renderStatus, setRenderStatus] = useState(false);
    const [messageLogCollection, setMessageLogCollection] = useState([]);

    useEffect(() => {
      setMessageLogCollection([
        [
          {user: 'Tony', message: 'sup', date: '2020-02-21T03:24:00'},
          {user: 'Lance', message: 'hey', date: '2020-02-21T03:25:00'}
        ],
        [
          {user: 'Eliot', message: 'pls respond', date: '2020-02-21T03:24:30'},
          {user: 'Tony', message: 'no', date: '2020-02-21T03:25:00'}, 
          {user: 'Eliot', message: 'pls respond', date: '2020-02-21T03:25:30'},
          {user: 'Tony', message: 'no', date: '2020-02-21T03:26:00'}, 
          {user: 'Eliot', message: 'pls respond', date: '2020-02-21T03:26:30'},
          {user: 'Tony', message: 'no', date: '2020-02-21T03:27:00'}, 
        ],
      ]);
      setRenderStatus(true);
    }, [renderStatus]);

    const array = [];
    for (let i = 0; i < 2; i++) array.push(<ChatBoxMini key={`box ${i}`} logs={messageLogCollection[i]}/>);

  if (!renderStatus) return <h1>Loading...</h1>
  else {
  return (
    <React.Fragment>
    <div className='chatcontainer'>
    {array}
  </div>
</React.Fragment>
  );
  }
};

export default ChatsContainer;