import { Flex, Input, View, Button } from 'components'
import React from 'react'
import { useTheme } from 'styled-components'

const HomeSearchBar = () => {

    const theme = useTheme();

    return (
      <Flex 
      boxShadow={`0px 15px 20px ${theme.colors.blue[2]}30`}
      bg="white" 
      width="90rem" 
      m="0 auto" 
      borderRadius={13} 
      mt="8" 
      alignItems="center" 
      p="5" 
      overflow="hidden">
          <Input 
            type="search" 
            before 
            placeholder="Job title or keyword"
            width={[1/2]}
            simpleInput
            iconBefore={
              <svg width={'3rem'} height={'3rem'} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <title>Iconly/Broken/Search</title>
              <g id="Iconly/Broken/Search" stroke="none" strokeWidth={1} fill={theme.colors.text[3]} fillRule="evenodd">
                <g id="Search" transform="translate(2.000000, 2.000000)" fill={theme.colors.text[3]} fillRule="nonzero">
                  <path d="M19.7555474,18.6065254 L16.3181544,15.2458256 L16.3181544,15.2458256 L16.2375905,15.1233001 C16.0877892,14.9741632 15.8829641,14.8901502 15.6691675,14.8901502 C15.4553709,14.8901502 15.2505458,14.9741632 15.1007444,15.1233001 L15.1007444,15.1233001 C12.1794834,17.8033337 7.6781476,17.94901 4.58200492,15.4637171 C1.48586224,12.9784243 0.75566836,8.63336673 2.87568494,5.31016931 C4.99570152,1.9869719 9.30807195,0.716847023 12.9528494,2.34213643 C16.5976268,3.96742583 18.4438102,7.98379036 17.2670181,11.7275931 C17.182269,11.9980548 17.25154,12.2921761 17.4487374,12.4991642 C17.6459348,12.7061524 17.9410995,12.794561 18.223046,12.7310875 C18.5049924,12.667614 18.7308862,12.4619014 18.8156353,12.1914397 L18.8156353,12.1914397 C20.2223941,7.74864367 18.0977423,2.96755391 13.8161172,0.941057725 C9.53449216,-1.08543846 4.38083811,0.250823958 1.68905427,4.08541671 C-1.00272957,7.92000947 -0.424820906,13.1021457 3.0489311,16.2795011 C6.5226831,19.4568565 11.8497823,19.6758854 15.5841278,16.7948982 L18.6276529,19.7705177 C18.9419864,20.0764941 19.4501654,20.0764941 19.764499,19.7705177 C20.0785003,19.4602048 20.0785003,18.9605974 19.764499,18.6502845 L19.764499,18.6502845 L19.7555474,18.6065254 Z" />
                </g>
              </g>
            </svg>            
          }/>
          <View as={'span'} bg="text.1" width="1.5px" height="30px" mx="3rem" opacity="50%"/>
          <Input 
            simpleInput
            width={[1/2]}
            before
            type="search" 
            placeholder="New York, USA"
            iconBefore={
              <svg width={'3rem'} height={'3rem'} viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>Iconly/Broken/Location</title>
                <g id="Iconly/Broken/Location" stroke="none" strokeWidth={2} fill={theme.colors.text[3]} fillRule="evenodd">
                  <g id="Location" transform="translate(3.500000, 2.000000)" fill={theme.colors.text[3]} fillRule="nonzero">
                    <path d="M8.5333009,-1.24344979e-14 C13.2196795,0.0184162063 17.0183067,3.84197141 16.9999336,8.52231869 L16.9999336,8.52231869 L16.9999336,8.61527668 C16.9366441,11.9600105 14.9258128,14.7355959 13.2504127,16.4746119 C12.7736086,16.9718495 12.2660712,17.448917 11.7427282,17.8944138 C11.4292493,18.1618872 10.9585918,18.1250548 10.6907737,17.8119793 C10.4229555,17.4980268 10.4607135,17.0279751 10.7741924,16.7605016 C11.2588994,16.3474524 11.7304349,15.9037096 12.1738715,15.4415505 C13.6648723,13.8945891 15.4526682,11.4487416 15.5071099,8.58809085 C15.5220374,4.65842322 12.3916384,1.5057441 8.52715425,1.48995878 L8.52715425,1.48995878 L8.49993339,1.48995878 C4.6486206,1.48995878 1.50768447,4.61194423 1.4927569,8.46093133 C1.55861382,10.3621854 2.20137738,12.1696045 3.35255637,13.6858721 C4.69603758,15.474875 6.73408979,17.3691134 8.67116139,18.630185 C9.01712975,18.8546874 9.11459799,19.3159695 8.88892827,19.6614926 C8.74667732,19.8807331 8.50695813,20 8.26284847,20 C8.1232318,20 7.98273703,19.9614137 7.85629174,19.8789792 C5.78223774,18.5293344 3.59930031,16.5000438 2.16010704,14.5838814 C0.824528662,12.8238183 0.0772721217,10.7234938 -3.55271368e-15,8.5126721 C0.0184399381,3.78584583 3.82848239,-1.24344979e-14 8.49993339,-1.24344979e-14 L8.49993339,-1.24344979e-14 Z M8.49729911,5.38340788 C10.2807046,5.38340788 11.7321911,6.83214943 11.7321911,8.61413663 C11.7321911,10.3952469 10.2807046,11.8439884 8.49729911,11.8439884 C6.71389367,11.8439884 5.26240711,10.3952469 5.26240711,8.61413663 C5.26240711,8.2019644 5.59696027,7.86871876 6.00878556,7.86871876 C6.42061084,7.86871876 6.755164,8.2019644 6.755164,8.61413663 C6.755164,9.57265632 7.53666614,10.3540296 8.49729911,10.3540296 C9.45793208,10.3540296 10.2394342,9.57265632 10.2394342,8.61413663 C10.2394342,7.65473998 9.45793208,6.87336666 8.49729911,6.87336666 C8.08547383,6.87336666 7.75092066,6.54012102 7.75092066,6.12882575 C7.75092066,5.71665351 8.08547383,5.38340788 8.49729911,5.38340788 Z" />
                  </g>
                </g>
              </svg>
            }
          />
          <Button borderRadius={10} lay="lg">
            Search
          </Button>
      </Flex>
    )
}

export default HomeSearchBar
