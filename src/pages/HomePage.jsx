import Box from '@mui/material/Box'
import * as React from 'react'
import MainNavbar from '../components/MainNavbar'
import HomeSidebar from '../components/HomeSidebar'
import { breakpoints, myTheme } from '../myTheme'
import useMediaQuery from '@mui/material/useMediaQuery'

import Top5UserWidget from '../components/HomeRightSidebar/Top5UserWidget'
import RecentCampaignWidget from '../components/HomeRightSidebar/RecentCampaignWidget'
import SurveyOngoingWidget from '../components/HomeRightSidebar/SurveyOngoingWidget'
import RecommendationWidget from '../components/HomeRightSidebar/RecommendationWidget'
import CelebrationWidget from '../components/HomeRightSidebar/CelebrationWidget'
import NewPost from '../components/NewPost'
import { RedeemPointsWidget } from '../components/HomeRightSidebar/RedeemPointsWidget'
import ImageCarosel from '../components/ImageCarosel'

import slider1 from '../assets/slider/slider1.png'
import slider2 from '../assets/slider/slider2.png'
import PostCard from '../components/PostCard.jsx'
import SortBy from '../components/SortBy'
import { useSelector } from 'react-redux'
import { AchievementBanner } from '../components/AchievementBanner.jsx'

export default function HomePage({ ...props }) {
  const isMd = useMediaQuery(`( min-width: ${breakpoints.md}px)`)
  const [showSidebar, setShowSidebar] = React.useState(false)
  const postList = useSelector((store) => store.post)

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
          <ImageCarosel
            images={[{ src: slider1 }, { src: slider2 }]}
          />

          <div className='mt-5 mx-4'>
            <NewPost />
          </div>
          <div className="mt-1 mx-4">
          <SortBy />
          </div>
          <div className="mt-1 mx-4">
          {postList.slice(0, 2).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          </div>
          <div className="mt-1 mx-4">
           <AchievementBanner />
          </div>
          <div className="mt-1 mx-4">
          {postList.slice(2).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
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
