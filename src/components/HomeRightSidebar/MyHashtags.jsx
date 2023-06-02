import React, {useState} from 'react'

const MyHashtags = () => {

  const [myHashtags, setMyHashtags] = useState([
    {
        name: '#quality',
        count: 76
    },
    {
        name: '#alcorplay',
        count: 68
    },
    {
        name: '#innovation',
        count: 59
    },
    {
        name: '#oneteam',
        count: 43
    },
    {
        name: '#collaboration',
        count: 34
    },
    {
        name: '#vision',
        count: 28
    },
    {
        name: '#leadership',
        count: 28
    }
  ]) 

  return (
    <div>
      <div className="right-sidebar-container">
        <div className="border-b border-[#EDEDED] py-2 px-3">
          <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
            My Hashtags
          </p>
        </div>
             {myHashtags.map((hashtag, index) => (
                <div key={index}>
                   <div className=" px-4 py-3 ">
                         <div class="flex justify-between">
                           <div class='opacity-75'>{`${hashtag.name}`}</div>
                           <div class='opacity-50'>{`${hashtag.count}`}</div>
                         </div>
                    </div>
                </div>
            ))}  
        </div>
    </div>
  )
}

export default MyHashtags