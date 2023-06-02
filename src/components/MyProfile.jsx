import React from 'react'
import MyPic from '../assets/images/user-profile/my.jpg'
import BirthdayCake from '../assets/svg/BirthdayCake.svg'
import EmployeeAnniversary from '../assets/svg/EmployeeAnniversary.svg'
import Uparrow from '../assets/svg/Uparrow.svg'
import Downarrow from '../assets/svg/Downarrow.svg'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { breakpoints, myTheme } from '../myTheme'
import MainNavbar from '../components/MainNavbar'
import HomeSidebar from '../components/HomeSidebar'
import RecommendationWidget from '../components/HomeRightSidebar/RecommendationWidget'
import { RedeemPointsWidget } from '../components/HomeRightSidebar/RedeemPointsWidget'
import {FaRegEdit} from 'react-icons/fa'
import MyHashtags from './HomeRightSidebar/MyHashtags'
import AvatarEditor from 'react-avatar-edit';
import ShowModal from './AdminPanel/ShowModal'


export default function MyProfile() {

    const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
    const [showSidebar, setShowSidebar] = React.useState(false)
    const [preview, setPreview] = React.useState(null);
    const [showModal, setShowModal] = React.useState(false);
    const [showHobbies, setShowHobbies] = React.useState(true);
    const [showOverview, setShowOverview] = React.useState(true);
    const [showRecentActivities, setShowRecentActivities] = React.useState(false);
    const [hobbiesAndInterest, setHobbiesAndInterest] = React.useState([
        'Football',
        'Exercise',
        'Travel',
        'Cooking',
        'Technology',     
    ])
    

    const handleImageSelect = () => {
          setShowModal(true);
        };

      const closeModal = () => setShowModal(false);
    
      const handleCrop = (data) => {
        setPreview(data);
        console.log(data);
        
      };

    const handleClickHobbies = () => {
        setShowHobbies(true);
        setShowRecentActivities(false);
      };

    const handleClickOverview = () => {
        setShowOverview(true);
        setShowRecentActivities(false);
      };

    const handleClickRecentActivities = () => {
        setShowOverview(false);
        setShowRecentActivities(true);
    };

    return (

    <main
        style={{
          backgroundColor: myTheme.paper.backgroundColor,
        }}
      >
        <div>
        <MainNavbar setShowSidebar={setShowSidebar}/>
        <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMd ? '270px 1fr auto' : '1fr auto',
        }}
        className='flex-col'
      >
        <HomeSidebar {...{ showSidebar, setShowSidebar }}/>

    <div className='ms:flex-col md:flex'>
        <div style={{ height: 'auto' }} className="pt-4 px-3 flex-col ">
            <div class="md:flex md:justify-start md:flex-wrap bg-white rounded-lg drop-shadow-md px-4 pt-4 pb-8">
                <div class='md:flex'>
                    <div class="flex-col pl-8 pt-4">
                        <div class="h-[110px] w-[110px] md:h-[100px] md:w-[100px] rounded-full overflow-hidden">
                            <img src={MyPic} alt="user avatar" />
                        </div>
                        <div class="mt-4">
                                {!showModal ? (
                                    <div>
                                    <button onClick={handleImageSelect} className="px-1 py-1 text-sm bg-white text-indigo-500 border border-indigo-500 rounded-md hover:bg-indigo-200 cursor-pointer">
                                        Change Picture
                                    </button>
                                    </div>
                                ) : (
                                    <ShowModal closeModal={closeModal}>
                                        <AvatarEditor
                                        imageWidth={400}
                                        imageHeight={400}
                                        border={50}
                                        borderRadius={125}
                                        image={preview}
                                        onCrop={handleCrop}
                                        />
                                    </ShowModal>
                                )}
                        </div>
                    </div>
                    <div class='md:flex-col'>
                        <div class="pt-8 pl-4 md:pt-4 md:pl-10 md:w-auto">
                            <p class="font-semibold color-[#050505] text-lg">Robin Malik</p>
                            <span class="font-semibold text-sm">ServiceNow Developer | Product Development</span>
                            <p class="mt-3 text-sm opacity-75">Robinmalik1208@gmail.com&nbsp;&nbsp; |&nbsp;&nbsp; +917017276431</p>
                        </div>
                        <div class='flex pt-8 pl-4 md:pt-6 md:pl-10 md:w-auto'>
                            <div class='flex items-center'>
                                <span class="text-blue-800"><img src={EmployeeAnniversary} /></span>
                                <div class='pl-2'>
                                    <span class="text-sm opacity-75">Work Anniversary&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                                    <span class='text-sm font-semibold'>May 5</span>
                                </div>
                            </div>
                            <div class='flex items-center ml-8'>
                                <span class="text-purple-700"><img src={BirthdayCake} /></span>
                                <div class='pl-2'> 
                                    <span class="text-sm opacity-75">Birthday&nbsp;&nbsp; | &nbsp;&nbsp;</span>
                                    <span class='text-sm font-semibold'>Feb 21</span>   
                                </div>
                            </div>
                        </div>
                        <div class='pt-8 pl-4 md:pt-6 md:pl-10 md:w-auto'>
                         <p class='font-bold font-lato'>Hobbies and Interest</p>
                         <div class='flex justify-start flex-wrap'>
                                {hobbiesAndInterest.map((item, index) => (
                                   <ul class="border border-sky-200 opacity-75 rounded-3xl py-2 px-6 mr-2 my-2 md:mr-2 md:my-4" key={index}>{item}</ul>
                                ))} 
                                <button class='text-[#9F9C9C] mb-2 mr-20 text-3xl' onClick={handleClickHobbies}><FaRegEdit /></button> 
                         </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-[#8D8D8D] font-bold font-lato text-center text-md  mt-10">
                <button class={showOverview ? 'text-black border-b-4 border-black' : ''} onClick={handleClickOverview}>Overview</button>
                <button class={showRecentActivities ? 'text-black border-b-4 border-black ml-6' : 'ml-6'} onClick={handleClickRecentActivities}>Recent Activities</button>
            </div>

            <div class="grid grid-cols-2 gap-0 bg-white p-4 rounded-lg text-white drop-shadow-md">
                <div class='flex flex-col items-center justify-center bg-[#27C4A0] py-4 rounded-sm'>
                    <div><img src={Downarrow} /></div>
                    <div class='mt-2'>Appreciation Received</div>
                    <div class='text-3xl'>17</div>
                </div>
                <div class='flex flex-col items-center justify-center bg-[#2BBFE2] py-4 rounded-sm'>
                    <div><img src={Uparrow} /></div>
                    <div class='mt-2'>Appreciation Given</div>
                    <div class='text-3xl'>14</div>
                </div> 
            </div>

            <div class='mt-4 mb-10'>
                <div>  
                    <div class='bg-white px-6 drop-shadow-md rounded-lg'>
                        {
                        showOverview &&
                        <div class="flex h-auto w-auto">
                        <div class="w-2/5 border-r border-[#C7C7C7] text-center text-lg font-bold pt-6">
                           <p>Robin's Interaction</p>
                        </div>
                        <div class="w-3/5 py-6 ml-6">
                        <table>
                        <thead>
                          <tr class='text-lg'>
                            <th class="pr-20 text-black">Name</th>
                            <th class="px-10 text-[#27C4A0]">Received</th>
                            <th class="px-10 text-[#2BBFE2]">Given</th>
                          </tr>
                        </thead>
                        <tbody class='text-lg'>
                          <tr>
                            <td class='py-6 text-[#5486E3]'>Pulkit Aggarwal</td>
                            <td class='text-center py-6 mx-auto'>6</td>
                            <td class='text-center py-6'>5</td>
                          </tr>
                          <tr>
                            <td class='py-6 text-[#5486E3]'>Swarup Vuddagiri</td>
                            <td class='text-center py-6'>8</td>
                            <td class='text-center py-6'>3</td>
                          </tr>
                          <tr>
                            <td class='py-6 text-[#5486E3]'>Neha Bhati</td>
                            <td class='text-center py-6'>15</td>
                            <td class='text-center py-6'>9</td>
                          </tr>
                          <tr>
                            <td class='py-6 text-[#5486E3]'>Rafael Merces</td>
                            <td class='text-center py-6'>12</td>
                            <td class='text-center py-6'>7</td>
                          </tr>
                          <tr>
                            <td class='py-6 text-[#5486E3]'>Deepak Kanavikar</td>
                            <td class='text-center py-6'>6</td>
                            <td class='text-center py-6'>4</td>
                          </tr>
                        </tbody>
                      </table>
                        </div>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-3 pr-4 ">
          <div className="flex flex-col gap-3 pb-5 ml-2 overflow-y-auto w-full md:w-[350px] xl:w-[300px] ">
            <RedeemPointsWidget />
            <RecommendationWidget />
            <MyHashtags />
          </div>
        </div>
    </div>
      </Box>
      </div>
    </main>
    )
}