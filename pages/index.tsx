import styled from '@emotion/styled'
import {map, range} from 'lodash'


const item = {
  "collectionName": "BUGCITY",
  "contractAddress": "0x0084837cc386150e56c0e93f2e59469579da5443",
  "lowName": "bugcity#1",
  "owner": "0x93e5FdEf9a056156BbE83b132725FbAd77eAF958",
  "name": "BugCity #1",
  "image": "ipfs://QmbjyyRTB1cYFQ4Zzrhrj1Pjox651HjqUx7U2gpn7TnXKb/1.png",
  "gatewayImage": "https://nft-cdn.alchemy.com/eth-mainnet/09ddf3197aa50a83e042736548fc8062",
  "thumbnail": "https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/eth-mainnet/09ddf3197aa50a83e042736548fc8062",
  "tokenId": "1",
  "likeCount": 8,
  "unLikeCount": 6,
  "commentCount": 15
}


export const Item = () => {
  return (
    <ItemContainer>
      <div className="name">{item.name}</div>
      <img src={item.thumbnail} alt=""/>
      <div className="detail">
        <div>{item.likeCount}</div>
        <div>{item.unLikeCount}</div>
        <div>{item.commentCount}</div>
      </div>

    </ItemContainer>
  )
}

export default function Home() {
  const arr = range(1, 300)

  return (
    <Container>
      <Row>
        {map(arr, (item, index) => {
          return (
            <Col key={index}>
              <Item/>
            </Col>
          )
        })}
      </Row>
      <Item/>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;

`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Col = styled.div`
  width: 20%;
  padding: 10px;
  margin-bottom: 20px;
`;


const ItemContainer = styled.div`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  background: #eee;

  .name {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
  }

  img {
    margin-bottom: 8px;
  }

  .detail {
    display: flex;
    align-items: center;
    font-size: 12px;
    justify-content: space-evenly;
    color: #333;
  }


`;



