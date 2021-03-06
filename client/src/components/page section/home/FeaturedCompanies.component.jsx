import { View, Flex, Text, Link, Stack } from 'components';
import { HomeCompanyCards } from 'components/elements';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import http from 'utils/http';

const FeaturedCompanies = () => {
    const theme = useTheme();

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await http.get('/companies?page=1&skip=3');
            setCompanies(data.data);
        })();
    }, []);

    return (
        <View
            bg="blue.1"
            py={12}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundImage={`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='491' preserveAspectRatio='none' viewBox='0 0 1920 491'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3cpath d='M782.84 566.73C944.6 536.75 897.58 131.47 1274.87 129.74 1652.16 128.01 2011.01 252.25 2258.93 252.49' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M357.45 550.38C588.93 544.56 786.97 215.25 1220.83 215.03 1654.68 214.81 1864.59 376.36 2084.2 377.06' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1126.73 499.84C1240.52 473.69 1207.82 171.48 1458.59 171.25 1709.36 171.02 1948.57 375.11 2122.31 377.47' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M451.54 518.23C692.86 514.93 911.45 231.02 1373.16 230.96 1834.88 230.9 2060.41 402.08 2294.79 402.81' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M260.64 552.35C493.08 549.92 694.62 302.14 1155.24 298.93 1615.86 295.72 1821.38 113.34 2049.84 112.35' stroke='rgba(207%2c 210%2c 255%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1920' height='491' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`}
        >
            <View maxWidth={['desktop']} m="0 auto">
                <Flex justifyContent="space-between">
                    <Text as="span" fontSize="m" color="text.4">
                        Featured Companies
                    </Text>
                    <Link to="/jobs">
                        <Text as="span" mr="3" fontSize="m" color="blue.6">
                            See all companies
                        </Text>
                        <svg
                            width={'2.6rem'}
                            height={'2.6rem'}
                            viewBox="0 0 24 24"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <title>Iconly/Broken/Arrow - Right</title>
                            <g
                                id="Iconly/Broken/Arrow---Right"
                                stroke={theme.colors.blue[4]}
                                strokeWidth={1}
                                fill="none"
                                fillRule="evenodd"
                            >
                                <g
                                    id="Arrow---Right"
                                    transform="translate(3.000000, 4.500000)"
                                    fill="#000000"
                                    fillRule="nonzero"
                                >
                                    <path d="M0,7.49983393 C0,7.07673708 0.312322754,6.7272223 0.71559664,6.67595432 L0.818181818,6.66948082 L17.1818182,6.66948082 C17.5134545,6.66948082 17.8112727,6.87208698 17.9378182,7.18319261 C17.9792727,7.28504926 18,7.39244159 18,7.49983393 C18,7.67974377 17.9424242,7.85811592 17.8316919,8.00419656 L17.7589091,8.08772393 L11.1589091,14.7582273 C10.8392727,15.0815114 10.3210909,15.0804043 10.0025455,14.756013 C9.71054545,14.4576394 9.68621212,13.990881 9.93122601,13.6661489 L10.0047273,13.5813401 L15.2007273,8.33018704 L0.818181818,8.33018704 C0.366545455,8.33018704 0,7.95818885 0,7.49983393 Z M10.0046182,1.41865989 C9.68389091,1.09537574 9.68389091,0.569485439 10.0024364,0.243987019 C10.2944364,-0.0533716559 10.7541864,-0.0790818485 11.0758253,0.167709219 L11.1598909,0.241772744 L14.7991636,3.92079059 C14.9606182,4.0835398 15.0402545,4.2961102 15.0402545,4.50978773 C15.0402545,4.72125099 14.9606182,4.93271425 14.8013455,5.09546346 C14.5093455,5.39383701 14.0505121,5.41963178 13.729026,5.17199498 L13.6449818,5.09767774 L10.0046182,1.41865989 Z" />
                                </g>
                            </g>
                        </svg>
                    </Link>
                </Flex>
                <Stack mt="8" gap={7}>
                    {companies?.map(({ _id, ...data }) => (
                        <HomeCompanyCards key={_id} {...data} />
                    ))}
                </Stack>
            </View>
        </View>
    );
};

export default FeaturedCompanies;
