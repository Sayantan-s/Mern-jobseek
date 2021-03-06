import { View, Heading, Text } from 'components';
import { HomeSearchBar } from 'components/elements';
import React from 'react';

const CTA = () => {
    return (
        <View pt={12} pb={13}>
            <Heading level={1} textAlign="center" fontSize="xxl">
                Get The{' '}
                <Text as="span" fontSize="xxl" fontWeight="bold" color="blue.6">
                    Right Job
                </Text>{' '}
                <br />
                You Deserve
            </Heading>
            <Text fontSize="m" textAlign="center" my="6">
                1,80,507 jobs listed here! Find your dream job!
            </Text>
            <HomeSearchBar />
        </View>
    );
};

export default CTA;
