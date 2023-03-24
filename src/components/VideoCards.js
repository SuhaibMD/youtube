import React from 'react'
import { formatViews } from '../utils/constants';

const VideoCards = ({info}) => {
    // console.log(info)
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet; 
  return (
    <div className='p-1 m-2 w-72 shadow-lg'>
      <img className='rounded-t-lg' src={thumbnails.medium.url} alt="thumbanil" />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{formatViews(statistics.viewCount,2)} views</li>
      </ul>
    </div>
  )
}
export const RedBorderedVideo = ({info}) =>{
  return (
    <div className='p-1 border border-red-400' >
      <p className='font-bold text-center'>HOC</p>
    <VideoCards info={info} />
    </div>
  )
}
export default VideoCards
