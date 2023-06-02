import React from 'react'
import Box from '@mui/material/Box'
import MainNavbar from '../components/MainNavbar'
import HomeSidebar from '../components/HomeSidebar'
import { breakpoints, myTheme } from '../myTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import Top5UserWidget from '../components/HomeRightSidebar/Top5UserWidget'
import RecentCampaignWidget from '../components/HomeRightSidebar/RecentCampaignWidget'
import SurveyOngoingWidget from '../components/HomeRightSidebar/SurveyOngoingWidget'
import RecommendationWidget from '../components/HomeRightSidebar/RecommendationWidget'
import CelebrationWidget from '../components/HomeRightSidebar/CelebrationWidget'
import { RedeemPointsWidget } from '../components/HomeRightSidebar/RedeemPointsWidget'

import AmazonLogo from "../assets/images/right-section/Amazon-Logo.png"
import Dunkin from "../assets/images/right-section/dunkin-logo.png"
import Starbuks from "../assets/images/right-section/starbucks-logo.png"


const MyRewards = () => {

  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)

    return (
    <main
      style={{
        backgroundColor: myTheme.paper.backgroundColor,
      }}
    >
      <MainNavbar setShowSidebar={setShowSidebar} />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMd ? '270px 1fr auto' : '1fr auto',
        }}
      >
        <HomeSidebar {...{ showSidebar, setShowSidebar }} />
        <div style={{ height: '200vh' }} className="pt-3 pr-3">
        <div>


            <div className='mt-2'>
                <div className="bg-primary text-white text-sm rounded-t-lg py-2 px-6">
                    <p className='font-Lato '>Recommended For You</p>
                </div>
                <div className='py-4 px-6 bg-white rounded-b-lg drop-shadow-normal'>
                    <div className='grid grid-cols-3 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4'>
                        <div className='flex flex-col justify-between items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={AmazonLogo} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Dunkin} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Dunkin Donuts eGift Card  </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 75 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Starbuks} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Star Bucks eGift Card  </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 75 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-2'>
                <div className="bg-primary text-white text-sm rounded-t-lg py-2 px-6">
                    <p className='font-Lato '>Apparel</p>
                </div>
                <div className='py-4 px-6 bg-white rounded-b-lg drop-shadow-normal'>
                    <div className='grid grid-cols-3 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4'>
                        <div className='flex flex-col justify-between items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={AmazonLogo} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Dunkin} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Starbuks} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>



                        </div>


                    </div>
                </div>
            </div>

            <div className='mt-2'>
                <div className="bg-primary text-white text-sm rounded-t-lg py-2 px-6">
                    <p className='font-Lato '>Cash & Points Boots</p>
                </div>
                <div className='py-4 px-6 bg-white rounded-b-lg drop-shadow-normal'>
                    <div className='grid grid-cols-3 xxl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-4'>
                        <div className='flex flex-col justify-between items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={AmazonLogo} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Dunkin} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Starbuks} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>



                        </div>
                        <div className='flex flex-col justify-between items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={AmazonLogo} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>
                        <div className='flex flex-col justify-between  items-center border-[1px] border-[#EFEFEF] rounded-[4px] px-4 py-3'>
                            <div className='p-2  my-3 flex justify-center items-center '>
                                <img className='m-auto' src={Dunkin} alt="logo" />
                            </div>

                            <div className='text-center'>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato'>Amazon eGift Card </p>
                                <p className='text-[#7B7B7B] text-[13px] font-Lato font-bold'>INR 100 for 500 points</p>
                                <div className='py-3'>
                                    <button className='rounded-[4px] font-Lato text-[14px] border-[1px] border-[#EFEFEF] px-4 text-primary bg-[#f7f7f7]'>Redeem</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="hidden md:block pt-3 pr-4">
          <div className="flex flex-col gap-3 pb-5 px-1 overflow-y-auto w-[250px] md:w-[350px] xl:w-[300px] ">
            <RedeemPointsWidget />
            <RecommendationWidget />
            <CelebrationWidget />
            <Top5UserWidget />
            <SurveyOngoingWidget />
            <RecentCampaignWidget />
          </div>
        </div>
        </Box>
        </main>
    )
}

export default MyRewards