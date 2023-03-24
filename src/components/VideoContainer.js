import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCards, {RedBorderedVideo} from './VideoCards'

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  // const dispatch = useDispatch();


  useEffect(() => {
    getVideos();
    // dispatch(toggleMenu())
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json();
    //  console.log(json.items)
    setVideos(json.items);
  }
  return videos.length === 0 ? null : (
    <div className='flex gap-2 flex-wrap'>
      {videos && <RedBorderedVideo info= {videos[0]}/>}
      {videos.map(video => <Link key={video.id} to={"watch?v=" + video.id}> <VideoCards key={video.id} info={video} /> </Link>)}

    </div>
  )
}

export default VideoContainer
