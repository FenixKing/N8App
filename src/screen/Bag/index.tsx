import React, { useState } from 'react';
import { StatusBar, FlatList } from 'react-native'
import {
    Container,
    Content,
    GroupTitle,
    TotalTitle,
    PriceTitle,
    ProductGroup,
    WhiteBlock,
    Image,
    GroupPrice,
    ProductTitle,
    ProductPrice,
    ProductMl
} from './styled';

export default () => {
    const product = [
        {
            id: '1',
            image: require('../../../assets/Card/cleanser.png'),
            title: '1x Gentle Skin Cleanser',
            price: '$12.29',
            ml: '300ml',
        },
        {
            id: '2',
            image: require('../../../assets/Card/handCream.png'),
            title: '1x Hand Cream',
            price: '$12.29',
            ml: '300ml',
        },
        {
            id: '3',
            image: require('../../../assets/Card/eyeCream.png'),
            title: '1x Eye Cream',
            price: '$10.12',
            ml: '300ml',
        },
    ]
    return (
        <Container>
            <StatusBar hidden />
            <Content>
                <GroupTitle>
                    <TotalTitle>Total</TotalTitle>
                    <PriceTitle>$56.18</PriceTitle>
                </GroupTitle>
                <FlatList
                    data={product}
                    renderItem={({ item }) => (
                        <ProductGroup>
                            <WhiteBlock>
                                <Image source={item.image} />
                            </WhiteBlock>
                        </ProductGroup>
                    )}
                    keyExtractor={item => item.id}
                />
            </Content>
        </Container>
    )
}