import styled from 'styled-components';

export const Content = styled.View({
    background: '#FFF5F5',
    flex: 1
});

export const Body = styled.View({
    background: '#FF7272',
    height: 680,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50
});

export const LightGroup = styled.View({
    background: '#FFF5F5',
    height: 330,
    width: 360,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
    padding: 20,
    position: 'absolute'
});
export const TopGroupMl = styled.View({
    width: 94,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#ABBAC2',
    left: 200,
});
export const TouchableMl = styled.TouchableOpacity({
});
export const TitleMl = styled.Text({
    fontSize: 10,
    color: '#fff'
});

export const GroupProduct = styled.View({ marginTop: 50 });
export const Image = styled.Image({
    height: 330,
    width: 300,
    resizeMode: 'contain',
});

export const TextGroup = styled.View({
    paddingTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 300
})
export const PriceMlGroup = styled.View({
    flexDirection: 'row'
})
export const TitleProduct = styled.Text({
    color: '#fff',
    fontSize: 22,
    fontFamily: 'serif',
    fontWeight: '100'
});
export const PriceProduct = styled.Text({
    color: '#fff',
    fontSize: 24,
    fontFamily: 'serif',
    fontWeight: '100'
});
export const MlProduct = styled.Text({
    color: '#fff',
    fontSize: 15,
    left: 20,
    top: 6
});
export const TextBody = styled.Text({
    top: 30,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
});
export const TouchableViewMore = styled.TouchableOpacity({
    top: 70,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 30,
    paddingBottom: 5,
});
export const TextViewMore = styled.Text({
    color: '#fff'
});

export const GroupAddToBag = styled.View({
    paddingHorizontal: 30,
    flexDirection: 'row'
});
export const NumberGroupAddToBag = styled.View({
    flexDirection: 'row'
});
export const TouclableNumberAddToBag = styled.TouchableOpacity({});
export const TextNumberAddToBag = styled.Text({
    fontSize: 30,
    marginHorizontal: 10,
    top: 10
});
export const TextPlusAndMinor = styled.Text({
    fontSize: 30,
    marginHorizontal: 10,
    fontFamily: 'serif',
    fontWeight: '100',
    top: 10
});
export const TouchableGroupAddToBag = styled.TouchableOpacity({});
export const TextGroupAddToBag = styled.Text({
    fontSize: 22,
    marginHorizontal: 10,
    fontFamily: 'serif',
    fontWeight: '100',
    top: 20,
    left: 60
});

