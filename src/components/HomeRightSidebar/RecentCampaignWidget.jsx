import * as React from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { BiChevronRight } from 'react-icons/bi'
import BloodDonation from '../../assets/images/right-section/blood.png'
import { Link } from 'react-router-dom'

export default function RecentCampaignWidget({ ...props }) {
  const [campaign, setCampaign] = React.useState({
    id: Math.random().toString(),
    image: BloodDonation,
    title: 'Campaigns heading goes here...',
    author: 'John Doe',
    startDate: '09/25/2023',
    endDate: '09/26/2023',
  })

  return (
    <div>
      <div className="right-sidebar-container">
        <div className="border-b border-[#EDEDED] py-1 px-3">
          <p className="text-[16px] font-Lato font-medium text-[#747474] text-center ">
            Recent Campaigns
          </p>
        </div>
        <div>
          <div className=" px-3 pt-2 ">
            <div>
              <div className="flex items-top gap-3 pb-2 justify-between">
                <div>
                  <img src={BloodDonation} alt="Blood Donation" />
                </div>
                <div>
                  <p className="text-[16px] leading-[18px] pb-1 text-[#050505] font-Lato font-bold ">
                    {campaign.title}
                  </p>
                  <p className="text-[12px] leading-[15px] font-Lato font-medium text-[#939393]">
                    Owner: {campaign.author}
                  </p>
                  <p className="text-[12px] leading-[15px] font-Lato font-medium text-[#939393]">
                    {campaign.startDate} - {campaign.endDate}
                  </p>

                  <Link to={`/take-campaign/${campaign.id}`} className="text-[14px] flex items-end leading-[17px] font-Lato font-medium text-[#5486E3]">
                    Participate
                    <span>
                      <BiChevronRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-2 border-t border-[#EDEDED]">
            <Link to="/take-campaign" className="text-[12px] flex gap-1 justify-center items-center font-Lato text-primary font-bold">
              View All
              <span>
                <AiOutlineCaretDown />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
