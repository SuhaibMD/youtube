import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice'
import { API_KEY } from '../utils/constants';
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat';


const WatchPage = () => {
  const [descBtn, setDescBtn] = useState(false);
  const [ytData, setYtData] = useState([]);
  const dispatch = useDispatch();
  const [SearchParam] = useSearchParams();
  // console.log(SearchParam.get("v"))
  const videoId = SearchParam.get("v");
  const YOUTUBE_SPECIFIC_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
  // let dummyData;
  useEffect(() => {
    dispatch(closeMenu());
    getYTdata();

  },
    []);

  const getYTdata = async () => {
    const response = await fetch(YOUTUBE_SPECIFIC_URL);
    const data = await response.json();
    // dummyData = data.items[0].snippet;
    setYtData(data.items[0].snippet);
    // console.log(data.items[0].snippet);
    // console.log(ytData.title)
  }
  // const { title, channelTitle , description } = dummyData;
  return (
    <div className='flex flex-col w-auto overflow-auto'>
      {/* className='h-1000' */}
      <div className='' >
        <div className='flex'>
        <iframe className='m-5 rounded-2xl border-solid border-4 border-green-300 hover:border-red-400'
          width="1200"
          height="600"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
             autoplay; clipboard-write;
              encrypted-media; gyroscope;
               picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
          <div className='w-96 mt-5 '>
            <p className='text-lg font-bold px-3'>Live Chat</p>
          <LiveChat></LiveChat>
        </div>
        </div>

        {!ytData.length && <div className='w-60.3 ml-5 flex flex-col items-center rounded-2xl border-solid border-4 border-green-300 hover:border-red-400'>
          <div className='flex justify-between ml-7 mr-3 w-full items-center'>
            <p className='font-bold text-3xl '>Description</p>
            <button className='p-4 border border-black rounded-lg m-4 ' onClick={() => setDescBtn((state) => !state)}>{descBtn ? "Close" : "Open"}</button>
          </div>
         {/* {descBtn && <p className='text-black font-bold'>Hell</p>} */}
          <div className={descBtn ? 'w-60.3 ml-5 flex flex-col': 'hidden'}>
            <p className='text-3xl font-bold center '>{ytData.title}</p>
            <h1 className='text-xl font-bold center  text-blue-300 '>{ytData.channelTitle}</h1>
            <p className='text-xl text-justify center px-9 pb-5 '>{ytData.description}</p></div>

            {/* {console.log(descBtn)} */}
        </div>
        }
      </div>
      <div>
        <CommentsContainer></CommentsContainer>
      </div>
    </div>
  )
}

export default WatchPage
