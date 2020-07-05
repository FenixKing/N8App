import styled from 'styled-components';

export const Container = styled.View({
    flex: 1
});
export const Content = styled.View({
    backgroundColor: '#FF7272',
    height: 650,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50
});

export const GroupTitle = styled.View({
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 50,
    top: 50,
});
export const TotalTitle = styled.Text({
    color: '#fff',
    right: 30,
    top: 7,
    fontSize: 20,
    fontFamily: 'serif'
});
export const PriceTitle = styled.Text({
    color: '#fff',
    fontSize: 30
});

export const ProductGroup = styled.View({
    flexDirection: 'row'
});
export const WhiteBlock = styled.View({
    position: 'absolute'
});
export const Image = styled.Image({});
export const ProductTitle = styled.Image({});
export const GroupPrice = styled.View({});
export const ProductPrice = styled.Text({});
export const ProductMl = styled.Text({});