import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link, NavLink } from 'react-router-dom';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cacheResults } from '../utils/searchSlice';


const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false)
  const dispatch = useDispatch();

  const searchCache = useSelector(store => store.search)
  useEffect(() => {
    //Subscribing to store and search if this key presents in my cache of redux
    
    // API call
    const API_TIMER = setTimeout(() =>{
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery])
      }
      else {
        getSearchSuggestions()
      }
    }, 500)
    // console.log("PArent")
    // getSearchSuggestions()
    return () => {
      // console.log("Parent Removed")
      return clearTimeout(API_TIMER) }
    // return clearTimeout(API_TIMER);
  }, [searchQuery])

  //show suggestions
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      return window.removeEventListener("scroll", listenToScroll);
    }
  }, [] )

  const listenToScroll = () => {
    let heightToHideFrom = 10;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    // console.log("Body"+document.body.scrollTop)
    // console.log("Element"+document.documentElement.scrollTop)
    if (winScroll > heightToHideFrom) {
      isVisible &&      // to limit setting state only the first time         
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };



  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    // console.log(data[1])
    setSuggestions(data[1])

    dispatch( cacheResults({[searchQuery]: data[1]}))
    // dispatch( cacheResults(
    //   {"iphone": data[1]}))
  }
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
    // setSuggestions([])
  }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg col-span-1 items-center justify-between'>
      <div className='flex items-center'>
        <img onClick={toggleMenuHandler} className='h-7 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="Hamburger" />
        <a href="/"> <img className='h-16 mx-2' src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg" alt="Youtube Icon" /></a>
      </div>
      <div className='col-span-4 place-items-center'>
        <div>
          <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={() => setShowSuggestions(false)} type="text" className='px-5 border-2 border-solid border-gray-400 rounded-l-full	 w-1/2 p-2' />
        <button className='border-2 border-solid border-gray-400 rounded-lg p-2 rounded-r-full bg-gray-300' >🔍</button>
        </div>
        {suggestions.length !== 0 && showSuggestions && isVisible  && <div className='border border-blue-200 bg-white z-20 fixed shadow-lg w-[29rem] rounded-lg m-2 px-2'>
          <ul >
            {suggestions.map((suggestion, index) => <li className='py-1 hover:bg-slate-100' key={index}><a href={"/"+searchQuery}> 🔍 {suggestion} </a></li>)}
            
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className='h-8' src="https://static.vecteezy.com/system/resources/previews/002/934/748/non_2x/man-face-circle-icon-in-trendy-flat-style-vector.jpg" alt="user-icon" />
      </div>
      <div className='flex gap-1 text-2xl font-bold'>
        <a href="..">Back</a>
        <a href="watch">Watch</a>
      </div>
    </div>
  )
}

export default Head
